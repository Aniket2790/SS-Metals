import type { Metadata } from "next";
import { PageBanner } from "@/components/banner/PageBanner";
import { ReadyStockSection } from "@/components/home/ReadyStockSection";
import { innerPageBanners } from "@/lib/page-banners";

const banner = innerPageBanners.readyStock;

export const metadata: Metadata = {
  title: "Ready Stock | SS Metals",
  description: banner.subtitle,
};

export default function ReadyStockPage() {
  return (
    <>
      <PageBanner
        variant={banner.variant}
        eyebrow={banner.eyebrow}
        title={banner.title}
        subtitle={banner.subtitle}
      />
      <ReadyStockSection />
    </>
  );
}
