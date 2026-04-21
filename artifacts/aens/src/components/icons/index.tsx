import React from "react";
import { motion } from "framer-motion";

export const HexagonIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const ConcentricArcsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M12 2a10 10 0 0 1 10 10" />
    <path d="M12 6a6 6 0 0 1 6 6" />
    <path d="M12 10a2 2 0 0 1 2 2" />
    <path d="M2 12a10 10 0 0 1 10-10" />
    <path d="M6 12a6 6 0 0 1 6-6" />
    <path d="M10 12a2 2 0 0 1 2-2" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

export const CrosshairIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <circle cx="12" cy="12" r="8" strokeDasharray="4 4" />
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <rect x="9" y="9" width="6" height="6" />
  </svg>
);

export const OrbitalRingIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

export const NeuralDiagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <circle cx="4" cy="12" r="2" />
    <circle cx="12" cy="6" r="2" />
    <circle cx="12" cy="18" r="2" />
    <circle cx="20" cy="12" r="2" />
    <line x1="6" y1="12" x2="10" y2="7" />
    <line x1="6" y1="12" x2="10" y2="17" />
    <line x1="14" y1="7" x2="18" y2="12" />
    <line x1="14" y1="17" x2="18" y2="12" />
    <line x1="12" y1="8" x2="12" y2="16" />
  </svg>
);

export const ShieldNodeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 9v6" />
    <path d="M9 12h6" />
  </svg>
);

export const GridMatrixIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="3" y1="15" x2="21" y2="15" />
    <line x1="9" y1="3" x2="9" y2="21" />
    <line x1="15" y1="3" x2="15" y2="21" />
    <circle cx="15" cy="9" r="1" fill="currentColor" />
  </svg>
);

export const SunIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

export const MoonIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);
