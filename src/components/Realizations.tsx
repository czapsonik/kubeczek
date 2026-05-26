import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import r1 from "@/assets/realizacja-1.jpg";
import r2 from "@/assets/realizacja-2.jpg";
import r3 from "@/assets/realizacja-3.jpg";
import r4 from "@/assets/realizacja-4.jpg";
import r5 from "@/assets/realizacja-5.jpg";
import r6 from "@/assets/realizacja-6.jpg";
import r7 from "@/assets/realizacja-7.jpg";
import r8 from "@/assets/realizacja-8.jpg";
import r9 from "@/assets/realizacja-9.jpg";
import r10 from "@/assets/realizacja-10.jpg";
import r11 from "@/assets/realizacja-11.jpg";

const list = [
  { src: r1, alt: "Drzwi wewnętrzne w betonowym dekorze — realizacja Kubeczek" },
  { src: r5, alt: "Panele podłogowe w salonie — realizacja Kubeczek" },
  { src: r2, alt: "Eleganckie białe drzwi wewnętrzne — realizacja" },
  { src: r6, alt: "Drzwi w kolorze szałwii ze złotą klamką — realizacja" },
  { src: r4, alt: "Drzwi zewnętrzne Pol-Skone — realizacja Kubeczek" },
  { src: r7, alt: "Jodełka klasyczna w korytarzu — realizacja podłogi" },
  { src: r3, alt: "Detal drzwi i klamki — realizacja" },
  { src: r8, alt: "Białe drzwi wewnętrzne z czarnymi klamkami — realizacja" },
  { src: r9, alt: "Nowoczesne rolety dzień-noc w oknach — realizacja" },
  { src: r10, alt: "Drzwi w dekorze drewna z czarnymi ościeżnicami — realizacja" },
  { src: r11, alt: "Drzwi premium ze złotymi detalami — realizacja" },
];

export function Realizations() {
  const [active, setActive] = useState<number | null>(null);
  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? null : (i - 1 + list.length) % list.length)),
    []
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % list.length)),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, close, prev, next]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Nasze realizacje</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-semibold md:text-5xl">
            Zobacz prace u naszych klientów.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Wybrane drzwi, panele i wykończenia z domów naszych klientów.
          </p>
        </div>
      </div>
      <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 md:auto-rows-[260px] md:grid-cols-4">
        {list.map((it, i) => (
          <button
            type="button"
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Powiększ zdjęcie: ${it.alt}`}
            className={
              "group overflow-hidden rounded-sm shadow-[var(--shadow-soft)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent " +
              (i === 0 ? "md:col-span-2 md:row-span-2" : i === 3 ? "md:row-span-2" : "")
            }
          >
            <img
              src={it.src}
              alt={it.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galeria realizacji"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Zamknij"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Poprzednie zdjęcie"
            className="absolute left-2 md:left-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <figure
            className="max-h-[90vh] max-w-[92vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={list[active].src}
              alt={list[active].alt}
              className="max-h-[85vh] max-w-[92vw] object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-white/80">
              {list[active].alt} · {active + 1} / {list.length}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Następne zdjęcie"
            className="absolute right-2 md:right-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}