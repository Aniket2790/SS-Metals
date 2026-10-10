import { BannerArt, type BannerVariant } from "@/components/banner/BannerArt";

type PageBannerProps = {
  variant: BannerVariant;
  eyebrow: string;
  title: string;
  subtitle: string;
  size?: "default" | "compact";
  id?: string;
};

export function PageBanner({
  variant,
  eyebrow,
  title,
  subtitle,
  size = "default",
  id,
}: PageBannerProps) {
  const py = size === "compact" ? "py-12 sm:py-14" : "py-16 sm:py-20";

  return (
    <div
      id={id}
      className="relative overflow-hidden border-b border-slate-800 bg-slate-900 text-white"
    >
      <BannerArt variant={variant} />
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-900/40"
        aria-hidden
      />
      <div className={`relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${py}`}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
