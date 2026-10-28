import type { ReactNode } from "react";

// Short explanation for the church, only meant for the concept version.
export function ConceptNote({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <aside
      className={`rounded-2xl border border-dashed border-flame/50 bg-flame/[0.06] p-5 text-sm leading-relaxed text-ink-soft ${className}`}
    >
      <p className="mb-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-flame-deep">
        ✎ Notitie bij het concept
      </p>
      {children}
    </aside>
  );
}
