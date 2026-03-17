import { marketplaces } from '@/data/marketplaces'
import { assetPath } from '@/lib/assets'

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
          {/* eslint-disable-next-line @next/next/no-img-element -- small SVG icons don't benefit from image optimization */}
          <img
            src={assetPath(marketplace.icon)}
            alt={marketplace.name}
            width={iconSize}
            height={iconSize}
          />
        </a>
      ))}
    </div>
  )
}
