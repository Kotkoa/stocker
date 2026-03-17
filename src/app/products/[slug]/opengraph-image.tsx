import { ImageResponse } from "next/og"
import { getAllProducts } from "@/lib/products"
import { categories } from "@/data/categories"

export const dynamic = "force-static"
export const alt = "Kotkoa Studio Product"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }))
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getAllProducts().find((p) => p.slug === slug)

  if (!product) {
    return new ImageResponse(
      (
        <div
          style={{
            background: "#ffffff",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "sans-serif",
          }}
        >
          <div style={{ fontSize: 48, color: "#1a1a1a" }}>Kotkoa Studio</div>
        </div>
      ),
      { ...size },
    )
  }

  const categoryLabel =
    categories.find((c) => c.value === product.category)?.label ??
    product.category

  const shortDescription =
    product.description.length > 120
      ? `${product.description.slice(0, 120)}...`
      : product.description

  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 20,
            color: "#8c7a6b",
            textTransform: "uppercase",
            letterSpacing: 4,
          }}
        >
          {categoryLabel}
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 600,
            color: "#1a1a1a",
            marginTop: 20,
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          {product.title}
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#6b6b6b",
            marginTop: 30,
            textAlign: "center",
            maxWidth: 800,
          }}
        >
          {shortDescription}
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#8c7a6b",
            marginTop: 40,
          }}
        >
          kotkoa.com
        </div>
      </div>
    ),
    { ...size },
  )
}
