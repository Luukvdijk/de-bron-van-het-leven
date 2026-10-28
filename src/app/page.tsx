import { About } from "@/components/About";
import { Agenda } from "@/components/Agenda";
import { Connect } from "@/components/Connect";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Gatherings } from "@/components/Gatherings";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Testimonials } from "@/components/Testimonials";
import { Visit } from "@/components/Visit";

export default function Home() {
  return (
    <>
      <p className="bg-night px-5 py-2 text-center text-[0.9rem] text-white/75">
        Concept voor De Bron van het Levende Woord, ontworpen door{" "}
        <a href="https://www.luukvandijk.com" className="text-white underline underline-offset-4">
          Luuk van Dijk
        </a>
      </p>
      <Header />
      <main>
        <Hero />
        <Visit />
        <About />
        <Gatherings />
        <Agenda />
        <Gallery />
        <Story />
        <Testimonials />
        <Connect />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
