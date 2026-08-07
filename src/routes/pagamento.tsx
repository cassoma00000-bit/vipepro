import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Truck, Lock } from "lucide-react";
import { CHECKOUT_URL } from "@/components/OrderSimulator";

export const Route = createFileRoute("/pagamento")({
  head: () => ({
    meta: [
      { title: "Como pagar o teu LED Astronauta | Entrega em Luanda" },
      {
        name: "description",
        content:
          "Vê o vídeo rápido e descobre como efectuar o pagamento do teu Kit 2 LED Astronauta por 5.500 Kz com entrega grátis em Luanda.",
      },
      { property: "og:title", content: "Como pagar o teu LED Astronauta" },
      {
        property: "og:description",
        content: "Vídeo rápido com o passo a passo do pagamento e entrega no mesmo dia em Luanda.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PagamentoPage,
});

function PagamentoPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (typeof e.origin !== "string" || !e.origin.includes("vimeo.com")) return;
      let data: any = e.data;
      if (typeof data === "string") {
        try {
          data = JSON.parse(data);
        } catch {
          return;
        }
      }
      if (data?.event === "ready") {
        iframeRef.current?.contentWindow?.postMessage(
          JSON.stringify({ method: "addEventListener", value: "ended" }),
          "https://player.vimeo.com",
        );
      }
      if (data?.event === "ended") setDone(true);
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="min-h-screen bg-background px-4 py-10">
      <div className="mx-auto max-w-2xl text-center">
        <Link to="/" className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          ← Voltar
        </Link>
        <h1 className="mt-6 font-display text-3xl text-gold sm:text-4xl">
          Vê como efectuar o pagamento
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Assiste ao vídeo até ao fim — logo a seguir aparece o botão para concluir a tua compra.
        </p>

        <div className="mx-auto mt-8 w-full max-w-[496px] overflow-hidden rounded-3xl border border-border bg-surface glow-gold">
          <div className="relative w-full" style={{ paddingTop: "170.97%" }}>
            <iframe
              ref={iframeRef}
              src="https://player.vimeo.com/video/1216368982?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="VSL"
            />
          </div>
        </div>

        <div className="mt-8">
          {done ? (
            <div className="space-y-4">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-2xl bg-red-gradient px-6 py-5 font-display text-xl tracking-wide text-primary-foreground animate-pulse-glow transition hover:brightness-110"
              >
                💳 CONCLUIR O MEU PEDIDO — 5.500 Kz
              </a>
              <p className="text-xs text-muted-foreground">
                Pagamento seguro • Entrega no mesmo dia em Luanda • Garantia de 7 dias
              </p>
            </div>
          ) : (
            <p className="rounded-2xl border border-border bg-surface-2 px-5 py-4 text-sm text-muted-foreground">
              🔒 O botão de checkout aparece assim que o vídeo terminar.
            </p>
          )}
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {[
            { icon: Truck, label: "Entrega grátis hoje" },
            { icon: ShieldCheck, label: "Garantia de 7 dias" },
            { icon: Lock, label: "Compra 100% segura" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-2 rounded-xl border border-border bg-surface-2 px-4 py-3 text-xs text-muted-foreground"
            >
              <Icon size={16} className="text-accent" /> {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
