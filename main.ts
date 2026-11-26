// Fortune Cookie Funnies for Engineers — make.fun program/v1 entry.
// Writes one fortune-cookie line for a software engineer to /output/entry.txt.
// The line is exactly 39 characters, one line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const fortune = "Fortune deprecated. Get a newer cookie.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
