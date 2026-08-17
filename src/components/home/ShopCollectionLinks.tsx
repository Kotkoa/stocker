"use client";

import { trackEvent } from "@/lib/analytics";

interface ShopCollectionCardProps {
  handle: string;
  name: string;
  url: string;
  image: string;
  imageAlt: string;
}

export function ShopCollectionCard({
  handle,
  name,
  url,
  image,
  imageAlt,
}: ShopCollectionCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent("shop_collection_click", {
          collection: handle,
          location: "home_shop_section",
        })
      }
      className="group overflow-hidden rounded-[14px] border border-border bg-background transition-all duration-350 ease-warm hover:-translate-y-1 hover:border-birch-deep hover:shadow-[0_12px_40px_rgba(61,56,51,0.1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          width={1024}
          height={1280}
          loading="lazy"
          className="aspect-4/5 w-full object-cover transition-transform duration-600 ease-warm group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex items-center justify-between gap-4 p-5">
        <h3 className="font-serif text-xl font-medium text-foreground">
          {name}
        </h3>
        <span
          aria-hidden="true"
          className="text-xl text-accent transition-transform duration-350 ease-warm group-hover:translate-x-1"
        >
          →
        </span>
      </div>
    </a>
  );
}

interface ShopAllLinkProps {
  url: string;
}

export function ShopAllLink({ url }: ShopAllLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent("shop_cta_click", { location: "home_shop_section" })
      }
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-[1.5px] border-foreground bg-foreground px-6.5 py-3.5 text-sm font-semibold tracking-[0.02em] text-background transition-all duration-350 ease-warm hover:-translate-y-0.5 hover:border-charcoal-soft hover:bg-charcoal-soft hover:shadow-[0_8px_24px_rgba(61,56,51,0.18)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-foreground"
    >
      Our Store
      <span aria-hidden="true">↗</span>
    </a>
  );
}
