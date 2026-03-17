# Kotkoa Studio — Portfolio Website

A modern, statically exported portfolio website for a creative design studio, built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**. Deployed to GitHub Pages via CI/CD.

**Live:** [kotkoa.com](https://kotkoa.com)

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)
![Deploy](https://img.shields.io/badge/Deploy-GitHub_Pages-222?logo=github)

## Architecture

```
src/
├── app/                    # App Router pages + metadata + OG images
│   ├── products/[slug]/    # Dynamic product pages (SSG)
│   ├── about/              # About page
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── opengraph-image.tsx # Dynamic OG image generation
├── components/
│   ├── gallery/            # Compound component: Gallery.Filter + Gallery.Grid
│   ├── product/            # ProductCard variants, image gallery, buy links
│   ├── layout/             # Header, Footer, MobileMenu, Navigation
│   ├── ui/                 # Primitives: Button, Badge, Container
│   └── home/               # Hero, TrustSection
├── data/                   # Static data layer (products, categories, site config)
├── lib/                    # Data access helpers, Schema.org metadata
├── store/                  # Jotai atoms (gallery filtering, UI state)
└── types/                  # TypeScript interfaces
```

## Key Technical Decisions

### Static Export with Full SEO

The site uses `output: "export"` for zero-cost GitHub Pages hosting while maintaining:
- Dynamic `generateMetadata()` per product page
- Auto-generated `sitemap.xml` and `robots.txt`
- Dynamic Open Graph images rendered at build time via `opengraph-image.tsx`
- Schema.org JSON-LD (Organization + Product)

### React 19 + React Compiler

Enabled `babel-plugin-react-compiler` for automatic memoization — no manual `useMemo`/`useCallback`. Uses React 19 features: `ref` as a regular prop (no `forwardRef`).

### Tailwind CSS v4 — CSS-First Configuration

No `tailwind.config.ts`. The entire theme is defined in CSS via `@theme inline`:

```css
@theme inline {
  --color-accent: #8c7a6b;
  --color-muted: #6b6b6b;
  --font-sans: var(--font-inter);
}
```

### Jotai for Client State

Minimal state management with derived atoms for computed state:

```typescript
const activeCategoryAtom = atom<string>("all")

const filteredProductsAtom = atom((get) => {
  const category = get(activeCategoryAtom)
  return category === "all"
    ? products
    : products.filter((p) => p.category === category)
})
```

Only 3 client components in the entire app: category filter, product grid, and mobile menu.

### Compound Components

Avoids boolean prop proliferation with explicit variants:

```tsx
<Gallery.Filter />
<Gallery.Grid />

<ProductCard.Featured product={product} />
<ProductCard.Default product={product} />
```

### Data Abstraction Layer

Product data lives in `src/data/products.ts`, accessed through `src/lib/products.ts` helpers. Components never import data directly — enabling a future CMS migration without touching UI code.

## Performance

- **Server Components by default** — `"use client"` only where interactivity is required
- **Static generation** via `generateStaticParams()` for all product pages
- **Image optimization** with `next-image-export-optimizer` (WebP, responsive sizes, blur placeholders)
- **Lazy-loaded analytics** via `next/script strategy="lazyOnload"`
- **Minimal bundle** — only 2 runtime dependencies: `jotai` + `next-image-export-optimizer`

## CI/CD

Push to `main` triggers a GitHub Actions workflow:

```
checkout → npm ci → next build (static export) → deploy to GitHub Pages
```

## Getting Started

```bash
npm ci
npm run dev       # Dev server with Turbopack
npm run build     # Static export to out/
npx serve out     # Preview production build
```

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, static export) |
| UI | React 19, Server Components |
| Styling | Tailwind CSS v4 (CSS-first config) |
| State | Jotai atoms + derived atoms |
| Language | TypeScript 5 (strict mode) |
| Images | next-image-export-optimizer |
| Optimization | React Compiler (auto-memoization) |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |
| Domain | Custom domain via GitHub Pages |
