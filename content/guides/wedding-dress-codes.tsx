import type { Guide } from "./types";

export const guide: Guide = {
  slug: "wedding-dress-codes",
  title: "Wedding dress codes, decoded",
  description:
    "What white tie, black tie, cocktail and dressy casual actually ask of you, plus how venue, time of day and tradition change the answer.",
  category: "Occasions",
  published: "2026-10-03",
  moodboard: {
    title: "Wedding guest: garden cocktail",
    palette: ["#f1ddd3", "#d9e0d0", "#4a2f3f", "#eadfcb"],
    tiles: [
      { kind: "dress", fill: "#f1ddd3", accent: "#4a2f3f" },
      { kind: "blazer", fill: "#4a2f3f", accent: "#eadfcb" },
      { kind: "shoe", fill: "#eadfcb", accent: "#4a2f3f" },
      { kind: "bag", fill: "#d9e0d0", accent: "#4a2f3f" },
      { kind: "trousers", fill: "#4a2f3f" },
    ],
    words: ["Cocktail", "Afternoon", "Outdoors", "Soft color"],
  },
  Body: () => (
    <>
      <p>
        An invitation arrives, you love the couple, and then you read the line at the bottom: <em>black tie optional</em>.
        Or <em>festive attire</em>. Or nothing at all. Dress codes exist to help guests feel like they belong in the room,
        but the terms are used loosely, and the same phrase can mean different things in a city ballroom and on a
        farm. This guide walks through the common codes from most to least formal, then covers the context that should
        shape your final choice.
      </p>

      <h2>Start with the invitation, then the website</h2>
      <p>
        The couple has usually told you more than you think. The invitation&apos;s wording and paper, the venue, the start
        time, and the wedding website (if there is one) all carry clues. A 6&nbsp;p.m. ceremony at a hotel reads very
        differently from an 11&nbsp;a.m. ceremony in a park, even if neither lists a dress code. When the signals still
        conflict, asking the couple or someone in the wedding party is completely normal. It&apos;s a far better outcome
        than guessing wrong.
      </p>

      <h2>The codes, from most to least formal</h2>

      <h3>White tie</h3>
      <p>
        The most formal code, and rare. It traditionally means a black tailcoat, white waistcoat, white bow tie and
        formal trousers, or a floor-length evening gown. There is little room for interpretation here. If you&apos;re
        unsure, lean longer, darker and more structured.
      </p>

      <h3>Black tie</h3>
      <p>
        An evening code. Think tuxedo or dinner jacket with a bow tie, or a floor-length gown. Many hosts also welcome
        an elegant cocktail-length dress or very dressy separates, such as silk trousers with a refined top. Fabrics
        with some richness (satin, crepe, velvet in cooler months) suit this code better than cotton or jersey.
      </p>

      <h3>Black tie optional or formal</h3>
      <p>
        The hosts will be in black tie and you&apos;re welcome to join them, but a dark, well-fitted suit with a tie works
        too. A long dress, a polished midi or a dressy jumpsuit fits. The key word is still <em>evening</em>, so save
        the sundress for another day.
      </p>

      <h3>Cocktail or semi-formal</h3>
      <p>
        The most common code, and the most flexible. A suit in any color appropriate to the season, with or without a
        tie depending on the setting, or a knee-length to midi dress, a tailored jumpsuit, or a skirt or trousers with
        an elevated top. Daytime cocktail weddings allow lighter colors and fabrics; evening ones lean darker and
        sleeker.
      </p>

      <h3>Festive or party attire</h3>
      <p>
        Cocktail, with permission to have fun. Color, texture, a bold print or a statement accessory are all invited.
        It&apos;s still a celebration someone planned carefully, so keep the base of the outfit polished and let one or
        two elements carry the personality.
      </p>

      <h3>Dressy casual</h3>
      <p>
        Sometimes written as &ldquo;smart casual&rdquo;. A step up from what you&apos;d wear to a nice dinner. Trousers or chinos with a shirt and an optional blazer, no
        tie needed. A day dress, a skirt with a crisp top, or tailored separates. Avoid denim unless the couple has
        said it&apos;s fine, and anything you&apos;d wear to the gym.
      </p>

      <h3>Casual</h3>
      <p>
        Casual at a wedding still means put-together. A linen shirt, a simple dress, clean shoes. If the wedding is
        on a beach or a lawn, this is often where you&apos;ll land, so the next section matters.
      </p>

      <h2>Context changes the answer</h2>
      <ul>
        <li>
          <strong>Time of day.</strong> Earlier usually means lighter fabrics and colors; evening invites darker tones,
          more shine and more coverage from the cold.
        </li>
        <li>
          <strong>Ground and weather.</strong> Grass, sand and cobblestones can be hard on narrow heels. Block heels,
          wedges or dressy flats save the day. Bring a layer for outdoor evenings, even in summer.
        </li>
        <li>
          <strong>Place of worship.</strong> Some religious venues expect covered shoulders, knees or heads. A wrap,
          a jacket or a scarf you can add for the ceremony keeps you flexible.
        </li>
        <li>
          <strong>Tradition and culture.</strong> Different traditions have different expectations about color and
          coverage. Certain colors may be reserved for the couple, or associated with mourning. If the wedding follows a
          tradition you don&apos;t know well, ask. Couples are almost always glad you did.
        </li>
      </ul>

      <h2>The colors question</h2>
      <p>
        In many Western weddings, guests avoid white, ivory and anything that could read as bridal in photos. Some
        couples ask everyone to wear a particular color, or ask guests to avoid the wedding party&apos;s palette. Unless
        you&apos;ve been told otherwise, steering clear of white is the safe default. Black is widely accepted at evening
        weddings today, but is worth a second thought for daytime and for traditions where it signals mourning.
      </p>

      <h2>When in doubt, slightly overdress</h2>
      <p>
        Being a little more formal than everyone else feels far better than being noticeably underdressed. A jacket
        you can remove or a scarf you can drop into a bag gives you room to adjust once you arrive. Finally, wear the
        shoes around the house first. You&apos;ll likely be standing, walking and dancing for hours, and comfort shows in
        photos too.
      </p>
      <p>
        That&apos;s the logic YourEdit is built around: you tell it the dress code, venue, time and weather, and it
        suggests looks that fit the brief and your taste, which you can then nudge more relaxed or more formal.
      </p>
    </>
  ),
};
