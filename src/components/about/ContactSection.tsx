import { siteConfig } from "@/data/site";

export function ContactSection() {
  return (
    <section className="py-16 border-t border-border">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-semibold">Get in Touch</h2>
        <p className="mt-4 text-muted max-w-lg mx-auto">
          Have a question about our products or interested in collaboration?
          We'd love to hear from you.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-6 inline-block text-lg font-medium text-foreground border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
        >
          {siteConfig.email}
        </a>
      </div>
    </section>
  );
}
