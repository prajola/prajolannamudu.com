import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Section,
  Reveal,
  Eyebrow,
  EASE,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
  DiscordIcon,
  InstagramIcon,
} from "./ui";
import { building } from "@/content";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

/** Matches the channel names in `building.social` to their glyphs. */
const SOCIAL_ICONS: Record<string, ReactNode> = {
  LinkedIn: <LinkedInIcon size={15} />,
  X: <XIcon size={14} />,
  Instagram: <InstagramIcon size={15} />,
  YouTube: <YouTubeIcon size={16} />,
  Discord: <DiscordIcon size={16} />,
};

/** The product's four stages, cycled in the workflow card. */
const STAGES = ["Detect", "Understand", "Fix", "Verify"];

/**
 * A live indicator for the multi-agent workflow: the four stages advance
 * on a loop, so the card demonstrates the sequence rather than only
 * describing it. Frozen on the first stage under reduced motion.
 */
function StageLoop() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setActive((i) => (i + 1) % STAGES.length), 1400);
    return () => clearInterval(t);
  }, [reduced]);

  return (
    <div className="mt-5 flex flex-wrap items-center gap-1.5" aria-hidden="true">
      {STAGES.map((s, i) => {
        const on = i === active;
        return (
          <span key={s} className="flex items-center gap-1.5">
            <span
              className="rounded-full border px-2.5 py-1 text-[10.5px] transition-colors duration-500"
              style={{
                borderColor: on ? "var(--pa-text)" : "var(--pa-line-2)",
                background: on ? "var(--pa-text)" : "transparent",
                color: on ? "#fff" : "var(--pa-dim)",
              }}
            >
              {s}
            </span>
            {i < STAGES.length - 1 && (
              <span className="h-px w-2.5" style={{ background: "var(--pa-line-2)" }} />
            )}
          </span>
        );
      })}
    </div>
  );
}

export default function Building() {
  const reduced = useReducedMotion();

  /* Stats reveal left-to-right because they *are* a sequence — detect,
     then root cause, then closed — so the order carries meaning. */
  const statParent = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.14, delayChildren: 0.1 } },
  };
  const statChild = {
    hidden: { opacity: 0, y: reduced ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <Section id="building" style={{ background: "var(--pa-bg-3)" }}>
      <Reveal>
        <Eyebrow index="03">What I'm building</Eyebrow>
        <div className="mt-5 grid gap-6 md:grid-cols-[1.25fr_minmax(0,1fr)] md:items-end md:gap-12">
          <h2
            className="pa-display font-semibold leading-[1.06] tracking-[-0.03em]"
            style={{ fontSize: "clamp(30px, 4.2vw, 52px)", color: "var(--pa-text)" }}
          >
            {building.name} -{" "}
            <span className="pa-serif font-normal italic">{building.taglineLower}.</span>
          </h2>
          <a
            href={building.url}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex w-fit items-center gap-2 rounded-full px-5 py-3 text-[13.5px] font-medium transition-opacity hover:opacity-88"
            style={{ background: "var(--pa-text)", color: "#fff" }}
          >
            Visit {building.name}
            <ArrowUpRight
              size={15}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </Reveal>

      <Reveal>
        <p className="mt-8 max-w-2xl text-[16.5px] leading-[1.75]" style={{ color: "var(--pa-muted)" }}>
          {building.body}
        </p>
      </Reveal>

      {/* One incident, end to end */}
      <motion.div
        className="mt-14 grid gap-px overflow-hidden rounded-[14px] sm:grid-cols-3"
        style={{ background: "var(--pa-line)" }}
        variants={statParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {building.stats.map((s, i) => (
          <motion.div key={s.label} variants={statChild} className="relative p-7" style={{ background: "var(--pa-card)" }}>
            {/* Index makes the sequence explicit. */}
            <span
              className="pa-mono absolute right-5 top-5 text-[10px] tracking-[0.18em]"
              style={{ color: "var(--pa-line-2)" }}
            >
              0{i + 1}
            </span>
            <div
              className="pa-display text-[32px] font-semibold tracking-[-0.03em] sm:text-[38px]"
              style={{ color: "var(--pa-text)" }}
            >
              {s.value}
            </div>
            <div className="mt-2 text-[13.5px] leading-snug" style={{ color: "var(--pa-muted)" }}>
              {s.label}
            </div>
            {/* Progress rule, drawn in as each stat arrives. */}
            <motion.span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-[2px] origin-left"
              style={{ background: "var(--pa-text)" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: reduced ? 0 : 0.7, ease: EASE, delay: reduced ? 0 : 0.25 + i * 0.14 }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Capabilities */}
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {building.features.map((f, i) => (
          <Reveal key={f.name} delay={reduced ? 0 : i * 0.08}>
            <article className="pa-card group h-full rounded-[14px] p-7">
              <h3
                className="pa-display text-[19px] font-semibold tracking-[-0.015em]"
                style={{ color: "var(--pa-text)" }}
              >
                {f.name}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed" style={{ color: "var(--pa-muted)" }}>
                {f.body}
              </p>
              {/* The workflow card gets the live sequence. */}
              {i === 0 && <StageLoop />}
            </article>
          </Reveal>
        ))}
      </div>

      {/* KubeGraf's own channels, not Prajol's — his sit in the contact
          section at the foot of the page. Kept here so the two sets are
          never confused for one another.

          On black, because a line of pills against the section's own
          background read as a footnote; the invitation to follow is
          meant to be the thing you notice at the end of the section. */}
      {building.social.length > 0 && (
        <Reveal>
          <div className="mt-14 overflow-hidden rounded-[18px] p-8 sm:p-10" style={{ background: "#000" }}>
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14">
              <div>
                <div
                  className="pa-mono text-[10.5px] uppercase tracking-[0.22em]"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Follow along
                </div>
                <h3
                  className="pa-display mt-3 font-semibold leading-[1.08] tracking-[-0.025em]"
                  style={{ fontSize: "clamp(26px, 3.2vw, 38px)", color: "#fff" }}
                >
                  Follow {building.name}
                </h3>
                <p
                  className="mt-3 max-w-md text-[15px] leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {building.socialLede}
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 lg:justify-end">
                {building.social.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    /* The colour is a class, not an inline style: an
                       inline `color` outranks any variant, so setting it
                       there left the label white on the white hover
                       background and invisible. */
                    className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2.5 text-[13.5px] text-white transition-colors hover:border-white hover:bg-white hover:text-black"
                  >
                    {SOCIAL_ICONS[s.name]}
                    {s.name}
                    <ArrowUpRight
                      size={13}
                      aria-hidden="true"
                      className="opacity-55 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      )}

      {/* The company behind the product, closing the section.
          kubegraf.io's own footer states this relationship, so it is
          given as the attribution it is rather than filed under "also
          building" as though it were a side project. */}
      <Reveal>
        <div className="mt-16 border-t pt-12" style={{ borderColor: "var(--pa-line)" }}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
            <div>
              {/* The attribution itself, set as a statement. */}
              <p
                className="pa-display font-semibold leading-[1.12] tracking-[-0.025em]"
                style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "var(--pa-text)" }}
              >
                {building.name} is a product of{" "}
                <span className="pa-serif font-normal italic">{building.parent.name}</span>.
              </p>
              <div
                className="pa-mono mt-4 text-[10.5px] uppercase tracking-[0.2em]"
                style={{ color: "var(--pa-dim)" }}
              >
                {building.parent.tagline}
              </div>
            </div>

            <div>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--pa-muted)" }}>
                {building.parent.body}
              </p>
              <a
                href={building.parent.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group mt-6 inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[14px] font-medium transition-opacity hover:opacity-88"
                style={{ background: "var(--pa-text)", color: "#fff" }}
              >
                orkastor.com
                <ArrowUpRight
                  size={15}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
