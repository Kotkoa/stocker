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
    product.description.length > 140
      ? `${product.description.slice(0, 140)}...`
      : product.description

  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(140,122,107,0.1) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background:
              "linear-gradient(90deg, #8c7a6b 0%, #b8a898 50%, #8c7a6b 100%)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "56px 80px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 2,
                  background: "#8c7a6b",
                  display: "flex",
                }}
              />
              <div
                style={{
                  fontSize: 15,
                  color: "#8c7a6b",
                  textTransform: "uppercase",
                  letterSpacing: 5,
                  fontFamily: "sans-serif",
                }}
              >
                {categoryLabel}
              </div>
            </div>

            <div
              style={{
                fontSize: 52,
                fontWeight: 700,
                color: "#1a1a1a",
                marginTop: 28,
                fontFamily: "sans-serif",
                lineHeight: 1.15,
                letterSpacing: -0.5,
                maxWidth: 900,
              }}
            >
              {product.title}
            </div>

            <div
              style={{
                fontSize: 22,
                color: "#6b6b6b",
                marginTop: 28,
                fontFamily: "sans-serif",
                lineHeight: 1.5,
                maxWidth: 800,
              }}
            >
              {shortDescription}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "#8c7a6b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  fontSize: 14,
                  fontWeight: 700,
                  fontFamily: "sans-serif",
                }}
              >
                K
              </div>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#1a1a1a",
                  fontFamily: "sans-serif",
                }}
              >
                Kotkoa Studio
              </div>
            </div>

            <div
              style={{
                fontSize: 14,
                color: "#b8a898",
                letterSpacing: 3,
                fontFamily: "sans-serif",
              }}
            >
              kotkoa.com
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
