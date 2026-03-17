import { atom } from "jotai"
import { products } from "@/data/products"

export const activeCategoryAtom = atom<string>("all")

export const filteredProductsAtom = atom((get) => {
  const category = get(activeCategoryAtom)
  return category === "all"
    ? products
    : products.filter((p) => p.category === category)
})
