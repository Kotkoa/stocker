# Plan: Migrate kotkoa.com from Tumblr to Next.js on GitHub Pages

## Context

kotkoa.com — portfolio/studio website (Andrey & Olesia, Kotkoa Studio). Currently hosted on Tumblr with theme Elinor. The site is a gallery of ~20 products (watercolor illustrations, floral patterns, photo bundles, mockups) with links to marketplaces (Etsy, Adobe Stock, Shutterstock, CreativeMarket, Fiverr). The goal is to migrate to a self-hosted Next.js static site on GitHub Pages for better SEO, scalability, and design control.

**Decisions made:**
- Framework: **Next.js 16+ (App Router, static export)**  — best SEO + scalability for GitHub Pages
- Styling: **Tailwind CSS v4**
- Domain: **kotkoa.com** (custom domain on GitHub Pages)
- Visual style: **Minimalist light** — white background, lots of whitespace, focus on images
- Scope v1: **Portfolio + About only** (no blog, no contact form yet)
- State management: **Jotai** (atomic store, granular re-renders, no Context boilerplate)
- Build from scratch (no template) — only ~15 components, ~3 pages

---

## Project Structure

```
stocker/
├── .github/workflows/deploy.yml
├── public/
│   ├── images/products/{slug}/cover.jpg, preview-*.jpg
│   ├── icons/etsy.svg, adobe-stock.svg, shutterstock.svg, creative-market.svg, fiverr.svg
│   ├── CNAME                          # "kotkoa.com"
│   ├── favicon.ico
│   └── og-default.jpg
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout: fonts, metadata, Header + Footer
│   │   ├── page.tsx                   # Home: Hero + Gallery + Trust
│   │   ├── not-found.tsx
│   │   ├── about/page.tsx
│   │   ├── products/[slug]/page.tsx   # Product detail (generateStaticParams)
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/   Header, Footer, Navigation, MobileMenu, MarketplaceLinks
│   │   ├── gallery/  GalleryProvider, CategoryFilter, ProductGrid (compound: Gallery.*)
│   │   ├── home/     Hero, TrustSection
│   │   ├── product/  ProductCard (+variants), ProductDetail, ProductImageGallery, BuyLinks, ShareButtons
│   │   ├── about/    TeamSection, ContactSection
│   │   └── ui/       Button, Badge, Container, ExternalLink
│   ├── data/
│   │   ├── products.ts               # Typed product array (~20 items)
│   │   ├── categories.ts
│   │   ├── marketplaces.ts
│   │   └── site.ts                   # Site metadata constants
│   ├── store/
│   │   ├── gallery.ts                # activeCategoryAtom, filteredProductsAtom
│   │   └── ui.ts                     # mobileMenuOpenAtom, activeImageAtom
│   ├── lib/
│   │   ├── products.ts               # getProductBySlug, getProductsByCategory, etc.
│   │   └── metadata.ts               # OG/meta tag helpers
│   └── types/product.ts
├── next.config.ts                     # output: "export"
├── export-images.config.js            # next-image-export-optimizer
└── package.json
# Note: Tailwind v4 — no tailwind.config.ts/postcss.config.mjs
# Config via @theme directive in src/app/globals.css
```

## Data Model

```typescript
// src/types/product.ts
type ProductCategory = "watercolor" | "floral-pattern" | "photo-bundle" | "mockup" | "vintage-pattern"

interface Product {
  slug: string
  title: string
  description: string
  category: ProductCategory
  tags: string[]
  coverImage: string           // "/images/products/{slug}/cover.jpg"
  images: string[]
  marketplaceLinks: { marketplace: string; url: string }[]
  featured: boolean
  dateAdded: string            // ISO date
}
```

Products stored as typed array in `src/data/products.ts`. When scaling to 100+, swap to MDX/CMS — only `lib/products.ts` helpers change.

## Pages & Routing

| Route | Content |
|-------|---------|
| `/` | Hero + filterable product gallery (CategoryFilter + ProductCard grid) + TrustSection (marketplace logos) |
| `/about` | Team bio (Andrey & Olesia), studio story, contact email |
| `/products/[slug]` | Product images, description, buy links to marketplaces, share buttons |
| `/sitemap.xml` | Auto-generated |
| `/robots.txt` | Auto-generated |

## Implementation Phases

### Phase 1: Project Scaffold
1. Init Next.js 16+: `npx create-next-app@latest . --typescript --tailwind --app --src-dir`
2. Install deps: `next-image-export-optimizer jotai`
3. Configure `next.config.ts` — `output: "export"`, image loader
4. Configure Tailwind v4 via `@theme` in `src/app/globals.css` (CSS-first config, no tailwind.config.ts)
5. Create `src/data/site.ts` with metadata
6. Create root `layout.tsx` with fonts + metadata
7. Add `.github/workflows/deploy.yml`
8. Add `public/CNAME` with `kotkoa.com`

### Phase 2: Layout & UI Primitives
9. `Container`, `Button`, `Badge`, `ExternalLink` components
10. `Header` with `Navigation` (desktop) — logo + Products + About + marketplace icons
11. `MobileMenu` (hamburger, slide-out)
12. `Footer` — copyright, email, marketplace links
13. `MarketplaceLinks` — reusable row of marketplace icons

### Phase 3: Data Layer 
14. Define `types/product.ts`
15. Create `data/categories.ts`, `data/marketplaces.ts`
16. Create `data/products.ts` with 3-5 test products
17. Create `lib/products.ts` helpers

### Phase 4: Home Page
18. `Hero` — full-width, headline "Creative Design Studio", subtext, CTA
19. `ProductCard` (server component) — image + title + category badge, hover effect. Explicit variants: `ProductCard.Default`, `ProductCard.Featured`
20. Jotai store (`src/store/gallery.ts`):
    - `activeCategoryAtom` — string atom for active filter
    - `filteredProductsAtom` — derived atom, filters products by category
21. Gallery compound component (`src/components/gallery/`):
    - `CategoryFilter` — client component, `useAtom(activeCategoryAtom)`
    - `ProductGrid` — client component, `useAtomValue(filteredProductsAtom)`, renders `ProductCard`
    - Export as `Gallery = { Filter, Grid, Card }`
22. `TrustSection` — "Available on" + marketplace logos
23. Assemble Home page: `<Gallery.Filter /><Gallery.Grid />` (no Provider wrapper needed)

### Phase 5: Product Detail Page
24. `ProductImageGallery` — main image + thumbnails (client component)
25. `BuyLinks` — styled buttons per marketplace
26. `ShareButtons` — Pinterest Pin It + copy link
27. `ProductDetail` layout component
28. `/products/[slug]/page.tsx` with `generateStaticParams` + `generateMetadata` (OG per product)

### Phase 6: About Page
29. `TeamSection` — photo + bio
30. `ContactSection` — email link
31. Assemble About page

### Phase 7: SEO & Polish
32. `sitemap.ts` + `robots.ts` (both need `export const dynamic = 'force-static'` for static export)
33. JSON-LD structured data (Organization + Product schema)
34. `not-found.tsx` + `error.tsx` (global error boundary)
35. `opengraph-image.tsx` per product — use `ImageResponse` for auto-generated OG images at build time
36. Configure `next-image-export-optimizer` (verify Next.js 16 compat, fallback: pre-build sharp script)
37. Favicon set + `next/font/google` for typography (specify in layout.tsx)
38. Lighthouse audit + accessibility: focus management in MobileMenu, alt texts for all product images, keyboard nav for gallery filter
39. Google Analytics (GA4) — Property ID: `262803032`. Add gtag via `next/script strategy="lazyOnload"` in root layout (deferred, не блокирует рендер). Переиспользуем существующий property с Tumblr-сайта — данные будут продолжаться в том же потоке.

### Phase 8: Content Migration
38. Download product images from Tumblr (full resolution)
39. Place in `public/images/products/{slug}/`
40. Fill `data/products.ts` with all ~20 products + real marketplace links
41. Final review of all pages

### Phase 9: Deploy
42. Push to GitHub, enable GitHub Pages (source: GitHub Actions)
43. Configure custom domain: `CNAME` + DNS A-records
44. Verify HTTPS, OG previews, all links

## Architecture & Performance Patterns

### State: Jotai Atoms (not Context)

Jotai вместо React Context — атомарные подписки, гранулярные ре-рендеры, минимум бойлерплейта.

```tsx
// src/store/gallery.ts
import { atom } from 'jotai'

const activeCategoryAtom = atom<string>('all')

const filteredProductsAtom = atom((get) => {
  const category = get(activeCategoryAtom)
  return category === 'all'
    ? products
    : products.filter((p) => p.category === category)
})
```

**Почему Jotai, а не Context:**
- `CategoryFilter` подписан на `activeCategoryAtom` — ре-рендерится только при смене фильтра
- `ProductGrid` подписан на `filteredProductsAtom` (derived atom) — ре-рендерится только при изменении результатов
- Нет Provider wrapper, нет boilerplate context файлов
- Легко добавить новые атомы (search query, sort order) без рефакторинга
- `MobileMenu`: `atom<boolean>(false)` — изолированный ре-рендер только меню
- `ProductImageGallery`: `atom<number>(0)` — только активное изображение

```tsx
// Usage — import and use (JotaiProvider in root layout for SSR safety)
function CategoryFilter() {
  const [active, setActive] = useAtom(activeCategoryAtom)
  return <FilterPills active={active} onChange={setActive} />
}

function ProductGrid() {
  const products = useAtomValue(filteredProductsAtom)
  return <Grid>{products.map(p => <ProductCard key={p.slug} product={p} />)}</Grid>
}
```

**JotaiProvider**: wrap `{children}` in root `layout.tsx` with a thin client `JotaiProvider` component (recommended by Jotai docs for Next.js App Router to avoid shared atom state between requests in dev).

### Compound Components (kept, simplified)

Gallery still uses compound component pattern for composability, but without Context Provider:

```tsx
const Gallery = {
  Filter: CategoryFilter,     // useAtom(activeCategoryAtom)
  Grid: ProductGrid,          // useAtomValue(filteredProductsAtom)
  Card: ProductCard,          // Pure, receives props
}

// Home page — clean, flat composition
<section>
  <Gallery.Filter />
  <Gallery.Grid />
</section>
```

### Explicit Variants (no boolean props)

```tsx
<ProductCard.Featured product={p} />   // Hero-sized, wider
<ProductCard.Default product={p} />    // Standard grid card
```

### Vercel React Best Practices Applied

**CRITICAL — Bundle size:**
- No barrel file imports — import directly from source paths
- `next/dynamic` for `ProductImageGallery` (lightbox-like, not needed on initial render)
- Defer third-party scripts (Pinterest, analytics) — load after hydration via `next/script strategy="lazyOnload"`

**CRITICAL — Eliminate waterfalls:**
- Static site = no runtime waterfalls, but ensure `generateStaticParams` + `generateMetadata` don't create build-time waterfalls
- Images: use `loading="lazy"` for below-fold, `priority` for above-fold hero/first row

**HIGH — Server-side performance:**
- Minimize RSC→Client serialization: pass only primitive props (`slug`, `title`, `coverImage`) to client components, not entire `Product` objects
- Keep `ProductCard` as Server Component — it's just markup + image + link, no interactivity

**MEDIUM — Re-render optimization:**
- Jotai derived atoms = subscribe to `filteredProducts`, not raw category string in Grid
- `useAtomValue` (read-only) where component doesn't need setter — avoids unnecessary re-renders
- Hoist static JSX (TrustSection marketplace logos, Footer) outside of re-rendering components

### Client vs Server Component Split

- **Server Components** (default): `Header`, `Footer`, `Navigation`, `Hero`, `TrustSection`, `ProductDetail`, `BuyLinks`, `ShareButtons`, `TeamSection`, `ContactSection`, `ProductCard`, all `ui/` primitives, all page components
- **Client Components** (`"use client"`, minimal boundary):
  - `CategoryFilter` — reads/writes `activeCategoryAtom`
  - `ProductGrid` — reads `filteredProductsAtom`, renders `ProductCard` (also becomes client since imported in client module)
  - `MobileMenu` — toggle atom
  - `ProductImageGallery` — active image atom (dynamic import, ssr: false)
- **RSC boundary fix**: `ProductCard` inside client `ProductGrid` = auto-client. This is fine — it's a small component (image + title + link). Keep it lightweight, pass only primitives.
- **Alternative**: pass `<ProductCard>` elements via `children` from server parent to keep them server-rendered. Evaluate during implementation — for ~20 cards the performance difference is negligible.

### React 19+ APIs
- `ref` as regular prop (no `forwardRef`)
- `children` for composition, not `renderX` props

### Other Notes
- **Images**: `next-image-export-optimizer` generates WebP + responsive sizes at build time
- **No basePath needed** with custom domain kotkoa.com
- **Scalability**: `src/data/` + `src/lib/` abstraction allows swapping to CMS later — components unchanged
- **No barrel files**: import components directly, e.g. `import { Hero } from '@/components/home/Hero'` not from `index.ts`

## Workflow: Adding Products (Admin)

Как добавлять новые работы в портфолио:

**Вариант 1 (v1, текущий план): Редактирование TypeScript файла**
1. Добавить изображения в `public/images/products/{slug}/`
2. Добавить запись в `src/data/products.ts` (typed, автодополнение в IDE)
3. `git push` → GitHub Actions автоматически пересобирает и деплоит

Плюсы: просто, нет внешних зависимостей, type-safe.
Минусы: нужен git + IDE, пересборка при каждом добавлении.

**Вариант 2 (будущее): MDX файлы**
Каждый продукт — отдельный `.mdx` файл в `content/products/`. Проще для не-разработчика, поддерживает rich text. Миграция потребует `@next/mdx` или `contentlayer`.

**Вариант 3 (будущее): Headless CMS**
Подключить Sanity/Notion/Contentlayer как источник данных. Добавление через web-интерфейс CMS. Нужен webhook для trigger rebuild на GitHub Actions.

**Вариант 4 (будущее): GitHub Web UI**
Редактировать `products.ts` прямо на github.com → commit → auto-deploy. Работает уже в v1 без доработок.

> Для v1 используем **Вариант 1** — TypeScript файл. Структура `src/lib/products.ts` абстрагирует доступ к данным, поэтому переход на варианты 2-3 позже — это изменение только в data layer, без переписывания компонентов.

## Deploy Workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
        env:
          NEXT_PUBLIC_SITE_URL: https://kotkoa.com
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

## Verification

1. `npm run build` — static export succeeds, `out/` folder generated
2. `npx serve out` — preview locally, check all pages render
3. Lighthouse audit: target 90+ on Performance, SEO, Accessibility, Best Practices
4. Check OG tags with opengraph.xyz or social media debuggers
5. Test on mobile (Chrome DevTools responsive mode)
6. Verify all marketplace links work
7. After deploy: verify kotkoa.com loads, HTTPS works, sitemap accessible
