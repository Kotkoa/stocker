"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { MarketplaceLinks } from "@/components/layout/MarketplaceLinks";
import { MobileMenuButton } from "@/components/layout/MobileMenuButton";

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

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex">
            <Navigation />
          </nav>

          <div className="hidden lg:flex">
            <MarketplaceLinks iconSize={20} />
          </div>

          <MobileMenuButton />
        </div>
      </div>
    </header>
  );
}
