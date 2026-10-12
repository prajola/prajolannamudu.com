import { Section, Reveal, Eyebrow } from "./ui";
import { roleModels } from "@/content";

/**
 * "Who I look up to" - the quote carries each panel, because the point of
 * the section is their words, not a biography. Set in the serif italic
 * used elsewhere for emphasis, so it reads as a voice rather than copy.
 */
export default function Inspiration() {
  return (
    <Section id="inspiration" className="border-t" style={{ borderColor: "var(--pa-line)" }}>
      <Reveal>
        <Eyebrow index="04">Inspiration</Eyebrow>
        <div className="mt-5 grid gap-6 md:grid-cols-[1.2fr_minmax(0,1fr)] md:items-end md:gap-12">
          <h2
            className="pa-display font-semibold leading-[1.06] tracking-[-0.03em]"
            style={{ fontSize: "clamp(30px, 4.2vw, 52px)", color: "var(--pa-text)" }}
          >
            Who I look{" "}
            <span className="pa-serif font-normal italic">up to.</span>
          </h2>
          <p className="max-w-md text-[15px] leading-relaxed" style={{ color: "var(--pa-muted)" }}>
            Two people who shaped how I think about building - one about products, one about
            where you can start from.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-px md:grid-cols-2" style={{ background: "var(--pa-line)" }}>
        {roleModels.map((r, i) => (
          <Reveal key={r.name} delay={i * 0.08}>
            <article
              className="flex h-full flex-col justify-between p-8 sm:p-10"
              style={{ background: "var(--pa-bg)" }}
            >
              <div>
                <span
                  className="pa-mono text-[10.5px] uppercase tracking-[0.2em]"
                  style={{ color: "var(--pa-dim)" }}
                >
                  0{i + 1}
                </span>
                {/* The quote leads - their words, not a description of them. */}
                <blockquote
                  className="pa-serif mt-6 italic leading-[1.15]"
                  style={{ fontSize: "clamp(26px, 3.2vw, 40px)", color: "var(--pa-text)" }}
                >
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption
                  className="pa-display mt-6 text-[19px] font-semibold tracking-[-0.015em]"
                  style={{ color: "var(--pa-text)" }}
                >
                  {r.name}
                </figcaption>
                <div className="mt-1 text-[13px]" style={{ color: "var(--pa-dim)" }}>
                  {r.known}
                </div>
              </div>

              <p
                className="mt-8 border-t pt-6 text-[14.5px] leading-[1.7]"
                style={{ borderColor: "var(--pa-line)", color: "var(--pa-muted)" }}
              >
                {r.why}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
