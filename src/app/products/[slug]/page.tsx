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

  const ogImage = product.images[0] ?? product.coverImage;

  return {
    title: `${product.title} — ${siteConfig.name}`,
    description: product.description,
    alternates: {
      canonical: `${siteConfig.url}/products/${product.slug}`,
    },
    openGraph: {
      title: product.title,
      description: product.description,
      type: "article",
      url: `${siteConfig.url}/products/${product.slug}`,
      images: [
        {
          url: ogImage,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: [
        {
          url: ogImage,
          alt: product.title,
        },
      ],
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
