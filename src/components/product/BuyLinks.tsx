"use client";

import { marketplaces } from "@/data/marketplaces";
import type { MarketplaceLink } from "@/types/product";
import { trackEvent } from "@/lib/analytics";

interface BuyLinksProps {
  links: MarketplaceLink[];
  productSlug: string;
}

export function BuyLinks({ links, productSlug }: BuyLinksProps) {
  const marketplaceMap = new Map(marketplaces.map((m) => [m.id, m]));
  const shopifyLink = links.find((link) => link.marketplace === "shopify");
  const secondaryLinks = shopifyLink
    ? links.filter((link) => link.marketplace !== "shopify")
    : links;

  function trackMarketplaceClick(link: MarketplaceLink) {
    trackEvent("marketplace_click", {
      marketplace: link.marketplace,
      product_slug: productSlug,
      location: "product_page",
    });
  }

  return (
    <div>
      <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
        Buy this product
      </h3>

      {shopifyLink ? (
        <a
          href={shopifyLink.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackMarketplaceClick(shopifyLink)}
          className="mb-5 flex w-full items-center justify-center gap-3 rounded-full border-[1.5px] border-foreground bg-foreground px-6 py-4 text-sm font-semibold tracking-[0.02em] text-background transition-all duration-350 ease-warm hover:-translate-y-0.5 hover:border-charcoal-soft hover:bg-charcoal-soft hover:shadow-[0_8px_24px_rgba(61,56,51,0.18)]"
        >
          Buy on Kotkoa Shop
        </a>
      ) : null}

      {secondaryLinks.length > 0 ? (
        <div>
          {shopifyLink ? (
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
              Also available on
            </p>
          ) : null}
          <div className="flex flex-col gap-3">
            {secondaryLinks.map((link) => {
              const marketplace = marketplaceMap.get(link.marketplace);

              return (
                <a
                  key={link.marketplace}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackMarketplaceClick(link)}
                  className="flex w-full items-center gap-3 rounded-[14px] border border-border px-5 py-3.5 text-sm font-medium transition-all duration-300 ease-warm hover:-translate-y-0.5 hover:border-birch-deep hover:bg-bg-alt"
                >
                  {marketplace ? (
                    <>
                      <img src={marketplace.icon} alt="" width={20} height={20} />
                      {marketplace.name}
                    </>
                  ) : (
                    link.marketplace
                  )}
                </a>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
