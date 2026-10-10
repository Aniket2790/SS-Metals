import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPageView } from "@/components/products/ProductPageView";
import {
  getProductSlugs,
  isProductSlug,
  productPages,
} from "@/lib/product-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isProductSlug(slug)) {
    return { title: "Product not found" };
  }
  const product = productPages[slug];
  return {
    title: `${product.name} | SS Metals`,
    description: product.bannerSubtitle,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  if (!isProductSlug(slug)) {
    notFound();
  }
  const product = productPages[slug];
  return <ProductPageView product={product} />;
}
