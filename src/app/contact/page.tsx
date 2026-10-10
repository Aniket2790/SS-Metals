import type { Metadata } from "next";
import { PageBanner } from "@/components/banner/PageBanner";
import { ContactSection } from "@/components/home/ContactSection";
import { FaqSection } from "@/components/home/FaqSection";
import { innerPageBanners } from "@/lib/page-banners";

const banner = innerPageBanners.contact;

export const metadata: Metadata = {
  title: "Contact | SS Metals",
  description: banner.subtitle,
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        variant={banner.variant}
        eyebrow={banner.eyebrow}
        title={banner.title}
        subtitle={banner.subtitle}
      />
      <ContactSection />
      <FaqSection />
    </>
  );
}
