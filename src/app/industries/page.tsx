import type { Metadata } from "next";
import { PageBanner } from "@/components/banner/PageBanner";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { innerPageBanners } from "@/lib/page-banners";

const banner = innerPageBanners.industries;

export const metadata: Metadata = {
  title: "Industries | SS Metals",
  description: banner.subtitle,
};

export default function IndustriesPage() {
  return (
    <>
      <PageBanner
        variant={banner.variant}
        eyebrow={banner.eyebrow}
        title={banner.title}
        subtitle={banner.subtitle}
      />
      <IndustriesSection />
    </>
  );
}
