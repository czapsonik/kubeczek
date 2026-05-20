import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>
            Majster<span className="text-accent">+</span> Gołkowice
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            PHU Kubeczek — lokalne centrum wyposażenia wnętrz. Drzwi, panele, podłogi i bramy garażowe.
          </p>
        </div>
        <div className="text-sm">
          <div className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Kontakt</div>
          <p className="text-foreground">ul. 1 Maja 226</p>
          <p className="text-foreground">44-341 Gołkowice</p>
          <a href="tel:+48324725067" className="mt-2 block text-foreground hover:text-accent">+48 32 472 50 67</a>
        </div>
        <div className="text-sm">
          <div className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Godziny otwarcia</div>
          <p className="text-foreground">Pon – Pt: 8:00 – 17:00</p>
          <p className="text-foreground">Sobota: 8:00 – 13:00</p>
          <p className="text-muted-foreground">Niedziela: zamknięte</p>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Majster Plus Gołkowice — PHU Kubeczek. Wszelkie prawa zastrzeżone.
        <span className="mx-2">·</span>
        <Link to="/kontakt" className="hover:text-foreground">Kontakt</Link>
      </div>
    </footer>
  );
}