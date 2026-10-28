"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { nav } from "@/content";
import { CloseIcon, MenuIcon } from "./Icons";
import { Wordmark } from "./Wordmark";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The mobile menu sits outside <header>: its backdrop-blur would otherwise trap the fixed overlay.
  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-500 ${
          scrolled ? "bg-paper/85 shadow-[0_1px_0_rgb(29_22_18/0.08)] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#top" aria-label="De Bron van het Levende Woord, naar boven">
            <Wordmark />
          </a>

          <nav aria-label="Hoofdmenu" className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-[0.92rem] font-medium text-ink/80 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-flame after:transition-transform after:duration-300 hover:text-ink hover:after:scale-x-100"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#geven" className="btn btn-primary !px-5 !py-2.5 max-sm:hidden">
              Geven
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Menu openen"
              aria-expanded={open}
              className="grid h-11 w-11 place-items-center rounded-full text-ink transition-colors hover:bg-sand lg:hidden"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[70] flex flex-col bg-night px-5 pb-10 text-paper lg:hidden">
          <div className="flex h-20 items-center justify-between">
            <Wordmark tone="light" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Menu sluiten"
              className="grid h-11 w-11 place-items-center rounded-full hover:bg-paper/10"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>
          <nav aria-label="Mobiel menu" className="mt-8 flex flex-col">
            {nav.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rise border-b border-paper/10 py-4 font-display text-4xl"
                style={{ "--d": `${i * 50}ms` } as CSSProperties}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#geven" onClick={() => setOpen(false)} className="btn btn-primary mt-auto justify-center">
            Geven aan De Bron
          </a>
        </div>
      )}
    </>
  );
}
