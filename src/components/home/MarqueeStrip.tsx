import { marqueeItems } from "@/lib/site-data";

function MarqueeGroup({ items }: { items: readonly string[] }) {
  return (
    <div className="ss-marquee-group flex shrink-0 items-center">
      {items.map((item) => (
        <span
          key={item}
          className="flex shrink-0 items-center whitespace-nowrap px-8 font-medium uppercase tracking-wide text-amber-400"
        >
          <span className="mr-4 inline-block h-2 w-2 rounded-full bg-amber-500" />
          {item}
        </span>
      ))}
    </div>
  );
}

export function MarqueeStrip() {
  return (
    <div
      className="ss-marquee-root overflow-hidden border-y border-amber-900/30 bg-slate-900 py-3.5"
      aria-label="Company highlights ticker"
    >
      <div
        className="ss-marquee-inner flex w-max"
        style={{
          animation: "ss-marquee-scroll 38s linear infinite",
        }}
      >
        <MarqueeGroup items={marqueeItems} />
        <MarqueeGroup items={marqueeItems} />
      </div>
    </div>
  );
}
