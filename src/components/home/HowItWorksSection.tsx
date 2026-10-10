import {
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  Package,
  Truck,
} from "lucide-react";
import { howItWorksSteps } from "@/lib/site-data";

const icons = [ClipboardList, BadgeCheck, Package, Truck] as const;

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 bg-[#0a163d] py-16 text-white sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
            How it works
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Simple steps, quick supply
          </h2>
          <p className="mt-3 text-slate-300">
            A seamless process to source coils, sheets, pipes, and utensils from
            inquiry to dispatch.
          </p>
        </div>

        <div className="mt-14 flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-2">
          {howItWorksSteps.map((item, index) => {
            const Icon = icons[index] ?? ClipboardList;
            const isLast = index === howItWorksSteps.length - 1;
            return (
              <div
                key={item.step}
                className="flex w-full max-w-xs flex-col items-center lg:max-w-none lg:flex-1 lg:flex-row lg:items-start"
              >
                <div className="flex w-full flex-col items-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#0f2248] shadow-[0_0_24px_rgba(251,191,36,0.12)] ring-1 ring-amber-500/25">
                    <Icon className="h-8 w-8 text-amber-400" strokeWidth={1.75} />
                  </div>
                  <p className="mt-5 text-sm font-semibold">
                    <span className="text-amber-400">{item.step}</span>{" "}
                    {item.title}
                  </p>
                  <p className="mt-2 max-w-[200px] text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
                {!isLast ? (
                  <ArrowRight
                    className="my-2 h-5 w-5 text-amber-500/70 lg:mx-1 lg:mt-10 lg:shrink-0 lg:rotate-0"
                    aria-hidden
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
