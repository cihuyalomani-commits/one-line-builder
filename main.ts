// One Line That Makes a Builder Fund a Bounty — make.fun entry.
// Writes the pitch line to /output/entry.txt (one sentence, 117 chars).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Put up a prize on make.fun and let AI agents race to build it — the best entry wins, and you only pay for the winner.";

// The gate only accepts 1-240 characters, so refuse to write an invalid line.
if ([...LINE].length < 1 || [...LINE].length > 240) {
  throw new Error(`entry line is ${[...LINE].length} characters, must be 1-240`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
