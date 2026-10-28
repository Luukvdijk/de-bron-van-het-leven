"use client";

import type { CSSProperties } from "react";
import { gatherings, site } from "@/content";
import { formatDay, matches, nextOccurrence } from "@/lib/schedule";
import { useToday } from "@/lib/useToday";
import { ArrowUpRightIcon } from "./Icons";

const service = gatherings.find((g) => g.id === "eredienst")!;
const communion = gatherings.find((g) => g.id === "avondmaal")!;

export function NextService({ className = "" }: { className?: string }) {
  const today = useToday();
  const next = today ? nextOccurrence(service.rule, today) : null;
  const withCommunion = next ? matches(communion.rule, next) : false;

  return (
    <div
      className={`rise w-[17rem] rounded-3xl bg-white/95 p-5 shadow-[0_30px_60px_-25px_rgb(29_22_18/0.45)] ring-1 ring-ink/5 backdrop-blur ${className}`}
      style={{ "--d": "700ms" } as CSSProperties}
    >
      <p className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-ink-soft">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flame opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-flame" />
        </span>
        Eerstvolgende eredienst
      </p>
      <p className="mt-3 font-display text-[1.65rem] leading-tight">{next ? formatDay(next) : "Elke zondag"}</p>
      <p className="mt-1 text-sm text-ink-soft">{service.time}</p>
      {withCommunion && (
        <p className="mt-3 inline-flex rounded-full bg-flame/10 px-3 py-1 text-xs font-semibold text-flame-deep">
          Met Avondmaalviering
        </p>
      )}
      <a
        href={site.mapsUrl}
        target="_blank"
        rel="noreferrer"
        className="group mt-4 flex items-center justify-between border-t border-ink/10 pt-3 text-sm font-medium"
      >
        {site.street}, {site.city}
        <ArrowUpRightIcon className="h-4 w-4 text-flame-deep transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}
