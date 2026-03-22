import { marketplaces } from "@/data/marketplaces";
import type { MarketplaceLink } from "@/types/product";

interface BuyLinksProps {
  links: MarketplaceLink[];
}

export function BuyLinks({ links }: BuyLinksProps) {
  const marketplaceMap = new Map(marketplaces.map((m) => [m.id, m]));

  return (
    <div>
      <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted mb-4">
        Buy this product
      </h3>
      <div className="flex flex-col gap-3">
        {links.map((link) => {
          const marketplace = marketplaceMap.get(link.marketplace);

          return (
            <a
              key={link.marketplace}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full px-5 py-3.5 rounded-[14px] border border-border text-sm font-medium transition-all duration-300 ease-warm hover:border-birch-deep hover:bg-bg-alt hover:-translate-y-0.5"
            >
              {marketplace ? (
                <>
                  <img
                    src={marketplace.icon}
                    alt=""
                    width={20}
                    height={20}
                  />
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
  );
}
