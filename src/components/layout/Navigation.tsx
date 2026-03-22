import Link from "next/link";

const links = [
  { href: "/", label: "Products" },
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
    </ul>
  );
}
