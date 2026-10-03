import type { Guide } from "./types";
import { guide as weddingDressCodes } from "./wedding-dress-codes";
import { guide as findYourVibe } from "./finding-your-style-vibe";
import { guide as capsuleWardrobe } from "./capsule-wardrobe";
import { guide as dateAndInterview } from "./first-date-and-interview-outfits";
import { guide as fitAndFabric } from "./fit-fabric-and-construction";

export type { Guide };

export const guides: Guide[] = [weddingDressCodes, findYourVibe, capsuleWardrobe, dateAndInterview, fitAndFabric];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
