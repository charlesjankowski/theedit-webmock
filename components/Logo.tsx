import { siteConfig } from "@/site.config";

/** Wordmark: a hanger-shaped "Y" mark plus the app name. Self-authored SVG. */
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="9" fill="#8a3b2a" />
      <path d="M16 8.5a2.2 2.2 0 1 1 2.2 2.2c-1 0-2.2.7-2.2 1.8v1.3" fill="none" stroke="#faf6f0" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 22.5 16 14l9 8.5Z" fill="none" stroke="#faf6f0" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="font-serif text-xl font-semibold tracking-tight">{siteConfig.appName}</span>
    </span>
  );
}
