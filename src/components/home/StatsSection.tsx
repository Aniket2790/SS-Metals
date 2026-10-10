import { stats } from "@/lib/site-data";

export function StatsSection() {
  return (
    <section className="bg-slate-900 py-14 text-white sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center lg:text-left">
            <p className="text-3xl font-semibold tracking-tight text-amber-400 sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
