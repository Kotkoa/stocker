"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { MarketplaceLinks } from "@/components/layout/MarketplaceLinks";
import { MobileMenuButton } from "@/components/layout/MobileMenuButton";
import { siteConfig } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 48);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full h-17 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-lg backdrop-saturate-160 border-b border-border shadow-[0_1px_3px_rgba(61,56,51,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-max-width items-center justify-between px-[clamp(20px,4vw,40px)]">
        <Link
          href="/"
          className="text-[15px] font-bold uppercase tracking-[0.08em] text-foreground"
        >
          kotkoa
        </Link>

        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
          <nav className="hidden md:flex">
            <Navigation />
          </nav>

          <div className="hidden lg:flex">
            <MarketplaceLinks iconSize={20} location="header" />
          </div>

          <a
            href={siteConfig.shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Shop Kotkoa"
            onClick={() =>
              trackEvent("shop_cta_click", { location: "header" })
            }
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-rose bg-rose px-5 py-2.5 text-[13px] font-semibold tracking-[0.02em] text-foreground shadow-[0_4px_14px_rgba(61,56,51,0.08)] transition-all duration-350 ease-warm hover:-translate-y-0.5 hover:border-sage hover:bg-sage hover:shadow-[0_8px_22px_rgba(61,56,51,0.14)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-foreground"
          >
            Shop
          </a>

          <MobileMenuButton />
        </div>
      </div>
    </header>
  );
}
