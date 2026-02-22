import fs from "fs";
import path from "path";

export function getContent() {
  const filePath = path.join(process.cwd(), "public", "content.json");
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    throw new Error(`Failed to load content.json: ${err instanceof Error ? err.message : String(err)}`);
  }
}
