import { products } from "@/data/products"
import type { Product, ProductCategory } from "@/types/product"

export function getAllProducts(): Product[] {
  return products
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getAllSlugs(): string[] {
  return products.map((p) => p.slug)
}

export function getRelatedProducts(slug: string, limit = 4): Product[] {
  const current = products.find((p) => p.slug === slug)
  if (!current) return []

  const sameCategory = products.filter(
    (p) => p.slug !== slug && p.category === current.category,
  )

  if (sameCategory.length >= limit) return sameCategory.slice(0, limit)

  const others = products.filter(
    (p) => p.slug !== slug && p.category !== current.category,
  )
  return [...sameCategory, ...others].slice(0, limit)
}
