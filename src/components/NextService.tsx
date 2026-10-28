"use client";

import type { CSSProperties } from "react";
import { gatherings, site } from "@/content";
import { formatDay, matches, nextOccurrence } from "@/lib/schedule";
import { useToday } from "@/lib/useToday";
import { ArrowUpRightIcon } from "./Icons";

const service = gatherings.find((g) => g.id === "eredienst")!;
const communion = gatherings.find((g) => g.id === "avondmaal")!;

// Looks like a small engraved plaque by the church door.
export function NextService({ className = "" }: { className?: string }) {
  const today = useToday();
  const next = today ? nextOccurrence(service.rule, today) : null;
  const withCommunion = next ? matches(communion.rule, next) : false;

  return (
    <div
      className={`rise max-w-xl bg-night p-1.5 text-white shadow-[0_30px_60px_-25px_rgb(14_14_16/0.7)] ${className}`}
      style={{ "--d": "600ms" } as CSSProperties}
    >
      <div className="grid gap-4 border border-amber/50 px-5 py-4 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="font-inscription text-[0.72rem] tracking-[0.2em] text-amber">Eerstvolgende eredienst</p>
          <p className="mt-1 font-display text-[1.8rem] font-medium leading-tight">{next ? formatDay(next) : "Elke zondag"}</p>
          <p className="text-white/70">
            {service.time}
            {withCommunion && <span className="font-display text-lg italic text-amber">, met Avondmaalviering</span>}
          </p>
        </div>
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 border-t border-amber/30 pt-3 text-[0.98rem] sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0"
        >
          <span>
            {site.street}
            <span className="sm:hidden">, </span>
            <br className="max-sm:hidden" />
            {site.city}
          </span>
          <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-flame transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
