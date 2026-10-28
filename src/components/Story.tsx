import Image from "next/image";
import { photos, story } from "@/content";
import { Reveal } from "./Reveal";

export function Story() {
  return (
    <section id="ontstaan" className="bg-sand py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <h2 className="h2">
              De geboorte van een <em className="text-flame-deep">gemeente</em>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">{story.intro}</p>
          </Reveal>
          <Reveal delay={150} className="mt-10 hidden lg:block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-sand-deep">
              <Image src={photos.preaching.src} alt={photos.preaching.alt} fill sizes="38vw" className="object-cover" />
            </div>
          </Reveal>
        </div>

        <ol className="relative ml-2 border-l border-ink/15">
          {story.steps.map((step, i) => (
            <li key={step.title} className="relative pb-14 pl-10 last:pb-0 md:pl-14">
              <span className="absolute -left-[0.6rem] top-1.5 h-[1.15rem] w-[1.15rem] rounded-full border-4 border-sand bg-flame ring-1 ring-flame/50" />
              <Reveal delay={i * 60}>
                <p className="font-display text-lg italic text-flame-deep">{step.when}</p>
                <h3 className="mt-1 font-display text-3xl leading-tight md:text-[2.4rem]">{step.title}</h3>
                <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
