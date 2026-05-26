import { Star, Quote } from "lucide-react";
import { reviews } from "@/data/reviews";

export function Reviews({ limit }: { limit?: number }) {
  const list = limit ? reviews.slice(0, limit) : reviews;
  return (
    <section className="bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Opinie klientów</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold md:text-5xl">
              Tysiące zadowolonych klientów.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Średnia ocena <strong className="text-foreground">4,7/5</strong> w opiniach Google. Zobacz, co o nas mówią.
            </p>
          </div>
          <a
            href="https://www.google.com/maps/search/Majster+Plus+Ko%C5%82kowice"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-4 py-2 text-sm font-medium hover:border-accent"
          >
            <span className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </span>
            Zobacz na Google
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((r) => (
            <article
              key={r.name + r.when}
              className="relative rounded-sm border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
            >
              <Quote className="absolute right-5 top-5 h-6 w-6 text-accent/30" />
              <div className="flex items-center gap-1">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground">"{r.text}"</p>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs">
                <span className="font-medium text-foreground">{r.name}</span>
                <span className="text-muted-foreground">{r.when ? `${r.when} · Google` : "Google"}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}