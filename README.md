# DuelCrate

**Your show. Your rules.**

DuelCrate is a Jackbox-style party game platform that runs entirely in the browser. One person hosts the show from a big screen while 2–20 players join from their phones using a 4-letter room code — no app installs, no accounts, no server. The whole thing is a single, self-contained HTML file.

## Features

- **Seven game styles** — build and run your own custom games:
  - **Jeopardy Style** — a board of categories and point values; players buzz in from their phones
  - **Multiple Choice Trivia** — questions with answer choices delivered straight to every phone
  - **Feud Survey** — a board of hidden survey answers; buzz in, type a guess (or say it out loud while the host clicks the match), and watch the board reveal matches. Play it free-for-all, or in two teams like the TV show
  - **Closest Wins** — numeric estimation showdowns; closest guess without going over takes the points
  - **Wheel Puzzle** — spin an animated wheel, call letters and solve the hidden phrase (typed, or said out loud for the host to judge), with Bankrupt, Lose a Turn and Free Play wedges
  - **Courtroom** — two players argue a made-up case out loud while you sit as judge; everyone else takes the jury box or the witness stand
  - **Tune Timeline** — players take turns hearing a song and placing it in their own timeline by release year; the first to hold enough songs wins
- **Full game editor** — create, edit, duplicate, and delete your own games, with autosave as you type
- **Bulk import from a text file** — write a whole game in Notepad and load it in one go. Every editor has an **⬆ Import questions** button and a **⬇ Template** button that hands you a pre-formatted, commented sheet for that exact style. See [Building a game from a text file](#building-a-game-from-a-text-file)
- **Question images** — add a picture to any question in any game style
- **Daily Doubles** — mark any Jeopardy clue as a surprise 2× value
- **No negative points** — an optional Jeopardy setting so a wrong buzz-in and a missed Final Jeopardy cost nothing, and nobody ever goes backwards
- **Final Jeopardy** — players wager points and type answers on their phones; the host judges each one
- **Feud teams** — choose **Teams** or **Free-for-all** under **Play style** in the editor. In a team game, the lobby shows a **Teams** panel: click or drag a name to move a player to the other team, type over a team's name to rename it, or press **🔀 Shuffle**. Players who join later go to the smaller team. Each survey opens with a face-off that anyone can buzz. The top answer wins the face-off outright; any other answer, or a miss, gives the other team one try to do better. The winners play or pass. The team that plays answers one player at a time, and after the last strike (3 by default, set in the editor) the other team gets one guess to steal every point in the round
- **The wheel** — turns rotate automatically, players spin from their phones and call letters on a phone keypad, and money only banks when you solve the puzzle. Buy vowels out of your round bank, and build the wheel itself in the editor — edit any wedge, set how **wide** each one is (a wider wedge really is likelier to come up), drag them into a new order (or nudge with ◀ ▶), watch a live preview as you go, or reset to the classic set. Finish with an optional bonus round where the leader gets R S T L N E free, picks three consonants and a vowel, and takes one timed shot at the puzzle
- **The courtroom** — a spoken game where the phone is only a controller. You assign every seat before the trial opens (or hit randomize), then two lawyers are dealt evidence cards from a deck you write and either pitch a charge for you to pick or argue one you set yourself. They take turns playing evidence and making their case out loud, objecting to each other with a limited supply of objections (every second one you sustain earns them another back), and each gets one improvised wildcard. Every timed turn waits on you, so whoever's up gets a moment to think before the clock runs. The big screen keeps the whole trial as a two-column evidence log — struck evidence crossed out — so by closing arguments the verdict is laid out in front of you
- **Witnesses & jury** — anyone beyond the two lawyers takes the jury box or the witness stand. Witnesses draw a card you wrote: an identity everyone sees, and a **secret only their phone shows** — *"you're lying about exactly one detail"* — plus expert witnesses with an absurd field of expertise. There is no scheduled witness round: a lawyer gets a **Call a witness** button on their own turn and spends that turn — playing no evidence — to put someone on the stand. They question their witness, the other side cross-examines, and you can object right through the testimony before play returns to the turns. Anyone nobody calls never testifies, and the *witnesses per side* setting caps how many each lawyer may call. Jurors nudge a private sway meter as the trial runs, then deliver the verdict; you pass sentence out loud. The winning lawyer takes the points, witnesses score if the side that called them won, and jurors score for backing the verdict
- **The jury room** — jurors get a **private chat visible only to other jurors**, pinned to their phone for the whole trial. Nothing they say reaches the lawyers, the witnesses, the big screen, or the GM console. When the closing arguments are done the jury deliberates there while the verdict buttons stay locked, and only open when you press **Open jury votes**
- **A secret ballot** — which way the jury is leaning never touches the shared screen. The big screen shows only that a jury is out and how many votes are sealed; **the live poll goes to your GM console instead**, naming each juror and how they lean so you can read the room without the room reading it. The moment the verdict lands, the split is revealed to everyone — tally, meter, and every juror's vote by name
- **The timeline** — on each turn, a song plays and the active player taps a slot in their timeline, then locks it in. Other players can spend a token to **Challenge** and pick a different slot; if the active player is wrong and the challenger is right, the challenger steals the card. Anyone can tap **I know it!** to join a queue to name the title and artist out loud, and the first correct answer earns a token. Tokens are capped, and a player can trade them for a free song placed in the right slot. On their turn, before locking in, a player can spend 1 token to **Skip song**: the song is discarded and a new one plays. Naming the song only earns a token; the card goes to whoever placed it correctly. You set the songs to win, starting tokens, token cap, trade cost, challenge cost and challenge window in the editor. Turn on **Host plays** to take a seat yourself: your timeline and controls appear in GM Remote, and the answer key stays hidden until you answer or pass
- **Spotify playback** — connect your Spotify account in **Settings** and each song starts on its own on your phone, computer or speaker through Spotify Connect, with Spotify left in the background. A song without a link is found by search. One button on the big screen stays up through every phase: **▶ Play song** starts the song, **⏸ Pause** pauses it, and **▶ Play** resumes it. Without Spotify connected, **▶ Play song** opens the song in a new tab instead. See [Setting up Spotify](#setting-up-spotify)
- **Phones as controllers** — buzzers, answer choices, wagers, typed answers, and votes, with haptic feedback and reconnect support if someone drops: rejoin from the same phone with the same name to carry on where you left off, in every game, and a phone that reloads mid-show rejoins by itself
- **QR code joining** — the lobby shows a scannable code that takes players straight to the join page
- **Set points on everything** — every question has a defined point value; no speed bonuses, no surprises
- **Music & stingers** — upload your own correct/wrong/waiting/background audio
- **GM Console** — a separate pop-out window just for the host, with music controls and a live answer key for the current question, so nothing secret ever touches the shared screen. In Feud, every answer in the key is a button: press one to show that answer on the board. It scores for whoever is answering, or scores nothing when nobody is, so you can also reveal what's left after a round one answer at a time
- **Run the show from the GM screen** — every button on the game screen is mirrored into the GM Console, labels and all, and pressing it there presses the real one. A **🙈 Hide buttons on the game screen** toggle then takes them off the shared display while leaving them live on your side, so the room sees a clean stage while you keep driving — a revealed answer still shows. A private GM code puts the same controls on your phone or any other device
- **Moderate from the GM screen** — the console and the phone remote both list everyone in the room. Nudge a score by 100, type an exact score and press Enter, or remove a player entirely (two taps, so you can’t do it by accident). Dropped players stay listed until you clear them out
- **Screen size** — the show scales itself to fit the window, and the GM screen has a − / % / + / Auto control to override it when the room’s display wants something bigger or smaller. Your choice is remembered
- **Countdown** — every timer bar now has the seconds beside it, turning magenta for the last five
- **Leaderboard** — a **🏆 Leaderboard** on the main menu keeps a record of every show you run to the final scores: the game, when you played it, everyone who took part with their scores, and who won (ties included). Clear it whenever you like
- **Host controls** — every question shows on the big screen first and answering opens only when the host says so; configurable answer, buzz-in, and writing timers; players can change their answers until time runs out; live score tracking and full judge control
- **Built-in how-to guide** — step-by-step instructions for both hosts and players, one tap away
- **Player limits** — set the max players (2–20) per game
- **Export & import** — share games (images included) as portable files between browsers and devices
- **Everything stays local** — games, settings, and media are stored in your browser; nothing is uploaded anywhere

## Building a game from a text file

Typing questions one at a time in the editor gets old fast. Instead, write them in any plain-text editor and import the lot.

1. Open your game in the editor and click **⬇ Template** — you'll get a commented sheet for that style. (The same files live in [`templates/`](templates/).)
2. Fill it in and save it as a `.txt` file.
3. Click **⬆ Import questions** and pick your file.

The format is the same idea for every style: `#` starts a comment, `KEY: value` sets a field, and a **blank line ends one question and starts the next**. Keys are not case-sensitive. Importing **adds** to whatever is already in your game, so you can build it up from several files — though the blank starter row a new game begins with is replaced rather than kept.

| Style | Template | Looks like |
|---|---|---|
| Jeopardy Style | [`duelcrate-jeopardy-template.txt`](templates/duelcrate-jeopardy-template.txt) | `CATEGORY:` starts a column, then `Q:` / `A:` / `VALUE:` blocks under it |
| Multiple Choice Trivia | [`duelcrate-trivia-template.txt`](templates/duelcrate-trivia-template.txt) | `Q:` then `A)` `B)` `C)` `D)` choices and `CORRECT:` |
| Feud Survey | [`duelcrate-feud-template.txt`](templates/duelcrate-feud-template.txt) | `Q:` then one `- Answer \| 30` line per survey answer |
| Closest Wins | [`duelcrate-closest-template.txt`](templates/duelcrate-closest-template.txt) | `Q:` and a numeric `ANSWER:` |
| Wheel Puzzle | [`duelcrate-wheel-template.txt`](templates/duelcrate-wheel-template.txt) | `CATEGORY:` and `PUZZLE:` per puzzle, plus `WEDGES:` and the bonus round |
| Courtroom | [`duelcrate-court-template.txt`](templates/duelcrate-court-template.txt) | one `EVIDENCE:` line per card, plus `WITNESS: who they are \| their secret` |
| Tune Timeline | [`duelcrate-timeline-template.txt`](templates/duelcrate-timeline-template.txt) | one `SONG: Title \| Artist \| Year \| Spotify link` line per song, or `SONG:` / `ARTIST:` / `YEAR:` / `LINK:` blocks |

A sheet can also set game-wide options: `NAME`, `MAX PLAYERS`, Jeopardy's `VALUES` and `FINAL Q` / `FINAL A`, Feud's `PLAY STYLE` (`teams` or `free-for-all`) and `STRIKES`, `SAY ANSWERS` for Feud and the Wheel (`yes` to say answers out loud), the Wheel's `WEDGES`, `VOWEL COST` and `BONUS PUZZLE`, the Courtroom's `JUDGE WRITES CHARGE`, `CARDS EACH`, `OBJECTIONS EACH` and `TOP UP EVIDENCE`, and Tune Timeline's `SONGS TO WIN`, `STARTING TOKENS`, `TOKEN CAP`, `TRADE COST`, `CHALLENGE COST`, `CHALLENGE SECONDS` and `HOST PLAYS`. Anything you leave out keeps its current value. Tune Timeline skips a song that's already in the game, so importing the same sheet twice is safe.

The importer is deliberately forgiving — it accepts `A)` / `A.` / `A:` for choices, takes `CORRECT:` as a letter, a number or the answer text, copes with Windows line endings, and skips any block it can't make sense of rather than failing the whole file. If nothing lands, it tells you instead of silently doing nothing. Pictures are the one thing a text file can't carry; add those in the editor.

## Setting up Spotify

Tune Timeline can start each song on your own Spotify app. Only the host connects, and playback needs Spotify Premium. Player phones don't need Spotify.

1. Sign in to the [Spotify developer dashboard](https://developer.spotify.com/dashboard) and create an app. Select **Web API** when it asks which APIs you use.
2. In DuelCrate, open **Settings** and find the **Spotify** section. Copy the address shown under **Redirect URI**.
3. In your Spotify app's settings, add that address as a redirect URI, and then copy the app's **Client ID**.
4. Paste the client ID into DuelCrate's **Settings**, and then click **Connect Spotify**. Sign in to Spotify in the window that opens.
5. Open the Spotify app on the phone or computer that plays the music.
6. In a Tune Timeline game, click **🔈 Pick a device** and choose that device. You can do this from GM Remote too.

Sign-in works only from a web address, such as the published copy or `http://127.0.0.1`. Spotify doesn't accept `localhost` or a file opened from disk. The sign-in stays in your browser, and nothing goes to a server.

Spotify shows the song in its own app and in your phone's notifications. Keep that screen out of sight, especially if you turn on **Host plays**.

The [Spotify Developer Policy](https://developer.spotify.com/policy/) doesn't allow games built on its API, so this feature is for personal use. If Spotify turns off your app, **▶ Play song** still opens each song in a new tab.

## Picking genres for Tune Timeline

In a Tune Timeline lobby, the **Songs** panel sets where the songs come from. You can use the crate's own songs, pick genres, or both. Each game draws random songs from the top 200 of every genre you pick.

- **Genre buttons** come from the lists in the `lists/` folder. Click a genre to add it, and click it again to remove it.
- **Add genre** takes any genre you type, such as *yacht rock*. DuelCrate gets that genre's top songs from Last.fm and looks up each song's original year on MusicBrainz, about one song a second. The game can start once enough songs are ready, and songs that get a year later join the deck. This needs a free [Last.fm API key](https://www.last.fm/api/account/create), pasted into **Settings > Last.fm**.

Spotify no longer lets apps like this one read its genre categories, popularity, or other people's playlists, so the lists come from Last.fm listener counts instead. The songs still play through Spotify.

### Keeping the genre lists up to date

`tools/build-song-lists.js` builds one list per genre in `lists/genres.json`, plus `lists/index.json`. A GitHub Actions workflow, `.github/workflows/song-lists.yml`, runs it every Monday and commits the results.

1. Upload `lists/`, `tools/`, and `.github/workflows/song-lists.yml` to the repository.
2. In the repository, go to **Settings > Secrets and variables > Actions**, and add a secret named `LASTFM_API_KEY` that holds your Last.fm API key.
3. In the **Actions** tab, open **Song lists** and click **Run workflow**. The first run looks up thousands of years and can take a few hours. Later runs look up only new songs.

To add or remove genres, edit `lists/genres.json`. Each entry has a display `name` and a Last.fm `tag`. To run the builder on your own computer, use Node 18 or later:

```bash
LASTFM_API_KEY=your-key node tools/build-song-lists.js
```

## How it works

DuelCrate is **HTML-based** — one self-contained HTML file with no backend. Multiplayer runs peer-to-peer over WebRTC (via PeerJS): the host's browser *is* the game server. Host it on any static site (like GitHub Pages), open the page to run the show, and send players to the `#join` page on their phones — or just let them scan the QR code in the lobby.

**Players load the same copy you host from.** The lobby's QR code points at whatever address the host page is open on, so a copy served from a LAN address hands players that same build. The one exception is opening the file directly from disk (`file://`) — a phone can't reach a path on your PC, so the QR falls back to the published copy and the lobby warns you that unpublished changes won't reach anyone's phone. To test new work on real phones, serve the folder over http rather than double-clicking the file.

## Disclaimer

DuelCrate was coded with the assistance of AI. It has been tested, but you may still encounter bugs or rough edges — feedback is welcome!
