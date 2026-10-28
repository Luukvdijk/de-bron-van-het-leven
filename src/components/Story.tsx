import Image from "next/image";
import { photos, story } from "@/content";
import { Lancet, Quatrefoil } from "./Glass";
import { Reveal } from "./Reveal";

export function Story() {
  return (
    <section id="ontstaan" className="ashlar py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <h2 className="h2">
              De geboorte van een <em className="text-flame-deep">gemeente</em>
            </h2>
            <p className="mt-6 max-w-md text-xl leading-relaxed text-ink-soft">{story.intro}</p>
          </Reveal>
          <Reveal delay={150} className="mt-12 hidden max-w-[20rem] lg:block">
            <Lancet ratio={1.3}>
              <Image src={photos.preaching.src} alt={photos.preaching.alt} fill sizes="20rem" className="object-cover" />
            </Lancet>
          </Reveal>
        </div>

        <ol className="relative ml-3 border-l-2 border-flame/40">
          {story.steps.map((step, i) => (
            <li key={step.title} className="relative pb-14 pl-10 last:pb-0 md:pl-14">
              <span className="absolute -left-[0.95rem] top-1 grid h-7 w-7 place-items-center bg-white">
                <Quatrefoil className="h-6 w-6 text-flame" />
              </span>
              <Reveal delay={i * 60}>
                <p className="font-display text-xl italic text-flame-deep">{step.when}</p>
                <h3 className="mt-1 font-display text-[2rem] font-semibold leading-tight md:text-[2.4rem]">{step.title}</h3>
                <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
