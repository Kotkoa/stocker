import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

const categoryLabels: Record<string, string> = {
  watercolor: "Watercolor",
  "floral-pattern": "Floral Patterns",
  "photo-bundle": "Photo Bundles",
  mockup: "Mockups",
  "vintage-pattern": "Vintage Patterns",
};

type ProductCardProps = {
  slug: string;
  title: string;
  coverImage: string;
  category: string;
};

function ProductCardDefault({ slug, title, coverImage, category }: ProductCardProps) {
  return (
    <Link href={`/products/${slug}`} className="group block">
      <div className="overflow-hidden rounded-lg">
        <img
          src={coverImage}
          alt={title}
          className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <h3 className="mt-3 text-sm font-medium">{title}</h3>
      <div className="mt-1">
        <Badge>{categoryLabels[category] ?? category}</Badge>
      </div>
    </Link>
  );
}

function ProductCardFeatured({ slug, title, coverImage, category }: ProductCardProps) {
  return (
    <Link href={`/products/${slug}`} className="group block md:col-span-2">
      <div className="overflow-hidden rounded-lg">
        <img
          src={coverImage}
          alt={title}
          className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <h3 className="mt-3 text-base font-medium">{title}</h3>
      <div className="mt-1">
        <Badge>{categoryLabels[category] ?? category}</Badge>
      </div>
    </Link>
  );
}

export const ProductCard = {
  Default: ProductCardDefault,
  Featured: ProductCardFeatured,
};
