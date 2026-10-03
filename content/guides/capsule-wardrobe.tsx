import type { Guide } from "./types";

export const guide: Guide = {
  slug: "capsule-wardrobe",
  title: "Building a capsule wardrobe that fits your real life",
  description:
    "How to choose a small set of pieces that all work together: picking a color base, choosing core items, testing combinations and filling gaps deliberately.",
  category: "Wardrobe",
  published: "2026-10-03",
  moodboard: {
    title: "Capsule: navy, cream and rust",
    palette: ["#27344a", "#f6efe6", "#8a3b2a", "#c9b79c"],
    tiles: [
      { kind: "coat", fill: "#c9b79c", accent: "#27344a" },
      { kind: "tee", fill: "#f6efe6" },
      { kind: "trousers", fill: "#27344a" },
      { kind: "knit", fill: "#8a3b2a", accent: "#f6efe6" },
      { kind: "shoe", fill: "#27344a", accent: "#f6efe6" },
    ],
    words: ["Mix and match", "Two neutrals", "One accent"],
  },
  Body: () => (
    <>
      <p>
        A capsule wardrobe is a deliberately small collection of clothes where almost everything works with almost
        everything else. The appeal is simple: fewer decisions in the morning, fewer impulse buys that never get worn,
        and more outfits from less stuff. A capsule doesn&apos;t need a magic number of items or a strict
        rulebook. It needs to fit the life you actually live. Here&apos;s how to build one.
      </p>

      <h2>Start with your calendar, not a checklist</h2>
      <p>
        Generic capsule lists assume a generic life. Before choosing a single piece, write down what a typical month
        asks of your clothes: how many days in an office, at home, on your feet, travelling, out in the evening, or
        outdoors. Note your climate, too. If you work from home four days a week and walk a dog twice a day, a capsule
        built around tailored trousers and loafers won&apos;t last a week.
      </p>

      <h2>Choose a color base</h2>
      <p>
        Interchangeability comes mostly from color. A reliable structure is:
      </p>
      <ul>
        <li>
          <strong>Two base neutrals</strong> for most bottoms, outerwear and shoes. Navy and cream, black and grey, or
          olive and tan are all good examples.
        </li>
        <li>
          <strong>One or two accent colors</strong> that work with both neutrals, used for tops, knits and accessories.
        </li>
      </ul>
      <p>
        Pull your base from what you already own and wear. If half your favorite pieces are navy, navy is a neutral for
        you, whatever any list says.
      </p>

      <h2>Pick your core pieces</h2>
      <p>
        Group the capsule by role rather than by item. A typical spread for a temperate season might look like this.
        Adjust it freely.
      </p>
      <table>
        <thead>
          <tr>
            <th scope="col">Role</th>
            <th scope="col">Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tops</td>
            <td>Plain tees, a crisp shirt, a fine knit, one top in your accent color</td>
          </tr>
          <tr>
            <td>Bottoms</td>
            <td>Trousers in each neutral, jeans or a casual alternative, a skirt if you wear them</td>
          </tr>
          <tr>
            <td>Layers</td>
            <td>A cardigan or overshirt, a blazer or structured jacket</td>
          </tr>
          <tr>
            <td>Outerwear</td>
            <td>One coat or jacket suited to your weather</td>
          </tr>
          <tr>
            <td>Shoes</td>
            <td>An everyday pair, a smarter pair, something for weather or activity</td>
          </tr>
          <tr>
            <td>Extras</td>
            <td>A bag, a belt, a scarf: small items that change the mood of an outfit</td>
          </tr>
        </tbody>
      </table>
      <p>
        If you dress up often, a dress or suit that can be styled up or down earns its place. If you never do, leave it
        out of the capsule and keep one occasion outfit separately.
      </p>

      <h2>Do the combination math</h2>
      <p>
        Here&apos;s where capsules earn their reputation. If every top works with every bottom, then four tops and three
        bottoms give you twelve outfits before you add a single layer. Add two layers that go with everything and each
        of those twelve can be worn three ways. The math only works if pieces genuinely pair, which is why color and
        formality matter so much.
      </p>
      <p>
        Test it physically. Lay pieces on the bed and try each top with each bottom. Any item that only works with one
        other piece is a sign it either needs a partner or doesn&apos;t belong in this capsule.
      </p>

      <h2>Shop your closet first, then fill gaps on purpose</h2>
      <p>
        Most people can build the majority of a capsule from what they already own. Once you&apos;ve tested combinations,
        you&apos;ll see specific gaps: &ldquo;a top that works with both trousers&rdquo;, or &ldquo;shoes that aren&apos;t
        trainers but survive rain&rdquo;. Write each gap down that specifically and shop only for those. A clear brief
        protects you from buying something lovely that joins the unworn pile.
      </p>
      <p>
        When filling a gap, prioritise fit and fabric over trend. Capsule pieces get worn often, so they need to hold up
        to washing and look good after the tenth wear, not just the first.
      </p>

      <h2>Rotate with the seasons</h2>
      <p>
        You don&apos;t need to give away everything outside your capsule. Store off-season clothes, and at each change of
        season swap pieces in and out while keeping the color base steady. Many items, such as shirts, light knits and
        trousers, carry across seasons and form the spine of each new edit.
      </p>

      <h2>Signs your capsule is working</h2>
      <ul>
        <li>Getting dressed takes less time and fewer outfit changes.</li>
        <li>You reach for most of the pieces regularly.</li>
        <li>New purchases slot in with at least three existing items.</li>
        <li>You can pack for a short trip from the capsule alone.</li>
      </ul>
      <p>
        If a piece goes untouched for a whole season, ask why. Then adjust. A capsule is a living edit, not a museum.
      </p>
      <p>
        In YourEdit, you&apos;ll be able to mark the pieces you already own, so suggestions can build around them and
        point to the specific gaps worth filling.
      </p>
    </>
  ),
};
