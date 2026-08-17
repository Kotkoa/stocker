export const siteConfig = {
  name: "Kotkoa Studio",
  seoTitle: "Botanical Art, Home Decor & Digital Assets | Kotkoa Studio",
  description:
    "Kotkoa is an independent studio by Andrey & Olesia creating botanical home decor, watercolor illustrations, patterns, photo bundles, and digital design assets.",
  url: "https://kotkoa.com",
  shopUrl: "https://shop.kotkoa.com",
  authors: [{ name: "Kotkoa Studio" }],
  creator: "Kotkoa Studio",
  keywords: [
    "watercolor illustrations",
    "floral patterns",
    "seamless patterns",
    "photo bundles",
    "mockups",
    "digital assets",
    "creative studio",
    "stock graphics",
    "botanical illustrations",
    "design resources",
  ],
  stats: {
    assets: "25,000+",
    since: "2012",
  },
} as const;

export const socialLinks = {
  shopify: siteConfig.shopUrl,
  adobeStock: "https://stock.adobe.com/contributor/351400/kotkoa",
  shutterstock: "https://www.shutterstock.com/g/Kotkoa",
  creativeMarket: "https://creativemarket.com/Kotkoa",
  fiverr: "https://www.fiverr.com/s2/e624e3c618",
} as const;
