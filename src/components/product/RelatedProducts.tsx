import { getRelatedProducts } from "@/lib/products"
import { ProductCard } from "@/components/product/ProductCard"

type RelatedProductsProps = {
  slug: string
}

export function RelatedProducts({ slug }: RelatedProductsProps) {
  const related = getRelatedProducts(slug, 4)

  if (related.length === 0) return null

  return (
    <section className="mt-[clamp(60px,8vw,100px)] border-t border-border pt-[clamp(60px,8vw,100px)]">
      <p className="mb-4.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
        Related
      </p>
      <h2 className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] mb-10">
        You may also like
      </h2>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
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
