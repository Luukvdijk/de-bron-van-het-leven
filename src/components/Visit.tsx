import Image from "next/image";
import { photos, visit } from "@/content";
import { ArrowUpRightIcon, stepIcons } from "./Icons";
import { Reveal } from "./Reveal";

export function Visit() {
  return (
    <section id="bezoek" className="py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <h2 className="h2">
              Zo ziet je eerste <em className="text-flame-deep">zondag</em> eruit.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">{visit.intro}</p>
          </Reveal>
          <Reveal delay={150} className="mt-10">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-sand">
              <Image
                src={photos.congregation.src}
                alt={photos.congregation.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <ul className="border-t border-ink/10">
          {visit.steps.map((step, i) => {
            const Icon = stepIcons[step.icon as keyof typeof stepIcons];
            return (
              <li key={step.title} className="border-b border-ink/10">
                <Reveal delay={i * 80} className="grid grid-cols-[auto_1fr] gap-6 py-9 md:gap-8 md:py-11">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-sand text-flame-deep">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-flame-deep">{step.when}</p>
                    <h3 className="mt-2 font-display text-[1.9rem] leading-tight md:text-4xl">{step.title}</h3>
                    <p className="mt-3 max-w-lg leading-relaxed text-ink-soft">{step.text}</p>
                    {step.link && (
                      <a
                        href={step.link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group mt-4 inline-flex items-center gap-2 font-semibold text-ink underline decoration-flame decoration-2 underline-offset-[6px]"
                      >
                        {step.link.label}
                        <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    )}
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
