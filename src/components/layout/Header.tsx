import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";
import { MarketplaceLinks } from "@/components/layout/MarketplaceLinks";
import { MobileMenuButton } from "@/components/layout/MobileMenuButton";

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          kotkoa
        </Link>

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex">
            <Navigation />
          </nav>

          <div className="hidden lg:flex">
            <MarketplaceLinks />
          </div>

          <MobileMenuButton />
        </div>
      </div>
    </header>
  );
}
