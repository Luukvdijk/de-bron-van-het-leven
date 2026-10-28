import type { CSSProperties, ReactNode } from "react";

// Everything is drawn in a 200-wide box. The pointed arch has radius 150, so it springs at y = RISE.
const W = 200;
const R = 150;
const RISE = Math.sqrt(R ** 2 - (R - W / 2) ** 2);
const TAU = Math.PI * 2;

const f = (n: number) => n.toFixed(2);
const polar = (r: number, a: number) => `${f(r * Math.cos(a))} ${f(r * Math.sin(a))}`;

export function lancetPath(height: number) {
  return `M0 ${f(height)} L0 ${f(RISE)} A${R} ${R} 0 0 1 ${W / 2} 0 A${R} ${R} 0 0 1 ${W} ${f(RISE)} L${W} ${f(height)} Z`;
}

const archOutline = `M0 ${f(RISE)} A${R} ${R} 0 0 1 ${W / 2} 0 A${R} ${R} 0 0 1 ${W} ${f(RISE)}`;

function sector(r1: number, r2: number, a0: number, a1: number) {
  return `M${polar(r2, a0)} A${r2} ${r2} 0 0 1 ${polar(r2, a1)} L${polar(r1, a1)} A${r1} ${r1} 0 0 0 ${polar(r1, a0)} Z`;
}

// Seeded so every window looks the same on every render.
function random(seed: number) {
  let s = seed;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const PALETTES = {
  blue: ["#1d3f8f", "#1d3f8f", "#12275c", "#3b7bd1", "#e6ecf0", "#e6ecf0", "#f5571c", "#ffad1f"],
  flame: ["#f5571c", "#f5571c", "#ffad1f", "#b3260f", "#e6ecf0", "#e6ecf0", "#1d3f8f", "#ff7a2f"],
  clear: ["#e6ecf0", "#e6ecf0", "#d5dee5", "#f5571c", "#ffad1f", "#1d3f8f"],
};

const EMBLEMS = {
  cross: { d: "M-7 -30h14v20h20v14h-20v32h-14v-32h-20v-14h20z", fill: "#b3260f" },
  flame: {
    d: "M0 -32C13 -16 22 -4 17 12C13 25 -13 25 -17 12C-21 0 -9 -8 -4 -18C-2 -10 2 -8 4 -12C6 -18 3 -24 0 -32Z",
    fill: "#f5571c",
  },
  drop: { d: "M0 -30C11 -14 19 -3 19 9A19 19 0 0 1 -19 9C-19 -3 -11 -14 0 -30Z", fill: "#3b7bd1" },
};

const lead = { stroke: "var(--color-lead)", strokeLinejoin: "round", vectorEffect: "non-scaling-stroke" } as const;

// Leaded glass of diamond quarries with an optional medallion, meant to sit inside a <Lancet>.
export function StainedGlass({
  ratio,
  seed,
  palette = "blue",
  emblem,
  quarry = 1,
  className = "",
}: {
  ratio: number;
  seed: number;
  palette?: keyof typeof PALETTES;
  emblem?: keyof typeof EMBLEMS;
  quarry?: number;
  className?: string;
}) {
  const height = W * ratio;
  const rand = random(seed);
  const colors = PALETTES[palette];
  const cw = 36 * quarry;
  const ch = 50 * quarry;
  const panes: { points: string; fill: string }[] = [];
  for (let row = -1; (row - 1) * (ch / 2) < height; row++) {
    for (let col = -1; (col - 1) * cw < W; col++) {
      const cx = col * cw + (Math.abs(row) % 2 ? cw / 2 : 0);
      const cy = row * (ch / 2);
      const points = [
        [cx, cy - ch / 2],
        [cx + cw / 2, cy],
        [cx, cy + ch / 2],
        [cx - cw / 2, cy],
      ]
        .map(([x, y]) => `${f(x)},${f(y)}`)
        .join(" ");
      panes.push({ points, fill: colors[Math.floor(rand() * colors.length)] });
    }
  }
  const bars: number[] = [];
  for (let y = RISE + 40; y < height - 20; y += 70) bars.push(y);
  const id = `glass-${palette}-${seed}`;
  const medallionY = Math.max(height * 0.55, RISE + 40);

  return (
    <svg
      viewBox={`0 0 ${W} ${f(height)}`}
      preserveAspectRatio="xMidYMid slice"
      className={`block h-full w-full ${className}`}
      aria-hidden
    >
      <defs>
        <radialGradient id={`${id}-light`} cx="50%" cy="40%" r="70%">
          <stop offset="0" stopColor="#fff" stopOpacity="0.4" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      {panes.map((pane, i) => (
        <polygon key={i} points={pane.points} fill={pane.fill} strokeWidth={2} {...lead} />
      ))}
      {quarry >= 1 &&
        bars.map((y) => <line key={y} x1="0" x2={W} y1={f(y)} y2={f(y)} strokeWidth={3} {...lead} />)}
      {emblem && (
        <g transform={`translate(${W / 2} ${f(medallionY)})`}>
          <circle r="52" fill="#b3260f" strokeWidth={2.5} {...lead} />
          {Array.from({ length: 12 }, (_, i) => (
            <path key={i} d={sector(41, 52, (i / 12) * TAU, ((i + 1) / 12) * TAU)} fill={i % 2 ? "#ffad1f" : "#b3260f"} strokeWidth={1.5} {...lead} />
          ))}
          <circle r="41" fill="#fff4dc" strokeWidth={2.5} {...lead} />
          <path d={EMBLEMS[emblem].d} fill={EMBLEMS[emblem].fill} strokeWidth={2} {...lead} />
        </g>
      )}
      <rect width={W} height={f(height)} fill={`url(#${id}-light)`} />
    </svg>
  );
}

// A pointed-arch window: children (glass or a photo) are cut to the arch, with a stone and lead frame.
export function Lancet({
  ratio,
  children,
  className = "",
  style,
}: {
  ratio: number;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const height = W * ratio;
  const d = lancetPath(height);
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${W} ${f(height)}' preserveAspectRatio='none'><path d='${d}'/></svg>`;
  const mask = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  return (
    <div className={`relative ${className}`} style={{ aspectRatio: `${W} / ${f(height)}`, ...style }}>
      <div
        className="absolute inset-0 overflow-hidden bg-night"
        style={{
          maskImage: mask,
          WebkitMaskImage: mask,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      >
        {children}
      </div>
      <svg viewBox={`0 0 ${W} ${f(height)}`} className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden>
        <path d={d} fill="none" stroke="var(--color-stone-dark)" strokeWidth={10} strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        <path d={d} fill="none" strokeWidth={2.5} {...lead} />
      </svg>
    </div>
  );
}

// Glass in the arch, a photo below a lead transom at the springing line.
export function PhotoLancet({
  ratio,
  seed,
  palette = "flame",
  children,
  className = "",
}: {
  ratio: number;
  seed: number;
  palette?: keyof typeof PALETTES;
  children: ReactNode;
  className?: string;
}) {
  const springing = (RISE / (W * ratio)) * 100;
  return (
    <Lancet ratio={ratio} className={className}>
      <StainedGlass ratio={ratio} seed={seed} palette={palette} />
      <div className="absolute inset-x-0 bottom-0 border-t-[3px] border-lead" style={{ top: `${springing}%` }}>
        {children}
      </div>
    </Lancet>
  );
}

const ROSE_RING = ["#f5571c", "#ffad1f", "#b3260f", "#ffad1f"];
const ROSE_PETALS = ["#f5571c", "#1d3f8f", "#b3260f", "#3b7bd1"];

export function RoseWindow({ className = "" }: { className?: string }) {
  const stroke = { stroke: "var(--color-lead)", strokeWidth: 2, strokeLinejoin: "round" } as const;
  return (
    <svg viewBox="-100 -100 200 200" className={className} aria-hidden>
      <circle r="99" fill="var(--color-stone-dark)" />
      <circle r="93" fill="#12275c" {...stroke} />
      {Array.from({ length: 16 }, (_, i) => (
        <path key={`r${i}`} d={sector(74, 93, (i / 16) * TAU, ((i + 1) / 16) * TAU)} fill={ROSE_RING[i % 4]} {...stroke} />
      ))}
      {Array.from({ length: 16 }, (_, i) => {
        const a = (i / 16) * TAU;
        return <line key={`s${i}`} x1={f(22 * Math.cos(a))} y1={f(22 * Math.sin(a))} x2={f(74 * Math.cos(a))} y2={f(74 * Math.sin(a))} {...stroke} />;
      })}
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i / 8) * TAU - Math.PI / 2;
        const x = f(48 * Math.cos(a));
        const y = f(48 * Math.sin(a));
        return (
          <g key={`p${i}`}>
            <circle cx={x} cy={y} r="19" fill={ROSE_PETALS[i % 4]} {...stroke} />
            <circle cx={x} cy={y} r="7" fill="#ffd27a" {...stroke} />
          </g>
        );
      })}
      <circle r="74" fill="none" {...stroke} />
      <circle r="22" fill="#ffd27a" {...stroke} />
      <path d="M-3.5 -14h7v8h8v7h-8v13h-7v-13h-8v-7h8z" fill="#b3260f" {...stroke} strokeWidth={1.2} />
      <circle cx="-28" cy="-34" r="58" fill="#fff" opacity="0.07" />
    </svg>
  );
}

// Small round window with an icon in the middle.
export function Roundel({ children, className = "" }: { children: ReactNode; className?: string }) {
  const colors = ["#f5571c", "#1d3f8f", "#ffad1f", "#b3260f"];
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="-50 -50 100 100" className="h-full w-full" aria-hidden>
        <circle r="49" fill="var(--color-stone-dark)" />
        {Array.from({ length: 8 }, (_, i) => (
          <path
            key={i}
            d={sector(29, 45, (i / 8) * TAU, ((i + 1) / 8) * TAU)}
            fill={colors[i % 4]}
            stroke="var(--color-lead)"
            strokeWidth={1.6}
          />
        ))}
        <circle r="29" fill="#fff" stroke="var(--color-lead)" strokeWidth={1.6} />
      </svg>
      <span className="absolute inset-0 grid place-items-center text-flame-deep">{children}</span>
    </div>
  );
}

export function Quatrefoil({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="-12 -12 24 24" className={className} aria-hidden>
      <g fill="currentColor">
        <circle cy="-5.6" r="5.6" />
        <circle cx="5.6" r="5.6" />
        <circle cy="5.6" r="5.6" />
        <circle cx="-5.6" r="5.6" />
      </g>
    </svg>
  );
}

export function Ornament({ className = "", align = "center" }: { className?: string; align?: "center" | "start" }) {
  return (
    <div className={`flex items-center gap-4 text-flame ${align === "center" ? "justify-center" : ""} ${className}`} aria-hidden>
      <span className={`h-px bg-current opacity-60 ${align === "center" ? "w-16" : "w-10"}`} />
      <Quatrefoil className="h-3.5 w-3.5" />
      <span className="h-px w-16 bg-current opacity-60" />
    </div>
  );
}

// Arched niche: a pointed arch head on top of a panel that grows with its content.
export function Niche({ head, children, className = "" }: { head?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <div className={`flex h-full flex-col ${className}`}>
      <div className="relative">
        <svg viewBox={`0 0 ${W} ${f(RISE)}`} className="block w-full overflow-visible" aria-hidden>
          <path d={`${archOutline} Z`} fill="var(--color-stone)" />
          <path d={archOutline} fill="none" stroke="var(--color-stone-dark)" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
        </svg>
        {head && <div className="absolute left-1/2 top-[58%] w-[44%] -translate-x-1/2 -translate-y-1/2">{head}</div>}
      </div>
      <div className="-mt-px flex-1 border-x-[1.5px] border-b-[1.5px] border-stone-dark bg-stone px-6 pb-9 pt-2 text-center">
        {children}
      </div>
    </div>
  );
}
