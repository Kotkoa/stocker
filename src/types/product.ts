import type { MarketplaceId } from "@/data/marketplaces"

export type { MarketplaceId } from "@/data/marketplaces"

export type ProductCategory = "watercolor" | "floral-pattern" | "photo-bundle" | "mockup" | "vintage-pattern"

export interface Product {
  slug: string
  title: string
  description: string
  category: ProductCategory
  tags: string[]
  coverImage: string
  images: string[]
  marketplaceLinks: MarketplaceLink[]
  featured: boolean
  dateAdded: string
}

export interface MarketplaceLink {
  marketplace: MarketplaceId
  url: string
}
