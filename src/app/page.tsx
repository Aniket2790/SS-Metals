import { AboutSection } from "@/components/home/AboutSection";
import { AppDownloadSection } from "@/components/home/AppDownloadSection";
import { FaqSection } from "@/components/home/FaqSection";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FeatureStrip } from "@/components/home/FeatureStrip";
import { HeroSection } from "@/components/home/HeroSection";
import { MarqueeStrip } from "@/components/home/MarqueeStrip";
import { HeroSpotlights } from "@/components/home/HeroSpotlights";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <MarqueeStrip />
      <HeroSection />
      <HeroSpotlights />
      <FeatureStrip />
      <AboutSection />
      <TestimonialsSection />
      <AppDownloadSection />
      <FaqSection />
    </>
  );
}
