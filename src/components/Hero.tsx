import Image from "next/image";
import type { CSSProperties } from "react";
import { hero, photos } from "@/content";
import { ArrowIcon } from "./Icons";
import { NextService } from "./NextService";
import { Ripples } from "./Ripples";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <Ripples className="pointer-events-none absolute left-1/2 top-[58%] w-[160vw] max-w-[1300px] -translate-y-1/2 text-flame/25 lg:left-[46%] lg:top-1/2 lg:w-[100vw]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-8 md:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10 lg:pb-32 lg:pt-14">
        <div>
          <h1
            className="rise font-display text-[clamp(3.1rem,7.4vw,6.6rem)] font-[350] leading-[0.95] tracking-[-0.03em]"
            style={delay(120)}
          >
            Kom, en vier het{" "}
            <span className="relative inline-block italic text-flame-deep">
              feest
              <svg
                viewBox="0 0 200 24"
                preserveAspectRatio="none"
                aria-hidden
                className="swash absolute -bottom-[0.12em] left-[-4%] h-[0.22em] w-[108%] text-flame"
              >
                <path
                  d="M3 16 C 45 5, 120 3, 197 12"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                  pathLength={1}
                />
              </svg>
            </span>{" "}
            met ons mee.
          </h1>
          <p className="rise mt-8 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl" style={delay(260)}>
            {hero.intro}
          </p>
          <div className="rise mt-10 flex flex-wrap items-center gap-3" style={delay(400)}>
            <a href="#bezoek" className="btn btn-primary">
              Plan je eerste bezoek
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a href="#samenkomsten" className="btn btn-ghost">
              Alle samenkomsten
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[25rem] sm:max-w-[28rem]">
          <div className="relative">
            <div
              className="rise absolute inset-0 translate-x-5 -translate-y-5 rounded-b-[2.5rem] rounded-t-full border-[1.5px] border-flame/60"
              style={delay(300)}
            />
            <div
              className="rise relative aspect-[4/5.3] overflow-hidden rounded-b-[2.5rem] rounded-t-full bg-sand shadow-[0_40px_80px_-40px_rgb(29_22_18/0.6)]"
              style={delay(200)}
            >
              <Image
                src={photos.heroArch.src}
                alt={photos.heroArch.alt}
                fill
                preload
                sizes="(min-width: 640px) 448px, 90vw"
                className="object-cover"
              />
            </div>
            <div
              className="rise absolute -left-5 bottom-16 h-28 w-28 overflow-hidden rounded-full border-[6px] border-paper shadow-xl sm:-left-14 sm:bottom-24 sm:h-36 sm:w-36"
              style={delay(500)}
            >
              <Image src={photos.heroCircle.src} alt={photos.heroCircle.alt} fill sizes="144px" className="object-cover" />
            </div>
          </div>
          <NextService className="relative z-10 -mt-14 ml-auto sm:absolute sm:-bottom-12 sm:-right-10 sm:mt-0" />
        </div>
      </div>
    </section>
  );
}
