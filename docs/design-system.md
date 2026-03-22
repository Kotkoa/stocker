# Kotkoa Studio — NORD Design System

Design system specification for kotkoa.com, adapting the Scandinavian NORD style to the existing portfolio site structure.

## Color Tokens

```css
@theme inline {
  --color-background: #FAF9F6;    /* warm-white */
  --color-foreground: #3D3833;    /* charcoal */
  --color-muted: #8C7E74;
  --color-border: rgba(61,56,51,0.1);
  --color-accent: #C08E84;        /* rose-deep */
  --color-bg-alt: #F5F0EB;        /* warm-white-2 */
  --color-birch: #E8DFD1;
  --color-birch-deep: #D6C9B5;
  --color-sage: #B5C4B1;
  --color-sage-deep: #8FAD8A;
  --color-rose: #D4A9A0;
  --color-muted-lt: #AFA49B;
  --color-charcoal-soft: #5A5248;
}
```

### Usage

| Purpose | Token |
|---|---|
| Page background | `background` |
| Alternate section bg | `bg-alt` |
| Primary text | `foreground` |
| Secondary text | `muted` |
| Tertiary text | `muted-lt` |
| Borders, dividers | `border` |
| Accent (italic headlines, links) | `accent` (rose-deep) |
| Active filter, category pill bg | `birch` |
| Card hover border | `birch-deep` |
| Featured highlights | `sage`, `sage-deep` |
| Dark sections (footer) | `foreground` as bg, `background` as text |

## Typography

| Role | Font | Size | Weight | Style |
|---|---|---|---|---|
| Hero headline | Lora | `clamp(2.8rem,7.5vw,6rem)` | 500 | Line 2 italic in accent |
| Section title | Lora | `clamp(2rem,4.5vw,3.2rem)` | 500 | `em` italic in accent |
| Product name | Lora | 20px | 500 | normal |
| Product detail title | Lora | 2rem | 500 | normal |
| Eyebrow/kicker | Nunito Sans | 12px | 600 | uppercase, 0.12em tracking |
| Body copy | Nunito Sans | 16px | 400 | lh 1.8 |
| Nav links | Nunito Sans | 13px | 400 | 0.02em tracking |
| Buttons | Nunito Sans | 14px | 600 | 0.02em tracking |
| Badge/pill | Nunito Sans | 11px | 600 | uppercase |
| Footer titles | Nunito Sans | 11px | 600 | uppercase |
| Footer links | Nunito Sans | 13px | 400 | — |

## Layout

| Token | Value |
|---|---|
| `--container-max-width` | `1100px` |
| Container padding | `clamp(20px, 4vw, 40px)` |
| Nav height | `68px` |
| Card border-radius | `14px` |
| Section padding | `clamp(80px, 10vw, 130px)` |
| Grid breakpoints | 3→2 col at 900px, 2→1 col at 620px |

## Page Mapping

### Home (`/`)

**Hero**: Centered, min-height 100vh. Stack: eyebrow kicker → 3-line Lora headline (line 2 italic accent) → deck text → CTA button (btn-primary) → trust strip (marketplace icons + text). gentleFadeUp animation staggered.

**Gallery**: Section with kicker + title. 3-col product card grid. Category filter as pill buttons (birch bg active, ghost inactive).

**Product Cards**: warm-white bg, 1px border, 14px radius. Image area 4:3. Body: category pill (birch bg) + Lora name + Nunito description. Hover: lift 4px, shadow `0 12px 40px rgba(61,56,51,0.08)`, border birch-deep.

### About (`/about`)

**Hero**: 2-col grid (image + text). Text: kicker + Lora title (em accent) + deck.

**Story**: bg-alt section. 2-col grid with shared borders. Each cell: Lora italic numeral (38px, birch-deep) + Lora title (19px) + Nunito body (15px, muted). Hover: bg warm-white.

**CTA**: bg-alt section, centered. Lora headline + CTA button.

### Product Detail (`/products/[slug]`)

Back link: muted, arrow. Title: Lora 2rem. Badge: birch pill. Description: Nunito, muted. Buy links: btn-primary + btn-outline. Image gallery: 14px radius. Related products: card grid with section header.

### Header

Fixed 68px. Transparent at top → blur on scroll (`backdrop-filter: blur(16px) saturate(160%)`, bg `rgba(250,249,246,0.9)`, hairline border, shadow). Logo: "kotkoa" + nav + marketplace icons.

### Footer

Charcoal bg. Brand column: logo + Lora italic tagline + address. Link columns: Products, About, Social. Bottom bar: copyright + legal. Colors: muted-lt titles, `rgba(250,249,246,0.55)` links.

## Animations

| Name | Duration | Easing | Effect |
|---|---|---|---|
| `gentleFadeUp` | 1s | ease-settle | opacity 0 + Y(22px) → 1 + Y(0) |
| `warmFadeIn` | 1s | ease-warm | opacity 0 → 1 |
| Scroll reveal | 0.9s | ease-warm | opacity + Y(28px) → visible, threshold 0.15 |
| Card hover | 0.35s | ease-warm | lift -4px + shadow |
| Nav scroll | 0.3s | ease | transparent → blur + border |

### Easings

```css
--ease-settle: cubic-bezier(0.34, 1.02, 0.64, 1);
--ease-warm: cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

## Texture

Body linen texture via inline SVG `background-image`:
```
feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4"
```
At `opacity: 0.025` — imperceptible grain that adds warmth.

## Button Variants

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| primary | charcoal | warm-white | charcoal | charcoal-soft, lift, shadow |
| ghost | transparent | charcoal | border | birch bg, birch-deep border |
| outline | transparent | charcoal | birch-deep | birch bg, lift, shadow |
