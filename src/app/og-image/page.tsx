"use client";

import { useEffect } from "react";

export default function OgImagePage() {
  useEffect(() => {
    document.querySelector("header")?.remove();
    document.querySelector("footer")?.remove();
    const main = document.querySelector("main");
    if (main) main.style.flex = "none";
    document.body.style.overflow = "hidden";
    document.body.style.margin = "0";
    document.body.style.background = "none";
    document.body.style.backgroundImage = "none";
  }, []);

  return (
    <div
      style={{
        width: 1200,
        height: 630,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        background: "#FAF9F6",
        backgroundImage: `
          radial-gradient(ellipse 80% 60% at 15% 85%, rgba(192,142,132,0.18) 0%, transparent 60%),
          radial-gradient(ellipse 70% 50% at 85% 20%, rgba(181,196,177,0.15) 0%, transparent 55%),
          radial-gradient(ellipse 50% 40% at 50% 50%, rgba(232,223,209,0.25) 0%, transparent 50%)
        `,
        fontFamily: "Georgia, 'Times New Roman', serif",
        color: "#3D3833",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          border: "1px solid rgba(61,56,51,0.06)",
          margin: 24,
          borderRadius: 4,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 40,
          right: 50,
          display: "flex",
          gap: 14,
          opacity: 0.12,
        }}
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#3D3833",
            }}
          />
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "0 80px",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontSize: 13,
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            color: "#8C7E74",
            margin: 0,
            marginBottom: 28,
          }}
        >
          Creative Design Studio
        </p>

        <h1
          style={{
            fontSize: 72,
            fontWeight: 500,
            lineHeight: 1.08,
            margin: 0,
            letterSpacing: "-0.01em",
          }}
        >
          <span style={{ display: "block" }}>Your creative projects</span>
          <span
            style={{
              display: "block",
              fontStyle: "italic",
              color: "#C08E84",
            }}
          >
            deserve things
          </span>
          <span style={{ display: "block" }}>that feel real</span>
        </h1>

        <p
          style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: "#8C7E74",
            maxWidth: 560,
            margin: 0,
            marginTop: 28,
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
          }}
        >
          Watercolor illustrations, floral patterns, photo bundles & mockups
          — hand-painted for designers and creators.
        </p>

        <div
          style={{
            display: "flex",
            gap: 32,
            marginTop: 36,
            fontSize: 13,
            color: "#AFA49B",
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            alignItems: "center",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            25,000+ assets
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            Hand-painted
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            5 marketplaces
          </span>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 36,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          fontSize: 14,
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          color: "#AFA49B",
          letterSpacing: "0.04em",
        }}
      >
        kotkoa.com
      </div>
    </div>
  );
}
