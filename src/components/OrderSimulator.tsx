import { useEffect, useState } from "react";
import { Bike, CheckCircle2, MapPin, PackageCheck, ShieldCheck, Timer, Wallet } from "lucide-react";

const STEPS = [
  { icon: PackageCheck, label: "Pagamento confirmado", detail: "Separando o teu vaper de 10.000 Puffs" },
  { icon: Bike, label: "Motoboy a caminho", detail: "Saiu do nosso ponto em Luanda" },
  { icon: MapPin, label: "Perto do teu bairro", detail: "A poucos minutos da entrega" },
  { icon: CheckCircle2, label: "Entrega prevista", detail: "Recebes o teu pedido em mãos" },
];

export const CHECKOUT_URL = "https://pay.clickpayon.com/e79fd7be-23be-47d9-b5eb-7f7806d889a8";

type Stage = "form" | "payment" | "delivery";

export function OrderSimulator() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [bairro, setBairro] = useState("");
  const [qty, setQty] = useState(1);
  const [stage, setStage] = useState<Stage>("form");
  const [step, setStep] = useState(0);
  const [eta, setEta] = useState(45 * 60);
  const [error, setError] = useState("");

  useEffect(() => {
    if (stage !== "delivery") return;
    const t = setInterval(() => {
      setStep((s) => (s < STEPS.length - 1 ? s + 1 : s));
    }, 1800);
    return () => clearInterval(t);
  }, [stage]);

  useEffect(() => {
    if (stage !== "delivery") return;
    const t = setInterval(() => setEta((e) => (e > 0 ? e - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, [stage]);

  const total = qty * 3960;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const n = name.trim();
    const b = bairro.trim();
    const p = phone.trim();
    if (n.length < 2 || n.length > 60) return setError("Escreve o teu nome (2 a 60 caracteres).");
    if (!/^[0-9+\s()-]{9,20}$/.test(p)) return setError("Escreve um número de telefone válido.");
    if (b.length < 2 || b.length > 60) return setError("Escreve o teu bairro (2 a 60 caracteres).");
    setError("");
    setStage("payment");
  }

  const mins = Math.floor(eta / 60);
  const secs = String(eta % 60).padStart(2, "0");

  return (
    <div className="mx-auto w-full max-w-2xl rounded-3xl border border-border bg-surface p-6 glow-gold sm:p-9">
      {stage === "form" && (
        <form onSubmit={submit} className="space-y-5">
          <div className="text-center">
            <h3 className="text-2xl text-gold sm:text-3xl">Fazer o meu pedido</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Preenche os dados, faz o pagamento e o motoboy sai imediatamente.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-left">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Nome</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={60}
                placeholder="O teu nome"
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-accent"
              />
            </label>
            <label className="block text-left">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Bairro</span>
              <input
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                maxLength={60}
                placeholder="Ex: Talatona, Cazenga..."
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-accent"
              />
            </label>
            <label className="block text-left">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Telefone
              </span>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                inputMode="tel"
                maxLength={20}
                placeholder="Ex: 923 000 000"
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-accent"
              />
            </label>
          </div>


          <div className="flex items-center justify-between rounded-xl border border-border bg-surface-2 px-4 py-3">
            <span className="text-sm text-muted-foreground">Quantidade</span>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="h-9 w-9 rounded-lg border border-border text-lg text-foreground transition hover:border-accent"
                aria-label="Diminuir quantidade"
              >
                −
              </button>
              <span className="w-6 text-center font-display text-xl">{qty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => Math.min(10, q + 1))}
                className="h-9 w-9 rounded-lg border border-border text-lg text-foreground transition hover:border-accent"
                aria-label="Aumentar quantidade"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-surface-2 px-4 py-3">
            <span className="text-sm text-muted-foreground">Total (frete grátis)</span>
            <span className="font-display text-2xl text-gold">
              {total.toLocaleString("pt-AO")} Kz
            </span>
          </div>

          {error && <p className="text-sm text-primary">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-2xl bg-red-gradient px-6 py-5 font-display text-xl tracking-wide text-primary-foreground animate-pulse-glow transition hover:brightness-110"
          >
            🔥 Comprar agora
          </button>
          <p className="text-center text-xs text-muted-foreground">
            Pagamento antecipado. A entrega só é feita após a confirmação do pagamento.
          </p>
        </form>
      )}

      {stage === "payment" && (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl text-gold sm:text-3xl">{name.trim()}, falta só o pagamento</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Destino: {bairro.trim()}, Luanda • {qty} unidade(s)
            </p>
          </div>

          <div className="flex items-center justify-between rounded-2xl bg-red-gradient px-5 py-4">
            <span className="flex items-center gap-2 text-primary-foreground">
              <Wallet size={20} /> Valor a pagar
            </span>
            <span className="font-display text-2xl text-primary-foreground">
              {total.toLocaleString("pt-AO")} Kz
            </span>
          </div>

          <div className="rounded-2xl border border-accent/60 bg-surface-2 px-5 py-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-2 font-display text-base text-gold">
              <ShieldCheck size={18} /> Como funciona
            </p>
            <p className="mt-2">
              1. Clica em Pagar agora e conclui o pagamento na página segura. 2. Assim que o
              pagamento for confirmado, o motoboy sai para o teu bairro e entrega em até 45
              minutos.
            </p>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-2xl bg-red-gradient px-6 py-5 text-center font-display text-xl tracking-wide text-primary-foreground animate-pulse-glow transition hover:brightness-110"
          >
            💳 Pagar agora {total.toLocaleString("pt-AO")} Kz
          </a>

          <button
            type="button"
            onClick={() => setStage("delivery")}
            className="w-full rounded-2xl border border-accent/60 px-6 py-4 font-display text-lg text-gold transition hover:bg-surface-2"
          >
            ✅ Já efetuei o pagamento
          </button>


          <button
            type="button"
            onClick={() => setStage("form")}
            className="w-full text-center text-xs text-muted-foreground underline"
          >
            Alterar os meus dados
          </button>
        </div>
      )}

      {stage === "delivery" && (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl text-gold sm:text-3xl">
              {name.trim()}, pagamento confirmado — motoboy a sair!
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Destino: {bairro.trim()}, Luanda • {qty} unidade(s) •{" "}
              {total.toLocaleString("pt-AO")} Kz pago
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 rounded-2xl bg-red-gradient px-5 py-4">
            <Timer className="text-primary-foreground" size={22} />
            <span className="font-display text-2xl text-primary-foreground tabular-nums">
              Chega em {mins}:{secs} min
            </span>
          </div>

          <ol className="space-y-3">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              const active = i <= step;
              return (
                <li
                  key={s.label}
                  className={`flex items-center gap-4 rounded-xl border px-4 py-3 transition-all duration-500 ${
                    active
                      ? "border-accent/60 bg-surface-2 opacity-100"
                      : "border-border bg-transparent opacity-40"
                  }`}
                >
                  <Icon size={22} className={active ? "text-accent" : "text-muted-foreground"} />
                  <div>
                    <p className="text-sm font-semibold">{s.label}</p>
                    <p className="text-xs text-muted-foreground">{s.detail}</p>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="rounded-2xl border-2 border-accent/70 bg-surface-2 px-5 py-4 text-center">
            <p className="font-display text-lg text-gold">Garantia de 7 dias</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Se não gostares, devolvemos o teu dinheiro.
            </p>
          </div>
          <p className="text-center text-xs text-muted-foreground">
            O motoboy chega em até 45 minutos após a confirmação do pagamento.
          </p>
        </div>
      )}
    </div>
  );
}
