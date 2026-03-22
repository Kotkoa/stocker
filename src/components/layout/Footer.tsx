import Link from "next/link";
import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/about";

const footerLinks = {
  explore: [
    { label: "Products", href: "/" },
    { label: "About", href: "/about" },
  ],
  social: socialLinks.map((link) => ({
    label: link.name,
    href: link.url,
    external: true,
  })),
} as const;

export function Footer() {
  return (
    <footer className="bg-foreground text-bg-alt">
      <div className="mx-auto max-w-max-width px-[clamp(20px,4vw,40px)] pt-22 pb-0">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Link href="/" className="text-[15px] font-bold uppercase tracking-[0.08em] text-background">
              kotkoa
            </Link>
            <p className="mt-3 font-serif text-base italic text-muted-lt">
              Creative design studio
            </p>
            <p className="mt-2 text-xs text-muted">
              Kotkoa Studio — Andrey &amp; Olesia
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-lt">
                Explore
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {footerLinks.explore.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-background/55 transition-colors hover:text-background"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-lt">
                Social
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {footerLinks.social.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-background/55 transition-colors hover:text-background"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-background/10 py-6">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
