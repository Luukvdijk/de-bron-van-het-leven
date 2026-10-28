// Stone column with capital and base; the fluted shaft stretches to the height of its row.
export function Column({ className = "" }: { className?: string }) {
  return (
    <div className={`flex-col items-center ${className}`} aria-hidden>
      <svg viewBox="0 0 64 34" className="w-full shrink-0 overflow-visible">
        <defs>
          <linearGradient id="column-stone" x1="0" x2="1">
            <stop offset="0" stopColor="#9a9a9e" />
            <stop offset="0.35" stopColor="#f7f7f7" />
            <stop offset="0.65" stopColor="#dedee0" />
            <stop offset="1" stopColor="#8e8e92" />
          </linearGradient>
        </defs>
        <g fill="url(#column-stone)" stroke="#98989c" strokeWidth="0.75">
          <rect x="0" y="0" width="64" height="8" />
          <path d="M3 8H61C58 16 50 21 44 22H20C14 21 6 16 3 8Z" />
          <rect x="16" y="22" width="32" height="5" />
          <rect x="18" y="27" width="28" height="7" />
        </g>
      </svg>
      <div className="column-shaft w-[44%] flex-1" />
      <svg viewBox="0 0 64 26" className="w-full shrink-0">
        <g fill="url(#column-stone)" stroke="#98989c" strokeWidth="0.75">
          <rect x="18" y="0" width="28" height="5" />
          <path d="M12 5H52C58 5 58 13 52 13H12C6 13 6 5 12 5Z" />
          <rect x="4" y="13" width="56" height="13" />
        </g>
      </svg>
    </div>
  );
}
