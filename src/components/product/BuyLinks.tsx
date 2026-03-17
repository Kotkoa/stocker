import { marketplaces } from "@/data/marketplaces";

interface BuyLink {
  marketplace: string;
  url: string;
}

interface BuyLinksProps {
  links: BuyLink[];
}

export function BuyLinks({ links }: BuyLinksProps) {
  const marketplaceMap = new Map(marketplaces.map((m) => [m.id, m]));

  return (
    <div>
      <h3 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
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
              className="flex items-center gap-3 w-full px-4 py-3 rounded-lg border border-border text-sm font-medium hover:border-foreground transition-colors"
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
