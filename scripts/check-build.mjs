// Post-build content audit. Run after `next build`:  npm run check
// Fails (exit 1) if the prerendered output contains placeholder text,
// deal/price language, banned buzzwords in titles/meta, third-party trademarks,
// affiliate or outbound retailer links, or images loaded from other hosts.
// Also confirms every image file in the repo is self-authored or credited.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, extname } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const outDir = join(root, ".next/server/app");
const ownHost = readFileSync(join(root, "site.config.ts"), "utf8").match(/domain:\s*"([^"]+)"/)[1];

function walk(dir, filter, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name === ".git" || name === ".next" && dir === root) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, filter, acc);
    else if (filter(p)) acc.push(p);
  }
  return acc;
}

const failures = [];
const fail = (file, msg) => failures.push(`${relative(root, file)}: ${msg}`);

// ---- 1. Built HTML -------------------------------------------------------
const htmlFiles = walk(outDir, (p) => p.endsWith(".html"));
if (htmlFiles.length === 0) {
  console.error("No prerendered HTML found in .next/server/app. Run `npm run build` first.");
  process.exit(1);
}

const textRules = [
  [/lorem ipsum|dolor sit amet/i, "lorem ipsum"],
  [/\bTODO\b|TODO_|\bTBD\b|\bFIXME\b/, "placeholder text"],
  [/coming soon|under construction/i, "'coming soon' wording"],
  [/\b(cheap|bargains?|deals?|discounts?|savings|sales?|coupons?|steals?|budget|price drop)\b|for less\b|\d+\s?% off/i, "deal/price language"],
  [/premium outlets|simon\.com|shop premium/i, "third-party trademark"],
];
const metaBuzzwords = /\b(AI|AI-powered|artificial intelligence|LLM|GPT|smart|next-gen|revolutionary)\b/i;
const affiliatePatterns = /flexoffers|flexlinks|linksynergy|shareasale|awin1|rstyle\.me|go\.skimresources|anrdoezrs|tkqlhce|jdoqocy|dpbolvw|kqzyfj|[?&](aff|affid|affiliate_id|clickref)=/i;

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  // Visible text only (strip scripts/styles/tags) for wording checks.
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ");
  for (const [re, label] of textRules) {
    const m = text.match(re);
    if (m) fail(file, `${label}: "${m[0]}"`);
  }
  // Buzzwords: banned in <title>, meta descriptions, headings and nav labels.
  const prominent = [
    ...html.matchAll(/<title>([\s\S]*?)<\/title>/gi),
    ...html.matchAll(/<meta[^>]+(?:name|property)="(?:description|og:title|og:description|twitter:title|twitter:description)"[^>]+content="([^"]*)"/gi),
    ...html.matchAll(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/gi),
    ...html.matchAll(/<nav[\s\S]*?<\/nav>/gi),
  ].map((m) => (m[1] ?? m[0]).replace(/<[^>]+>/g, " "));
  for (const s of prominent) {
    const m = s.match(metaBuzzwords);
    if (m) fail(file, `buzzword in title/meta/heading/nav: "${m[0]}"`);
  }
  if (affiliatePatterns.test(html)) fail(file, "affiliate link pattern");
  for (const [, url] of html.matchAll(/<a[^>]+href="(https?:\/\/[^"]+)"/gi)) {
    if (!new URL(url).hostname.endsWith(ownHost)) fail(file, `outbound link: ${url}`);
  }
  for (const [, url] of html.matchAll(/<(?:img|source|image|video)[^>]+(?:src|srcset|href)="(https?:\/\/[^"]+)"/gi)) {
    if (!new URL(url).hostname.endsWith(ownHost)) fail(file, `third-party image: ${url}`);
  }
}

// ---- 2. Source: no remote images, no hotlinking --------------------------
const srcFiles = walk(root, (p) => /\.(tsx?|css|mjs|mdx?)$/.test(p) && !p.includes("/scripts/") && !p.includes("/.next/"));
for (const file of srcFiles) {
  const src = readFileSync(file, "utf8");
  const m = src.match(/(?:src|href|url)\s*[=(:]\s*["'`]?(https?:\/\/[^"'`)\s]+\.(?:png|jpe?g|gif|webp|avif|svg))/i);
  if (m) fail(file, `remote image reference: ${m[1]}`);
  if (/remotePatterns|images\.domains/.test(src)) fail(file, "remote image config");
}

// ---- 3. Every image file is self-authored or credited --------------------
const imageExts = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".avif", ".svg", ".ico"]);
const images = walk(root, (p) => imageExts.has(extname(p).toLowerCase()) && !p.includes("/.next/"));
const credits = readFileSync(join(root, "CREDITS.md"), "utf8");
for (const img of images) {
  const rel = relative(root, img);
  if (!credits.includes(rel)) fail(img, "image not listed in CREDITS.md");
}

// ---- Report --------------------------------------------------------------
if (failures.length) {
  console.error(`\n✖ Content audit failed (${failures.length}):\n  ` + failures.join("\n  ") + "\n");
  process.exit(1);
}
console.log(`✓ Content audit passed: ${htmlFiles.length} HTML files, ${srcFiles.length} source files, ${images.length} image files checked.`);
