import { siteConfig } from "@/data/site";
import { MarketplaceLinks } from "@/components/layout/MarketplaceLinks";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <MarketplaceLinks />
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          {siteConfig.email}
        </a>
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
