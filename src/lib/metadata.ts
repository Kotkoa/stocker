import { siteConfig, socialLinks } from "@/data/site"
import type { Product } from "@/types/product"
import { getCategoryLabel } from "@/data/categories"
import { founders } from "@/data/about"
import { faqItems } from "@/data/faq"

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

export function getBreadcrumbJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${siteConfig.url}/#gallery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.title,
        item: `${siteConfig.url}/products/${product.slug}`,
      },
    ],
  }
}

export function getPersonJsonLd() {
  return founders.map((founder) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: founder.name,
    jobTitle: founder.jobTitle,
    image: `${siteConfig.url}/images/team.jpg`,
    url: `${siteConfig.url}/about`,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }))
}

export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  }
}
