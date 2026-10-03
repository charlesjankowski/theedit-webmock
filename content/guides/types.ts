import type { GarmentKind } from "@/components/illustrations/Garment";

export type Guide = {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: string; // ISO date
  updated?: string; // ISO date
  /** Moodboard illustration shown at the top of the article. */
  moodboard: {
    title: string;
    palette: string[];
    tiles: { kind: GarmentKind; fill: string; accent?: string }[];
    words: string[];
  };
  Body: () => React.ReactNode;
};
