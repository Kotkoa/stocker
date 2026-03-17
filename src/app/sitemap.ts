import type { MetadataRoute } from "next"
import { siteConfig } from "@/data/site"
import { getAllSlugs } from "@/lib/products"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const productUrls = getAllSlugs().map((slug) => ({
    url: `${siteConfig.url}/products/${slug}`,
    lastModified: new Date(),
  }))

  return [
    { url: siteConfig.url, lastModified: new Date() },
    { url: `${siteConfig.url}/about`, lastModified: new Date() },
    ...productUrls,
  ]
}
