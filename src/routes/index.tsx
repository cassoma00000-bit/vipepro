import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  BadgeCheck,
  Battery,
  Check,
  Headphones,
  Lock,
  MessageCircle,
  Package,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Wallet,
  X,
  Zap,
} from "lucide-react";
import heroImg from "@/assets/vape-hero.jpg";
import { Countdown } from "@/components/Countdown";
import { OrderSimulator } from "@/components/OrderSimulator";
import { Reveal } from "@/components/Reveal";

const WHATSAPP = "244900000000";
const WA_LINK = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Olá! Quero garantir o vaper de 10.000 Puffs por 3.960 Kz com frete grátis.",
)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Black Sale: Vaper 10.000 Puffs por 3.960 Kz em Luanda" },
      {
        name: "description",
        content:
          "Queima total de estoque: vaper descartável de 10.000 Puffs de 10.000 Kz por apenas 3.960 Kz. Frete grátis e entrega no mesmo dia em Luanda.",
      },
      { property: "og:title", content: "Black Sale: Vaper 10.000 Puffs por 3.960 Kz em Luanda" },
      {
        property: "og:description",
        content:
          "Queima total de estoque: vaper descartável de 10.000 Puffs de 10.000 Kz por apenas 3.960 Kz. Frete grátis e entrega no mesmo dia em Luanda.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function scrollToOrder() {
  document.getElementById("pedido")?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function CTA({ label = "COMPRAR AGORA", className = "" }: { label?: string; className?: string }) {
  return (
    <button
      onClick={scrollToOrder}
      className={`rounded-2xl bg-red-gradient px-8 py-5 font-display text-xl tracking-wide text-primary-foreground animate-pulse-glow transition hover:brightness-110 sm:text-2xl ${className}`}
    >
      {label}
    </button>
  );
}

function TopBar() {
  const item =
    "🚨 BLACK SALE • Frete Grátis • Entrega no Mesmo Dia • Estoque Limitado •";
  return (
    <div className="fixed inset-x-0 top-0 z-50 overflow-hidden bg-red-gradient py-2">
      <div className="flex w-[200%] animate-marquee">
        {[0, 1].map((k) => (
          <div key={k} className="flex w-1/2 shrink-0 justify-around">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="whitespace-nowrap px-6 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const PERKS = [
  { icon: Truck, text: "Entrega no mesmo dia em todos cantos de Luanda" },
  { icon: Package, text: "Frete GRÁTIS" },
  { icon: Lock, text: "Compra 100% segura" },
  { icon: Star, text: "Produto original e de alta qualidade" },
];

const BENEFITS = [
  { icon: Zap, title: "Até 10.000 Puffs", text: "Autonomia gigante para semanas de uso." },
  { icon: Sparkles, title: "Sabores Premium", text: "Mistura intensa, suave e equilibrada." },
  { icon: Battery, title: "Grande duração", text: "Bateria feita para durar até à última puff." },
  { icon: Package, title: "Compacto", text: "Cabe no bolso, discreto e elegante." },
  { icon: Check, title: "Pronto para usar", text: "Sem carregar, sem encher, sem complicação." },
  { icon: Wallet, title: "Custo-benefício", text: "Menos de 0,40 Kz por puff." },
  { icon: Truck, title: "Frete Grátis", text: "Não pagas nada pela entrega." },
  { icon: Zap, title: "Entrega Rápida", text: "No mesmo dia, em todo canto de Luanda." },
];

const STEPS = [
  "Escolhe a quantidade.",
  "Clica em Comprar Agora.",
  "Confirma o pedido.",
  "Recebe em casa no mesmo dia.",
];

const TESTIMONIALS = [
  {
    name: "Nelson M.",
    hood: "Talatona, Luanda",
    text: "Comprei de manhã e recebi no mesmo dia. Excelente atendimento.",
  },
  {
    name: "Edna F.",
    hood: "Cazenga, Luanda",
    text: "Produto original, ótimo sabor e ainda com frete grátis.",
  },
  {
    name: "Kiami D.",
    hood: "Viana, Luanda",
    text: "Melhor promoção que encontrei. Vale muito a pena.",
  },
];

const GUARANTEES = [
  { icon: BadgeCheck, text: "Produto Original" },
  { icon: ShieldCheck, text: "Compra Segura" },
  { icon: Headphones, text: "Atendimento Rápido" },
  { icon: Truck, text: "Entrega no Mesmo Dia" },
  { icon: Package, text: "Frete Grátis" },
];

function Index() {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBar(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-9">
      <TopBar />

      {/* HERO */}
      <header className="relative overflow-hidden px-5 pb-20 pt-14">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
          style={{ background: "var(--gradient-red)" }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="animate-rise text-center lg:text-left">
            <span className="inline-block rounded-full border border-accent/50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Queima total de estoque
            </span>
            <h1 className="mt-6 text-4xl leading-[0.95] sm:text-6xl">
              <span className="text-gold">🔥 Black Sale</span>
              <br />
              Queima total de estoque 🔥
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              O vaper descartável de <strong className="text-foreground">10.000 Puffs</strong> que
              custava 10.000 Kz agora custa apenas 3.960 Kz.
            </p>

            <ul className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              {["Até 10.000 Puffs", "Frete Grátis", "Entrega no Mesmo Dia", "Produto Original"].map(
                (t) => (
                  <li
                    key={t}
                    className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm"
                  >
                    <Check size={16} className="text-success" /> {t}
                  </li>
                ),
              )}
            </ul>

            <div className="mt-8 flex flex-col items-center gap-2 lg:items-start">
              <span className="font-display text-3xl text-muted-foreground line-through">
                10.000 Kz
              </span>
              <span className="font-display text-6xl leading-none text-gold sm:text-8xl">
                3.960 Kz
              </span>
              <span className="rounded-full bg-red-gradient px-4 py-1.5 text-sm font-bold text-primary-foreground">
                Poupas 6.040 Kz
              </span>
            </div>

            <div className="mt-8">
              <CTA />
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-border glow-gold">
              <img
                src={heroImg}
                alt="Vaper descartável de 10.000 puffs em promoção Black Sale"
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* PERKS */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PERKS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.text} delay={i * 80}>
                <div className="flex h-full items-center gap-3 rounded-2xl border border-border bg-surface px-5 py-4">
                  <Icon className="shrink-0 text-accent" size={22} />
                  <span className="text-sm font-medium">{p.text}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </header>

      {/* COUNTDOWN + STOCK */}
      <section className="border-y border-border bg-surface px-5 py-16">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl text-gold sm:text-4xl">A oferta termina em</h2>
          <div className="mt-8">
            <Countdown />
          </div>
          <div className="mt-10 rounded-2xl border border-primary/50 bg-surface-2 p-6">
            <p className="text-center font-display text-lg text-primary animate-scarcity">
              🔥 Restam apenas 27 unidades disponíveis
            </p>
            <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-background">
              <div className="h-full w-[18%] rounded-full bg-red-gradient animate-pulse-glow" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* BENEFITS */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center text-3xl sm:text-5xl">
              Porque este é o <span className="text-gold">melhor negócio</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={b.title} delay={i * 60}>
                  <div className="h-full rounded-2xl border border-border bg-surface p-6 transition hover:border-accent/60 hover:-translate-y-1">
                    <Icon className="text-accent" size={26} />
                    <h3 className="mt-4 text-lg">{b.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-center text-3xl sm:text-5xl">Porquê comprar connosco?</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-surface p-7 opacity-80">
                <h3 className="text-xl text-muted-foreground">Outros Pods</h3>
                <ul className="mt-5 space-y-3 text-sm">
                  {["Pouca duração", "Preço elevado", "Sem entrega rápida", "Frete pago"].map(
                    (t) => (
                      <li key={t} className="flex items-center gap-3 text-muted-foreground">
                        <X size={18} className="text-primary" /> {t}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full rounded-2xl border border-accent/60 bg-surface p-7 glow-gold">
                <h3 className="text-xl text-gold">O nosso Vaper</h3>
                <ul className="mt-5 space-y-3 text-sm">
                  {[
                    "Até 10.000 Puffs",
                    "Apenas 3.960 Kz",
                    "Frete Grátis",
                    "Entrega no Mesmo Dia",
                    "Produto Original",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <Check size={18} className="text-success" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-border bg-surface px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center text-3xl sm:text-5xl">Como funciona</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s} delay={i * 90}>
                <div className="h-full rounded-2xl border border-border bg-surface-2 p-6">
                  <span className="font-display text-4xl text-gold">0{i + 1}</span>
                  <p className="mt-3 text-sm text-muted-foreground">{s}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER / SIMULATOR */}
      <section id="pedido" className="px-5 py-20">
        <Reveal>
          <h2 className="text-center text-3xl sm:text-5xl">
            Garante o teu <span className="text-gold">agora</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm text-muted-foreground">
            Coloca o teu nome e bairro para acompanhar o motoboy em tempo real.
          </p>
          <div className="mt-10">
            <OrderSimulator />
          </div>
        </Reveal>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-border bg-surface px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center text-3xl sm:text-5xl">Quem já recebeu em Luanda</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="h-full rounded-2xl border border-border bg-surface-2 p-7">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed">"{t.text}"</blockquote>
                  <figcaption className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {t.name} — {t.hood}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL OFFER */}
      <section className="px-5 py-20">
        <Reveal>
          <div className="mx-auto max-w-4xl rounded-[2rem] bg-red-gradient p-10 text-center sm:p-16">
            <h2 className="text-4xl text-primary-foreground sm:text-6xl">Black Sale</h2>
            <p className="mt-6 text-xs uppercase tracking-[0.35em] text-primary-foreground/80">
              De
            </p>
            <p className="font-display text-4xl text-primary-foreground/70 line-through">
              10.000 Kz
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.35em] text-primary-foreground/80">
              Por apenas
            </p>
            <p className="font-display text-6xl text-primary-foreground sm:text-8xl">3.960 Kz</p>
            <span className="mt-8 inline-block rounded-full border-2 border-accent px-6 py-3 font-display text-lg text-gold">
              Poupas 6.040 Kz
            </span>
          </div>
        </Reveal>
      </section>

      {/* GUARANTEES */}
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {GUARANTEES.map((g, i) => {
            const Icon = g.icon;
            return (
              <Reveal key={g.text} delay={i * 70}>
                <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-6 text-center">
                  <Icon size={26} className="text-accent" />
                  <span className="text-sm font-medium">{g.text}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-border px-5 py-24 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-4xl leading-tight sm:text-6xl">
            Não deixes esta <span className="text-gold">oportunidade</span> passar!
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            O preço promocional de 3.960 Kz termina em 48 horas. Depois da promoção, o valor volta
            para 10.000 Kz.
          </p>
          <div className="mt-10">
            <CTA label="🔥 GARANTIR O MEU AGORA" />
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-surface px-5 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-lg text-gold">Black Sale Vapers</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Entrega no mesmo dia em todos os cantos de Luanda.
            </p>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="text-foreground">Contactos</p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="block story-link">
              WhatsApp: +244 900 000 000
            </a>
            <p>Luanda, Angola</p>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="text-foreground">Informações</p>
            <a href="#pedido" className="block">
              Política de Privacidade
            </a>
            <a href="#pedido" className="block">
              Termos de Uso
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="block">
              Redes Sociais
            </a>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl text-xs text-muted-foreground">
          Venda proibida a menores de 18 anos. Produto contém nicotina.
        </p>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-success text-background shadow-lg transition hover:scale-110 sm:bottom-28"
      >
        <MessageCircle size={26} />
      </a>

      {/* STICKY CTA */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur transition-transform duration-300 ${
          showBar ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
          <div className="leading-tight">
            <p className="text-xs text-muted-foreground line-through">10.000 Kz</p>
            <p className="font-display text-xl text-gold">3.960 Kz</p>
          </div>
          <button
            onClick={scrollToOrder}
            className="flex-1 rounded-xl bg-red-gradient px-5 py-3 font-display text-lg text-primary-foreground animate-pulse-glow sm:flex-none sm:px-10"
          >
            Comprar agora
          </button>
        </div>
      </div>
    </div>
  );
}
