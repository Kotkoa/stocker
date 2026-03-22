"use client";

import { useAtom } from "jotai";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { MarketplaceLinks } from "@/components/layout/MarketplaceLinks";
import { mobileMenuOpenAtom } from "@/store/ui";

const navLinks = [
  { href: "/", label: "Products" },
  { href: "/about", label: "About" },
] as const;

export function MobileMenu() {
  const [isOpen, setIsOpen] = useAtom(mobileMenuOpenAtom);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-background"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div className="flex h-17 items-center justify-between px-[clamp(20px,4vw,40px)]">
        <span className="text-[15px] font-bold uppercase tracking-[0.08em] text-foreground">
          kotkoa
        </span>
        <button
          ref={closeButtonRef}
          onClick={closeMenu}
          aria-label="Close menu"
          className="flex h-10 w-10 items-center justify-center text-foreground"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <nav className="flex flex-col gap-6 px-[clamp(20px,4vw,40px)] pt-8" aria-label="Mobile navigation">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="font-serif text-2xl font-medium text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 border-t border-border px-[clamp(20px,4vw,40px)] py-6">
        <MarketplaceLinks />
      </div>
    </div>
  );
}
