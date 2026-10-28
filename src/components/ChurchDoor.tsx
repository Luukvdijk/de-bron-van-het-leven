import { lancetPath } from "./Glass";

// Arched stone portal with three archivolts, a glass fanlight and two wooden doors.
const arch = (x: number, width: number, height: number) => {
  const scale = width / 200;
  return { d: lancetPath(height / scale), transform: `translate(${x} ${320 - height}) scale(${scale})` };
};

const FAN = ["#f5571c", "#ffad1f", "#1d3f8f", "#b3260f", "#ffad1f", "#f5571c"];

export function ChurchDoor({ className = "" }: { className?: string }) {
  const outer = arch(0, 240, 320);
  const middle = arch(14, 212, 306);
  const door = arch(30, 180, 290);
  const springing = 320 - 290 + 141.42 * (180 / 200);
  const planks = Array.from({ length: 11 }, (_, i) => 30 + (i + 1) * (180 / 12));
  const straps = [springing + 40, springing + 95, 300];

  return (
    <svg viewBox="-6 -6 252 332" className={className} aria-hidden>
      <defs>
        <clipPath id="door-shape">
          <path d={door.d} transform={door.transform} />
        </clipPath>
        <linearGradient id="door-wood" x1="0" x2="1">
          <stop offset="0" stopColor="#3a2617" />
          <stop offset="0.5" stopColor="#5b3b22" />
          <stop offset="1" stopColor="#3a2617" />
        </linearGradient>
      </defs>
      <path d={outer.d} transform={outer.transform} fill="#d2d2d4" stroke="#98989c" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
      <path d={middle.d} transform={middle.transform} fill="#e6e6e8" stroke="#98989c" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
      <g clipPath="url(#door-shape)">
        <rect x="30" y="0" width="180" height={springing} fill="#12275c" />
        {FAN.map((color, i) => {
          const a0 = Math.PI + (i / FAN.length) * Math.PI;
          const a1 = Math.PI + ((i + 1) / FAN.length) * Math.PI;
          const p = (a: number) => `${(120 + 160 * Math.cos(a)).toFixed(2)} ${(springing + 160 * Math.sin(a)).toFixed(2)}`;
          return <path key={i} d={`M120 ${springing}L${p(a0)}L${p(a1)}Z`} fill={color} stroke="#17171a" strokeWidth="1.6" />;
        })}
        <circle cx="120" cy={springing} r="26" fill="#ffd27a" stroke="#17171a" strokeWidth="1.6" />
        <rect x="30" y={springing} width="180" height={320 - springing} fill="url(#door-wood)" />
        {planks.map((x) => (
          <line key={x} x1={x} x2={x} y1={springing} y2="320" stroke="#2a1b10" strokeWidth="1.2" />
        ))}
        <line x1="120" x2="120" y1={springing} y2="320" stroke="#1c120a" strokeWidth="3" />
      </g>
      <rect x="26" y={springing - 5} width="188" height="9" fill="#bdbdc0" stroke="#98989c" strokeWidth="0.8" />
      {straps.map((y) => (
        <g key={y} fill="#1d1b1b">
          <rect x="38" y={y - 2.5} width="72" height="5" rx="2" />
          <rect x="130" y={y - 2.5} width="72" height="5" rx="2" />
          <circle cx="40" cy={y} r="4.5" />
          <circle cx="200" cy={y} r="4.5" />
        </g>
      ))}
      <g fill="none" stroke="#1d1b1b" strokeWidth="2.6">
        <circle cx="111" cy={springing + 70} r="7" />
        <circle cx="129" cy={springing + 70} r="7" />
      </g>
      <rect x="-6" y="316" width="252" height="10" fill="#bdbdc0" stroke="#98989c" strokeWidth="0.8" />
    </svg>
  );
}
