import Image from "next/image";
import { gallery } from "@/content";
import { Reveal } from "./Reveal";

export function Gallery() {
  return (
    <section id="fotos" className="pb-24 md:pb-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="h2">
              Een kijkje bij <em className="text-flame-deep">De Bron</em>
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-ink-soft">
            Aanbidding, dans, de jeugd en feestelijke momenten met elkaar.
          </p>
        </Reveal>

        <div className="mt-12 grid auto-rows-[9.5rem] grid-cols-2 gap-3 md:auto-rows-[14rem] md:grid-cols-4 md:gap-4">
          {gallery.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 4) * 80} className={`group relative overflow-hidden rounded-2xl bg-sand md:rounded-3xl ${photo.span}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={photo.span.includes("col-span-2") ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
