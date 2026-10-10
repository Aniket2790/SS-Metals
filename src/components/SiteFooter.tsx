import Link from "next/link";
import { FOOTER_RANGES, NAV, SITE } from "@/lib/site";
import { supplierNavItems } from "@/lib/supplier-pages";

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-steel-300">
      <div className="wrap grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-2xl font-bold uppercase text-white">{SITE.name}</p>
          <p className="mt-1 text-sm text-brass">
            Est. {SITE.est} · Pipes, tubes & stainless supply
          </p>
          <p className="mt-4 text-sm">
            Manufacturers of stainless steel unfinished (Kalvat) utensils, barwares, bathwares and
            kitchenware. Stockiest of patta, patti, coil, circles, sheets and farma. Suppliers of
            pipes, tubes, flanges, and industrial metals.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-white">Quick links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-white">Manufactured ranges</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {FOOTER_RANGES.map((r) => (
              <li key={r}>
                <Link
                  href={`/products?category=${encodeURIComponent(r)}`}
                  className="hover:text-white"
                >
                  {r}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="mt-6 font-display text-lg font-semibold text-white">Supplier lines</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {supplierNavItems.map((r) => (
              <li key={r.slug}>
                <Link href={`/supplier/${r.slug}`} className="hover:text-white">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm">
          <h4 className="font-display text-lg font-semibold text-white">Factory & contact</h4>
          <address className="mt-3 not-italic leading-relaxed">{SITE.address}</address>
          <p className="mt-3">
            <a href="tel:+919412236335" className="hover:text-white">
              +91 9412236335
            </a>
            <br />
            <a href="tel:+919458771652" className="hover:text-white">
              +91 9458771652
            </a>
          </p>
          <p className="mt-2 text-steel-400">{SITE.proprietor}</p>
          <p className="mt-3">
            <a href={`mailto:${SITE.email}`} className="hover:text-white">
              {SITE.email}
            </a>
          </p>
          <Link href="/contact" className="btn btn-dark-outline mt-4 !py-2">
            Send enquiry
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-steel-400">
        © 2026 {SITE.name}. All rights reserved. Moradabad, India.
      </div>
    </footer>
  );
}
