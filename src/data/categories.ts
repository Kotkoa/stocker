import type { ProductCategory } from "@/types/product"

export interface Category {
  value: ProductCategory
  label: string
}

export const categories: Category[] = [
  { value: "watercolor", label: "Watercolor" },
  { value: "floral-pattern", label: "Floral Patterns" },
  { value: "photo-bundle", label: "Photo Bundles" },
  { value: "mockup", label: "Mockups" },
  { value: "vintage-pattern", label: "Vintage Patterns" },
]
