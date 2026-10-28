"use client";

import { useMemo } from "react";
import { formatMonth, formatWeekday, upcoming } from "@/lib/schedule";
import { useToday } from "@/lib/useToday";
import { ConceptNote } from "./ConceptNote";
import { Reveal } from "./Reveal";

export function Agenda() {
  const today = useToday();
  const items = useMemo(() => (today ? upcoming(today).slice(0, 6) : []), [today]);

  return (
    <section id="agenda" className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">Prikbord</p>
            <h2 className="h2">
              Binnenkort bij <em className="text-flame-deep">De Bron</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <ConceptNote className="max-w-sm">
              Deze agenda vult zichzelf met jullie vaste samenkomsten, dus hij loopt nooit meer achter. Bijzondere
              activiteiten, zoals een gastspreker of de paasbrunch, zetten jullie er zelf bij.
            </ConceptNote>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.length === 0
            ? Array.from({ length: 6 }, (_, i) => (
                <div key={i} className="h-[8.5rem] animate-pulse rounded-3xl bg-sand" />
              ))
            : items.map(({ gathering, date, tag }, i) => (
                <Reveal key={gathering.id} delay={i * 70}>
                  <article className="group flex h-full gap-5 rounded-3xl border border-ink/10 bg-white/55 p-6 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-flame/40 hover:shadow-[0_25px_50px_-30px_rgb(29_22_18/0.45)]">
                    <div className="flex w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-sand py-3 transition-colors duration-500 group-hover:bg-flame group-hover:text-white">
                      <span className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-flame-deep transition-colors duration-500 group-hover:text-white">
                        {formatMonth(date)}
                      </span>
                      <span className="font-display text-4xl leading-none">{date.getDate()}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-soft">
                        {formatWeekday(date)}
                        {gathering.time && (
                          <span className="font-medium normal-case tracking-normal">
                            {", "}
                            {gathering.time.replace(" uur", "")}
                          </span>
                        )}
                      </p>
                      <h3 className="mt-1.5 font-display text-2xl leading-tight">{gathering.title}</h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {tag && (
                          <span className="rounded-full bg-flame/10 px-2.5 py-1 text-[0.7rem] font-semibold text-flame-deep">
                            {tag}
                          </span>
                        )}
                        {gathering.audience && (
                          <span className="rounded-full border border-ink/15 px-2.5 py-1 text-[0.7rem] font-medium text-ink-soft">
                            {gathering.audience}
                          </span>
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
