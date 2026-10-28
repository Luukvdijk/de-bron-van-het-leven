import Image from "next/image";
import { nav, photos, site } from "@/content";

export function Footer() {
  return (
    <footer className="bg-night text-paper/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-8 md:py-20">
        <div>
          <Image
            src={photos.logo.src}
            alt={photos.logo.alt}
            width={photos.logo.width}
            height={photos.logo.height}
            sizes="160px"
            className="h-auto w-40"
          />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">
            Een gemeenschap met een apostolisch-profetische roeping, in Almere en daarbuiten.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-paper">Menu</p>
          <ul className="mt-4 space-y-2.5 text-sm">
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
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-paper">Samenkomen</p>
          <p className="mt-4 text-sm leading-relaxed">
            Elke zondag, 10:00 uur
            <br />
            {site.street}
            <br />
            {site.postcode} {site.city}
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-paper">ANBI</p>
          <p className="mt-4 text-sm leading-relaxed">
            {site.legalName}
            <br />
            KvK {site.kvk}
            <br />
            RSIN {site.rsin}
          </p>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-xs text-paper/50 md:px-8">
          <p>© {new Date().getFullYear()} {site.legalName}</p>
          <p>
            Concept door{" "}
            <a href="https://www.luukvandijk.com" className="text-paper/80 underline underline-offset-4 hover:text-flame">
              Luuk van Dijk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
