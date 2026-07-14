# DuelCrate

**Your show. Your rules.**

DuelCrate is a Jackbox-style party game platform that runs entirely in the browser. One person hosts the show from a big screen while 2–20 players join from their phones using a 4-letter room code; no app installs, no accounts, no server. The whole thing is a single, self-contained HTML file.

## Features

- **Four game styles** — build and run your own custom games:
  - **Jeopardy Style** — a board of categories and point values; players buzz in from their phones
  - **Multiple Choice Trivia** — questions with answer choices delivered straight to every phone
  - **Feud Survey** — a board of hidden survey answers; buzz in, type a guess, and watch the board reveal matches
  - **Closest Wins** — numeric estimation showdowns; closest guess without going over takes the points
- **Full game editor** — create, edit, duplicate, and delete your own games, with autosave as you type
- **Question images** — add a picture to any question in any game style
- **Daily Doubles** — mark any Jeopardy clue as a surprise 2× value
- **Final Jeopardy** — players wager points and type answers on their phones; the host judges each one
- **Phones as controllers** — buzzers, answer choices, wagers, and text answers, with haptic feedback and reconnect support if someone drops
- **Music & stingers** — upload your own correct/wrong/waiting/background audio
- **Host controls** — configurable timers, live score tracking, and full judge control over every round
- **Everything stays local** — games, settings, and media are stored in your browser; nothing is uploaded anywhere

## How it works

DuelCrate is **HTML-based** — a single `index.html` file with no backend. Multiplayer runs peer-to-peer over WebRTC (via PeerJS): the host's browser *is* the game server. Host it on any static site (like GitHub Pages), open the page to run the show, and send players to the `#join` page on their phones.

## Disclaimer

DuelCrate was coded with the assistance of AI. It has been tested, but you may still encounter bugs or rough edges. Feedback is welcome!
