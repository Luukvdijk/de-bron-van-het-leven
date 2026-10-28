import Image from "next/image";
import { nav, photos, site } from "@/content";
import { RoseWindow } from "./Glass";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-flame bg-night text-white/70">
      <RoseWindow className="pointer-events-none absolute -bottom-48 -right-32 w-[30rem] opacity-15" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-8 md:py-20">
        <div>
          <Image
            src={photos.logo.src}
            alt={photos.logo.alt}
            width={photos.logo.width}
            height={photos.logo.height}
            sizes="160px"
            className="h-auto w-40"
          />
          <p className="mt-6 max-w-xs leading-relaxed">
            Een gemeenschap met een apostolisch-profetische roeping, in Almere en daarbuiten.
          </p>
        </div>

        <div>
          <p className="font-display text-xl italic text-amber">Menu</p>
          <ul className="mt-3 space-y-1.5">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-flame">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-xl italic text-amber">Samenkomen</p>
          <p className="mt-3 leading-relaxed">
            Elke zondag, 10:00 uur
            <br />
            {site.street}
            <br />
            {site.postcode} {site.city}
          </p>
        </div>

        <div>
          <p className="font-display text-xl italic text-amber">ANBI</p>
          <p className="mt-3 leading-relaxed">
            {site.legalName}
            <br />
            KvK {site.kvk}
            <br />
            RSIN {site.rsin}
          </p>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-[0.95rem] text-white/50 md:px-8">
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <p>
            Concept door{" "}
            <a href="https://www.luukvandijk.com" className="text-white/80 underline underline-offset-4 hover:text-flame">
              Luuk van Dijk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
