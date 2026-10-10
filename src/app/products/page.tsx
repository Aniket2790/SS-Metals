import type { Metadata } from "next";
import { PageBanner } from "@/components/banner/PageBanner";
import { ProductCatalogSection } from "@/components/home/ProductCatalogSection";
import { ProductLinesSection } from "@/components/home/ProductLinesSection";
import { innerPageBanners } from "@/lib/page-banners";

const banner = innerPageBanners.products;

export const metadata: Metadata = {
  title: "Products | SS Metals",
  description: banner.subtitle,
};

export default function ProductsPage() {
  return (
    <>
      <PageBanner
        variant={banner.variant}
        eyebrow={banner.eyebrow}
        title={banner.title}
        subtitle={banner.subtitle}
      />
      <ProductLinesSection />
      <ProductCatalogSection />
    </>
  );
}
