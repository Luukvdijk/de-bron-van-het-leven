import Image from "next/image";
import type { CSSProperties } from "react";
import { hero, photos } from "@/content";
import { Lancet, Ornament, PhotoLancet, RoseWindow, StainedGlass } from "./Glass";
import { ArrowIcon } from "./Icons";
import { NextService } from "./NextService";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section id="top" className="ashlar relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="light-pool left-[2%] top-[58%] h-80 w-80 bg-flame/30" />
        <span className="light-pool left-[28%] top-[72%] h-72 w-72 bg-cobalt/25 [animation-delay:-7s]" />
        <span className="light-pool right-[8%] top-[6%] h-96 w-96 bg-amber/20 [animation-delay:-13s]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-10 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:pb-28 lg:pt-14">
        <div>
          <h1
            className="rise font-display text-[clamp(3.3rem,7.4vw,6.6rem)] font-medium leading-[0.94] tracking-[-0.015em]"
            style={delay(80)}
          >
            Kom, en vier het <em className="text-flame-deep">feest</em> met ons mee.
          </h1>
          <div className="rise mt-8" style={delay(200)}>
            <Ornament align="start" />
          </div>
          <p className="rise mt-7 max-w-xl text-xl leading-relaxed text-ink-soft md:text-[1.4rem]" style={delay(280)}>
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
          <NextService className="mt-12" />
        </div>

        {/* Church facade: a rose window above three lancets */}
        <div className="relative mx-auto w-full max-w-[30rem]">
          <div className="rise mx-auto w-[40%]" style={delay(150)}>
            <RoseWindow className="glow w-full" />
          </div>
          <div className="mt-4 flex items-end justify-center gap-[4%]">
            <Lancet ratio={2.45} className="rise w-[26%]" style={delay(250)}>
              <StainedGlass ratio={2.45} seed={3} palette="blue" emblem="drop" />
            </Lancet>
            <div className="rise w-[36%]" style={delay(200)}>
              <PhotoLancet ratio={2.15} seed={11} palette="flame">
                <Image
                  src={photos.heroArch.src}
                  alt={photos.heroArch.alt}
                  fill
                  preload
                  sizes="(min-width: 1024px) 180px, 36vw"
                  className="object-cover object-[50%_35%]"
                />
              </PhotoLancet>
            </div>
            <Lancet ratio={2.45} className="rise w-[26%]" style={delay(300)}>
              <StainedGlass ratio={2.45} seed={7} palette="flame" emblem="flame" />
            </Lancet>
          </div>
          <div className="rise mx-auto mt-2 h-3 w-[104%] -translate-x-[2%] bg-stone-dark shadow-[0_8px_16px_-8px_rgb(0_0_0/0.35)]" style={delay(300)} />
        </div>
      </div>
    </section>
  );
}
