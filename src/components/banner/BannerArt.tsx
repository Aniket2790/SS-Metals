import type { ProductSlug } from "@/lib/product-pages";

export type BannerVariant = ProductSlug | "home";

type BannerArtProps = {
  variant: BannerVariant;
  className?: string;
};

export function BannerArt({ variant, className = "" }: BannerArtProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="banner-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="50%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#292524" />
          </linearGradient>
          <linearGradient id="banner-accent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b45309" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.5" />
          </linearGradient>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#334155"
              strokeWidth="0.5"
              opacity="0.4"
            />
          </pattern>
        </defs>
        <rect width="1200" height="400" fill="url(#banner-bg)" />
        <rect width="1200" height="400" fill="url(#grid)" />
        <ellipse
          cx="900"
          cy="80"
          rx="280"
          ry="120"
          fill="url(#banner-accent)"
          opacity="0.15"
        />
        {variant === "home" && <HomeArt />}
        {variant === "coil" && <CoilArt />}
        {variant === "sheet" && <SheetArt />}
        {variant === "circle" && <CircleArt />}
        {variant === "utensils" && <UtensilsArt />}
        {variant === "farma" && <FarmaArt />}
        {variant === "design-wire" && <DesignWireArt />}
        {variant === "rod" && <RodArt />}
        {variant === "pipe" && <PipeArt />}
      </svg>
    </div>
  );
}

function HomeArt() {
  return (
    <g opacity="0.85">
      <rect x="680" y="120" width="380" height="200" rx="8" fill="#334155" stroke="#475569" strokeWidth="2" />
      <rect x="710" y="150" width="80" height="140" rx="40" fill="none" stroke="#f59e0b" strokeWidth="6" />
      <rect x="820" y="150" width="80" height="140" rx="40" fill="none" stroke="#cbd5e1" strokeWidth="5" />
      <rect x="930" y="150" width="80" height="140" rx="40" fill="none" stroke="#f59e0b" strokeWidth="6" />
      <path d="M720 100 L760 120 L720 140 Z" fill="#b45309" />
      <path d="M850 90 L920 120 L850 150 Z" fill="#78716c" />
      <circle cx="1020" cy="100" r="35" fill="none" stroke="#fbbf24" strokeWidth="4" />
    </g>
  );
}

function CoilArt() {
  return (
    <g transform="translate(650, 60)" opacity="0.9">
      {[0, 1, 2].map((i) => (
        <ellipse
          key={i}
          cx={120 + i * 140}
          cy={140}
          rx="55"
          ry="130"
          fill="none"
          stroke={i === 1 ? "#f59e0b" : "#94a3b8"}
          strokeWidth="8"
        />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={i}
          x1={65 + i * 140}
          y1="20"
          x2={65 + i * 140}
          y2="260"
          stroke="#475569"
          strokeWidth="2"
          strokeDasharray="8 6"
        />
      ))}
    </g>
  );
}

function SheetArt() {
  return (
    <g transform="translate(700, 100)" opacity="0.9">
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={i * 18}
          y={i * 12}
          width="320"
          height="180"
          rx="4"
          fill={i === 3 ? "#475569" : "#334155"}
          stroke={i === 3 ? "#f59e0b" : "#64748b"}
          strokeWidth="2"
        />
      ))}
      <line x1="20" y1="40" x2="300" y2="40" stroke="#fbbf24" strokeWidth="2" opacity="0.6" />
      <line x1="20" y1="80" x2="260" y2="80" stroke="#fbbf24" strokeWidth="2" opacity="0.4" />
    </g>
  );
}

function CircleArt() {
  return (
    <g transform="translate(720, 80)" opacity="0.9">
      <circle cx="80" cy="120" r="75" fill="none" stroke="#f59e0b" strokeWidth="6" />
      <circle cx="200" cy="130" r="90" fill="none" stroke="#cbd5e1" strokeWidth="5" />
      <circle cx="330" cy="115" r="65" fill="none" stroke="#b45309" strokeWidth="5" />
      <circle cx="80" cy="120" r="40" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
      <circle cx="200" cy="130" r="50" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
    </g>
  );
}

function UtensilsArt() {
  return (
    <g transform="translate(720, 70)" opacity="0.9">
      <path
        d="M60 220 L60 80 Q60 40 100 40 Q140 40 140 80 L140 220"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <ellipse cx="100" cy="230" rx="50" ry="12" fill="#475569" />
      <path
        d="M220 220 L220 100 Q220 50 280 50 L320 50 Q360 50 360 100 L360 220"
        fill="none"
        stroke="#e2e8f0"
        strokeWidth="7"
      />
      <ellipse cx="290" cy="232" rx="75" ry="14" fill="#334155" stroke="#f59e0b" strokeWidth="2" />
    </g>
  );
}

function FarmaArt() {
  return (
    <g transform="translate(710, 110)" opacity="0.9">
      <path
        d="M40 160 L40 60 L200 60 L200 100 L280 100 L280 160 Z"
        fill="#334155"
        stroke="#f59e0b"
        strokeWidth="3"
      />
      <path
        d="M120 160 L120 20 L320 20 L320 160 Z"
        fill="none"
        stroke="#94a3b8"
        strokeWidth="4"
      />
      <circle cx="220" cy="90" r="25" fill="none" stroke="#fbbf24" strokeWidth="3" />
    </g>
  );
}

function DesignWireArt() {
  return (
    <g transform="translate(680, 90)" opacity="0.9" fill="none">
      <path
        d="M40 180 Q120 20 200 100 T360 80 T480 160"
        stroke="#f59e0b"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M60 200 Q160 120 240 180 T420 120"
        stroke="#cbd5e1"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M80 140 Q180 200 280 140 T440 200"
        stroke="#b45309"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />
    </g>
  );
}

function RodArt() {
  return (
    <g transform="translate(700, 100)" opacity="0.9">
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} transform={`translate(${i * 55}, ${i * 8})`}>
          <rect
            x="0"
            y="0"
            width="280"
            height="28"
            rx="14"
            fill={i % 2 === 0 ? "#475569" : "#334155"}
            stroke={i === 2 ? "#f59e0b" : "#64748b"}
            strokeWidth="2"
          />
          <ellipse cx="0" cy="14" rx="14" ry="14" fill="#1e293b" stroke="#fbbf24" strokeWidth="2" />
        </g>
      ))}
    </g>
  );
}

function PipeArt() {
  return (
    <g transform="translate(680, 130)" opacity="0.9">
      <rect x="20" y="40" width="400" height="50" rx="25" fill="#334155" stroke="#94a3b8" strokeWidth="3" />
      <rect x="60" y="20" width="400" height="50" rx="25" fill="none" stroke="#f59e0b" strokeWidth="6" />
      <ellipse cx="20" cy="65" rx="22" ry="25" fill="#1e293b" stroke="#fbbf24" strokeWidth="3" />
      <ellipse cx="460" cy="45" rx="22" ry="25" fill="#1e293b" stroke="#cbd5e1" strokeWidth="3" />
      <rect x="100" y="110" width="320" height="40" rx="20" fill="none" stroke="#64748b" strokeWidth="4" />
    </g>
  );
}
