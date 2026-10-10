type ImagePlaceholderProps = {
  label?: string;
  className?: string;
  aspect?: "video" | "square" | "wide" | "none";
};

const aspectClass: Record<NonNullable<ImagePlaceholderProps["aspect"]>, string> =
  {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]",
    none: "",
  };

export function ImagePlaceholder({
  label = "Image coming soon",
  className = "",
  aspect = "video",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border border-dashed border-slate-300/90 bg-gradient-to-br from-slate-100 to-slate-50 text-slate-400 ${aspectClass[aspect]} ${className}`}
      aria-hidden
    >
      <span className="px-4 text-center text-xs font-medium uppercase tracking-wider sm:text-sm">
        {label}
      </span>
    </div>
  );
}
