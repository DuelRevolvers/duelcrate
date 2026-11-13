#!/usr/bin/env node
/* Builds Tune Timeline's genre lists.

   For each genre in lists/genres.json, the script takes Last.fm's top
   tracks for the genre's tag, looks up each song's original release year
   on MusicBrainz, and writes the first 200 songs that have a year to
   lists/<slug>.json. It also writes lists/index.json, which the game
   lobby reads. Years are cached in lists/years-cache.json, so later runs
   only look up new songs.

   Usage:   LASTFM_API_KEY=your-key node tools/build-song-lists.js [slug ...]
   Options: MAX_MINUTES (default 300) stops new lookups after that long.
            MB_CONTACT adds your contact details to the MusicBrainz
            User-Agent, which MusicBrainz asks for.
   Needs Node 18 or later.                                              */
'use strict';
var fs = require('fs'), path = require('path');

var DIR = path.join(__dirname, '..', 'lists');
var KEY = process.env.LASTFM_API_KEY;
var PER = 200, PAGES = 4;
var MAX_MS = (parseFloat(process.env.MAX_MINUTES) || 300) * 60000;
var UA = 'DuelCrateSongLists/1.0' + (process.env.MB_CONTACT ? ' ( ' + process.env.MB_CONTACT + ' )' : '');
var started = Date.now(), lastMb = 0, fresh = 0;

function slug(x){
  return String(x).toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
function key(a, t){ return (a + '|' + t).toLowerCase().replace(/\s+/g, ' ').trim(); }
function readJson(f, def){ try{ return JSON.parse(fs.readFileSync(f, 'utf8')); }catch(e){ return def; } }
function writeJson(f, v){ fs.writeFileSync(f, JSON.stringify(v, null, 1) + '\n'); }
function norm(x){ return String(x || '').toLowerCase().normalize('NFKD').replace(/[^a-z0-9]/g, ''); }
function sleep(ms){ return new Promise(function(r){ setTimeout(r, ms); }); }

async function lastfmPage(tag, page){
  var url = 'https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&format=json&limit=100'
          + '&page=' + page + '&tag=' + encodeURIComponent(tag) + '&api_key=' + encodeURIComponent(KEY);
  for(var i = 0; ; i++){
    try{
      var j = await (await fetch(url)).json();
      if(j.error) throw new Error(j.message || 'Last.fm error ' + j.error);
      return ((j.tracks && j.tracks.track) || []).map(function(t){
        return { title:String(t.name || '').trim(), artist:String((t.artist && t.artist.name) || '').trim() };
      }).filter(function(t){ return t.title && t.artist; });
    }catch(e){
      if(i >= 2) throw e;
      await sleep(3000);
    }
  }
}

/* the earliest first-release year among close matches by the same artist;
   0 = no match, null = MusicBrainz was busy, so try again later        */
async function mbYear(t){
  var wait = lastMb + 1100 - Date.now();
  if(wait > 0) await sleep(wait);
  lastMb = Date.now();
  function q(v){ return '"' + v.replace(/["\\]/g, ' ') + '"'; }
  var url = 'https://musicbrainz.org/ws/2/recording?fmt=json&limit=100&query='
          + encodeURIComponent('recording:' + q(t.title) + ' AND artist:' + q(t.artist));
  try{
    var r = await fetch(url, { headers:{ 'User-Agent':UA, 'Accept':'application/json' } });
    if(r.status === 503 || r.status === 429){ await sleep(5000); return null; }
    if(!r.ok) return null;
    var j = await r.json(), best = 0, a = norm(t.artist);
    (j.recordings || []).forEach(function(rec){
      if((rec.score || 0) < 90) return;
      var who = norm((rec['artist-credit'] || []).map(function(c){
        return c.name || (c.artist && c.artist.name) || '';
      }).join(' '));
      if(a && who && who.indexOf(a) < 0 && a.indexOf(who) < 0) return;
      var y = parseInt(String(rec['first-release-date'] || '').slice(0, 4), 10);
      if(y >= 1900 && (!best || y < best)) best = y;
    });
    return best;
  }catch(e){ return null; }
}

async function main(){
  if(!KEY){ console.error('Set LASTFM_API_KEY first.'); process.exit(1); }
  var genres = readJson(path.join(DIR, 'genres.json'), null);
  if(!Array.isArray(genres)){ console.error('lists/genres.json is missing or not a list.'); process.exit(1); }
  var only = process.argv.slice(2);
  var cFile = path.join(DIR, 'years-cache.json'), cache = readJson(cFile, {});
  var today = new Date().toISOString().slice(0, 10);

  for(var g of genres){
    var s = g.slug || slug(g.name), file = path.join(DIR, s + '.json');
    if(only.length && only.indexOf(s) < 0) continue;
    var songs = [], seen = {}, outOfTime = false;
    try{
      for(var p = 1; p <= PAGES && songs.length < PER; p++){
        var tracks = await lastfmPage(g.tag || g.name, p);
        for(var t of tracks){
          if(songs.length >= PER) break;
          var k = key(t.artist, t.title);
          if(seen[k]) continue;
          seen[k] = 1;
          var y = cache[k];
          if(y === undefined){
            if(Date.now() - started > MAX_MS){ outOfTime = true; continue; }
            y = await mbYear(t);
            if(y === null) y = await mbYear(t);
            if(y === null) continue;
            cache[k] = y;
            if(++fresh % 50 === 0) writeJson(cFile, cache);
          }
          if(y) songs.push({ title:t.title, artist:t.artist, year:y });
        }
        if(tracks.length < 100) break;
      }
    }catch(e){
      console.log(g.name + ': skipped (' + e.message + ')');
      continue;
    }
    var old = readJson(file, null);
    if(outOfTime && old && old.songs && old.songs.length > songs.length){
      console.log(g.name + ': kept the old list (out of time at ' + songs.length + ' songs)');
      continue;
    }
    writeJson(file, { name:g.name, tag:g.tag || g.name, updated:today, songs:songs });
    console.log(g.name + ': ' + songs.length + ' songs');
  }
  writeJson(cFile, cache);

  var index = [];
  genres.forEach(function(g){
    var s = g.slug || slug(g.name), l = readJson(path.join(DIR, s + '.json'), null);
    if(l && l.songs && l.songs.length) index.push({ name:g.name, slug:s, tag:g.tag || g.name, count:l.songs.length });
  });
  writeJson(path.join(DIR, 'index.json'), { updated:today, genres:index });
  console.log('index.json: ' + index.length + ' genres, ' + fresh + ' new year lookups');
}

main().catch(function(e){ console.error(e); process.exit(1); });
