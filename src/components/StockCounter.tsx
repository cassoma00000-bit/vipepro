import { useEffect, useState } from "react";
import { Flame, ShoppingBag } from "lucide-react";

const START = 17;
const MIN = 10;
const INTERVAL = 60_000;

const BUYERS = [
  { name: "Nzuzi Bengui", bairro: "Talatona" },
  { name: "Domingas Kiala", bairro: "Cazenga" },
  { name: "Eduardo Mangueira", bairro: "Viana" },
  { name: "Lúcia Kambamba", bairro: "Maianga" },
  { name: "Alberto Chissola", bairro: "Kilamba" },
  { name: "Teresa Muanza", bairro: "Rangel" },
  { name: "Joaquim Ndala", bairro: "Benfica" },
];

export function StockCounter() {
  const [units, setUnits] = useState(START);
  const [buyer, setBuyer] = useState<{ name: string; bairro: string } | null>(null);

  useEffect(() => {
    if (units <= MIN) return;
    const t = setTimeout(() => {
      const next = BUYERS[(START - units) % BUYERS.length];
      setBuyer(next);
      setUnits((u) => u - 1);
      setTimeout(() => setBuyer(null), 8000);
    }, INTERVAL);
    return () => clearTimeout(t);
  }, [units]);

  const percent = Math.max(8, Math.round((units / 30) * 100));

  return (
    <div className="mt-10 rounded-2xl border border-primary/50 bg-surface-2 p-6">
      <p className="text-center font-display text-lg text-primary animate-scarcity">
        🔥 Restam apenas {units} kits — a esgotar rápido
      </p>
      <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-background">
        <div
          className="h-full rounded-full bg-red-gradient animate-pulse-glow transition-all duration-1000"
          style={{ width: `${percent}%` }}
        />
      </div>

      {buyer && (
        <div className="mt-5 animate-fade-in rounded-2xl border border-accent/60 bg-surface px-4 py-3">
          <p className="flex items-center gap-2 font-display text-sm text-gold">
            <ShoppingBag size={16} /> {buyer.name}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            comprou 1 unidade agora mesmo em {buyer.bairro}, Luanda.
          </p>
          <p className="mt-1 flex items-center gap-1 text-[11px] text-primary">
            <Flame size={12} /> Restam {units} unidades
          </p>
        </div>
      )}
    </div>
  );
}
