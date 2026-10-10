import type { Metadata } from "next";
import { PageBanner } from "@/components/banner/PageBanner";
import { InfrastructureSection } from "@/components/home/InfrastructureSection";
import { QualitySection } from "@/components/home/QualitySection";
import { innerPageBanners } from "@/lib/page-banners";

const banner = innerPageBanners.quality;

export const metadata: Metadata = {
  title: "Quality | SS Metals",
  description: banner.subtitle,
};

export default function QualityPage() {
  return (
    <>
      <PageBanner
        variant={banner.variant}
        eyebrow={banner.eyebrow}
        title={banner.title}
        subtitle={banner.subtitle}
      />
      <QualitySection />
      <InfrastructureSection />
    </>
  );
}
