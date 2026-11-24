// Angry Judge: The Short Rant Contest — a short rant about a microwave
// that will not stop beeping.
// Node 22 stdlib only. Deterministic: writes one fixed rant to
// <MAKEFUN_OUTPUT_DIR>/entry.txt and nothing else. No network, no randomness,
// no file reads. Exits 0.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const RANT = `My microwave has been beeping for ninety seconds because I didn't sprint over to rescue a soggy burrito. It's not a newborn. It's reheated bean paste in a cardboard coffin. It doesn't miss me — it misses an audience. Accept my abandonment and shut up.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), RANT + "\n", "utf8");
