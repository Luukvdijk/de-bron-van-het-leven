"use client";

import { useMemo } from "react";
import { formatMonth, formatWeekday, upcoming } from "@/lib/schedule";
import { useToday } from "@/lib/useToday";
import { ConceptNote } from "./ConceptNote";
import { RoseWindow } from "./Glass";
import { Reveal } from "./Reveal";

// Dark nave under a large rose window; dates shown like the number cards on a hymn board.
export function Agenda() {
  const today = useToday();
  const items = useMemo(() => (today ? upcoming(today).slice(0, 6) : []), [today]);

  return (
    <section id="agenda" className="relative overflow-hidden bg-night py-24 text-white md:py-32">
      <RoseWindow className="glow pointer-events-none absolute left-1/2 top-[-14rem] w-[44rem] -translate-x-1/2 opacity-25" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <h2 className="h2">
              Binnenkort bij <em className="text-flame">De Bron</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <ConceptNote tone="dark" className="max-w-sm">
              Deze agenda vult zichzelf met jullie vaste samenkomsten, dus hij loopt nooit meer achter. Bijzondere
              activiteiten, zoals een gastspreker of de paasbrunch, zetten jullie er zelf bij.
            </ConceptNote>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.length === 0
            ? Array.from({ length: 6 }, (_, i) => <div key={i} className="h-[8.5rem] animate-pulse bg-white/5" />)
            : items.map(({ gathering, date, tag }, i) => (
                <Reveal key={gathering.id} delay={i * 70}>
                  <article className="group flex h-full gap-5 border border-white/12 bg-night-light/80 p-5 transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-flame/60">
                    <div className="flex w-[4.6rem] shrink-0 flex-col items-center justify-center border-[3px] border-[#3a2617] bg-white py-2 text-ink shadow-[inset_0_-6px_10px_-8px_rgb(0_0_0/0.4)]">
                      <span className="font-inscription text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-flame-deep">
                        {formatMonth(date)}
                      </span>
                      <span className="font-display text-[2.6rem] font-bold leading-none">{date.getDate()}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="smallcaps text-[1rem] text-amber">
                        {formatWeekday(date)}
                        {gathering.time && `, ${gathering.time.replace(" uur", "")}`}
                      </p>
                      <h3 className="mt-0.5 font-display text-[1.7rem] font-semibold leading-tight">{gathering.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {tag && <span className="font-display text-lg italic text-flame">{tag}</span>}
                        {gathering.audience && (
                          <span className="border border-white/25 px-2 py-0.5 text-sm text-white/75">{gathering.audience}</span>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
        </div>
      </div>
    </section>
  );
}
