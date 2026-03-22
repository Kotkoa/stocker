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
    <Link
      href={`/products/${slug}`}
      className="group block rounded-[14px] border border-border bg-background transition-all duration-350 ease-warm hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(61,56,51,0.08)] hover:border-birch-deep"
    >
      <div className="overflow-hidden rounded-t-[14px]">
        <img
          src={coverImage}
          alt={title}
          className="aspect-4/3 w-full object-cover transition-transform duration-500 ease-warm group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <Badge>{getCategoryLabel(category)}</Badge>
        <h3 className="mt-2.5 font-serif text-xl font-medium">{title}</h3>
      </div>
    </Link>
  );
}

function ProductCardFeatured({ slug, title, coverImage, category }: ProductCardProps) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group block rounded-[14px] border border-border bg-background transition-all duration-350 ease-warm hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(61,56,51,0.08)] hover:border-birch-deep"
    >
      <div className="overflow-hidden rounded-t-[14px]">
        <img
          src={coverImage}
          alt={title}
          className="aspect-4/3 w-full object-cover transition-transform duration-500 ease-warm group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <Badge>{getCategoryLabel(category)}</Badge>
        <div className="mt-2.5 flex items-center gap-2">
          <h3 className="font-serif text-xl font-medium">{title}</h3>
          <span className="inline-block size-1.5 rounded-full bg-sage-deep" />
        </div>
      </div>
    </Link>
  );
}

export const ProductCard = {
  Default: ProductCardDefault,
  Featured: ProductCardFeatured,
};
