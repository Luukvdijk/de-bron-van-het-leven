"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content";
import { RoseWindow } from "./Glass";
import { ArrowIcon, HeartIcon } from "./Icons";
import { Reveal } from "./Reveal";

const field =
  "w-full border border-white/25 bg-white/[0.06] px-4 py-3 text-white placeholder:text-white/45 outline-none transition-colors focus:border-amber";

// Both cards get a shallow arched top, like a church tablet.
const archTop = "[border-top-left-radius:50%_3.5rem] [border-top-right-radius:50%_3.5rem]";

export function Connect() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 md:px-8 lg:grid-cols-2">
        <Reveal className="h-full">
          <div id="nieuwsbrief" className={`relative h-full overflow-hidden bg-night p-2 text-white ${archTop}`}>
            <div className={`relative h-full border border-amber/40 px-7 pb-10 pt-16 md:px-12 ${archTop}`}>
              <RoseWindow className="pointer-events-none absolute -right-24 -top-24 w-64 opacity-25" />
              <h2 className="relative font-display text-[2.6rem] font-medium leading-tight md:text-5xl">Blijf op de hoogte</h2>
              <p className="relative mt-3 max-w-md leading-relaxed text-white/70">
                Wil je weten wat er speelt in de gemeente? Schrijf je in voor de digitale nieuwsbrief.
              </p>
              {sent ? (
                <p className="fade-swap relative mt-10 border border-amber/40 bg-amber/10 p-5 leading-relaxed">
                  Dank je wel voor je inschrijving! In dit concept wordt nog niets verstuurd.
                </p>
              ) : (
                <form onSubmit={onSubmit} className="relative mt-10 grid gap-3 sm:grid-cols-2">
                  <label className="sr-only" htmlFor="voornaam">
                    Voornaam
                  </label>
                  <input id="voornaam" required placeholder="Voornaam" autoComplete="given-name" className={field} />
                  <label className="sr-only" htmlFor="achternaam">
                    Achternaam
                  </label>
                  <input id="achternaam" required placeholder="Achternaam" autoComplete="family-name" className={field} />
                  <label className="sr-only" htmlFor="email">
                    E-mailadres
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="E-mailadres"
                    autoComplete="email"
                    className={`${field} sm:col-span-2`}
                  />
                  <button type="submit" className="btn btn-primary mt-2 justify-center sm:col-span-2">
                    Schrijf me in
                    <ArrowIcon className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="h-full">
          <div id="geven" className={`h-full bg-stone p-2 ${archTop}`}>
            <div className={`flex h-full flex-col border border-stone-deep/60 px-7 pb-10 pt-16 md:px-12 ${archTop}`}>
              <HeartIcon className="h-8 w-8 text-flame-deep" />
              <h2 className="mt-4 font-display text-[2.6rem] font-medium leading-tight md:text-5xl">Geven aan De Bron</h2>
              <p className="mt-3 max-w-md leading-relaxed text-ink-soft">
                Met je gift help je mee aan het werk van de gemeente, in Almere en daarbuiten. De Bron is een ANBI: giften
                zijn onder voorwaarden aftrekbaar van de belasting.
              </p>
              <dl className="mt-8 grid gap-x-6 gap-y-2 border-t border-stone-deep/50 pt-6 text-[1rem] sm:grid-cols-[auto_1fr]">
                <dt className="text-ink-soft">Officiële naam</dt>
                <dd>{site.legalName}</dd>
                <dt className="text-ink-soft">KvK-nummer</dt>
                <dd className="tabular-nums">{site.kvk}</dd>
                <dt className="text-ink-soft">RSIN</dt>
                <dd className="tabular-nums">{site.rsin}</dd>
              </dl>
              <div className="mt-auto pt-10">
                <a href="#contact" className="btn btn-primary">
                  Doneren
                  <ArrowIcon className="h-4 w-4" />
                </a>
                <p className="mt-4 text-[1rem] text-ink-soft">
                  In de echte site koppelen we hier jullie donatiemogelijkheid, bijvoorbeeld direct met iDEAL.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
