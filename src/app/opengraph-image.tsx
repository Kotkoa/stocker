import { ImageResponse } from "next/og"

export const dynamic = "force-static"
export const alt = "Kotkoa Studio"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
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
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            color: "#1a1a1a",
          }}
        >
          Kotkoa Studio
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#6b6b6b",
            marginTop: 20,
          }}
        >
          Creative Design Studio
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#8c7a6b",
            marginTop: 40,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Illustrations &bull; Patterns &bull; Photos &bull; Mockups
        </div>
      </div>
    ),
    { ...size },
  )
}
