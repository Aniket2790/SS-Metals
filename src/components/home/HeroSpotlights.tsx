import Image from "next/image";
import Link from "next/link";
import { heroSpotlights } from "@/lib/site-data";

export function HeroSpotlights() {
  return (
    <section className="border-b border-slate-200/80 bg-white pb-14 pt-4">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {heroSpotlights.map((item) => (
          <article
            key={item.title}
            className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-stone-50/50 shadow-sm"
          >
            <div className="relative aspect-video w-full overflow-hidden border-b border-slate-200/80 bg-white">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                {item.title}
              </p>
              <h2 className="mt-1 text-lg font-semibold text-slate-900">
                {item.headline}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="mt-4 text-sm font-semibold text-slate-900 hover:text-amber-800"
              >
                View products →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
