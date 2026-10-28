import { site } from "@/content";
import { MailIcon, PhoneIcon, PinIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { Ripples } from "./Ripples";

const channels = [
  { icon: PinIcon, label: "Adres", value: `${site.street}, ${site.postcode} ${site.city}`, href: site.mapsUrl, external: true },
  { icon: PhoneIcon, label: "Bellen", value: site.phone, href: site.phoneHref },
  { icon: MailIcon, label: "Mailen", value: site.email, href: `mailto:${site.email}` },
];

export function Contact() {
  return (
    <section id="contact" className="pb-24 md:pb-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-ink/10 bg-white/50 px-7 py-14 md:px-14 md:py-20">
            <Ripples className="pointer-events-none absolute -bottom-[26rem] -right-[18rem] w-[900px] text-flame/25" />
            <div className="relative">
              <h2 className="font-display text-[clamp(3.4rem,10vw,8rem)] font-[350] leading-[0.9] tracking-[-0.03em]">
                Tot <em className="text-flame-deep">zondag!</em>
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
                Heb je een vraag, of wil je iemand spreken voordat je komt? Bel of mail ons gerust.
              </p>
              <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-[1fr_0.8fr_1.3fr]">
                {channels.map(({ icon: Icon, label, value, href, external }) => (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="group flex items-center gap-4 rounded-2xl bg-paper/80 p-5 ring-1 ring-ink/5 transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-25px_rgb(29_22_18/0.5)]"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-sand text-flame-deep transition-colors group-hover:bg-flame group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-bold uppercase tracking-[0.16em] text-ink-soft">{label}</span>
                      <span className="mt-0.5 block break-words font-medium">{value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
