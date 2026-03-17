"use client";

import { useSetAtom } from "jotai";
import { mobileMenuOpenAtom } from "@/store/ui";

export function MobileMenuButton() {
  const setMobileMenuOpen = useSetAtom(mobileMenuOpenAtom);

  return (
    <button
      type="button"
      aria-label="Menu"
      className="md:hidden flex items-center justify-center"
      onClick={() => setMobileMenuOpen((prev) => !prev)}
    >
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1={3} y1={6} x2={21} y2={6} />
        <line x1={3} y1={12} x2={21} y2={12} />
        <line x1={3} y1={18} x2={21} y2={18} />
      </svg>
    </button>
  );
}
