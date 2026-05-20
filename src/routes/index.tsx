import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Hammer, ShieldCheck, Truck, Sparkles, Star } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reviews } from "@/components/Reviews";
import { Realizations } from "@/components/Realizations";
import hero from "@/assets/hero.jpg";
import panele from "@/assets/panele.jpg";
import drzwi from "@/assets/drzwi.jpg";
import bramy from "@/assets/bramy.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kubeczek Gołkowice — Drzwi, Panele i Bramy z montażem" },
      { name: "description", content: "Sprzedaż i profesjonalny montaż drzwi, paneli podłogowych i bram garażowych w Gołkowicach. Tysiące zadowolonych klientów, 5.0/5 w Google." },
    ],
  }),
  component: Home,
});

const categories = [
  { title: "Panele i podłogi", desc: "Renomowane marki — Swiss Krono, Classen, Querra. Doradzimy i pomożemy ułożyć.", img: panele, href: "/oferta" },
  { title: "Drzwi wewnętrzne i zewnętrzne", desc: "Klasyczne i nowoczesne. Pełna oferta z pomiarem i montażem na miejscu.", img: drzwi, href: "/oferta" },
  { title: "Bramy garażowe", desc: "Bramy segmentowe i rolowane od sprawdzonych producentów. Profesjonalny montaż.", img: bramy, href: "/oferta" },
];

const features = [
  { icon: Hammer, title: "Profesjonalny montaż", desc: "Własna ekipa montażystów z wieloletnim doświadczeniem." },
  { icon: ShieldCheck, title: "Sprawdzone marki", desc: "Współpracujemy tylko z renomowanymi producentami." },
  { icon: Truck, title: "Dostawa pod dom", desc: "Realizujemy dostawy na terenie powiatu i okolic." },
  { icon: Sparkles, title: "Lokalne doradztwo", desc: "Doradzamy z pasją — od projektu po finalny efekt." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={hero} alt="Drzwi i panele podłogowe Majster Plus" className="h-full w-full object-cover" width={1600} height={1100} />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-32 pt-32 md:pb-48 md:pt-44">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Gołkowice · od ponad dekady
            </p>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs text-white backdrop-blur">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </span>
              <span className="font-medium">5.0/5</span>
              <span className="text-white/80">· tysiące zadowolonych klientów</span>
            </p>
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] text-white md:text-7xl">
            Drzwi, panele i bramy <span className="italic text-accent">z charakterem.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Lokalne centrum wyposażenia wnętrz Majster Plus — sprzedaż, doradztwo i profesjonalny montaż w jednym miejscu.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/oferta" className="group inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5">
              Zobacz ofertę <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-sm border border-white/40 px-6 py-3 text-sm font-medium text-white hover:bg-white/10">
              Umów wizytę
            </Link>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Nasza oferta</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold md:text-5xl">
              Wszystko, czego potrzebujesz, by urządzić dom.
            </h2>
          </div>
          <Link to="/oferta" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent">
            Pełna oferta <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {categories.map((c) => (
            <Link key={c.title} to={c.href} className="group relative overflow-hidden rounded-sm bg-card shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-elev)]">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={900} height={700} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  Dowiedz się więcej <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Realizations */}
      <Realizations />

      {/* Reviews */}
      <Reviews limit={6} />

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[2fr_1fr] md:items-center">
          <div>
            <h2 className="text-4xl font-semibold md:text-5xl">Zaplanuj wizytę w salonie</h2>
            <p className="mt-4 max-w-xl text-primary-foreground/80">
              Wpadnij do nas w Gołkowicach — zobacz ekspozycję, porozmawiaj z doradcą i poznaj możliwości aranżacji swojego wnętrza.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Link to="/kontakt" className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-medium text-accent-foreground md:w-auto">
              Znajdź nas <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+48324727055" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">+48 32 472 70 55</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}