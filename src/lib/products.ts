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
