import { siteConfig } from "@/data/site";

export interface ShopCollection {
  handle: string;
  name: string;
  url: string;
  image: string;
  imageAlt: string;
  productCount: number;
}

export const shopCollections: ShopCollection[] = [
  {
    handle: "pillow-covers",
    name: "Pillow Covers",
    url: `${siteConfig.shopUrl}/collections/pillow-covers`,
    image: "/images/shop/pillow-covers.jpg",
    imageAlt: "Botanical pillow covers from Kotkoa Shop",
    productCount: 9,
  },
  {
    handle: "table-linens",
    name: "Table Linens",
    url: `${siteConfig.shopUrl}/collections/table-linens`,
    image: "/images/shop/table-linens.jpg",
    imageAlt: "Botanical table linens from Kotkoa Shop",
    productCount: 5,
  },
  {
    handle: "wrapping-paper",
    name: "Wrapping Paper",
    url: `${siteConfig.shopUrl}/collections/wrapping-paper`,
    image: "/images/shop/wrapping-paper.jpg",
    imageAlt: "Botanical wrapping paper from Kotkoa Shop",
    productCount: 9,
  },
  {
    handle: "wall-art",
    name: "Wall Art",
    url: `${siteConfig.shopUrl}/collections/wall-art`,
    image: "/images/shop/wall-art.jpg",
    imageAlt: "Botanical wall art from Kotkoa Shop",
    productCount: 5,
  },
];

export function getPopulatedShopCollections(): ShopCollection[] {
  return shopCollections.filter((collection) => collection.productCount > 0);
}
