import { gatherings, type Gathering, type Rule } from "@/content";

export function matches(rule: Rule, date: Date): boolean {
  if (date.getDay() !== rule.weekday) return false;
  if (rule.kind === "weekly") return true;
  if (rule.months && !rule.months.includes(date.getMonth())) return false;
  const nth = Math.ceil(date.getDate() / 7);
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const isLast = date.getDate() + 7 > daysInMonth;
  return rule.nth.some((n) => (n === -1 ? isLast : n === nth));
}

export function nextOccurrence(rule: Rule, from: Date): Date | null {
  for (let i = 0; i < 400; i++) {
    const day = new Date(from.getFullYear(), from.getMonth(), from.getDate() + i);
    if (matches(rule, day)) return day;
  }
  return null;
}

export type AgendaItem = { gathering: Gathering; date: Date; tag?: string };

// Next date of every recurring gathering, so the agenda never goes stale.
// When the next Sunday is also the first Sunday, the communion folds into that service.
export function upcoming(from: Date): AgendaItem[] {
  const avondmaal = gatherings.find((g) => g.id === "avondmaal")!;
  const items = gatherings
    .filter((g) => g.inAgenda)
    .flatMap((gathering) => {
      const date = nextOccurrence(gathering.rule, from);
      return date ? [{ gathering, date }] : [];
    });
  const sunday = items.find((item) => item.gathering.id === "eredienst");
  const withCommunion = !!sunday && matches(avondmaal.rule, sunday.date);

  return items
    .filter((item) => !(withCommunion && item.gathering.id === "avondmaal"))
    .map((item) =>
      item.gathering.id === "eredienst" && withCommunion ? { ...item, tag: "Met Avondmaalviering" } : item,
    )
    .sort((a, b) => a.date.getTime() - b.date.getTime());
}

const dayFormat = new Intl.DateTimeFormat("nl-NL", { weekday: "long", day: "numeric", month: "long" });
const weekdayFormat = new Intl.DateTimeFormat("nl-NL", { weekday: "long" });
const monthFormat = new Intl.DateTimeFormat("nl-NL", { month: "short" });

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export const formatDay = (date: Date) => capitalize(dayFormat.format(date));
export const formatWeekday = (date: Date) => capitalize(weekdayFormat.format(date));
export const formatMonth = (date: Date) => monthFormat.format(date).replace(".", "");
