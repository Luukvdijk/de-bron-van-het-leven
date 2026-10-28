import Image from "next/image";
import { about, photos, site } from "@/content";
import { Reveal } from "./Reveal";
import { Ripples } from "./Ripples";

export function About() {
  return (
    <section id="over-ons" className="relative overflow-hidden bg-sand py-24 md:py-36">
      <Ripples rings={5} className="pointer-events-none absolute -right-60 -top-60 w-[720px] text-flame/20" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="max-w-5xl font-display text-[clamp(1.95rem,4.3vw,3.7rem)] font-[350] leading-[1.1] tracking-[-0.02em]">
            {about.statementStart} <em className="text-flame-deep">{about.statementAccent}</em> {about.statementEnd}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-14 md:mt-24 lg:grid-cols-2 lg:items-center lg:gap-24">
          <Reveal className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-b-[2rem] rounded-t-full bg-sand-deep">
              <Image
                src={photos.shofar.src}
                alt={photos.shofar.alt}
                fill
                sizes="(min-width: 1024px) 28rem, 90vw"
                className="object-cover object-[60%_center]"
              />
            </div>
          </Reveal>

          <div>
            {about.paragraphs.map((text, i) => (
              <Reveal key={i} delay={i * 100}>
                <p className="mb-6 text-lg leading-relaxed text-ink-soft md:text-xl">{text}</p>
              </Reveal>
            ))}
            <Reveal delay={250} className="mt-10 border-t border-ink/15 pt-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink-soft">Voorgangers</p>
              <p className="mt-3 font-display text-3xl md:text-4xl">{site.leaders}</p>
              <p className="mt-3 max-w-md leading-relaxed text-ink-soft">{about.leadersText}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
