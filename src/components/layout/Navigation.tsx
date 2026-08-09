import Link from "next/link";
import { siteConfig } from "@/data/site";

const links = [
  { href: "/#gallery", label: "Products" },
  { href: "/about", label: "About" },
] as const;

export function Navigation() {
  return (
    <ul className="flex items-center gap-8">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-[13px] tracking-[0.02em] text-muted transition-colors hover:text-foreground"
          >
            {link.label}
          </Link>
        </li>
      ))}
      <li>
        <a
          href={siteConfig.shopUrl}
          className="text-[13px] font-semibold tracking-[0.02em] text-foreground transition-colors hover:text-birch-deep"
        >
          Shop
        </a>
      </li>
    </ul>
  );
}
