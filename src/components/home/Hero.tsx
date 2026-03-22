import Link from "next/link";
import { MarketplaceLinks } from "@/components/layout/MarketplaceLinks";

export function Hero() {
  return (
    <section className="pt-17 min-h-screen flex items-center justify-center">
      <div className="max-w-max-width mx-auto px-[clamp(20px,4vw,40px)] text-center py-[clamp(60px,10vw,100px)]">
        <p className="anim-fade-up anim-delay-1 mb-6 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
          Creative Design Studio
        </p>

        <h1 className="anim-fade-up anim-delay-2 font-serif text-[clamp(2.8rem,7.5vw,6rem)] font-medium leading-[1.05]">
          <span className="block">Your creative projects</span>
          <span className="block italic text-accent">deserve things</span>
          <span className="block">that feel real</span>
        </h1>

        <p className="anim-fade-up anim-delay-3 mt-8 text-[1.1rem] leading-relaxed text-muted max-w-xl mx-auto">
          Watercolor illustrations, floral patterns, photo bundles &amp; mockups
          — hand-painted and carefully crafted for designers and creators.
        </p>

        <div className="anim-fade-up anim-delay-4 mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#gallery"
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-foreground bg-foreground px-6.5 py-3.5 text-sm font-semibold tracking-[0.02em] text-background transition-all duration-350 ease-warm hover:bg-charcoal-soft hover:border-charcoal-soft hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(61,56,51,0.18)]"
          >
            Browse Collection
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-border bg-transparent px-6.5 py-3.5 text-sm font-semibold tracking-[0.02em] text-foreground transition-all duration-350 ease-warm hover:bg-birch hover:border-birch-deep hover:-translate-y-0.5"
          >
            Our Story
          </Link>
        </div>

        <div className="anim-fade-in anim-delay-5 mt-14 flex flex-wrap items-center justify-center gap-6 text-[13px] text-muted">
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            25,000+ assets created
          </span>
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            Hand-painted watercolors
          </span>
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            Available on 5 marketplaces
          </span>
        </div>

        <div className="anim-fade-in anim-delay-6 mt-8 flex justify-center">
          <MarketplaceLinks iconSize={22} />
        </div>
      </div>
    </section>
  );
}
