import { marketplaces } from '@/data/marketplaces'

interface MarketplaceLinksProps {
  className?: string
  iconSize?: number
}

export function MarketplaceLinks({
  className,
  iconSize = 24,
}: MarketplaceLinksProps) {
  return (
    <div className={`flex items-center gap-4 ${className ?? ''}`}>
      {marketplaces.map((marketplace) => (
        <a
          key={marketplace.id}
          href={marketplace.url}
          target="_blank"
          rel="noopener noreferrer"
          title={marketplace.name}
          className="opacity-60 transition-opacity hover:opacity-100"
        >
          <img
            src={marketplace.icon}
            alt={marketplace.name}
            width={iconSize}
            height={iconSize}
          />
        </a>
      ))}
    </div>
  )
}
