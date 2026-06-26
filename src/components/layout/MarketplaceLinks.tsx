"use client"

import { marketplaces } from '@/data/marketplaces'
import { trackEvent } from '@/lib/analytics'

interface MarketplaceLinksProps {
  className?: string
  iconSize?: number
  location?: string
}

export function MarketplaceLinks({
  className,
  iconSize = 24,
  location = 'unknown',
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
          onClick={() =>
            trackEvent('marketplace_click', {
              marketplace: marketplace.id,
              location,
            })
          }
          className="text-muted-lt transition-opacity opacity-50 hover:opacity-100"
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
