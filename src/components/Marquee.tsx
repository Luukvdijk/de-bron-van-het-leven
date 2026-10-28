import { marqueeWords } from "@/content";
import { SparkIcon } from "./Icons";

export function Marquee() {
  const words = [...marqueeWords, ...marqueeWords];
  return (
    <div className="overflow-hidden bg-ink py-6 text-paper" aria-hidden>
      <div className="marquee flex w-max">
        {words.map((word, i) => (
          <span key={i} className="flex items-center gap-10 pr-10 font-display text-3xl italic font-light md:text-4xl">
            {word}
            <SparkIcon className="h-4 w-4 text-flame" />
          </span>
        ))}
      </div>
    </div>
  );
}
