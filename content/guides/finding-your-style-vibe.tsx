import type { Guide } from "./types";

export const guide: Guide = {
  slug: "finding-your-style-vibe",
  title: "How to find your style vibe (and put it into words)",
  description:
    "A practical, closet-first method for figuring out what you actually like wearing, naming it in three words, and using it to shop with less regret.",
  category: "Personal style",
  published: "2026-10-03",
  moodboard: {
    title: "Three words: relaxed, earthy, considered",
    palette: ["#eadfcb", "#8a3b2a", "#5f6b4e", "#f6efe6"],
    tiles: [
      { kind: "knit", fill: "#8a3b2a", accent: "#eadfcb" },
      { kind: "trousers", fill: "#eadfcb" },
      { kind: "shirt", fill: "#f6efe6", accent: "#5f6b4e" },
      { kind: "boot", fill: "#5f6b4e", accent: "#1f1a17" },
      { kind: "scarf", fill: "#eadfcb", accent: "#8a3b2a" },
    ],
    words: ["Relaxed", "Earthy", "Considered"],
  },
  Body: () => (
    <>
      <p>
        &ldquo;Find your style&rdquo; sounds like a personality test with a single correct answer. In practice, personal
        style is just a pattern. It&apos;s the shapes, colors and textures you keep coming back to, and the feeling you
        want when you get dressed. You probably already have one. The work is noticing it, naming it, and then using
        that name to make better decisions. Here&apos;s a method that starts with evidence rather than aspiration.
      </p>

      <h2>Step 1: Audit what you actually wear</h2>
      <p>
        For two weeks, take a quick mirror photo of each outfit you wear, or simply jot it down. Don&apos;t change your
        habits for the experiment. At the end, look for repeats. Which pieces show up again and again? Which outfits made
        you feel most like yourself, and which did you change out of before lunch?
      </p>
      <p>
        Then look at the other side of the closet: the pieces you rarely wear. For each one, try to name the reason. It
        doesn&apos;t fit, it needs ironing, it doesn&apos;t go with anything, it&apos;s for a life you don&apos;t live,
        or it simply doesn&apos;t feel like you. Those reasons are as useful as your favorites.
      </p>

      <h2>Step 2: Collect images, then look for patterns</h2>
      <p>
        Save outfits that catch your eye: from photos, films, people you see on the street, anywhere. Aim for a few dozen
        before you start analysing, because patterns only appear at volume. Then lay them side by side and ask:
      </p>
      <ul>
        <li>
          <strong>Silhouette:</strong> Are the shapes mostly fitted, relaxed, oversized, or a mix, such as loose on top and
          slim below?
        </li>
        <li>
          <strong>Color:</strong> Do you gravitate to neutrals, earth tones, pastels, saturated brights, or mostly black?
        </li>
        <li>
          <strong>Texture:</strong> Crisp cotton and tailoring, soft knits, fluid fabrics, rugged denim and leather?
        </li>
        <li>
          <strong>Formality:</strong> Where do the looks sit, from athletic to black tie? Most people cluster in a
          surprisingly narrow band.
        </li>
        <li>
          <strong>Details:</strong> Do you notice the jewelry, the shoes, the prints, or the lack of all three?
        </li>
      </ul>
      <p>
        Compare your saved images with your two-week audit. Where they overlap, you&apos;ve found your core. Where they
        diverge, you&apos;ve found either an aspiration worth exploring or a fantasy that doesn&apos;t fit your days.
        Both are fine to know.
      </p>

      <h2>Step 3: Name it in three words</h2>
      <p>
        A common stylist exercise is to describe your style in three words. Constraints force clarity. Good words are
        specific enough to rule things out: &ldquo;relaxed, earthy, considered&rdquo; tells you more than &ldquo;cool,
        nice, comfortable&rdquo;. One approach is to pick one word for <em>shape</em>, one for <em>color or mood</em>, and
        one for the <em>feeling</em> you want to project.
      </p>
      <p>
        Test your words against real pieces. Hold up a garment and ask whether it fits at least two of the three. If it
        fits none, it may be a lovely thing that isn&apos;t yours.
      </p>

      <h2>Step 4: Check it against your actual week</h2>
      <p>
        Style has to work for your life. Roughly sketch how your time splits: office or home, school runs, client
        meetings, evenings out, travel, outdoor weekends. If most of your days are casual but most of your clothes are
        formal, you&apos;ll keep feeling like you have nothing to wear. Your three words should translate into every
        part of that split. &ldquo;Considered&rdquo; might mean a structured blazer at work and a well-cut overshirt on
        Saturday.
      </p>

      <h2>Step 5: Experiment in small, low-stakes ways</h2>
      <p>
        Before buying, try restyling what you own to fit your words. Tuck differently, roll sleeves, swap shoes, add a
        belt. When you do shop, try one new idea at a time, such as a new silhouette or a new color, rather than a
        complete reinvention. That makes it easier to tell what&apos;s working.
      </p>

      <h2>Your vibe will change, and that&apos;s the point</h2>
      <p>
        Personal style shifts with age, work, climate, body changes and plain curiosity. Repeat the audit once or twice a
        year, revisit your three words, and let them evolve. The goal isn&apos;t a fixed uniform. It&apos;s a filter that
        makes getting dressed and shopping feel easier.
      </p>
      <p>
        YourEdit&apos;s opening taste quiz is built on this idea. It asks you to react to shapes, colors and moods, then
        reflects back the patterns it sees, and keeps learning each time you save or swap a suggestion.
      </p>
    </>
  ),
};
