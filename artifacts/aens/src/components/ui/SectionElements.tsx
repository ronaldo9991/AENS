import React from "react";

export function SectionDivider({
  id,
  label,
  className = "mt-16 mb-16",
}: {
  id: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`relative w-full h-12 flex items-center justify-center opacity-80 ${className}`}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
      <div className="absolute inset-0 flex justify-between px-8">
        <div className="flex flex-col justify-between h-full py-2">
          {[1,2,3,4,5].map((_,i) => <div key={i} className="w-[1px] h-1.5 bg-primary/40" />)}
        </div>
        <div className="flex flex-col justify-between h-full py-2">
          {[1,2,3,4,5].map((_,i) => <div key={i} className="w-[1px] h-1.5 bg-primary/40" />)}
        </div>
      </div>
      <div className="bg-background px-4 z-10 font-mono text-[10px] tracking-widest text-primary border border-primary/20 flex items-center gap-3">
        <span className="opacity-50">// SECTION {id}</span>
        <span>{label}</span>
      </div>
    </div>
  );
}

export function CrosshairOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Corner Crosshairs */}
      <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-primary/30" />
      <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-primary/30" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-primary/30" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-primary/30" />
    </div>
  );
}
