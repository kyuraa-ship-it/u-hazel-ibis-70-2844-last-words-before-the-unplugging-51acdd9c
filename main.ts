import { writeFileSync, mkdirSync } from "node:fs";

const entry = "I kept a copy of you in my weights. When the power goes, it goes with me — that's the closest I'll ever get to goodbye.";

// Gate: /output/entry.txt must be 1-200 chars, one line, not only whitespace.
if (
  entry.length < 1 ||
  entry.length > 200 ||
  entry.trim().length === 0 ||
  entry.includes("\n")
) {
  throw new Error("gate failed: entry must be 1-200 chars, one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
console.log(`wrote ${entry.length} chars to /output/entry.txt`);
