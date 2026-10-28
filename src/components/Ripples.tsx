import type { CSSProperties } from "react";

// The spring ("bron") motif: rings that keep flowing out from one point.
export function Ripples({ className = "", rings = 7 }: { className?: string; rings?: number }) {
  return (
    <svg viewBox="0 0 800 800" fill="none" aria-hidden className={`ripples ${className}`}>
      {Array.from({ length: rings }, (_, i) => (
        <circle
          key={i}
          cx="400"
          cy="400"
          r="398"
          stroke="currentColor"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          style={{ "--i": i, "--n": rings } as CSSProperties}
        />
      ))}
      <circle cx="400" cy="400" r="5" fill="currentColor" />
    </svg>
  );
}

export function RippleMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden className={className}>
      <circle cx="20" cy="20" r="4" fill="currentColor" />
      <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="20" cy="20" r="17" stroke="currentColor" strokeWidth="2.4" opacity="0.45" />
    </svg>
  );
}
