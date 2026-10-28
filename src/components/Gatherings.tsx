import { Fragment } from "react";
import { gatheringGroups, gatherings } from "@/content";
import { Column } from "./Column";
import { Ornament, RoseWindow } from "./Glass";
import { Reveal } from "./Reveal";

// A portico: pediment with a rose window, the title carved in the frieze, columns between the groups.
export function Gatherings() {
  return (
    <section id="samenkomsten" className="overflow-hidden bg-stone py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="relative hidden md:block">
            <svg viewBox="0 0 1000 130" preserveAspectRatio="none" className="block w-full" aria-hidden>
              <path d="M0 130L500 4L1000 130Z" fill="var(--color-stone-light)" stroke="var(--color-stone-deep)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
              <path d="M70 120L500 20L930 120Z" fill="none" stroke="var(--color-stone-dark)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
            </svg>
            <RoseWindow className="absolute left-1/2 top-[60%] w-20 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="border-y-[1.5px] border-stone-deep bg-stone-light px-4 py-5 text-center">
            <h2 className="carved font-inscription text-[clamp(1.45rem,4.4vw,3.4rem)] font-semibold uppercase tracking-[0.1em] sm:tracking-[0.2em]">
              Samenkomsten
            </h2>
          </div>
          <div className="h-3 border-b-[1.5px] border-stone-deep bg-stone-dark/70" />
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-2xl text-center">
          <blockquote className="font-display text-[1.75rem] italic leading-snug md:text-3xl">
            “Indien openbaring ontbreekt, verwildert het volk.”
          </blockquote>
          <p className="mt-2 smallcaps text-ink-soft">Spreuken 29:18a</p>
          <p className="mt-6 leading-relaxed text-ink-soft">
            Als gelovigen zich kunnen vinden in de visie van de gemeente, zullen ze met blijdschap actief deelnemen aan
            de gemeenschap van Jezus Christus.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-14 md:flex-row md:items-stretch md:gap-0">
          <Column className="hidden w-14 shrink-0 md:flex" />
          {gatheringGroups.map((group, gi) => {
            const items = gatherings.filter((g) => g.group === group.id);
            return (
              <Fragment key={group.id}>
                <Reveal delay={gi * 120} className="flex-1 md:px-8 md:py-4">
                  <h3 className="text-center font-display text-3xl italic text-flame-deep">{group.label}</h3>
                  <Ornament className="mt-3" />
                  <ul className="mt-6 space-y-7">
                    {items.map((item) => (
                      <li key={item.id} className="text-center">
                        <h4 className="font-display text-[1.65rem] font-semibold leading-tight">{item.title}</h4>
                        <p className="mt-1 smallcaps text-[1.02rem] text-flame-deep">
                          {item.when}
                          {item.time && `, ${item.time}`}
                        </p>
                        {item.audience && (
                          <p className="mt-2 inline-block border border-ink/25 px-2.5 py-0.5 text-sm text-ink-soft">{item.audience}</p>
                        )}
                        <p className="mx-auto mt-2 max-w-xs text-[1.02rem] leading-relaxed text-ink-soft">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Column className="hidden w-14 shrink-0 md:flex" />
              </Fragment>
            );
          })}
        </div>
        <div className="hidden md:block" aria-hidden>
          <div className="h-3 border-y-[1.5px] border-stone-deep bg-stone-light" />
          <div className="-mx-4 h-3 border-b-[1.5px] border-stone-deep bg-stone-dark/70" />
          <div className="-mx-8 h-3 border-b-[1.5px] border-stone-deep bg-stone-light" />
        </div>
      </div>
    </section>
  );
}
