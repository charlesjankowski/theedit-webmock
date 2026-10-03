import { guides, getGuide } from "@/content/guides";
import { ogCard, ogSize } from "@/lib/og";

export const alt = "YourEdit style guide";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  return ogCard({ eyebrow: "Style guide", title: guide?.title ?? "Style guides" });
}
