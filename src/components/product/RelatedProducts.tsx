import { getRelatedProducts } from "@/lib/products"
import { ProductCard } from "@/components/product/ProductCard"

type RelatedProductsProps = {
  slug: string
}

export function RelatedProducts({ slug }: RelatedProductsProps) {
  const related = getRelatedProducts(slug, 4)

  if (related.length === 0) return null

  return (
    <section className="mt-16 border-t border-border pt-16">
      <h2 className="text-xl font-semibold">You may also like</h2>
      <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {related.map((product) => (
          <ProductCard.Default
            key={product.slug}
            slug={product.slug}
            title={product.title}
            coverImage={product.coverImage}
            category={product.category}
          />
        ))}
      </div>
    </section>
  )
}
