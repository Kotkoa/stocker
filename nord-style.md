Design a **Scandinavian-style single-page landing page** for a premium home goods subscription box. The entire visual identity is rooted in natural material references — warm white linen, pale birch wood, soft sage green, and dusted rose — with the charcoal of Nordic timber as the anchor dark. Every design decision follows the principle of lagom: just the right amount.

**Colour System:**
Twelve tokens from the natural materials palette: `--c-warm-white: #FAF9F6`, `--c-warm-white-2: #F5F0EB`, `--c-birch: #E8DFD1`, `--c-birch-deep: #D6C9B5`, `--c-sage: #B5C4B1`, `--c-sage-deep: #8FAD8A`, `--c-rose: #D4A9A0`, `--c-rose-deep: #C08E84`, `--c-charcoal: #3D3833`, `--c-charcoal-soft: #5A5248`, `--c-muted: #8C7E74`, `--c-muted-lt: #AFA49B`. Rules/dividers use `rgba(61,56,51,0.1)` and `rgba(61,56,51,0.07)`. Atmospheric blobs use rgba variants of sage, rose, and birch.

**Texture:**
The body carries a subtle linen texture — an inline SVG `background-image` using `<feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4">` at `opacity: 0.025`. This should not be visible as grain but should add perceptible warmth to the background.

**Typography:**
Two fonts only. Lora (serif, Google Fonts — `ital,wght@0,400;0,500;1,400;1,500`) handles all headlines, blockquotes, testimonials, product names, prices, and display text. Nunito Sans (humanist sans, Google Fonts — variable `opsz,wght 6..12`) handles all UI elements: nav, kickers, body copy, buttons, footer. Section titles use Lora `clamp(2rem,4.5vw,3.2rem)`, `500` weight with italic `em` children in `--c-rose-deep`. Hero headline uses Lora `clamp(2.8rem,7.5vw,6rem)` in three stacked lines — the middle line italic in rose-deep. No third typeface.

**Layout:**
Max content width `1100px`, container padding `clamp(20px,4vw,40px)`, nav height `68px`, standard `border-radius: 14px` for all cards. Section vertical padding `clamp(80px,10vw,130px)`. Products, story steps, testimonials, and pricing use grid layouts that collapse from 3-col → 2-col → 1-col at breakpoints 900px and 620px.

**Botanical SVG Ornament System:**
The same leaf teardrop shape appears at multiple scales throughout the page (hero: 120px, band: 48px, CTA: 80px, plan cards: 24px, kicker icons: 10px, logo: 16px). Each is an inline SVG with `fill`, `stroke`, and inner vein paths drawn in sage, rose, and birch-deep at varying opacities. These ornaments animate via `leafGrow` (scale 0.85 + rotate -8deg → scale 1 + rotate 0deg, 1s ease-settle) on page load.

**Hero Composition:**
Centered layout, full viewport height. Three absolutely-positioned blobs (sage, rose, birch) with `filter: blur(80px)` create a warm atmospheric glow. Hero content stacks: 120px botanical ornament → eyebrow label → 3-line Lora headline → expanding divider with leaf center SVG → deck → 2 CTA buttons → trust strip with 3 icon+text items.

**Product Cards:**
3-column grid. Each card has a `4:3` visual area showing an abstract shape SVG (leaf/curve/circle/arc) whose fill and stroke come from a per-card `--card-accent` CSS custom property. On hover: shape scales `1.06` and rotates `2deg` (0.6s ease-settle), card lifts `4px`, shadow `0 12px 40px rgba(61,56,51,0.08)`, border deepens to birch-deep. Card body: italic Lora product ID, category pill (birch bg, uppercase, 11px), Lora product name, body text, inline arrow link with expanding gap on hover.

**Story Steps:**
2-column border-grid (cells share borders via `margin: -1px 0 0 -1px`). Each cell has a large italic Lora numeral in birch-deep, a Lora title, and Nunito Sans body text. Hover: background shifts to warm-white-2, inset shadow highlights border. Followed by a birch-background aside card (quote + signature in Lora italic, circular sage ornament).

**Plan Cards:**
3-column grid on a warm-white-2 section. Standard cards: white background, hairline border. Featured (center) card: sage green border, subtle sage gradient background start, shadow. Badge: sage-deep pill at `top: -12px`. Price in Lora `3rem`. Feature checkmarks: circle with sage-deep stroke (featured) or muted stroke (standard).

**Animations:**
- `gentleFadeUp` (1s, ease-settle): opacity 0 + translateY(22px) → opacity 1 + translateY(0) — hero elements staggered 0.3s to 1.5s
- `warmFadeIn` (1s, ease-warm): opacity 0 → 1
- `leafGrow` (1s, ease-settle): scale(0.85) rotate(-8deg) opacity-0 → scale(1) rotate(0deg) opacity-1 — botanical ornaments
- `ruleDraw` (0.9s, ease-warm): scaleX(0) → scaleX(1) — hero divider lines, one from left, one from right
- `.reveal` scroll reveal: `opacity 0.9s + transform 0.9s` (ease-warm, translateY 28px → 0), threshold 0.15; stagger delays 0.1s–0.5s via modifier classes
- Counter: 1600ms cubic ease-out, triggered at threshold 0.5
- Easings: `--ease-settle: cubic-bezier(0.34, 1.02, 0.64, 1)` (settle overshoot), `--ease-warm: cubic-bezier(0.25, 0.46, 0.45, 0.94)` (natural deceleration)

**Navigation:**
Fixed `68px`. Transparent at top → `rgba(250,249,246,0.9)` + `backdrop-filter: blur(16px) saturate(160%)` + hairline border + subtle shadow on scroll past 48px. Logo: "NORD" uppercase + 16px sage leaf SVG that rotates 10deg + scales 1.1 on hover. Nav CTA: birch background pill. Language switcher: active locale on birch background.

**Section Header Pattern:**
Reusable header block used across all content sections. Kicker: Nunito Sans `12px`, `font-weight: 600`, `letter-spacing: 0.12em`, `text-transform: uppercase`, color `--c-muted`, `margin-bottom: 18px`, inline-flex with `gap: 8px` and small decorative icon. Title: Lora `clamp(2rem,4.5vw,3.2rem)`, `font-weight: 500`, `line-height: 1.2`, color `--c-charcoal`, `margin-bottom: 20px`; italic `em` children in `--c-rose-deep` with `font-weight: 400`. Deck: Nunito Sans `1rem`, color `--c-muted`, `line-height: 1.8`, `max-width: 520px`. Header block max-width `580px`, `margin-bottom: clamp(48px,6vw,72px)`.

**Button System:**
Base `.btn`: `display: inline-flex`, `align-items: center`, `gap: 8px`, `padding: 14px 26px`, `border-radius: 999px`, `font-size: 14px`, `font-weight: 600`, `letter-spacing: 0.02em`, `border: 1.5px solid transparent`, transition on background/color/border/transform/shadow `0.35s var(--ease-warm)`. Variants:
- `.btn-primary`: `background: var(--c-charcoal)`, `color: var(--c-warm-white)`, `border-color: var(--c-charcoal)`. Hover: `background: var(--c-charcoal-soft)`, `transform: translateY(-2px)`, `box-shadow: 0 8px 24px rgba(61,56,51,0.18)`.
- `.btn-ghost`: `background: transparent`, `color: var(--c-charcoal)`, `border-color: var(--c-line)`. Hover: `background: var(--c-birch)`, `border-color: var(--c-birch-deep)`, `transform: translateY(-2px)`.
- `.btn-outline`: `background: transparent`, `color: var(--c-charcoal)`, `border-color: var(--c-birch-deep)`. Hover: `background: var(--c-birch)`, `transform: translateY(-2px)`, `box-shadow: 0 6px 18px rgba(61,56,51,0.08)`.
- `.btn-ghost-sm`: `padding: 10px 18px`, `border: 1px solid rgba(181,196,177,0.4)`, `font-size: 13px`, `color: var(--c-sage)`. Hover: `background: rgba(181,196,177,0.12)`, `border-color: var(--c-sage)`.
- `.btn--full`: `width: 100%`, `justify-content: center`, `margin-top: auto`.

**Testimonials Section:**
3-column grid (collapses at 900px → 2-col, 620px → 1-col). Each card: `background: var(--c-warm-white-2)`, `border: 1px solid var(--c-line)`, `border-radius: 14px`, `padding: 32px`. Quote mark: Lora `56px`, color `--c-rose`. Testimonial text: Lora `16px`, `font-style: italic`, color `--c-charcoal`. Footer: avatar circle + meta block. Name: Nunito Sans `14px`, `font-weight: 600`. Location: Nunito Sans `12px`, color `--c-muted`. Preceded by community stats strip with animated counters — numbers in Lora `3rem`, suffix in Lora `1.5rem` rose-deep, labels in Nunito Sans `13px` muted.

**CTA Section:**
Background `var(--c-warm-white-2)`, `padding-block: clamp(80px,10vw,130px)`, centered layout, `text-align: center`. Content: kicker (same as section-kicker) → Lora headline `clamp(2rem,5vw,3.6rem)` with italic `em` in rose-deep → deck text → email form (input + submit button). Form row: `max-width: 420px`, input with `background: var(--c-warm-white)`, `border: 1px solid var(--c-line)`, `border-radius: 999px`, placeholder muted-lt, focus `border-color: var(--c-sage)`. Submit: `.btn-primary`. Footnote: `12px`, color `--c-muted-lt`. Success state: `background: rgba(181,196,177,0.2)`, `border-radius: 12px`, sage-tinted feedback message.

**Scroll Reveal System:**
`.reveal` class: `opacity: 0`, `transform: translateY(28px)`, `transition: opacity 0.9s var(--ease-warm), transform 0.9s var(--ease-warm)`. When `.is-visible`: `opacity: 1`, `transform: translateY(0)`. Triggered by IntersectionObserver at `threshold: 0.15`. Stagger delays via modifier classes: `.reveal-delay-1` through `.reveal-delay-5` (increments of `0.1s`). Counter animation: `1600ms` cubic ease-out, triggered at `threshold: 0.5`, counts from 0 to target value.

**Dark Sections (Band Quote, Footer):**
Both use `var(--c-charcoal)` (`#3D3833`) as background. Band quote section: `padding: 100px 0`, Lora blockquote `38.4px` in `--c-warm-white-2` with sage italic `em`. Sub-text: Nunito Sans `15.2px`, color `--c-muted-lt`. Footer: `padding: 88px 0 0`, warm-white-2 body text. Brand block: logo (Nunito Sans `15px` uppercase bold), tagline (Lora `16px` italic, muted-lt), address (Nunito Sans `12px`, muted). Link columns: titles in Nunito Sans `11px` uppercase `--c-muted-lt`, links in `13px` `rgba(250,249,246,0.55)` → warm-white on hover. Newsletter mini-form with ghost-sm button (sage color), sage focus on email input. Bottom bar: colophon with copyright and legal links separated by hairline border.
