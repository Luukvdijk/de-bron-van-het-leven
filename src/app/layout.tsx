import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, EB_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});
const garamond = EB_Garamond({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-garamond" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });

export const metadata: Metadata = {
  title: "De Bron van het Levende Woord | Gemeente in Almere",
  description:
    "Apostolisch-profetische gemeente in Almere. Elke zondag om 10:00 uur ben je welkom aan de Transistorstraat 18.",
  // Concept only: keep it out of search results so it never competes with the live site.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${cormorant.variable} ${garamond.variable} ${cinzel.variable}`}>
      <body>{children}</body>
    </html>
  );
}
