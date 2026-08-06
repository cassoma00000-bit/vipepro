import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  BadgeCheck,
  Check,
  Gift,
  Headphones,
  Lightbulb,
  Lock,
  Moon,
  Package,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Usb,
  X,
  Zap,
} from "lucide-react";
import heroImg from "@/assets/astronaut-hero.jpg";
import photo1 from "@/assets/image-4.png";
import photo2 from "@/assets/image-5.png";
import photo3 from "@/assets/image-6.png";
import { Countdown } from "@/components/Countdown";
import { CHECKOUT_URL, OrderSimulator } from "@/components/OrderSimulator";
import { Reveal } from "@/components/Reveal";
import { StockCounter } from "@/components/StockCounter";

const TITLE = "Só Hoje: 2 LED Astronauta Galáxia por 5.500 Kz em Luanda";
const DESCRIPTION =
  "Últimas unidades: kit com 2 projetores LED Astronauta Galáxia de 17.000 Kz por 5.500 Kz. Entrega grátis no mesmo dia em Luanda e 7 dias de garantia. Oferta acaba em 24h.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function CTA({ label = "COMPRAR AGORA", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-2xl bg-red-gradient px-8 py-5 text-center font-display text-xl tracking-wide text-primary-foreground animate-pulse-glow transition hover:brightness-110 sm:text-2xl ${className}`}
    >
      {label}
    </a>
  );
}

function TopBar() {
  const item =
    "🚨 PROMOÇÃO IMPERDÍVEL • Entrega Grátis a Toda Luanda • Só Nas Próximas 24H • Estoque Limitado •";
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
  { icon: Package, text: "Entrega GRÁTIS" },
  { icon: Lock, text: "Compra 100% segura" },
  { icon: Star, text: "Produto original e de alta qualidade" },
];

const BENEFITS = [
  {
    icon: Sparkles,
    title: "Projeção de galáxia colorida",
    text: "Nebulosas e estrelas em movimento em qualquer parede ou tecto.",
  },
  { icon: Lightbulb, title: "2 LEDs potentes", text: "Brilho intenso mesmo em salas grandes." },
  {
    icon: Zap,
    title: "Controle remoto incluso",
    text: "Muda cor, brilho e modo sem sair da cama.",
  },
  { icon: Usb, title: "Alimentação via USB", text: "Liga na powerbank, no PC ou no carregador." },
  { icon: Moon, title: "Modo nocturno", text: "Timer automático para dormires com o céu ligado." },
  { icon: Gift, title: "Presente criativo", text: "O presente que toda a gente filma e partilha." },
  { icon: Truck, title: "Entrega Grátis", text: "Não pagas nada pela entrega em Luanda." },
  { icon: ShieldCheck, title: "Qualidade e durabilidade", text: "Material premium, feito para durar." },
];

const STEPS = [
  "Escolhe a quantidade de kits.",
  "Clica em Comprar Agora e confirma os teus dados.",
  "Faz o pagamento antecipado na página segura.",
  "Após confirmarmos o pagamento, o motoboy sai para a entrega.",
];

const TESTIMONIALS = [
  {
    name: "Rosa C.",
    hood: "Talatona, Luanda",
    text: "Comprei de manhã e recebi no mesmo dia. O quarto do meu filho ficou outro nível.",
    photo: photo1,
  },
  {
    name: "Edna F.",
    hood: "Cazenga, Luanda",
    text: "As cores são lindas mesmo e o comando funciona super bem. Ainda com entrega grátis.",
    photo: photo2,
  },
  {
    name: "Kiami D.",
    hood: "Viana, Luanda",
    text: "Comprei os dois para oferecer. Melhor promoção que encontrei em Luanda.",
    photo: photo3,
  },
];

const GUARANTEES = [
  { icon: BadgeCheck, text: "Produto Original" },
  { icon: ShieldCheck, text: "Compra Segura" },
  { icon: Headphones, text: "Atendimento Rápido" },
  { icon: Truck, text: "Entrega no Mesmo Dia" },
  { icon: Package, text: "Entrega Grátis" },
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

      {/* COUNTDOWN NO TOPO */}
      <section className="border-b border-border bg-surface px-5 py-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-xl text-gold sm:text-3xl">A oferta termina em</h2>
          <div className="mt-6">
            <Countdown />
          </div>
        </div>
      </section>


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
              Promoção imperdível • 24 horas
            </span>
            <h1 className="mt-6 text-4xl leading-[0.95] sm:text-6xl">
              <span className="text-gold">Transforma qualquer ambiente</span>
              <br />
              num show de estrelas ✨
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Kit com <strong className="text-foreground">2 LED Astronauta — Projetor Galáxia</strong>{" "}
              por apenas 5.500 Kz, com entrega grátis a toda Luanda.
            </p>

            <ul className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              {[
                "Projeção de galáxia colorida",
                "2 LEDs potentes",
                "Controle remoto incluso",
                "Alimentação via USB",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm"
                >
                  <Check size={16} className="text-success" /> {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col items-center gap-2 lg:items-start">
              <span className="font-display text-3xl text-muted-foreground line-through">
                17.000 Kz
              </span>
              <span className="font-display text-6xl leading-none text-gold sm:text-8xl">
                5.500 Kz
              </span>
              <span className="rounded-full bg-red-gradient px-4 py-1.5 text-sm font-bold text-primary-foreground">
                Poupas 11.500 Kz
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
                alt="Kit com 2 projetores LED Astronauta Galáxia a projetar estrelas num quarto"
                width={1024}
                height={1024}
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

      {/* STOCK */}
      <section className="border-y border-border bg-surface px-5 py-16">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl text-gold sm:text-4xl">Estoque em tempo real</h2>
          <StockCounter />
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
                <h3 className="text-xl text-muted-foreground">Outros projetores</h3>
                <ul className="mt-5 space-y-3 text-sm">
                  {[
                    "Luz fraca e sem cor",
                    "Sem controle remoto",
                    "Preço elevado por 1 unidade",
                    "Entrega paga e demorada",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3 text-muted-foreground">
                      <X size={18} className="text-primary" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full rounded-2xl border border-accent/60 bg-surface p-7 glow-gold">
                <h3 className="text-xl text-gold">O nosso kit 2 LED Astronauta</h3>
                <ul className="mt-5 space-y-3 text-sm">
                  {[
                    "Projeção de galáxia colorida",
                    "2 unidades por apenas 5.500 Kz",
                    "Controle remoto incluso",
                    "Entrega Grátis no Mesmo Dia",
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
                <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-2">
                  <div className="aspect-[4/5] w-full bg-background">
                    <img
                      src={t.photo}
                      alt={`Cliente de ${t.hood} com o LED Astronauta recebido`}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star key={k} size={16} className="fill-accent text-accent" />
                      ))}
                    </div>
                    <blockquote className="mt-4 text-sm leading-relaxed">"{t.text}"</blockquote>
                    <figcaption className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {t.name} — <span className="text-gold">{t.hood}</span>
                    </figcaption>
                  </div>
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
            <h2 className="text-4xl text-primary-foreground sm:text-6xl">Promoção Imperdível</h2>
            <p className="mt-6 text-xs uppercase tracking-[0.35em] text-primary-foreground/80">De</p>
            <p className="font-display text-4xl text-primary-foreground/70 line-through">17.000 Kz</p>
            <p className="mt-4 text-xs uppercase tracking-[0.35em] text-primary-foreground/80">
              Por apenas
            </p>
            <p className="font-display text-6xl text-primary-foreground sm:text-8xl">5.500 Kz</p>
            <span className="mt-8 inline-block rounded-full border-2 border-accent px-6 py-3 font-display text-lg text-gold">
              Poupas 11.500 Kz
            </span>
          </div>
        </Reveal>
      </section>

      {/* GUARANTEE SEAL */}
      <section className="px-5 pb-16">
        <Reveal>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-[2rem] border-2 border-accent/70 bg-surface p-8 text-center glow-gold sm:flex-row sm:text-left">
            <div className="relative grid h-32 w-32 shrink-0 place-items-center rounded-full bg-gold text-accent-foreground">
              <div className="absolute inset-2 rounded-full border-2 border-dashed border-accent-foreground/40" />
              <div className="leading-none">
                <p className="font-display text-4xl">7</p>
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em]">dias</p>
                <p className="mt-1 text-[0.55rem] font-bold uppercase tracking-[0.15em]">garantia</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl text-gold sm:text-3xl">Garantia total de 7 dias</h2>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                Se não gostares do teu projetor LED Astronauta, devolvemos o teu dinheiro. Tens 7
                dias para testar sem risco — a satisfação é garantida ou o reembolso é integral.
              </p>
            </div>
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
            O preço promocional de 5.500 Kz termina em 24 horas. Depois da promoção, o valor volta
            para 17.000 Kz.
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
            <h3 className="text-lg text-gold">LED Astronauta Luanda</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Entrega no mesmo dia em todos os cantos de Luanda.
            </p>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="text-foreground">Entrega</p>
            <p>Luanda, Angola</p>
            <p>Pagamento antecipado antes do envio</p>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="text-foreground">Informações</p>
            <a href="#pedido" className="block">
              Política de Privacidade
            </a>
            <a href="#pedido" className="block">
              Termos de Uso
            </a>
            <p>Garantia de 7 dias</p>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl text-xs text-muted-foreground">
          Projetor LED Astronauta Galáxia • Alimentação via USB • Produto original com garantia de 7
          dias.
        </p>
      </footer>

      {/* STICKY CTA */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur transition-transform duration-300 ${
          showBar ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
          <div className="leading-tight">
            <p className="text-xs text-muted-foreground line-through">17.000 Kz</p>
            <p className="font-display text-xl text-gold">5.500 Kz</p>
          </div>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-xl bg-red-gradient px-5 py-3 text-center font-display text-lg text-primary-foreground animate-pulse-glow sm:flex-none sm:px-10"
          >
            Comprar agora
          </a>
        </div>
      </div>
    </div>
  );
}
