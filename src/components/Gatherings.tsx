import { gatheringGroups, gatherings } from "@/content";
import { Reveal } from "./Reveal";
import { Ripples } from "./Ripples";

export function Gatherings() {
  return (
    <section id="samenkomsten" className="relative overflow-hidden bg-night py-24 text-paper md:py-36">
      <Ripples className="pointer-events-none absolute -bottom-[30rem] -left-[20rem] w-[1100px] text-flame/20" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-end">
          <Reveal>
            <p className="eyebrow !text-amber">Samenkomsten</p>
            <h2 className="h2">
              Samen aanbidden, leren en <em className="text-flame">groeien</em>.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/65">
              Als gelovigen zich kunnen vinden in de visie van de gemeente, zullen ze met blijdschap actief deelnemen
              aan de gemeenschap van Jezus Christus.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <figure className="border-l-2 border-flame pl-6">
              <blockquote className="font-display text-2xl font-light italic leading-snug md:text-3xl">
                “Indien openbaring ontbreekt, verwildert het volk.”
              </blockquote>
              <figcaption className="mt-3 text-sm tracking-wide text-paper/55">Spreuken 29:18a</figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-14 md:mt-20 md:grid-cols-3 md:gap-10">
          {gatheringGroups.map((group, gi) => {
            const items = gatherings.filter((g) => g.group === group.id);
            return (
              <Reveal key={group.id} delay={gi * 120}>
                <h3 className="flex items-baseline justify-between border-b border-paper/20 pb-4 text-xs font-bold uppercase tracking-[0.2em] text-amber">
                  {group.label}
                  <span className="font-display text-base normal-case tracking-normal text-paper/40">
                    {String(items.length).padStart(2, "0")}
                  </span>
                </h3>
                <ul>
                  {items.map((item) => (
                    <li key={item.id} className="group border-b border-paper/10 py-7">
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="font-display text-[1.7rem] leading-tight transition-colors group-hover:text-flame">
                          {item.title}
                        </h4>
                        {item.audience && (
                          <span className="mt-1 shrink-0 rounded-full border border-paper/25 px-2.5 py-1 text-[0.7rem] font-medium text-paper/80">
                            {item.audience}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm font-semibold text-flame">
                        {item.when}
                        {item.time && `, ${item.time}`}
                      </p>
                      <p className="mt-2 text-[0.95rem] leading-relaxed text-paper/60">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
