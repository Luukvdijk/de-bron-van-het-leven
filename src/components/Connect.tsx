"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content";
import { ArrowIcon, HeartIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { Ripples } from "./Ripples";

const field =
  "w-full rounded-full border border-paper/20 bg-paper/[0.07] px-5 py-3.5 text-paper placeholder:text-paper/45 outline-none transition-colors focus:border-flame focus:bg-paper/10";

export function Connect() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section className="py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 md:px-8 lg:grid-cols-2">
        <Reveal className="h-full">
          <div id="nieuwsbrief" className="relative h-full overflow-hidden rounded-[2rem] bg-ink p-8 text-paper md:p-12">
            <Ripples rings={5} className="pointer-events-none absolute -right-48 -top-48 w-[520px] text-flame/25" />
            <div className="relative">
              <h2 className="font-display text-4xl leading-tight md:text-5xl">Blijf op de hoogte</h2>
              <p className="mt-4 max-w-md leading-relaxed text-paper/65">
                Wil je weten wat er speelt in de gemeente? Schrijf je in voor de digitale nieuwsbrief.
              </p>
              {sent ? (
                <p className="fade-swap mt-10 rounded-2xl border border-flame/40 bg-flame/10 p-5 leading-relaxed text-paper/90">
                  Dank je wel voor je inschrijving! In dit concept wordt nog niets verstuurd.
                </p>
              ) : (
                <form onSubmit={onSubmit} className="mt-10 grid gap-3 sm:grid-cols-2">
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
          <div id="geven" className="flex h-full flex-col rounded-[2rem] bg-sand p-8 md:p-12">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-paper text-flame-deep">
              <HeartIcon className="h-6 w-6" />
            </span>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">Geven aan De Bron</h2>
            <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
              Met je gift help je mee aan het werk van de gemeente, in Almere en daarbuiten. De Bron is een ANBI:
              giften zijn onder voorwaarden aftrekbaar van de belasting.
            </p>
            <dl className="mt-8 grid gap-x-6 gap-y-3 border-t border-ink/10 pt-6 text-sm sm:grid-cols-[auto_1fr]">
              <dt className="text-ink-soft">Officiële naam</dt>
              <dd className="font-medium">{site.legalName}</dd>
              <dt className="text-ink-soft">KvK-nummer</dt>
              <dd className="font-medium tabular-nums">{site.kvk}</dd>
              <dt className="text-ink-soft">RSIN</dt>
              <dd className="font-medium tabular-nums">{site.rsin}</dd>
            </dl>
            <div className="mt-auto pt-10">
              <a href="#contact" className="btn btn-primary">
                Doneren
                <ArrowIcon className="h-4 w-4" />
              </a>
              <p className="mt-4 text-sm text-ink-soft">
                In de echte site koppelen we hier jullie donatiemogelijkheid, bijvoorbeeld direct met iDEAL.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
