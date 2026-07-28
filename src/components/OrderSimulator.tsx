import { useEffect, useState } from "react";
import { Bike, CheckCircle2, MapPin, PackageCheck, Timer } from "lucide-react";

const WHATSAPP = "244900000000";

const STEPS = [
  { icon: PackageCheck, label: "Pedido confirmado", detail: "Separando o teu vaper de 10.000 Puffs" },
  { icon: Bike, label: "Motoboy a caminho", detail: "Saiu do nosso ponto em Luanda" },
  { icon: MapPin, label: "Perto do teu bairro", detail: "A poucos minutos da entrega" },
  { icon: CheckCircle2, label: "Entrega prevista", detail: "Paga apenas na entrega" },
];

export function OrderSimulator() {
  const [name, setName] = useState("");
  const [bairro, setBairro] = useState("");
  const [qty, setQty] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(0);
  const [eta, setEta] = useState(45 * 60);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!submitted) return;
    const t = setInterval(() => {
      setStep((s) => (s < STEPS.length - 1 ? s + 1 : s));
    }, 1800);
    return () => clearInterval(t);
  }, [submitted]);

  useEffect(() => {
    if (!submitted) return;
    const t = setInterval(() => setEta((e) => (e > 0 ? e - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, [submitted]);

  const total = qty * 3960;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const n = name.trim();
    const b = bairro.trim();
    if (n.length < 2 || n.length > 60) return setError("Escreve o teu nome (2 a 60 caracteres).");
    if (b.length < 2 || b.length > 60) return setError("Escreve o teu bairro (2 a 60 caracteres).");
    setError("");
    setSubmitted(true);
  }

  const mins = Math.floor(eta / 60);
  const secs = String(eta % 60).padStart(2, "0");

  const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    `Olá! Quero garantir ${qty} vaper(s) de 10.000 Puffs por ${total.toLocaleString("pt-AO")} Kz. Nome: ${name.trim()} | Bairro: ${bairro.trim()}`,
  )}`;

  return (
    <div className="mx-auto w-full max-w-2xl rounded-3xl border border-border bg-surface p-6 glow-gold sm:p-9">
      {!submitted ? (
        <form onSubmit={submit} className="space-y-5">
          <div className="text-center">
            <h3 className="text-2xl text-gold sm:text-3xl">Fazer o meu pedido</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Preenche e vê o teu motoboy sair agora mesmo.
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
        </form>
      ) : (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl text-gold sm:text-3xl">
              {name.trim()}, o teu motoboy já saiu!
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Destino: {bairro.trim()}, Luanda • {qty} unidade(s) •{" "}
              {total.toLocaleString("pt-AO")} Kz
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

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-2xl bg-red-gradient px-6 py-5 text-center font-display text-xl text-primary-foreground animate-pulse-glow transition hover:brightness-110"
          >
            Confirmar pedido no WhatsApp
          </a>
          <p className="text-center text-xs text-muted-foreground">
            O motoboy chega em até 45 minutos após a confirmação do pagamento.
          </p>
        </div>
      )}
    </div>
  );
}
