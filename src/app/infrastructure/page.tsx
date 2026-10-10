import type { Metadata } from "next";
import Link from "next/link";
import SmartImage from "@/components/SmartImage";
import { INFRA } from "@/lib/site";

export const metadata: Metadata = { title: "Infrastructure & Plant" };

const FACILITIES = [
  ["Deep draw press lines", "High-tonnage hydraulic presses for consistent forming."],
  ["Beading and trimming", "Automatic lines for uniform Kalvat beading and edges."],
  ["Quality testing", "In-house metallurgical and dimensional checks on every batch."],
  ["Dispatch warehouse", "Staging and packing in Moradabad for fast dispatch."],
];

export default function InfrastructurePage() {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="wrap py-14 sm:py-16">
          <h1 className="h-page">Infrastructure and plant</h1>
          <p className="mt-4 max-w-2xl text-lg text-steel-200">
            A fully automatic manufacturing plant built for export-quality unfinished steelware.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FACILITIES.map(([t, d]) => (
              <div key={t} className="border-l-4 border-brass bg-white p-4">
                <h2 className="font-display text-xl font-semibold">{t}</h2>
                <p className="mt-1 text-sm text-steel-700">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INFRA.map((i) => (
              <figure key={i.src}>
                <SmartImage src={i.src} alt={i.caption} className="aspect-[4/3] w-full rounded" />
                <figcaption className="mt-2 text-sm text-steel-700">{i.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/contact" className="btn btn-primary">
              Plan a factory visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
