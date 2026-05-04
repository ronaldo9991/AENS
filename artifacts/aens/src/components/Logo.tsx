import { Link } from "wouter";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  asLink?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { width: 46, gap: "gap-2", wordmark: 84 },
  md: { width: 56, gap: "gap-2.5", wordmark: 104 },
  lg: { width: 66, gap: "gap-3", wordmark: 124 },
};

export function LogoMark({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <img
      src="/AENSLOGO.png"
      alt="AENS"
      width={size}
      height={size}
      className={`object-contain shrink-0 drop-shadow-[0_0_12px_rgba(225,230,240,0.45)] ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

export default function Logo({ size = "md", asLink = true, className = "" }: LogoProps) {
  const s = sizeMap[size];

  const content = (
    <span className={`inline-flex items-center ${s.gap} ${className}`} data-testid="logo-aens">
      <img
        src="/AENSLOGO.png"
        alt="AENS"
        className="h-auto shrink-0 object-contain drop-shadow-[0_0_12px_rgba(225,230,240,0.45)]"
        style={{ width: s.width }}
      />
      <img
        src="/aens-wordmark.png"
        alt="AENS"
        className="h-auto shrink-0 object-contain"
        style={{ width: s.wordmark }}
      />
    </span>
  );

  if (!asLink) return content;

  return (
    <Link href="/">
      <span className="cursor-pointer inline-flex items-center group">{content}</span>
    </Link>
  );
}
