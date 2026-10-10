import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { excellenceCopy, whyChooseUs } from "@/lib/site-data";

export function QualitySection() {
  return (
    <section
      id="quality"
      className="scroll-mt-24 border-y border-slate-200/80 bg-slate-900 py-16 text-white sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">
              {excellenceCopy.title}
            </p>
            {excellenceCopy.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-6 sm:p-8">
            <h3 className="text-xl font-semibold">Why choose SS Metals</h3>
            <p className="mt-2 text-sm text-slate-400">
              We engineer reliability — not just manufacture pipes.
            </p>
            <ul className="mt-6 space-y-3">
              {whyChooseUs.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-amber-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-600"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
