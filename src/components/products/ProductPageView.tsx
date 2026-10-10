import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ProductPageContent } from "@/lib/product-pages";
import { ProductBanner } from "@/components/products/ProductBanner";
import { ExpandableProductCards } from "@/components/products/ExpandableProductCards";

type ProductPageViewProps = {
  product: ProductPageContent;
};

export function ProductPageView({ product }: ProductPageViewProps) {
  return (
    <div className="pb-16">
      <ProductBanner
        slug={product.slug}
        title={product.bannerTitle}
        subtitle={product.bannerSubtitle}
        name={product.name}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              About {product.name}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {product.overview}
            </p>
            <ul className="mt-6 space-y-3">
              {product.details.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-sm leading-relaxed text-slate-700"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-amber-200/80 bg-amber-50/60 p-6 lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-900">
              Need a quote?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Share grade, size, quantity, and delivery location—we respond with
              availability and pricing.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-800"
            >
              Contact sales
            </Link>
            <Link
              href="/"
              className="mt-4 flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-stone-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Advantages
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Why buyers choose SS Metals for {product.name.toLowerCase()}.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {product.advantages.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
              >
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Manufacturing process
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            How quality {product.name.toLowerCase()} moves from raw steel to
            dispatch-ready supply.
          </p>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {product.processSteps.map((step) => (
              <li
                key={step.step}
                className="relative rounded-2xl border border-slate-200/80 bg-white p-5 pt-8 shadow-sm"
              >
                <span className="absolute left-5 top-4 text-xs font-bold text-amber-700">
                  {step.step}
                </span>
                <h3 className="font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-slate-200/80 bg-stone-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Product range
          </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
            Use Read more on any card to expand it and view the full
            description.
          </p>
          <ExpandableProductCards items={product.items} />
        </div>
      </section>
    </div>
  );
}
