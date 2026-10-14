import { Section, Reveal, Eyebrow } from "./ui";
import { story } from "@/content";
import type { Chapter } from "@/content";

/**
 * "The path so far" - the full record, grouped into four acts.
 *
 * A flat seventeen-item list has no shape: every entry carries equal
 * weight, so there is nothing to orient against and the eye just slides.
 * Grouping into Roots / Craft / Ventures / Ecosystem gives the sequence
 * an arc, and lets the period be set large enough to anchor each row.
 *
 * Entries now carry role, organisation, basis, place and the detail of
 * what the work involved - so the heading is the role and the detail
 * sits beneath it, rather than everything collapsing into one line.
 */

const ERAS: { key: Chapter["era"]; label: string; note: string }[] = [
  { key: "Roots", label: "Roots", note: "Nellore, the degree, and the foundation that came with it" },
  { key: "Craft", label: "Craft", note: "Learning how systems break, and why - client work, cloud, QA, and the move to the UK" },
  { key: "Ventures", label: "Ventures", note: "Founding, shipping, and owning the outcome" },
  { key: "Ecosystem", label: "Ecosystem", note: "The networks the next chapter gets built in" },
];

function Entry({ c }: { c: Chapter }) {
  return (
    <li
      className="group grid gap-x-8 gap-y-2 border-t py-7 sm:grid-cols-[minmax(150px,190px)_1fr] sm:py-8"
      style={{ borderColor: "var(--pa-line)" }}
    >
      {/* Period, set large enough to anchor the row - an 11px mono date
          could not hold its own column against a 20px title. The dot
          marks what is still running. */}
      <div className="flex items-baseline gap-2.5">
        {c.current && (
          <span
            aria-hidden="true"
            className="mt-2 h-1.5 w-1.5 shrink-0 self-start rounded-full"
            style={{ background: "var(--pa-text)" }}
          />
        )}
        <span
          className="pa-display text-[15px] font-semibold tracking-[-0.01em] sm:text-[16px]"
          style={{ color: c.current ? "var(--pa-text)" : "var(--pa-dim)" }}
        >
          {c.when}
        </span>
      </div>

      <div className="min-w-0">
        <h4
          className="pa-display text-[18.5px] font-semibold leading-snug tracking-[-0.015em] sm:text-[20px]"
          style={{ color: "var(--pa-text)" }}
        >
          {c.title}
        </h4>

        {/* Organisation, basis and place on one meta line. Each part is
            optional, so life events carry only what applies to them. */}
        {(c.org || c.kind || c.where) && (
          <div className="mt-1.5 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[13px]">
            {c.org && (
              <span className="font-medium" style={{ color: "var(--pa-text)" }}>
                {c.org}
              </span>
            )}
            {c.org && c.kind && (
              <span aria-hidden="true" style={{ color: "var(--pa-line-2)" }}>
                ·
              </span>
            )}
            {c.kind && <span style={{ color: "var(--pa-dim)" }}>{c.kind}</span>}
            {(c.org || c.kind) && c.where && (
              <span aria-hidden="true" style={{ color: "var(--pa-line-2)" }}>
                ·
              </span>
            )}
            {c.where && <span style={{ color: "var(--pa-dim)" }}>{c.where}</span>}
          </div>
        )}

        <p
          className="mt-3 max-w-[62ch] text-[14.5px] leading-[1.7]"
          style={{ color: "var(--pa-muted)" }}
        >
          {c.body}
        </p>

        {/* What the work actually was. Indented behind a hairline so it
            reads as subordinate detail without needing bullet glyphs. */}
        {c.points && c.points.length > 0 && (
          <ul
            className="mt-4 max-w-[64ch] space-y-2 border-l pl-5"
            style={{ borderColor: "var(--pa-line)" }}
          >
            {c.points.map((p) => (
              <li
                key={p}
                className="text-[13.5px] leading-[1.65]"
                style={{ color: "var(--pa-dim)" }}
              >
                {p}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

export default function Story() {
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
            From a small town on the Andhra Pradesh coast to a deep-tech company in the UK -
            the degree, the client work, the cloud, the ventures, and everything in between.
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

                {/* Only the final act closes with a bottom rule. Closing
                    every act would put two rules 64px apart at each
                    junction, with an empty band between them. */}
                <ol
                  className={ei === ERAS.length - 1 ? "border-b" : ""}
                  style={{ borderColor: "var(--pa-line)" }}
                >
                  {entries.map((c) => (
                    <Entry key={`${c.when}-${c.title}`} c={c} />
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
