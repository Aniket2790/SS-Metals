import { Award, Settings2, Tags } from "lucide-react";
import Link from "next/link";
import { highlights } from "@/lib/site-data";

const icons = [Award, Settings2, Tags] as const;

export function FeatureStrip() {
  return (
    <section className="border-y border-slate-200/80 bg-white py-12 sm:py-14">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {highlights.map((item, index) => {
          const Icon = icons[index] ?? Award;
          return (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition hover:border-slate-300 hover:shadow-sm"
            >
              <div className="mb-4 inline-flex rounded-xl bg-white p-2.5 text-amber-800 shadow-sm ring-1 ring-slate-200/80">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="text-base font-semibold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
              <Link
                href="/quality"
                className="mt-4 inline-block text-sm font-semibold text-amber-800 hover:text-amber-900"
              >
                Read more →
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
