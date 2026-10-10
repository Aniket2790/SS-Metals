"use client";

import Link from "next/link";
import { useState } from "react";
import { productCatalog } from "@/lib/site-data";

export function ProductCatalogSection() {
  const [activeId, setActiveId] = useState(productCatalog[0].id);
  const active =
    productCatalog.find((group) => group.id === activeId) ?? productCatalog[0];

  return (
    <section id="products" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-800">
            Our products
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Complete steel product catalogue
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Pipes & tubes, round bars, flanges, fasteners, perforated sheets,
            aluminium products, plates, capillary tubes, Victaulic couplings, and
            wedge anchors — aligned with offerings from leading Indian steel
            suppliers.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-8 lg:flex-row">
          <div className="lg:w-72 lg:shrink-0">
            <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
              {productCatalog.map((group) => (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => setActiveId(group.id)}
                  className={`shrink-0 rounded-xl px-4 py-3 text-left text-sm font-medium transition lg:w-full ${
                    activeId === group.id
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {group.title}
                </button>
              ))}
            </div>
          </div>

          <div className="min-w-0 flex-1 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-semibold text-slate-900">
              {active.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {active.summary}
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {active.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-slate-100 bg-stone-50/80 px-3 py-2.5 text-sm text-slate-800"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-amber-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-900"
            >
              Request quote for {active.title}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
