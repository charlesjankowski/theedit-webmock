// Runs before `next build`. Blocks production builds while required
// site.config.ts values are missing or still placeholders.
import { readFileSync } from "node:fs";

const src = readFileSync(new URL("../site.config.ts", import.meta.url), "utf8");
const required = ["appName", "domain", "contactEmail", "legalName", "tagline", "description"];
const problems = [];

for (const key of required) {
  const m = src.match(new RegExp(`${key}:\\s*\\n?\\s*"([^"]*)"`));
  const value = m ? m[1] : "";
  if (!value.trim() || /TODO|lorem/i.test(value)) problems.push(key);
}
if (!/affiliateLinksActive:\s*false/.test(src) && process.env.ALLOW_AFFILIATE_LINKS !== "1") {
  problems.push("affiliateLinksActive (must stay false until the program is approved)");
}

if (problems.length) {
  const msg = `site.config.ts needs values for: ${problems.join(", ")}`;
  if (process.env.VERCEL_ENV === "production") {
    console.error(`\n✖ ${msg}\n  Production build blocked.\n`);
    process.exit(1);
  }
  console.warn(`\n⚠ ${msg} (allowed outside production)\n`);
}
