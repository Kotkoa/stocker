import { ImageResponse } from "next/og"

export const dynamic = "force-static"
export const alt =
  "Kotkoa Studio — Watercolor illustrations, floral patterns, photo bundles & mockups"
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
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(140,122,107,0.12) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 350,
            height: 350,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(140,122,107,0.08) 0%, transparent 70%)",
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
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            padding: "60px 80px",
          }}
        >
          <div
            style={{
              fontSize: 16,
              color: "#8c7a6b",
              textTransform: "uppercase",
              letterSpacing: 8,
              fontFamily: "sans-serif",
            }}
          >
            Creative Design Studio
          </div>

          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#1a1a1a",
              marginTop: 24,
              fontFamily: "sans-serif",
              letterSpacing: -1,
            }}
          >
            Kotkoa Studio
          </div>

          <div
            style={{
              width: 80,
              height: 2,
              background: "#8c7a6b",
              marginTop: 32,
              display: "flex",
            }}
          />

          <div
            style={{
              fontSize: 22,
              color: "#6b6b6b",
              marginTop: 32,
              textAlign: "center",
              fontFamily: "sans-serif",
              lineHeight: 1.6,
              maxWidth: 700,
            }}
          >
            Watercolor illustrations, floral patterns, photo bundles & mockups
            for digital and print projects
          </div>

          <div
            style={{
              display: "flex",
              gap: 32,
              marginTop: 48,
              alignItems: "center",
            }}
          >
            {["Watercolor", "Patterns", "Photos", "Mockups"].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#8c7a6b",
                    display: "flex",
                  }}
                />
                <div
                  style={{
                    fontSize: 16,
                    color: "#8c7a6b",
                    textTransform: "uppercase",
                    letterSpacing: 3,
                    fontFamily: "sans-serif",
                  }}
                >
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: 32,
          }}
        >
          <div
            style={{
              fontSize: 15,
              color: "#b8a898",
              letterSpacing: 4,
              fontFamily: "sans-serif",
            }}
          >
            kotkoa.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
