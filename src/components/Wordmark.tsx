import { RoseWindow } from "./Glass";

// Follows the stacked shape of the church's own logo: DE BRON / van het levende / WOORD.
export function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="flex items-center gap-3">
      <RoseWindow className="h-11 w-11 shrink-0" />
      <span className={`flex flex-col leading-none ${tone === "dark" ? "text-ink" : "text-white"}`}>
        <span className="font-inscription text-[1.02rem] font-bold uppercase tracking-[0.08em]">De Bron</span>
        <span className={`font-display text-[0.88rem] italic ${tone === "dark" ? "text-flame-deep" : "text-amber"}`}>
          van het Levende
        </span>
        <span className="font-inscription text-[1.02rem] font-bold uppercase tracking-[0.08em]">Woord</span>
      </span>
    </span>
  );
}
