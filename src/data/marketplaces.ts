import { siteConfig, socialLinks } from "@/data/site";

export type MarketplaceId = "shopify" | "adobe-stock" | "shutterstock" | "creative-market" | "fiverr"

export interface Marketplace {
  id: MarketplaceId;
  name: string;
  url: string;
  icon: string;
}

export const marketplaces: Marketplace[] = [
  {
    id: "shopify",
    name: "Kotkoa Shop",
    url: siteConfig.shopUrl,
    icon: "/icons/shopify.svg",
  },
  {
    id: "adobe-stock",
    name: "Adobe Stock",
    url: socialLinks.adobeStock,
    icon: "/icons/adobe-stock.svg",
  },
  {
    id: "shutterstock",
    name: "Shutterstock",
    url: socialLinks.shutterstock,
    icon: "/icons/shutterstock.svg",
  },
  {
    id: "creative-market",
    name: "Creative Market",
    url: socialLinks.creativeMarket,
    icon: "/icons/creative-market.svg",
  },
  {
    id: "fiverr",
    name: "Fiverr",
    url: socialLinks.fiverr,
    icon: "/icons/fiverr.svg",
  },
];
