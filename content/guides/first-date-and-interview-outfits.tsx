import type { Guide } from "./types";

export const guide: Guide = {
  slug: "first-date-and-interview-outfits",
  title: "What to wear to a first date or a job interview",
  description:
    "Two high-stakes first impressions with the same core rule: read the setting, dress one notch above it, and choose clothes that let you forget about them.",
  category: "Occasions",
  published: "2026-10-03",
  moodboard: {
    title: "First impressions: polished, comfortable, you",
    palette: ["#1f1a17", "#f6efe6", "#c9d3dd", "#8a3b2a"],
    tiles: [
      { kind: "blazer", fill: "#1f1a17", accent: "#c9d3dd" },
      { kind: "shirt", fill: "#c9d3dd", accent: "#1f1a17" },
      { kind: "trousers", fill: "#f6efe6" },
      { kind: "shoe", fill: "#8a3b2a", accent: "#1f1a17" },
      { kind: "bag", fill: "#1f1a17", accent: "#8a3b2a" },
    ],
    words: ["Setting first", "One notch up", "Comfort"],
  },
  Body: () => (
    <>
      <p>
        A first date and a job interview have more in common than either party would like to admit. In both, you&apos;re
        meeting someone new, you have limited time to show who you are, and what you wear is the first thing they see.
        The good news is that the same principles work for both. Your outfit doesn&apos;t need to impress on its own. It
        needs to fit the setting and let you stop thinking about it, so you can focus on the conversation.
      </p>

      <h2>The shared rules</h2>

      <h3>Read the setting</h3>
      <p>
        The right outfit for a coffee walk in the park is wrong for a candlelit dinner, and the right interview outfit
        at a law firm is wrong at a design studio. Before anything else, find out where you&apos;re going and what people
        there usually wear.
      </p>

      <h3>Dress one notch above</h3>
      <p>
        Once you know the baseline, aim slightly above it. It signals that you took the occasion seriously without
        looking out of place. If the norm is jeans and a tee, try trousers or dark jeans with a shirt or a fine knit. If
        the norm is a suit, wear a well-fitted one.
      </p>

      <h3>Choose something you&apos;ve worn before</h3>
      <p>
        A first outing is the worst time to discover a waistband that digs in when you sit, a collar that gapes, or
        shoes that blister after ten minutes. Wear-tested clothes let you move, sit and gesture naturally.
      </p>

      <h3>Fit comes first</h3>
      <p>
        A well-fitting outfit looks polished in a way no single statement piece can. Check that sleeves end
        near the wrist bone, trousers break cleanly at the shoe, and shirts don&apos;t pull across the buttons.
      </p>

      <h2>Job interviews</h2>

      <h3>Research the dress culture</h3>
      <p>
        Look at photos on the company&apos;s website and social channels, especially candid team shots rather than
        polished campaign images. Professional networking profiles of people in similar roles help too. And it&apos;s
        perfectly acceptable to ask the recruiter or hiring coordinator what people usually wear. It shows you&apos;re
        thoughtful, not unprepared.
      </p>

      <h3>Match the industry, then step up</h3>
      <ul>
        <li>
          <strong>Traditional settings</strong> such as finance, law and some public-sector roles: a suit in navy, grey or
          charcoal, or a tailored dress or separates with a jacket. Polished, closed-toe shoes.
        </li>
        <li>
          <strong>Business casual offices:</strong> tailored trousers or a skirt, a shirt, blouse or fine knit, and an
          optional blazer. You can skip the tie in most cases.
        </li>
        <li>
          <strong>Casual or creative workplaces:</strong> elevated basics such as dark jeans or chinos, a crisp shirt or
          a quality knit, and clean shoes. A considered detail that reflects your taste is welcome here.
        </li>
      </ul>

      <h3>Video interviews</h3>
      <p>
        Dress fully for the role from the waist up, and ideally all the way. You may need to stand, and dressing the
        part helps your mindset. Solid, mid-tone colors tend to read well on camera. Very fine stripes or small checks
        can create a shimmering effect on screen, and bright white or pure black can confuse automatic camera exposure.
        Do a test call to check how your outfit looks against your background and lighting.
      </p>

      <h3>The night before</h3>
      <p>
        Lay out everything, including socks, accessories and a bag that fits a notebook or documents. Check for loose
        threads, missing buttons and creases. If the outfit needs steaming, do it then, not twenty minutes before you
        leave.
      </p>

      <h2>First dates</h2>

      <h3>Dress for the plan</h3>
      <p>
        A drink after work, a gallery visit, a hike and a dinner reservation all ask for different things. If the plan
        involves walking, choose shoes you can walk in. For outdoor plans, bring a layer. If you&apos;re unsure how dressy
        the venue is, look at its photos online. Then go back to the rule: one notch above the baseline.
      </p>

      <h3>Wear one thing you love</h3>
      <p>
        A first date is about showing who you are. Build on a comfortable, well-fitting base, then add one piece that
        feels very <em>you</em>: a color, a jacket, a piece of jewelry, a great pair of shoes. It gives your outfit
        personality without trying too hard, and it often gives the other person something to ask about.
      </p>

      <h3>Skip what you&apos;ll fidget with</h3>
      <p>
        Anything you need to keep adjusting, such as a strap that slips, a hem you keep tugging or a too-tight collar,
        pulls your attention away from the person across the table. Comfort reads as confidence.
      </p>

      <h2>The bottom line</h2>
      <p>
        Research the setting, step up one notch, pick clothes that fit and that you&apos;ve worn before, and add a touch
        of personality. Then forget about your outfit and pay attention to the person in front of you.
      </p>
      <p>
        In YourEdit, you can pick &ldquo;interview&rdquo; or &ldquo;first date&rdquo; as the occasion, add the setting,
        and get suggestions tuned to that context and your taste.
      </p>
    </>
  ),
};
