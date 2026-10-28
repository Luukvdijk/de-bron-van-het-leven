"use client";

import { useState } from "react";
import { testimonials } from "@/content";
import { Quatrefoil, StainedGlass } from "./Glass";
import { ArrowIcon } from "./Icons";

// A stone tablet in front of a wall of glowing glass.
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];
  const go = (step: number) => setIndex((i) => (i + step + total) % total);

  return (
    <section id="getuigenissen" className="relative overflow-hidden bg-night py-24 md:py-32">
      <div className="absolute inset-0 opacity-90">
        <StainedGlass ratio={0.6} seed={21} palette="flame" quarry={0.32} />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(14_14_16/0.15),rgb(14_14_16/0.75))]" />

      <div className="relative mx-auto max-w-3xl px-5">
        <div className="bg-white p-1.5 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.8)]">
          <div className="border border-flame/50 px-6 py-10 text-center md:px-14 md:py-14">
            <Quatrefoil className="mx-auto h-6 w-6 text-flame" />
            <figure key={index} className="fade-swap mt-6 min-h-[15rem] md:min-h-[12rem]">
              <blockquote className="font-display text-[clamp(1.5rem,2.8vw,2.2rem)] font-medium italic leading-[1.3]">
                “{current.quote}”
              </blockquote>
              <figcaption className="mt-6 font-inscription text-sm font-semibold uppercase tracking-[0.2em] text-flame-deep">
                {current.name}
              </figcaption>
            </figure>
            <div className="mt-8 flex items-center justify-center gap-5">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Vorige getuigenis"
                className="grid h-11 w-11 place-items-center border border-ink/30 transition-colors hover:border-flame-deep hover:bg-flame-deep hover:text-white"
              >
                <ArrowIcon className="h-5 w-5 rotate-180" />
              </button>
              <p className="font-display text-xl tabular-nums text-ink-soft">
                {index + 1} / {total}
              </p>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Volgende getuigenis"
                className="grid h-11 w-11 place-items-center border border-ink/30 transition-colors hover:border-flame-deep hover:bg-flame-deep hover:text-white"
              >
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
