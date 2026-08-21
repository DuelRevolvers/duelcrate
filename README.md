# DuelCrate

**Your show. Your rules.**

DuelCrate is a Jackbox-style party game platform that runs entirely in the browser. One person hosts the show from a big screen while 2–20 players join from their phones using a 4-letter room code — no app installs, no accounts, no server. The whole thing is a single, self-contained HTML file.

## Features

- **Seven game styles** — build and run your own custom games:
  - **Jeopardy Style** — a board of categories and point values; players buzz in from their phones
  - **Multiple Choice Trivia** — questions with answer choices delivered straight to every phone
  - **Feud Survey** — a board of hidden survey answers; buzz in, type a guess, and watch the board reveal matches
  - **Closest Wins** — numeric estimation showdowns; closest guess without going over takes the points
  - **Punchline Showdown** — everyone writes a response to a prompt, then votes for the best; top three vote-getters score
  - **Wheel Puzzle** — spin an animated wheel, call letters and solve the hidden phrase, with Bankrupt, Lose a Turn and Free Play wedges
  - **Courtroom** — two players argue a made-up case out loud while you sit as judge; everyone else takes the jury box or the witness stand
- **Full game editor** — create, edit, duplicate, and delete your own games, with autosave as you type
- **Bulk import from a text file** — write a whole game in Notepad and load it in one go. Every editor has an **⬆ Import questions** button and a **⬇ Template** button that hands you a pre-formatted, commented sheet for that exact style. See [Building a game from a text file](#building-a-game-from-a-text-file)
- **Question images** — add a picture to any question in any game style
- **Daily Doubles** — mark any Jeopardy clue as a surprise 2× value
- **Final Jeopardy** — players wager points and type answers on their phones; the host judges each one
- **Player-written prompts** — Punchline Showdown can hand the pen to the players: each round the next player in turn order writes the prompt on their phone and everyone else answers it. In that mode the prompts you author only set **how many rounds** you play, and if the writer freezes or drops you can generate one for them or skip to the next player. Either way — authored or player-written — a **🎲 Generate a prompt** button sits on the game screen and conjures one from a built-in bank, so you can reroll a prompt or rescue a stuck round without leaving the show
- **Voting rounds** — Punchline Showdown responses are shuffled and anonymous until the votes are in, self-votes are blocked, and the host can reveal responses one at a time or all at once
- **The wheel** — turns rotate automatically, players spin from their phones and call letters on a phone keypad, and money only banks when you solve the puzzle. Buy vowels out of your round bank, edit any wedge (or reset to the classic set), and finish with an optional bonus round where the leader gets R S T L N E free, picks three consonants and a vowel, and takes one timed shot at the puzzle
- **The courtroom** — a spoken game where the phone is only a controller. You assign every seat before the trial opens (or hit randomize), then two lawyers are dealt evidence cards from a deck you write and either pitch a charge for you to pick or argue one you set yourself. They take turns playing evidence and making their case out loud, objecting to each other with a limited supply of objections (every second one you sustain earns them another back), and each gets one improvised wildcard. Every timed turn waits on you, so whoever's up gets a moment to think before the clock runs. The big screen keeps the whole trial as a two-column evidence log — struck evidence crossed out — so by closing arguments the verdict is laid out in front of you
- **Witnesses & jury** — anyone beyond the two lawyers takes the jury box or the witness stand. Witnesses draw a card you wrote: an identity everyone sees, and a **secret only their phone shows** — *"you're lying about exactly one detail"* — plus expert witnesses with an absurd field of expertise. There is no scheduled witness round: a lawyer gets a **Call a witness** button on their own turn and spends that turn — playing no evidence — to put someone on the stand. They question their witness, the other side cross-examines, and you can object right through the testimony before play returns to the turns. Anyone nobody calls never testifies, and the *witnesses per side* setting caps how many each lawyer may call. Jurors nudge a private sway meter as the trial runs, then deliver the verdict; you pass sentence out loud. The winning lawyer takes the points, witnesses score if the side that called them won, and jurors score for backing the verdict
- **The jury room** — jurors get a **private chat visible only to other jurors**, pinned to their phone for the whole trial. Nothing they say reaches the lawyers, the witnesses, the big screen, or the GM console. When the closing arguments are done the jury deliberates there while the verdict buttons stay locked, and only open when you press **Open jury votes**
- **A secret ballot** — which way the jury is leaning never touches the shared screen. The big screen shows only that a jury is out and how many votes are sealed; **the live poll goes to your GM console instead**, naming each juror and how they lean so you can read the room without the room reading it. The moment the verdict lands, the split is revealed to everyone — tally, meter, and every juror's vote by name
- **Phones as controllers** — buzzers, answer choices, wagers, typed answers, and votes, with haptic feedback and reconnect support if someone drops (rejoin with the same name to keep your score)
- **QR code joining** — the lobby shows a scannable code that takes players straight to the join page
- **Set points on everything** — every question has a defined point value; no speed bonuses, no surprises
- **Music & stingers** — upload your own correct/wrong/waiting/background audio
- **GM Console** — a separate pop-out window just for the host, with music controls and a live answer key for the current question, so nothing secret ever touches the shared screen
- **Run the show from the GM screen** — every button on the game screen is mirrored into the GM Console, labels and all, and pressing it there presses the real one. A **🙈 Hide buttons on the game screen** toggle then takes them off the shared display while leaving them live on your side, so the room sees a clean stage while you keep driving. A private GM code puts the same controls — music, answer key, buttons and toggle — on your phone or any other device
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
| Punchline Showdown | [`duelcrate-punchline-template.txt`](templates/duelcrate-punchline-template.txt) | one `PROMPT:` line each |
| Wheel Puzzle | [`duelcrate-wheel-template.txt`](templates/duelcrate-wheel-template.txt) | `CATEGORY:` and `PUZZLE:` per puzzle, plus `WEDGES:` and the bonus round |
| Courtroom | [`duelcrate-court-template.txt`](templates/duelcrate-court-template.txt) | one `EVIDENCE:` line per card, plus `WITNESS: who they are \| their secret` |

A sheet can also set game-wide options: `NAME`, `MAX PLAYERS`, Jeopardy's `VALUES` and `FINAL Q` / `FINAL A`, Punchline's `FIRST` / `SECOND` / `THIRD` placings, the Wheel's `WEDGES`, `VOWEL COST` and `BONUS PUZZLE`, and the Courtroom's `JUDGE WRITES CHARGE`, `CARDS EACH` and `OBJECTIONS EACH`. Anything you leave out keeps its current value.

The importer is deliberately forgiving — it accepts `A)` / `A.` / `A:` for choices, takes `CORRECT:` as a letter, a number or the answer text, copes with Windows line endings, and skips any block it can't make sense of rather than failing the whole file. If nothing lands, it tells you instead of silently doing nothing. Pictures are the one thing a text file can't carry; add those in the editor.

## How it works

DuelCrate is **HTML-based** — one self-contained HTML file with no backend. Multiplayer runs peer-to-peer over WebRTC (via PeerJS): the host's browser *is* the game server. Host it on any static site (like GitHub Pages), open the page to run the show, and send players to the `#join` page on their phones — or just let them scan the QR code in the lobby.

**Players load the same copy you host from.** The lobby's QR code points at whatever address the host page is open on, so a copy served from a LAN address hands players that same build. The one exception is opening the file directly from disk (`file://`) — a phone can't reach a path on your PC, so the QR falls back to the published copy and the lobby warns you that unpublished changes won't reach anyone's phone. To test new work on real phones, serve the folder over http rather than double-clicking the file.

## Disclaimer

DuelCrate was coded with the assistance of AI. It has been tested, but you may still encounter bugs or rough edges — feedback is welcome!
