import { Section, Reveal, Eyebrow } from "./ui";
import { story } from "@/content";
import type { Chapter } from "@/content";

/**
 * "The path so far" - the chronology, grouped into three acts.
 *
 * A flat eleven-item list has no shape: every entry carries equal weight,
 * so there is nothing to orient against and the eye just slides. Grouping
 * into Roots / Craft / Ventures gives the sequence an arc, and lets the
 * period be set large enough to act as the anchor for each row.
 */

const ERAS: { key: Chapter["era"]; label: string; note: string }[] = [
  { key: "Roots", label: "Roots", note: "Nellore, and the degree that started it" },
  { key: "Craft", label: "Craft", note: "Learning how systems break, and why" },
  { key: "Ventures", label: "Ventures", note: "Building, incorporating, shipping" },
];

function Entry({ c, current }: { c: Chapter; current: boolean }) {
  return (
    <li
      className="group grid gap-x-8 gap-y-1.5 border-t py-6 sm:grid-cols-[minmax(150px,190px)_1fr] sm:py-7"
      style={{ borderColor: "var(--pa-line)" }}
    >
      {/* Period, set large enough to anchor the row - a 11px mono date
          could not hold its own column against a 21px title. */}
      <div className="flex items-baseline gap-2.5">
        {current && (
          <span
            aria-hidden="true"
            className="mt-2 h-1.5 w-1.5 shrink-0 self-start rounded-full"
            style={{ background: "var(--pa-text)" }}
          />
        )}
        <span
          className="pa-display text-[15px] font-semibold tracking-[-0.01em] sm:text-[16px]"
          style={{ color: current ? "var(--pa-text)" : "var(--pa-dim)" }}
        >
          {c.when}
        </span>
      </div>

      <div className="min-w-0">
        <h3
          className="pa-display text-[18.5px] font-semibold leading-snug tracking-[-0.015em] sm:text-[20px]"
          style={{ color: "var(--pa-text)" }}
        >
          {c.title}
        </h3>
        <p
          className="mt-1.5 max-w-[62ch] text-[14.5px] leading-[1.7]"
          style={{ color: "var(--pa-muted)" }}
        >
          {c.body}
        </p>
      </div>
    </li>
  );
}

export default function Story() {
  const lastTitle = story[story.length - 1]?.title;

  return (
    <Section id="story" style={{ background: "var(--pa-bg-3)" }}>
      <Reveal>
        <Eyebrow index="02">The story so far</Eyebrow>
        <div className="mt-5 grid gap-6 md:grid-cols-[1.1fr_minmax(0,1fr)] md:items-end md:gap-12">
          <h2
            className="pa-display font-semibold leading-[1.06] tracking-[-0.03em]"
            style={{ fontSize: "clamp(30px, 4.2vw, 52px)", color: "var(--pa-text)" }}
          >
            The path so <span className="pa-serif font-normal italic">far.</span>
          </h2>
          <p className="max-w-md text-[15px] leading-relaxed" style={{ color: "var(--pa-muted)" }}>
            From Nellore to Belfast - study, early engineering work, and the ventures that
            followed.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 space-y-16">
        {ERAS.map(({ key, label, note }, ei) => {
          const entries = story.filter((c) => c.era === key);
          if (entries.length === 0) return null;
          return (
            <Reveal key={key} delay={ei * 0.05}>
              {/* Act heading sits in its own left column on wide screens,
                  so the entries keep a single continuous rule down the page. */}
              <div className="grid gap-y-5 lg:grid-cols-[220px_1fr] lg:gap-x-14">
                <div className="lg:sticky lg:top-10 lg:self-start">
                  <div className="flex items-baseline gap-3">
                    <span
                      className="pa-serif text-[26px] italic leading-none"
                      style={{ color: "var(--pa-dim)" }}
                    >
                      {String(ei + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="pa-display text-[22px] font-semibold tracking-[-0.02em]"
                      style={{ color: "var(--pa-text)" }}
                    >
                      {label}
                    </h3>
                  </div>
                  <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: "var(--pa-muted)" }}>
                    {note}
                  </p>
                </div>

                <ol className="border-b" style={{ borderColor: "var(--pa-line)" }}>
                  {entries.map((c) => (
                    <Entry key={`${c.when}-${c.title}`} c={c} current={c.title === lastTitle} />
                  ))}
                </ol>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
