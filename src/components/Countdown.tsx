import { useEffect, useState } from "react";

const TOTAL = 48 * 60 * 60 * 1000;

function useDeadline() {
  const [deadline, setDeadline] = useState<number | null>(null);

  useEffect(() => {
    const key = "blacksale_deadline";
    const stored = Number(window.localStorage.getItem(key));
    if (stored && stored > Date.now()) {
      setDeadline(stored);
      return;
    }
    const next = Date.now() + TOTAL;
    window.localStorage.setItem(key, String(next));
    setDeadline(next);
  }, []);

  return deadline;
}

function Cell({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex min-w-[72px] flex-col items-center rounded-xl border border-border bg-surface-2 px-4 py-3 sm:min-w-[96px]">
      <span className="font-display text-3xl leading-none tabular-nums text-gold sm:text-5xl">
        {value}
      </span>
      <span className="mt-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const deadline = useDeadline();
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const remaining = Math.max(0, (deadline ?? now + TOTAL) - now);
  const h = Math.floor(remaining / 3_600_000);
  const m = Math.floor((remaining % 3_600_000) / 60_000);
  const s = Math.floor((remaining % 60_000) / 1000);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2 sm:gap-4">
        <Cell value={pad(h)} label="Horas" />
        <span className="font-display text-2xl text-primary sm:text-4xl">:</span>
        <Cell value={pad(m)} label="Minutos" />
        <span className="font-display text-2xl text-primary sm:text-4xl">:</span>
        <Cell value={pad(s)} label="Segundos" />
      </div>
      <p className="max-w-md text-center text-sm text-muted-foreground">
        Esta promoção termina quando o tempo acabar ou quando o estoque esgotar.
      </p>
    </div>
  );
}
