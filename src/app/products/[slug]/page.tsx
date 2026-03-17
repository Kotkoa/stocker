import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getProductBySlug } from "@/lib/products";
import { siteConfig } from "@/data/site";
import { getProductJsonLd } from "@/lib/metadata";
import { ProductDetail } from "@/components/product/ProductDetail";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product not found" };
  }

  return {
    title: `${product.title} — ${siteConfig.name}`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [{ url: `${siteConfig.url}${product.coverImage}` }],
      type: "website",
      url: `${siteConfig.url}/products/${product.slug}`,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getProductJsonLd(product)),
        }}
      />
      <ProductDetail product={product} />
    </>
  );
}
