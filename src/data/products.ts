import type { Product } from "@/types/product"

export const products: Product[] = [
  {
    slug: "watercolor-wildflowers",
    title: "Watercolor Wildflowers Collection",
    description:
      "Hand-painted watercolor wildflower illustrations. Perfect for wedding invitations, greeting cards, and botanical prints. Includes 24 individual elements and 6 pre-made arrangements in PNG and SVG formats.",
    category: "watercolor",
    tags: ["watercolor", "flowers", "botanical", "wedding"],
    coverImage: "/images/products/watercolor-wildflowers/cover.jpg",
    images: [
      "/images/products/watercolor-wildflowers/cover.jpg",
      "/images/products/watercolor-wildflowers/preview-1.jpg",
      "/images/products/watercolor-wildflowers/preview-2.jpg",
    ],
    marketplaceLinks: [
      { marketplace: "etsy", url: "https://www.etsy.com/listing/example1" },
      {
        marketplace: "creative-market",
        url: "https://creativemarket.com/kotkoa/example1",
      },
    ],
    featured: true,
    dateAdded: "2024-01-15",
  },
  {
    slug: "seamless-peony-pattern",
    title: "Seamless Peony Floral Pattern",
    description:
      "Elegant seamless floral pattern featuring hand-drawn peonies and rose buds. Ideal for fabric printing, wallpaper design, and packaging. Includes 4 colorways and tileable JPEG, PNG, and vector EPS files.",
    category: "floral-pattern",
    tags: ["pattern", "floral", "peony", "seamless", "textile"],
    coverImage: "/images/products/seamless-peony-pattern/cover.jpg",
    images: [
      "/images/products/seamless-peony-pattern/cover.jpg",
      "/images/products/seamless-peony-pattern/preview-1.jpg",
      "/images/products/seamless-peony-pattern/preview-2.jpg",
      "/images/products/seamless-peony-pattern/preview-3.jpg",
    ],
    marketplaceLinks: [
      { marketplace: "etsy", url: "https://www.etsy.com/listing/example2" },
      {
        marketplace: "creative-market",
        url: "https://creativemarket.com/kotkoa/example2",
      },
      {
        marketplace: "design-bundles",
        url: "https://designbundles.net/kotkoa/example2",
      },
    ],
    featured: false,
    dateAdded: "2024-03-22",
  },
  {
    slug: "cozy-cafe-photo-bundle",
    title: "Cozy Cafe Photo Bundle",
    description:
      "A curated collection of 40 high-resolution lifestyle photos shot in cozy European cafes. Perfect for blogs, social media, and website hero sections. All images are 6000x4000px, color-graded with warm tones.",
    category: "photo-bundle",
    tags: ["photos", "stock", "cafe", "lifestyle", "social-media"],
    coverImage: "/images/products/cozy-cafe-photo-bundle/cover.jpg",
    images: [
      "/images/products/cozy-cafe-photo-bundle/cover.jpg",
      "/images/products/cozy-cafe-photo-bundle/preview-1.jpg",
      "/images/products/cozy-cafe-photo-bundle/preview-2.jpg",
      "/images/products/cozy-cafe-photo-bundle/preview-3.jpg",
    ],
    marketplaceLinks: [
      { marketplace: "etsy", url: "https://www.etsy.com/listing/example3" },
      {
        marketplace: "creative-market",
        url: "https://creativemarket.com/kotkoa/example3",
      },
    ],
    featured: true,
    dateAdded: "2024-06-10",
  },
  {
    slug: "minimal-frame-mockup-set",
    title: "Minimal Frame Mockup Set",
    description:
      "Clean and modern frame mockup collection for showcasing art prints, posters, and photography. Includes 12 PSD mockups with smart objects, featuring different frame styles and interior settings with natural lighting.",
    category: "mockup",
    tags: ["mockup", "frame", "poster", "interior", "psd"],
    coverImage: "/images/products/minimal-frame-mockup-set/cover.jpg",
    images: [
      "/images/products/minimal-frame-mockup-set/cover.jpg",
      "/images/products/minimal-frame-mockup-set/preview-1.jpg",
      "/images/products/minimal-frame-mockup-set/preview-2.jpg",
    ],
    marketplaceLinks: [
      { marketplace: "etsy", url: "https://www.etsy.com/listing/example4" },
      {
        marketplace: "creative-market",
        url: "https://creativemarket.com/kotkoa/example4",
      },
      {
        marketplace: "design-bundles",
        url: "https://designbundles.net/kotkoa/example4",
      },
    ],
    featured: false,
    dateAdded: "2024-08-05",
  },
  {
    slug: "vintage-botanical-ornaments",
    title: "Vintage Botanical Ornaments",
    description:
      "A collection of 30 vintage-style botanical ornaments inspired by 19th-century engravings. Includes decorative borders, corner elements, and floral dividers. Supplied as transparent PNG and vector AI files.",
    category: "vintage-pattern",
    tags: ["vintage", "botanical", "ornament", "border", "engraving"],
    coverImage: "/images/products/vintage-botanical-ornaments/cover.jpg",
    images: [
      "/images/products/vintage-botanical-ornaments/cover.jpg",
      "/images/products/vintage-botanical-ornaments/preview-1.jpg",
      "/images/products/vintage-botanical-ornaments/preview-2.jpg",
      "/images/products/vintage-botanical-ornaments/preview-3.jpg",
    ],
    marketplaceLinks: [
      { marketplace: "etsy", url: "https://www.etsy.com/listing/example5" },
      {
        marketplace: "creative-market",
        url: "https://creativemarket.com/kotkoa/example5",
      },
      {
        marketplace: "design-bundles",
        url: "https://designbundles.net/kotkoa/example5",
      },
    ],
    featured: false,
    dateAdded: "2024-11-18",
  },
]
