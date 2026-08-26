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
- Server Components by default. Use `"use client"` only for browser interactivity, event analytics, or error UI (for example filters, menus, image galleries, and tracked external links).
- No boolean prop proliferation — use explicit component variants (`ProductCard.Default`, `ProductCard.Featured`)
- Keep the Gallery compound API to `Gallery.Filter` and `Gallery.Grid`.
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
- Product records stay in `src/data/products.ts`; access them through helpers in `src/lib/products.ts`.
- Small immutable presentation/config data (site metadata, categories, marketplaces, FAQ, about copy) may be imported directly from `src/data/`.
- Every product needs a unique slug, existing `coverImage` and `images` assets under `public/`, a valid category, and at least one marketplace link.
- Categories in `src/data/categories.ts`; site metadata in `src/data/site.ts`.

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

## Workspace Boundaries

- This directory is the **`stocker`** Git repository: the Next.js portfolio site. Run site Git commands here.
- `shopify/` is a deliberately local, nested Git repository for the Kotkoa shop knowledge base. It remains visible in this workspace but is ignored by the outer repository; run its Git commands from `shopify/`. Its instructions are `shopify/CLAUDE.md` and `shopify/AGENTS.md`.

## Development Workflow

1. Install deterministically with `npm ci`; CI uses npm and `package-lock.json`.
2. Use `npm run dev` for local development.
3. Before submitting a site change, run `npm run lint` and `npm run build`.
4. Validate rendered static output with `npx serve out`; `output: "export"` means `npm start` is not a production preview command.
5. Keep credentials and machine-local Claude/analytics configuration out of Git. Build-time public configuration uses `NEXT_PUBLIC_*` variables only.
