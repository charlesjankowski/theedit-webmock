# Image credits

Every image on this site is listed here. `npm run check` fails if an image file exists in the repo without an entry.

## Self-authored (this repo)

All illustrations and mockups were created for YourEdit in this repository. No third-party images, logos, photos or brand assets are used.

| Asset | Type | Notes |
| --- | --- | --- |
| `app/icon.svg` | SVG | YourEdit logo mark (hanger "Y"), favicon |
| `components/Logo.tsx` | Inline SVG | Same mark, used in header/footer |
| `components/illustrations/Garment.tsx` | Inline SVG | Generic garment silhouettes (dress, blazer, trousers, etc.). No brands |
| `components/illustrations/Moodboard.tsx` | HTML + SVG | Moodboards built from the garment set and color swatches |
| `components/illustrations/ShoppingFlow.tsx` | HTML + SVG | How-it-works flow; icons from lucide-react (ISC license) |
| `components/PhoneFrame.tsx`, `components/screens/Screens.tsx` | HTML/CSS | Illustrative app screens with fictional data ("Brand A–D"), labeled "Illustrative" |
| `app/opengraph-image.tsx`, `app/guides/[slug]/opengraph-image.tsx`, `lib/og.tsx` | Generated PNG | Text-only Open Graph cards rendered with `next/og` |

## Third-party

- **Icons:** [lucide-react](https://lucide.dev), ISC license. Bundled from npm, not hotlinked.
- **Fonts:** Inter and Fraunces, SIL Open Font License 1.1, self-hosted via `next/font`.
- **Stock photos:** none.

## App screenshots

Screenshots supplied by the owner go in `public/app/` and must be listed here before use.
