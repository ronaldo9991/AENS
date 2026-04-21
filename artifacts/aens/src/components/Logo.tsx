import { Link } from "wouter";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  asLink?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { mark: 22, gap: "gap-2", text: "text-lg" },
  md: { mark: 28, gap: "gap-2.5", text: "text-2xl" },
  lg: { mark: 40, gap: "gap-3", text: "text-3xl" },
};

export function LogoMark({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="aens-mark-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
      </defs>
      {/* Outer hex frame */}
      <path
        d="M20 2 L36 11 L36 29 L20 38 L4 29 L4 11 Z"
        stroke="url(#aens-mark-grad)"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Inner geometric A: two strokes + crossbar */}
      <path
        d="M12 30 L20 10 L28 30"
        stroke="url(#aens-mark-grad)"
        strokeWidth="2.2"
        strokeLinecap="square"
        strokeLinejoin="round"
        fill="none"
      />
      <line x1="15" y1="23" x2="25" y2="23" stroke="url(#aens-mark-grad)" strokeWidth="1.6" strokeLinecap="square" />
      {/* Precision nodes */}
      <circle cx="20" cy="10" r="1.6" fill="hsl(var(--primary))" />
      <circle cx="12" cy="30" r="1.2" fill="hsl(var(--primary))" opacity="0.7" />
      <circle cx="28" cy="30" r="1.2" fill="hsl(var(--primary))" opacity="0.7" />
      {/* Corner ticks */}
      <line x1="36" y1="11" x2="38.5" y2="9.5" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.6" />
      <line x1="4" y1="11" x2="1.5" y2="9.5" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

export default function Logo({ size = "md", asLink = true, className = "" }: LogoProps) {
  const s = sizeMap[size];

  const content = (
    <span className={`inline-flex items-center ${s.gap} ${className}`} data-testid="logo-aens">
      <LogoMark size={s.mark} />
      <span className={`font-serif ${s.text} font-bold tracking-[0.18em] leading-none text-foreground`}>
        AENS
      </span>
    </span>
  );

  if (!asLink) return content;

  return (
    <Link href="/">
      <span className="cursor-pointer inline-flex items-center group">
        {content}
      </span>
    </Link>
  );
}
