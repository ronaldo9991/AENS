import { Link } from "wouter";
import logoMark from "@/assets/aens-logo-mark.png";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  asLink?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { mark: 28, gap: "gap-2", text: "text-base" },
  md: { mark: 36, gap: "gap-2.5", text: "text-2xl" },
  lg: { mark: 56, gap: "gap-3", text: "text-3xl" },
};

export function LogoMark({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <img
      src={logoMark}
      alt="AENS"
      width={size}
      height={size}
      className={`object-contain shrink-0 drop-shadow-[0_0_12px_rgba(208,24,227,0.45)] ${className}`}
      style={{ width: size, height: size }}
    />
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
      <span className="cursor-pointer inline-flex items-center group">{content}</span>
    </Link>
  );
}
