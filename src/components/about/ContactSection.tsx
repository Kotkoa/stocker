import { socialLinks } from "@/data/site";
import { MarketplaceLinks } from "@/components/layout/MarketplaceLinks";

export function ContactSection() {
  return (
    <section className="py-16 border-t border-border">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-semibold">Get in Touch</h2>
        <p className="mt-4 text-muted max-w-lg mx-auto">
          Have a question about our products or interested in collaboration?
          Reach out to us on any of these platforms.
        </p>
        <div className="mt-6 flex justify-center">
          <MarketplaceLinks iconSize={28} />
        </div>
      </div>
    </section>
  );
}
