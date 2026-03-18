import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/about";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="relative">
        <img
          src="/images/cover-cm.jpg"
          alt="Kotkoa Studio — Blooming Flowers watercolour collection"
          className="w-full"
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-3 pb-4">
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.name}
              </a>
            ))}
          </div>
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
