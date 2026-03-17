import Link from "next/link";
import type { Product } from "@/types/product";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { getCategoryLabel } from "@/data/categories";
import { ProductImageGallery } from "@/components/product/ProductImageGallery";
import { BuyLinks } from "@/components/product/BuyLinks";
import { ShareButtons } from "@/components/product/ShareButtons";

type ProductDetailProps = {
  product: Product;
};

export function ProductDetail({ product }: ProductDetailProps) {
  return (
    <Container className="py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
      >
        &larr; Back to gallery
      </Link>

      <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <ProductImageGallery images={product.images} alt={product.title} />

        <div>
          <Badge>{getCategoryLabel(product.category)}</Badge>
          <h1 className="mt-4 text-3xl font-semibold">{product.title}</h1>
          <p className="mt-4 leading-relaxed text-muted">
            {product.description}
          </p>
          <div className="mt-8">
            <BuyLinks links={product.marketplaceLinks} />
          </div>
          <div className="mt-8 border-t border-border pt-8">
            <ShareButtons slug={product.slug} title={product.title} />
          </div>
        </div>
      </div>
    </Container>
  );
}
