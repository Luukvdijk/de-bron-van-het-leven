import Image from "next/image";
import { gallery } from "@/content";
import { Lancet, Ornament } from "./Glass";
import { Reveal } from "./Reveal";

// Photos as a row of arched windows.
export function Gallery() {
  return (
    <section id="fotos" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="h2">
            Een kijkje bij <em className="text-flame-deep">De Bron</em>
          </h2>
          <Ornament className="mt-7" />
          <p className="mt-7 text-xl text-ink-soft">Aanbidding, dans, de jeugd en feestelijke momenten met elkaar.</p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-x-5 gap-y-10 md:gap-x-10 lg:grid-cols-3">
          {gallery.slice(0, 6).map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 3) * 90}>
              <Lancet ratio={1.4} className="group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 45vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                />
              </Lancet>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
