import { visit } from "@/content";
import { Niche, Ornament, Roundel } from "./Glass";
import { ArrowUpRightIcon, stepIcons } from "./Icons";
import { Reveal } from "./Reveal";

// The four parts of a first Sunday as an arcade of arched niches.
export function Visit() {
  return (
    <section id="bezoek" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="h2">
            Zo ziet je eerste <em className="text-flame-deep">zondag</em> eruit.
          </h2>
          <Ornament className="mt-7" />
          <p className="mt-7 text-xl leading-relaxed text-ink-soft">{visit.intro}</p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visit.steps.map((step, i) => {
            const Icon = stepIcons[step.icon as keyof typeof stepIcons];
            return (
              <Reveal key={step.title} delay={i * 90} className="h-full">
                <Niche
                  head={
                    <Roundel className="aspect-square w-full">
                      <Icon className="h-[30%] w-[30%]" />
                    </Roundel>
                  }
                >
                  <p className="smallcaps text-[1.05rem] text-flame-deep">{step.when}</p>
                  <h3 className="mt-1 font-display text-[1.75rem] font-semibold leading-tight">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{step.text}</p>
                  {step.link && (
                    <a
                      href={step.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group mt-4 inline-flex items-center gap-1.5 text-ink underline decoration-flame decoration-2 underline-offset-[6px]"
                    >
                      {step.link.label}
                      <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  )}
                </Niche>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
