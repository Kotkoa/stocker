import { socialLinks } from "@/data/site";

export interface Marketplace {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export const marketplaces: Marketplace[] = [
  {
    id: "etsy",
    name: "Etsy",
    url: socialLinks.etsy,
    icon: "/icons/etsy.svg",
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
