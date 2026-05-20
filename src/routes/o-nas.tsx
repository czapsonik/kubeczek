import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "O nas — Majster Plus Gołkowice (PHU Kubeczek)" },
      { name: "description", content: "Majster Plus Gołkowice — PHU Kubeczek. Lokalne centrum wyposażenia wnętrz z wieloletnim doświadczeniem w sprzedaży i montażu drzwi, paneli i bram." },
      { property: "og:title", content: "O nas — Majster Plus Gołkowice" },
      { property: "og:description", content: "Lokalna firma z pasją do urządzania wnętrz." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">O nas</p>
        <h1 className="mt-3 text-5xl font-semibold md:text-6xl">Lokalna firma. Solidna marka.</h1>
        <div className="prose prose-neutral mt-10 max-w-none text-base leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-foreground">Majster Plus Gołkowice</strong> to lokalne centrum wyposażenia wnętrz prowadzone przez firmę <strong className="text-foreground">PHU Kubeczek</strong>. Specjalizujemy się w sprzedaży i profesjonalnym montażu drzwi, paneli, podłóg oraz bram garażowych.
          </p>
          <p className="mt-4">
            Działamy pod marką Majster Plus, która od lat kojarzona jest z solidnością, wysoką jakością i sprawdzonymi producentami. W naszym salonie znajdziesz produkty takich marek jak Swiss Krono, Classen czy Querra — wszystko prezentowane na żywo na bogatej ekspozycji.
          </p>
          <p className="mt-4">
            Wierzymy, że dobre wnętrze zaczyna się od dobrych materiałów i fachowego doradztwa. Dlatego stawiamy na bliski kontakt z klientem, indywidualne podejście i kompleksową obsługę — od pomiaru, przez wybór produktu, aż po finalny montaż.
          </p>
        </div>

        <div className="mt-16 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
          <div>
            <div className="font-display text-5xl font-semibold text-accent" style={{ fontFamily: "var(--font-display)" }}>10+</div>
            <div className="mt-2 text-sm text-muted-foreground">lat na rynku</div>
          </div>
          <div>
            <div className="font-display text-5xl font-semibold text-accent" style={{ fontFamily: "var(--font-display)" }}>1000+</div>
            <div className="mt-2 text-sm text-muted-foreground">zadowolonych klientów</div>
          </div>
          <div>
            <div className="font-display text-5xl font-semibold text-accent" style={{ fontFamily: "var(--font-display)" }}>3</div>
            <div className="mt-2 text-sm text-muted-foreground">główne kategorie produktów</div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}