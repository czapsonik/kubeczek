import r1 from "@/assets/realizacja-1.jpg";
import r2 from "@/assets/realizacja-2.jpg";
import r3 from "@/assets/realizacja-3.jpg";
import r4 from "@/assets/realizacja-4.jpg";
import r5 from "@/assets/realizacja-5.jpg";
import r6 from "@/assets/realizacja-6.jpg";
import r7 from "@/assets/realizacja-7.jpg";

const list = [
  { src: r1, alt: "Drzwi wewnętrzne w betonowym dekorze — realizacja Kubeczek" },
  { src: r5, alt: "Panele podłogowe w salonie — realizacja Kubeczek" },
  { src: r2, alt: "Eleganckie białe drzwi wewnętrzne — realizacja" },
  { src: r6, alt: "Drzwi w kolorze szałwii ze złotą klamką — realizacja" },
  { src: r4, alt: "Drzwi zewnętrzne Pol-Skone — realizacja Kubeczek" },
  { src: r7, alt: "Jodełka klasyczna w korytarzu — realizacja podłogi" },
  { src: r3, alt: "Detal drzwi i klamki — realizacja" },
];

export function Realizations() {
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
          <figure
            key={i}
            className={
              "overflow-hidden rounded-sm shadow-[var(--shadow-soft)] " +
              (i === 0 ? "md:col-span-2 md:row-span-2" : i === 3 ? "md:row-span-2" : "")
            }
          >
            <img src={it.src} alt={it.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          </figure>
        ))}
      </div>
    </section>
  );
}