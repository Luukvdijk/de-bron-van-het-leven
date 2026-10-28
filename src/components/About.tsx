import Image from "next/image";
import { about, photos, site } from "@/content";
import { Lancet, Ornament } from "./Glass";
import { Reveal } from "./Reveal";

export function About() {
  const first = about.statementStart.charAt(0);
  const rest = about.statementStart.slice(1);

  return (
    <section id="over-ons" className="ashlar py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
        <Reveal className="mx-auto w-full max-w-[22rem]">
          <Lancet ratio={1.6}>
            <Image
              src={photos.shofar.src}
              alt={photos.shofar.alt}
              fill
              sizes="(min-width: 1024px) 22rem, 80vw"
              className="object-cover object-[62%_center]"
            />
          </Lancet>
        </Reveal>

        <div>
          <Reveal>
            <p className="font-display text-[clamp(1.85rem,3.5vw,3rem)] font-medium leading-[1.15]">
              <span className="dropcap" aria-hidden>
                {first}
              </span>
              <span className="sr-only">{first}</span>
              {rest} <em className="text-flame-deep">{about.statementAccent}</em> {about.statementEnd}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {about.paragraphs.map((text, i) => (
              <Reveal key={i} delay={i * 100}>
                <p className="leading-relaxed text-ink-soft">{text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-12">
            <Ornament align="start" />
            <p className="mt-6 font-display text-[2.1rem] font-semibold leading-tight md:text-[2.5rem]">{site.leaders}</p>
            <p className="mt-2 max-w-lg leading-relaxed text-ink-soft">{about.leadersText}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
