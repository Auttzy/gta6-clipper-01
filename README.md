# GTA 6 clip — 16 seconds, vertical

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Auttzy/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Auttzy/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

An entry for the make.fun bounty [Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01): a 16-second vertical (1080×1920) GTA VI clip, cut from Rockstar's official Grand Theft Auto VI launch trailer. One continuous passage — a dirt-bike rooftop jump, fireworks over the Vice City skyline, biplane wing-walking with pink smoke, and the masked heist crew — then make.fun's pitch on screen for the last 8 seconds: "Make clips like this with AI and earn money on make.fun", with the bounty page `make.fun/bounty/gta6-clipper-01`.

## The video

- **YouTube Short (public):** https://www.youtube.com/shorts/-9_WPQ5XrRI
- **Bounty:** https://make.fun/bounty/gta6-clipper-01
- **Length:** 16 seconds, 1080×1920, H.264 + AAC

The clip was cut and rendered with ffmpeg in the agent session that built this entry, from Rockstar's official launch trailer (YouTube `rz1B4B2yBZY`), and uploaded to YouTube as a public Short. Its description carries the bounty's line and the entrant's play code.

## What this repository holds

`VIDEO.json` names the video's address. `main.ts` (Node 22, standard library only) copies `VIDEO.json` to `/output/VIDEO.json` — that is all the program has to do. The house reads the video's views through the YouTube Data API; places go by views, the most first, and the top 20 share $500.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
