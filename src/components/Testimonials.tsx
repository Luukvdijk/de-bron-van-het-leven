"use client";

import { useState } from "react";
import { testimonials } from "@/content";
import { ArrowIcon } from "./Icons";
import { Ripples } from "./Ripples";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];
  const go = (step: number) => setIndex((i) => (i + step + total) % total);

  return (
    <section id="getuigenissen" className="relative overflow-hidden bg-flame-deep py-24 text-white md:py-36">
      <Ripples className="pointer-events-none absolute -right-[22rem] top-1/2 w-[900px] -translate-y-1/2 text-white/15" />
      <div className="relative mx-auto max-w-5xl px-5 md:px-8">
        <p className="eyebrow !text-white/85">Getuigenissen</p>
        <span aria-hidden className="mt-6 block font-display text-[7rem] leading-[0.6] text-white/30">
          “
        </span>
        <figure key={index} className="fade-swap min-h-[16rem] md:min-h-[14rem]">
          <blockquote className="font-display text-[clamp(1.6rem,3.3vw,2.7rem)] font-[350] leading-[1.25] tracking-[-0.01em]">
            {current.quote}
          </blockquote>
          <figcaption className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
            {current.name}
          </figcaption>
        </figure>

        <div className="mt-12 flex items-center justify-between border-t border-white/25 pt-6">
          <p className="font-display text-lg tabular-nums text-white/80">
            {String(index + 1).padStart(2, "0")} <span className="text-white/45">/ {String(total).padStart(2, "0")}</span>
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Vorige getuigenis"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/40 transition-colors hover:bg-white hover:text-flame-deep"
            >
              <ArrowIcon className="h-5 w-5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Volgende getuigenis"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/40 transition-colors hover:bg-white hover:text-flame-deep"
            >
              <ArrowIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
