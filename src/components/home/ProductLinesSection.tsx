import Image from "next/image";
import Link from "next/link";
import { featuredProductLines } from "@/lib/site-data";

export function ProductLinesSection() {
  return (
    <section className="border-y border-slate-200/80 bg-stone-50 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-slate-900 sm:text-3xl">
          Core product lines
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProductLines.map((line) => (
            <article
              key={line.name}
              className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm"
            >
              <div className="relative aspect-square w-full overflow-hidden border-b border-slate-200/80 bg-white">
                <Image
                  src={line.image}
                  alt={line.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900">{line.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{line.description}</p>
                <Link
                  href="/products"
                  className="mt-3 inline-block text-sm font-semibold text-amber-800"
                >
                  Explore range
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
