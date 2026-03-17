import { siteConfig } from "@/data/site";
import type { Product } from "@/types/product";

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    logo: `${siteConfig.url}/og-default.jpg`,
  };
}

export function getProductJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: `${siteConfig.url}${product.coverImage}`,
    url: `${siteConfig.url}/products/${product.slug}`,
    brand: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}
