import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Kubeczek Gołkowice" },
      { name: "description", content: "Skontaktuj się z Kubeczek Gołkowice. ul. 1 Maja 226, 44-341 Gołkowice. Tel: 32 472 70 55." },
      { property: "og:title", content: "Kontakt — Kubeczek Gołkowice" },
      { property: "og:description", content: "Adres, telefon, godziny otwarcia i mapa dojazdu." },
    ],
  }),
  component: Contact,
});

const info = [
  { icon: MapPin, label: "Adres", value: "ul. 1 Maja 226\n44-341 Gołkowice" },
  { icon: Phone, label: "Telefon", value: "+48 32 472 70 55", href: "tel:+48324727055" },
  { icon: Mail, label: "E-mail", value: "ola@kubeczekpanele.pl", href: "mailto:ola@kubeczekpanele.pl" },
  { icon: Clock, label: "Godziny otwarcia", value: "Pon – Pt: 8:00 – 17:00\nSobota: 8:00 – 13:00\nNiedziela: zamknięte" },
];

function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Kontakt</p>
        <h1 className="mt-3 max-w-2xl text-5xl font-semibold md:text-6xl">Zapraszamy do salonu.</h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          Zobacz ekspozycję na żywo, porozmawiaj z doradcą i wybierz produkty, które najlepiej pasują do Twojego wnętrza.
        </p>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            {info.map((i) => (
              <div key={i.label} className="flex items-start gap-4 rounded-sm border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                  <i.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">{i.label}</div>
                  {i.href ? (
                    <a href={i.href} className="mt-1 block whitespace-pre-line text-base text-foreground hover:text-accent">{i.value}</a>
                  ) : (
                    <p className="mt-1 whitespace-pre-line text-base text-foreground">{i.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-sm border border-border shadow-[var(--shadow-soft)]">
            <iframe
              title="Mapa — Kubeczek Gołkowice"
              src="https://www.google.com/maps?q=ul.%201%20Maja%20226%2C%2044-341%20Go%C5%82kowice&output=embed"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}