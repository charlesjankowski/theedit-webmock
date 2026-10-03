# Brief: Companion website for our iOS app (affiliate-network review)

## Goal
Build and deploy a small, finished, public marketing site for our iOS app. Its job is to pass a human review by an affiliate network (FlexOffers) before our app is on the App Store. The network declines sites that look "under construction or incomplete," lack "valuable, original content," are not live and public, or use advertiser branding or trademarks in the URL. The site must therefore read as a real, complete product site, not a "coming soon" placeholder.

The app is **YourEdit**, a virtual fashion stylist. It learns your taste, your vibe, and the occasion you're dressing for, then suggests pieces you can refine until the look is yours. The site promotes it and will later link out to retailers through affiliate links. **No affiliate links exist yet. Do not add any.**

## Hard rules (do not break)
1. **No scraped or copyrighted material.** Do not download, hotlink, or embed images, logos, copy, or data from simon.com, Shop Premium Outlets, any retailer, brand, competitor, or search result.
2. **No third-party trademarks or logos** (Simon, Premium Outlets, retailer or brand names and logos) in the domain, site name, page titles, images, or mockups. Factual mentions in article body text are allowed only sparingly, and the site must carry a "not affiliated with or endorsed by Simon Property Group or any retailer" statement.
3. **Images must be one of:**
   - SVG illustrations and icons authored in this repo,
   - SVG illustrated garments and moodboards authored in this repo (no real brands, no product photos),
   - CSS/HTML device mockups showing our own app's UI with **fictional placeholder data** (made-up brands like "Brand A", no real logos), each visibly labeled "Illustrative",
   - screenshots of our own app that I supply in `/public/app/`,
   - at most a few stock photos from a source with an explicit commercial-use license (Unsplash or Pexels). Record each in `CREDITS.md` with source URL, author, and license.
4. **All copy is original**, written for this site. No pasted text from other sites.
5. **No lorem ipsum, TODO text, or "coming soon" wording** may ship to production.
6. **No affiliate links and no outbound retailer links** until I say the program is approved. Keep `affiliateLinksActive: false` in config.

## Stack
- Next.js (App Router) + TypeScript + Tailwind, statically generated where possible.
- Fonts via `next/font` (open-license fonts only). Icons from lucide-react.
- Articles as MDX files or typed TSX content, whichever is simpler. They should live in `/content`.
- Deploy on Vercel as a **new, separate Vercel project** (not the existing project that hosts our iOS app's backend). The site must not call, import from, or share env vars with that backend. It is a standalone marketing site on its own domain.
- Use the Vercel CLI and Vercel Marketplace for anything external (storage, email). Never hardcode provider SDK keys. Secrets go in Vercel env vars only.

## Site map (all pages real and complete)
| Route | Content |
| --- | --- |
| `/` | One-sentence value prop, who it's for, 3–4 UI mockups/screenshots, short feature list, waitlist signup, link to How it works |
| `/how-it-works` | Step-by-step path: tell the app your taste and occasion, get suggested pieces, refine the look, tap through to the retailer. Make the shopping path explicit with an illustrated flow |
| `/guides` and `/guides/[slug]` | **Five original, genuinely useful styling guides (600–900 words each):** decoding wedding dress codes; finding your style vibe; building a capsule wardrobe; first-date and interview outfits; judging fit, fabric, and construction. Illustrated with repo-authored garment and moodboard SVGs. Factual, no invented statistics, no unverifiable claims, no real brands |
| `/about` | Who we are, why we built it, honest status: "in development for iOS" |
| `/contact` | Real email on our domain; simple form optional |
| `/privacy` | Privacy policy covering waitlist emails, analytics, cookies, affiliate tracking (future) |
| `/terms` | Basic terms of use |
| `/affiliate-disclosure` | FTC-style disclosure. Wording is driven by `affiliateLinksActive` (`false` = "we plan to use affiliate links and will label them"; `true` = "some links may earn us a commission") |

Global: header nav, footer with the not-affiliated statement and links to all legal pages, and the disclosure line in the footer.

## Waitlist
- A signup form posting to a Next.js Route Handler. Store emails in a Vercel Marketplace database (run `vercel integration discover` and pick a sensible option, for example Neon Postgres or Upstash Redis).
- Validate email server-side, add a honeypot field and rate limiting, and show clear success and error states. Do not send marketing email yet. Store only email and timestamp.
- Link the privacy policy next to the form.
- Do not show an App Store badge or link. Say plainly that the app is in development.

## Site config (single source of truth)
Create `site.config.ts` with the values below. Everything else reads from it.
```ts
export const siteConfig = {
  appName: "YourEdit",
  domain: "youredit.app",
  contactEmail: "hello@youredit.app",
  legalName: "YourEdit",
  tagline: "Your taste, edited.",
  description: "YourEdit is a virtual fashion stylist that learns your taste, your vibe, and the occasion you're dressing for, then suggests pieces you can refine until the look is yours.",
  affiliateLinksActive: false,
  verificationMetaTag: "",           // FlexOffers site-ownership verification, filled in later
};
```
All values are filled in. `scripts/check-config.mjs` blocks production builds if any become empty or placeholders.

## Decisions (answered)
- Images: fictional-data CSS mockups labeled "Illustrative", plus SVG garment/moodboard illustrations. No stock photos.
- Waitlist DB: Upstash Redis (new store via Vercel Marketplace).
- Vercel Web Analytics: on, disclosed in the privacy policy.
- Domain: owner registers youredit.app themselves.
- Legal/operating name: "YourEdit".
- How suggestions are generated: by a third-party AI model provider (name TBC, set `aiProvider` in site.config.ts). Stated plainly on How it works, the FAQ and the Privacy Policy only.

## SEO, accessibility, trust signals
- Per-page `<title>`, meta description, canonical URL, Open Graph image (generated with `next/og`, no copyrighted art).
- `sitemap.xml`, `robots.txt` that **allows** indexing, JSON-LD for Organization and Article.
- Semantic HTML, alt text on every image, visible focus states, WCAG AA contrast, responsive from 360px up.
- Support a site-ownership verification step: a metadata verification tag via `siteConfig.verificationMetaTag`, and a `/public` folder where I can drop a verification file.
- Optional: Vercel Web Analytics. If used, disclose it in the privacy policy.

## Deployment
1. Create a new Vercel project for this site. Do not touch the existing backend project.
2. Attach our custom domain.
3. **Production must be fully public.** Confirm Vercel Authentication, password protection, and trusted-IP rules do not cover the production domain. Reviewers must be able to open it without logging in. Preview deployments may stay protected.
4. After launch, verify that `robots.txt` and the sitemap are served and that every page returns 200.

## Process
1. Start with a short plan: file structure, page list, image strategy. Wait for my OK.
2. Scaffold, build pages, write the articles and legal pages.
3. Run a local build and preview. Fix lint and type errors.
4. Deploy a preview, then production once I've filled in the config values.

## Definition of done
- `next build` passes with no errors or warnings that matter.
- Lighthouse (mobile) ≥ 90 for Performance, Accessibility, Best Practices, and SEO.
- Every internal link works. No broken images. No console errors.
- Every image in the repo is listed in `CREDITS.md` or is self-authored, with source and license noted. A short script or checklist confirms no image was fetched from a third-party site.
- No lorem ipsum, TODOs, "coming soon", retailer logos, or affiliate links anywhere in the built output (`grep` the build to confirm).
- Production URL loads publicly in a private browser window.

## Open questions to ask me first
1. App name and the one-sentence description of what the app does.
2. Domain name (neutral; must not include Simon or Premium Outlets).
3. Contact email and legal/operating name for the footer and policies.
4. Any screenshots of the app I want to use, or should you generate mockups with fictional data?
5. Preferred Marketplace provider for the waitlist database, if any.

Note: legal pages are templates. Flag in the final summary that I should have them reviewed before relying on them.

## Copy tone: benefits first, no buzzwords
YourEdit is a virtual fashion stylist that learns your taste, your vibe, and the occasion you're dressing for. Describe the product by what the user gets, not by the technology behind it.

- **Do not use** "AI", "AI-powered", "artificial intelligence", "LLM", "GPT", "smart", "next-gen", or "revolutionary" in headlines, taglines, hero copy, nav labels, or meta titles/descriptions. Say what it does instead: "learns your taste," "suggests pieces," "refine until it's yours."
- **Do not hide it either.** In "How it works," the FAQ, and the Privacy Policy, state plainly and accurately how suggestions are generated, in one or two sentences, and whether any personal data is processed by third-party providers. Ask me what is true before writing this. Do not guess or invent technical claims.
- **No claims the app can't make today.** No fake testimonials, user counts, statistics, press logos, or promises like "transforms your wardrobe." The app is in development for iOS, and the site should say so.
- **Voice:** warm, confident, plain-spoken, second person ("your taste, your vibe"). No hype, no superlatives, and no fear-based or anti-technology framing either.
- Tagline: **Your taste, edited.**

## Positioning: high-end, not low-price
YourEdit is for a discerning, quality-minded shopper who cares about fit, craft, and pieces that last. It is **not** a deals, discount, or bargain product. This applies to every page, mockup, guide, and meta description. It overrides any earlier outlet or deals framing in this brief.

- **Never use** deal or price-driven language: "cheap," "bargain," "deal(s)," "discount," "savings," "sale," "coupon," "steal," "budget," "for less," "price drop," or "% off." This covers headlines, nav, buttons, meta text, alt text, and article copy.
- **No price UI in mockups.** No strikethrough prices, sale badges, countdown timers, urgency cues, or price-comparison views. Mockups show suggested pieces and the refine flow only. If a price appears at all, it is a plain figure with no discount treatment.
- **Guides** stay on style, quality, fit, fabric, tailoring, occasion dressing, and building a considered wardrobe. No guide about saving money, price tiers, outlets, or sales.
- **Visual design:** restrained and editorial. Generous whitespace, a refined serif and sans pairing (open-license fonts), a muted palette, and quiet motion. No loud promo colors, starburst badges, or retail-flyer styling. Illustrations are elegant and minimal.
- **Language:** words like "considered," "refined," "tailored," "timeless," "crafted" fit the brand when used sparingly and truthfully. Do not name or imply specific luxury brands, and do not claim exclusivity or prestige the product has not earned.
