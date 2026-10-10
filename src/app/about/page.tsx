import type { Metadata } from "next";
import { AboutSection } from "@/components/home/AboutSection";
import { StatsSection } from "@/components/home/StatsSection";
import { innerPageBanners } from "@/lib/page-banners";

const banner = innerPageBanners.about;

export const metadata: Metadata = {
  title: "About Us | SS Metals",
  description: banner.subtitle,
};

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <StatsSection />
    </>
  );
}
