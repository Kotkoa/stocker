import { siteConfig, socialLinks } from "@/data/site"
import type { Product } from "@/types/product"
import { getCategoryLabel } from "@/data/categories"

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    logo: `${siteConfig.url}/icon.png`,
    sameAs: Object.values(socialLinks),
  }
}

export function getProductJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: `${siteConfig.url}${product.coverImage}`,
    url: `${siteConfig.url}/products/${product.slug}`,
    category: getCategoryLabel(product.category),
    brand: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      offerCount: product.marketplaceLinks.length,
      url: product.marketplaceLinks[0]?.url,
    },
  }
}
