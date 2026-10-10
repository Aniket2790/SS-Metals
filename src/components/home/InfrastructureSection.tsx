import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { infrastructurePoints } from "@/lib/site-data";

export function InfrastructureSection() {
  return (
    <section id="infrastructure" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-800">
            Supply infrastructure
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Stock, testing & dispatch
          </h2>
          <p className="mt-3 text-slate-600">
            Warehouse capacity and quality workflows built for industrial buyers
            who need consistent material, documentation, and lead times.
          </p>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {infrastructurePoints.map((point) => (
            <li
              key={point}
              className="flex gap-3 rounded-xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm text-slate-700"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div>
            <ImagePlaceholder
              className="min-h-[180px]"
              label="Pipe racks — coming soon"
            />
            <p className="mt-2 text-xs font-medium text-slate-500">
              Large pipes & tubes on racks
            </p>
          </div>
          <div>
            <ImagePlaceholder
              className="min-h-[180px]"
              label="Flanges & bars — coming soon"
            />
            <p className="mt-2 text-xs font-medium text-slate-500">
              Flanges, bars & sheet staging
            </p>
          </div>
          <div>
            <ImagePlaceholder
              className="min-h-[180px]"
              label="QC & dispatch — coming soon"
            />
            <p className="mt-2 text-xs font-medium text-slate-500">
              Testing & export dispatch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
