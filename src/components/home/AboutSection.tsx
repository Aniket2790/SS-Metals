import Image from "next/image";
import { aboutShowcase } from "@/lib/site-data";

export function AboutSection() {
  return (
    <section id="company" className="scroll-mt-24 bg-stone-50 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md">
          <Image
            src={aboutShowcase.src}
            alt={aboutShowcase.alt}
            width={1600}
            height={900}
            className="h-auto w-full"
            sizes="(max-width: 1280px) 100vw, 1152px"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
