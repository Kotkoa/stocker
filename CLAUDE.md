# Kotkoa Studio — Portfolio Website

## Project Overview

Creative studio portfolio for kotkoa.com. Migrating from Tumblr to Next.js 16+ static site on GitHub Pages.

## Tech Stack

- **Framework**: Next.js 16+ (App Router, `output: "export"`)
- **Styling**: Tailwind CSS v4 (CSS-first config via `@theme` in `globals.css`, NO `tailwind.config.ts`)
- **State**: Jotai atoms (NOT React Context)
- **Images**: next-image-export-optimizer
- **Deploy**: GitHub Pages via GitHub Actions
- **Domain**: kotkoa.com

## Architecture Rules

### Component Patterns
- Server Components by default. Only use `"use client"` for interactive components (gallery filter, mobile menu, image gallery)
- No boolean prop proliferation — use explicit component variants (`ProductCard.Default`, `ProductCard.Featured`)
- Compound components for Gallery: `Gallery.Filter`, `Gallery.Grid`, `Gallery.Card`
- Children over render props for composition
- React 19+: `ref` as regular prop (no `forwardRef`), `use()` instead of `useContext()`

### Imports & Bundle
- NO barrel file imports — import directly from source: `import { Hero } from '@/components/home/Hero'`
- `next/dynamic` for heavy components not needed on initial render
- Third-party scripts via `next/script strategy="lazyOnload"`
- Pass only primitives across RSC→Client boundary, never full objects

### State Management (Jotai)
- Atoms in `src/store/` — one file per domain (`gallery.ts`, `ui.ts`)
- Use derived atoms for computed state (`filteredProductsAtom`)
- `useAtomValue` (read-only) where setter not needed
- JotaiProvider wraps `{children}` in root layout

### Static Export
- `sitemap.ts` and `robots.ts` require `export const dynamic = 'force-static'`
- Product pages use `generateStaticParams()` + `generateMetadata()`
- No server-side APIs, no middleware, no runtime features

### Data Layer
- Product data in `src/data/products.ts` (typed array)
- Access via helpers in `src/lib/products.ts` (abstraction for future CMS migration)
- Categories in `src/data/categories.ts`
- Site metadata in `src/data/site.ts`

## Key Files

- `src/app/layout.tsx` — root layout, fonts, metadata, JotaiProvider, Header + Footer
- `src/app/page.tsx` — home page: Hero + Gallery + TrustSection
- `src/app/products/[slug]/page.tsx` — product detail with generateStaticParams
- `src/data/products.ts` — all product data (edit this to add new products)
- `src/store/gallery.ts` — activeCategoryAtom, filteredProductsAtom
- `.github/workflows/deploy.yml` — CI/CD to GitHub Pages

## Adding Products

1. Add images to `public/images/products/{slug}/`
2. Add entry to `src/data/products.ts`
3. `git push` → auto-deploy via GitHub Actions

## Commands

- `npm run dev` — dev server (Turbopack)
- `npm run build` — static export to `out/`
- `npx serve out` — preview production build locally
