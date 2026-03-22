"use client"

import { useAtomValue } from "jotai"
import { filteredProductsAtom } from "@/store/gallery"
import { ProductCard } from "@/components/product/ProductCard"

export function ProductGrid() {
  const products = useAtomValue(filteredProductsAtom)

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) =>
        product.featured ? (
          <ProductCard.Featured
            key={product.slug}
            slug={product.slug}
            title={product.title}
            coverImage={product.coverImage}
            category={product.category}
          />
        ) : (
          <ProductCard.Default
            key={product.slug}
            slug={product.slug}
            title={product.title}
            coverImage={product.coverImage}
            category={product.category}
          />
        )
      )}
    </div>
  )
}
