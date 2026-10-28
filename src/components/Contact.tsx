import { site } from "@/content";
import { ChurchDoor } from "./ChurchDoor";
import { Ornament, Roundel } from "./Glass";
import { MailIcon, PhoneIcon, PinIcon } from "./Icons";
import { Reveal } from "./Reveal";

const channels = [
  { icon: PinIcon, label: "Adres", value: `${site.street}, ${site.postcode} ${site.city}`, href: site.mapsUrl, external: true },
  { icon: PhoneIcon, label: "Bellen", value: site.phone, href: site.phoneHref },
  { icon: MailIcon, label: "Mailen", value: site.email, href: `mailto:${site.email}` },
];

export function Contact() {
  return (
    <section id="contact" className="ashlar overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <h2 className="font-display text-[clamp(3.6rem,10vw,8rem)] font-medium leading-[0.9] tracking-[-0.02em]">
            Tot <em className="text-flame-deep">zondag!</em>
          </h2>
          <Ornament align="start" className="mt-8" />
          <p className="mt-7 max-w-lg text-xl leading-relaxed text-ink-soft">
            Heb je een vraag, of wil je iemand spreken voordat je komt? Bel of mail ons gerust.
          </p>
          <ul className="mt-10 space-y-3">
            {channels.map(({ icon: Icon, label, value, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="group flex items-center gap-4 border border-stone-dark bg-white/80 p-3 pr-5 transition-[transform,border-color] duration-500 hover:-translate-y-0.5 hover:border-flame"
                >
                  <Roundel className="h-14 w-14 shrink-0">
                    <Icon className="h-5 w-5" />
                  </Roundel>
                  <span className="min-w-0">
                    <span className="block smallcaps text-[0.98rem] text-ink-soft">{label}</span>
                    <span className="block break-words text-[1.1rem]">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={150} className="mx-auto w-full max-w-[22rem]">
          <ChurchDoor className="w-full drop-shadow-[0_30px_40px_rgb(0_0_0/0.18)]" />
        </Reveal>
      </div>
    </section>
  );
}
