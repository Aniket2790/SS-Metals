import Link from "next/link";
import MainNav from "@/components/MainNav";
import { SITE } from "@/lib/site";

export default function SiteHeader() {
  return (
    <>
      <div className="bg-ink text-xs text-steel-200">
        <div className="wrap flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2">
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <a href="tel:+919412236335" className="hover:text-white">
              +91 9412236335
            </a>
            <a href="tel:+919458771652" className="hover:text-white">
              +91 9458771652
            </a>
            <a href={`mailto:${SITE.email}`} className="hover:text-white">
              {SITE.email}
            </a>
            <span className="hidden md:inline">{SITE.addressShort}</span>
          </div>
          <div className="flex gap-4">
            <Link href="/ready-stock" className="font-semibold text-brass hover:text-white">
              Live ready stock
            </Link>
            <Link href="/products" className="hover:text-white">
              Product catalogue
            </Link>
          </div>
        </div>
      </div>
      <MainNav />
    </>
  );
}
