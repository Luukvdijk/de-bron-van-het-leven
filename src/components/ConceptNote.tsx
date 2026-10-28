import type { ReactNode } from "react";

// Short explanation for the church, only meant for the concept version.
export function ConceptNote({
  children,
  className = "",
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <aside
      className={`border border-dashed p-5 text-[1rem] leading-relaxed ${
        tone === "dark" ? "border-amber/50 bg-white/5 text-white/75" : "border-flame/50 bg-flame/[0.05] text-ink-soft"
      } ${className}`}
    >
      <p className={`mb-1 font-display text-lg italic ${tone === "dark" ? "text-amber" : "text-flame-deep"}`}>
        ✎ Notitie bij het concept
      </p>
      {children}
    </aside>
  );
}
