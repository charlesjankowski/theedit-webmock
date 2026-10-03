type Props = {
  /** Describes the screen for screen readers. */
  label: string;
  caption?: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * CSS-only iPhone-style frame for illustrative app screens. Every mockup
 * carries a visible "Illustrative" badge: data shown is fictional.
 */
export function PhoneFrame({ label, caption, children, className = "" }: Props) {
  return (
    <figure className={`flex flex-col items-center ${className}`}>
      <div
        role="img"
        aria-label={`Illustrative app screen: ${label}. Fictional example data.`}
        className="relative w-[248px] rounded-[2.6rem] border-[10px] border-ink bg-ink shadow-xl shadow-ink/15"
      >
        <div className="relative h-[500px] overflow-hidden rounded-[1.9rem] bg-cream" aria-hidden="true">
          <div className="flex h-8 items-center justify-between px-6 pt-1 text-[10px] font-semibold text-ink">
            <span>9:41</span>
            <span className="absolute left-1/2 top-1.5 h-5 w-20 -translate-x-1/2 rounded-full bg-ink" />
            <span className="flex items-center gap-1">
              <span className="h-2 w-3 rounded-sm border border-ink" />
            </span>
          </div>
          <div className="px-4 pb-4">{children}</div>
        </div>
        <span className="absolute -right-3 -top-3 rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-cream shadow">
          Illustrative
        </span>
      </div>
      {caption && <figcaption className="mt-4 max-w-[240px] text-center text-sm text-muted">{caption}</figcaption>}
    </figure>
  );
}
