import { ImageResponse } from "next/og";
import { siteConfig } from "@/site.config";

export const ogSize = { width: 1200, height: 630 };

/** Text-only Open Graph card in the site palette. No external images or art. */
export function ogCard({ eyebrow, title }: { eyebrow: string; title: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf6f0",
          padding: "72px 80px",
          fontFamily: "serif",
          color: "#1f1a17",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#8a3b2a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#faf6f0",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            Y
          </div>
          <div style={{ fontSize: 36, fontWeight: 700 }}>{siteConfig.appName}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, color: "#8a3b2a", textTransform: "uppercase", letterSpacing: 3 }}>{eyebrow}</div>
          <div style={{ fontSize: title.length > 48 ? 64 : 80, lineHeight: 1.08, marginTop: 18, maxWidth: 1000 }}>{title}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#5c534c" }}>
          <div>{siteConfig.tagline}</div>
          <div>{siteConfig.domain}</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
