import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { supplierNavItems } from "@/lib/supplier-pages";

export const metadata: Metadata = {
  title: "Supplier Lines",
  description: "Steel coil, sheet, circle, blank, wire, rod, and pipe supply from SS Metals.",
};

export default function SupplierIndexPage() {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="wrap py-14 sm:py-16">
          <h1 className="h-page">Supplier programs</h1>
          <p className="mt-4 max-w-2xl text-lg text-steel-200">
            {SITE.name} supplies industrial stainless and alloy lines from ready stock — we
            manufacture utensils and farma design separately in-house.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {supplierNavItems.map((item) => (
            <Link
              key={item.slug}
              href={`/supplier/${item.slug}`}
              className="rounded border border-steel-200 bg-white p-6 transition hover:border-brand hover:shadow-sm"
            >
              <h2 className="font-display text-2xl font-semibold text-ink">{item.label}</h2>
              <p className="mt-2 text-sm text-steel-700">View grades, sizes, and enquiry options →</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
