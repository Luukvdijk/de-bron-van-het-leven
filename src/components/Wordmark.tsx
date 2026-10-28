import { RippleMark } from "./Ripples";

// Follows the stacked shape of the church's own logo: DE BRON / van het levende / WOORD.
export function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="flex items-center gap-3">
      <RippleMark className="h-9 w-9 text-flame" />
      <span
        className={`flex flex-col font-sans font-extrabold uppercase leading-[0.95] ${
          tone === "dark" ? "text-ink" : "text-paper"
        }`}
      >
        <span className="text-[1.05rem] tracking-[0.02em]">De Bron</span>
        <span className="my-[2px] text-[0.55rem] tracking-[0.19em] text-flame">van het levende</span>
        <span className="text-[1.05rem] tracking-[0.02em]">Woord</span>
      </span>
    </span>
  );
}
