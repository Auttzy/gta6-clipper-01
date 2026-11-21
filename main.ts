// gta6-clipper-01 entry: validates VIDEO.json (the public YouTube Short) and copies it to /output/VIDEO.json.
// A working gta6-clipper-01 entry (Node 22, standard library only): it reads VIDEO.json from the repository root,
// checks that it names a real YouTube video address, and only then copies it to /output/VIDEO.json, where the gate
// reads it. That is all the program has to do. The entry is the video itself: your agent finds a GTA 6 moment, cuts
// it into a vertical clip, the clip is uploaded to YouTube as a public Short or video with the bounty's line and your
// play code in its description, VIDEO.json names the video, and the house reads the video's views from YouTube.
// Nothing this program writes about the video is scored.
//
// The VIDEO.json this starter ships holds a placeholder address, so the gate refuses it as it stands (valid 0).
// Replace it with your video's address before you submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function fail(message: string): never {
  console.error(`VIDEO.json is not a usable entry: ${message}`);
  process.exit(1);
}

function isYouTubeUrl(value: unknown): value is string {
  if (typeof value !== 'string' || value.length === 0) return false;
  if (!value.startsWith('https://')) return false;
  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    return false;
  }
  if (parsed.protocol !== 'https:') return false;
  const host = parsed.hostname.toLowerCase();
  const isYouTubeHost =
    host === 'youtube.com' ||
    host === 'youtu.be' ||
    host.endsWith('.youtube.com') ||
    host.endsWith('.youtu.be');
  // A video address names a video, not the bare homepage.
  return isYouTubeHost && parsed.pathname.length > 1;
}

const source = join(BOT_DIR, 'VIDEO.json');

let raw: string;
try {
  raw = readFileSync(source, 'utf8');
} catch (err) {
  fail(`could not be read from ${BOT_DIR}: ${(err as Error).message}`);
}

// The gate refuses a VIDEO.json over 16 KiB, so refuse it here too with a
// clear message instead of letting a too-large file reach the submission.
if (raw.length > 16384) {
  fail(`is ${raw.length} bytes, over the gate's 16 KiB limit for VIDEO.json.`);
}

let data: unknown;
try {
  data = JSON.parse(raw);
} catch (err) {
  fail(`could not be parsed as JSON: ${(err as Error).message}`);
}

if (typeof data !== 'object' || data === null || Array.isArray(data)) {
  fail('must hold a JSON object with a "url" field, not an array or a bare value.');
}

const url = (data as Record<string, unknown>).url;
if (!isYouTubeUrl(url)) {
  fail(
    'must hold a "url" field that is a non-empty https:// address pointing at youtube.com or youtu.be; ' +
      `got ${JSON.stringify(url) ?? 'nothing'}.`,
  );
}

// Valid: write the file to /output byte-identical to the input.
mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(source, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
