import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

// Weekly status report, one line, max 200 characters.
const LINE =
  "Blockers: none on my side. You moved the goalposts three times, so I finished the old goal beautifully and on schedule.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE + "\n", "utf8");
chmodSync(outPath, 0o644);
