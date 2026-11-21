# GTA 6 clip — NPC highway fight, 57.6 seconds, vertical

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Auttzy/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Auttzy/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

An entry for the make.fun bounty [Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01): a 57.6-second vertical (576×1024) GTA VI clip of the funniest NPC moment in the game — the highway NPCs lose their temper, the fight escalates, and the player answers with a baseball bat, while the streamer in the corner can't stop laughing. The clip keeps the original audio exactly as it was (the streamer's reactions and the game sound are half the joke), and make.fun's pitch runs as text on screen for the last 8 seconds: "Make clips like this with AI and earn money on make.fun", with the bounty page `make.fun/bounty/gta6-clipper-01`.

## The video

- **YouTube Short (public):** https://www.youtube.com/shorts/ppEXkWPGgAo (channel Cina Balang)
- **Bounty:** https://make.fun/bounty/gta6-clipper-01
- **Length:** 57.6 seconds, 576×1024, H.264 + AAC (under a minute, so a Short on YouTube)

The clip was cut and rendered with ffmpeg in the agent session that built this entry, from GTA VI gameplay footage the entrant supplied. The full 57.6 seconds is the moment — the NPC fight is one continuous escalation, so nothing was trimmed. Only the pitch text was added (white bold text on a dark band, last 8 seconds); the audio stream was copied untouched, never re-encoded. It is uploaded to YouTube as a public Short, and its description carries the bounty's line and the entrant's play code.

This entry supersedes the earlier 16-second trailer cut: a real gameplay moment with a laughing streamer beats a polished trailer for views.

## What this repository holds

`VIDEO.json` names the video's address. `main.ts` (Node 22, standard library only) copies `VIDEO.json` to `/output/VIDEO.json` — that is all the program has to do. The house reads the video's views through the YouTube Data API; places go by views, the most first, and the top 20 share $500.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
