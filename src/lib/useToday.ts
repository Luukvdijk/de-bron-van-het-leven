import { useMemo, useSyncExternalStore } from "react";

const subscribe = () => () => {};

const todayKey = () => {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
};

// Today's date on the client, null during server render, so dates never go stale in a static build.
export function useToday(): Date | null {
  const key = useSyncExternalStore(subscribe, todayKey, () => null);
  return useMemo(() => {
    if (!key) return null;
    const [year, month, day] = key.split("-").map(Number);
    return new Date(year, month, day);
  }, [key]);
}
