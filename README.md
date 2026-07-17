# DuelCrate

**Your show. Your rules.**

DuelCrate is a Jackbox-style party game platform that runs entirely in the browser. One person hosts the show from a big screen while 2–20 players join from their phones using a 4-letter room code — no app installs, no accounts, no server. The whole thing is a single, self-contained HTML file.

## Features

- **Five game styles** — build and run your own custom games:
  - **Jeopardy Style** — a board of categories and point values; players buzz in from their phones
  - **Multiple Choice Trivia** — questions with answer choices delivered straight to every phone
  - **Feud Survey** — a board of hidden survey answers; buzz in, type a guess, and watch the board reveal matches
  - **Closest Wins** — numeric estimation showdowns; closest guess without going over takes the points
  - **Punchline Showdown** — everyone writes a response to a prompt, then votes for the best; top three vote-getters score
- **Full game editor** — create, edit, duplicate, and delete your own games, with autosave as you type
- **Question images** — add a picture to any question in any game style
- **Daily Doubles** — mark any Jeopardy clue as a surprise 2× value
- **Final Jeopardy** — players wager points and type answers on their phones; the host judges each one
- **Voting rounds** — Punchline Showdown responses are shuffled and anonymous until the votes are in, self-votes are blocked, and the host can reveal responses one at a time or all at once
- **Phones as controllers** — buzzers, answer choices, wagers, typed answers, and votes, with haptic feedback and reconnect support if someone drops (rejoin with the same name to keep your score)
- **QR code joining** — the lobby shows a scannable code that takes players straight to the join page
- **Set points on everything** — every question has a defined point value; no speed bonuses, no surprises
- **Music & stingers** — upload your own correct/wrong/waiting/background audio
- **GM Console** — a separate pop-out window just for the host, with music controls, a live answer key for the current question, and the end-game button, so nothing secret ever touches the shared screen — and a private GM code lets you run the console from a phone or any other device
- **Host controls** — every question shows on the big screen first and answering opens only when the host says so; configurable answer, buzz-in, and writing timers; players can change their answers until time runs out; live score tracking and full judge control
- **Built-in how-to guide** — step-by-step instructions for both hosts and players, one tap away
- **Player limits** — set the max players (2–20) per game
- **Export & import** — share games (images included) as portable files between browsers and devices
- **Everything stays local** — games, settings, and media are stored in your browser; nothing is uploaded anywhere

## How it works

DuelCrate is **HTML-based** — a single `index.html` file with no backend. Multiplayer runs peer-to-peer over WebRTC (via PeerJS): the host's browser *is* the game server. Host it on any static site (like GitHub Pages), open the page to run the show, and send players to the `#join` page on their phones — or just let them scan the QR code in the lobby.

## Disclaimer

DuelCrate was coded with the assistance of AI. It has been tested, but you may still encounter bugs or rough edges — feedback is welcome!
