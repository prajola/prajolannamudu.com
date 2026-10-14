import { Section, Reveal, Eyebrow } from "./ui";
import { roleModels } from "@/content";
import type { RoleModel } from "@/content";

/**
 * "Who I look up to" - the quote carries each panel, because the point of
 * the section is their words, not a biography. Set in the serif italic
 * used elsewhere for emphasis, so it reads as a voice rather than copy.
 *
 * The portraits sit above the quote, desaturated: the page is monochrome
 * throughout, and two full-colour photographs would be the only colour on
 * it. Greyscale is applied in CSS rather than baked into the files so the
 * originals stay faithful to their source.
 *
 * Both photographs are reused under licences requiring attribution, so
 * the credit line at the foot of the section is load-bearing - see
 * ImageCredit in content.ts. Do not remove it while the portraits are up.
 */

function Portrait({ r }: { r: RoleModel }) {
  if (!r.image) return null;
  return (
    <div
      className="relative mb-8 overflow-hidden"
      style={{ background: "var(--pa-bg-3)" }}
    >
      <picture>
        {r.imageWebp && <source srcSet={r.imageWebp} type="image/webp" />}
        <img
          src={r.image}
          alt={`Portrait of ${r.name}`}
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full select-none object-cover object-top transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.02] group-hover:grayscale-[0.55]"
          style={{ filter: "grayscale(1) contrast(1.04)" }}
        />
      </picture>
    </div>
  );
}

export default function Inspiration() {
  const credited = roleModels.filter((r) => r.image && r.credit);

  return (
    <Section id="inspiration" className="border-t" style={{ borderColor: "var(--pa-line)" }}>
      <Reveal>
        <Eyebrow index="05">Inspiration</Eyebrow>
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
              className="group flex h-full flex-col justify-between p-8 sm:p-10"
              style={{ background: "var(--pa-bg)" }}
            >
              <div>
                <Portrait r={r} />
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

      {/* Attribution. Required by both licences - not optional polish. */}
      {credited.length > 0 && (
        <p className="mt-6 text-[11.5px] leading-[1.7]" style={{ color: "var(--pa-dim)" }}>
          Portraits:{" "}
          {credited.map((r, i) => (
            <span key={r.name}>
              {i > 0 && "; "}
              {r.name} &mdash;{" "}
              <a
                href={r.credit!.sourceUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="underline decoration-dotted underline-offset-2 transition-colors hover:text-black"
              >
                {r.credit!.author}
              </a>
              ,{" "}
              <a
                href={r.credit!.licenceUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="underline decoration-dotted underline-offset-2 transition-colors hover:text-black"
              >
                {r.credit!.licence}
              </a>
            </span>
          ))}
          . Both resized for the web and shown desaturated.
        </p>
      )}
    </Section>
  );
}
