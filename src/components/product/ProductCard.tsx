import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { getCategoryLabel } from "@/data/categories";

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
          className="aspect-4/3 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
      <h3 className="mt-3 text-sm font-medium">{title}</h3>
      <div className="mt-1">
        <Badge>{getCategoryLabel(category)}</Badge>
      </div>
    </Link>
  );
}

function ProductCardFeatured({ slug, title, coverImage, category }: ProductCardProps) {
  return (
    <Link href={`/products/${slug}`} className="group block">
      <div className="overflow-hidden rounded-lg">
        <img
          src={coverImage}
          alt={title}
          className="aspect-4/3 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
      <div className="mt-3 flex items-center gap-2">
        <h3 className="text-base font-medium">{title}</h3>
        <span className="inline-block size-1.5 rounded-full bg-stone-400" />
      </div>
      <div className="mt-1">
        <Badge>{getCategoryLabel(category)}</Badge>
      </div>
    </Link>
  );
}

export const ProductCard = {
  Default: ProductCardDefault,
  Featured: ProductCardFeatured,
};
