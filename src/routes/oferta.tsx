import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import panele from "@/assets/panele.jpg";
import drzwi from "@/assets/drzwi.jpg";
import bramy from "@/assets/bramy.jpg";

export const Route = createFileRoute("/oferta")({
  head: () => ({
    meta: [
      { title: "Oferta — Majster Plus Gołkowice" },
      { name: "description", content: "Panele podłogowe, drzwi wewnętrzne i zewnętrzne, bramy garażowe oraz akcesoria — pełna oferta sklepu Majster Plus w Gołkowicach." },
      { property: "og:title", content: "Oferta — Majster Plus Gołkowice" },
      { property: "og:description", content: "Drzwi, panele i bramy — zobacz pełną ofertę." },
    ],
  }),
  component: Offer,
});

const sections = [
  {
    title: "Panele podłogowe i podłogi",
    img: panele,
    items: ["Swiss Krono", "Classen", "Querra", "VILO", "Listwy, podkłady i akcesoria"],
    desc: "Setki wzorów i kolorów na ekspozycji. Doradzimy klasę ścieralności i sposób ułożenia.",
  },
  {
    title: "Drzwi wewnętrzne i zewnętrzne",
    img: drzwi,
    items: ["Drzwi pokojowe z ościeżnicą", "Drzwi zewnętrzne stalowe", "Drzwi przesuwne", "Pomiar i montaż"],
    desc: "Pełen wachlarz wzornictwa — od klasyki po nowoczesne kolekcje. Profesjonalny pomiar i montaż.",
  },
  {
    title: "Bramy garażowe",
    img: bramy,
    items: ["Bramy segmentowe", "Bramy rolowane", "Automatyka i napędy", "Serwis i konserwacja"],
    desc: "Bramy renomowanych producentów — ciepłe, bezpieczne i estetyczne. Z montażem pod klucz.",
  },
];

function Offer() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Oferta</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-semibold md:text-6xl">Wszystko do wykończenia Twojego domu.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Sprzedaż produktów najlepszych producentów oraz kompleksowy montaż. Zapraszamy na ekspozycję w Gołkowicach.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="space-y-24">
          {sections.map((s, i) => (
            <article key={s.title} className="grid items-center gap-10 md:grid-cols-2">
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="overflow-hidden rounded-sm shadow-[var(--shadow-soft)]">
                  <img src={s.img} alt={s.title} className="aspect-[4/3] w-full object-cover" loading="lazy" width={900} height={700} />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-semibold md:text-4xl">{s.title}</h2>
                <p className="mt-4 text-muted-foreground">{s.desc}</p>
                <ul className="mt-6 space-y-3">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 text-accent" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}