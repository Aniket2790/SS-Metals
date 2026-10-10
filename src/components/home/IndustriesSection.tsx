import { industriesServed } from "@/lib/site-data";

export function IndustriesSection() {
  return (
    <section id="industries" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-800">
            Industries we serve
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            Built for critical sectors
          </h2>
          <p className="mt-3 text-slate-600">
            High-quality pipes and tubes for pharma, oil & gas, aerospace, and
            chemical applications — engineered for durability, precision, and
            performance.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industriesServed.map((industry) => (
            <article
              key={industry.name}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {industry.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {industry.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
