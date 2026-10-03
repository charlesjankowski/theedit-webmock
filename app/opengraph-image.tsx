import { ogCard, ogSize } from "@/lib/og";
import { siteConfig } from "@/site.config";

export const alt = `${siteConfig.appName}: ${siteConfig.tagline}`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ eyebrow: "A virtual stylist for iOS", title: siteConfig.tagline });
}
