import { atom } from "jotai"
import { getAllProducts } from "@/lib/products"

export const activeCategoryAtom = atom<string>("all")

export const filteredProductsAtom = atom((get) => {
  const category = get(activeCategoryAtom)
  const products = getAllProducts()
  return category === "all"
    ? products
    : products.filter((p) => p.category === category)
})
