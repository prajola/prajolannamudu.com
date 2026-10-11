import { motion } from "framer-motion";
import { Todo, EASE } from "./ui";
import { person, credentials, images } from "@/content";

/**
 * Hero, composed after the reference: a small letterspaced eyebrow, the
 * name set enormous in a condensed display face, then the portrait
 * centred beneath with the supporting line and CTA offset to its right.
 *
 * The name is the whole composition, so it is sized in `vw` to stay
 * edge-to-edge at every width rather than at a fixed px value.
 */
export default function Hero() {
  return (
    <>
    <section id="top" className="relative flex flex-col overflow-hidden sm:h-screen">

      <div className="mx-auto flex min-h-0 w-full max-w-[1320px] flex-1 flex-col px-5 pt-12 sm:px-8 sm:pt-14">
        {/* Eyebrow */}
        <motion.p
          className="text-center text-[11px] font-medium uppercase leading-relaxed tracking-[0.2em] sm:text-[13px] sm:tracking-[0.22em]"
          style={{ color: "var(--pa-text)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.05 }}
        >
          {person.headline}
        </motion.p>

        {/* The name, at full width */}
        <motion.h1
          className="pa-mega mt-7 whitespace-nowrap text-center sm:mt-10"
          style={{ fontSize: "clamp(24px, 12.2vw, 176px)", color: "var(--pa-text)" }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.12 }}
        >
          {person.name}
        </motion.h1>

        {/* Portrait anchored to the bottom of the hero, sized by height so
            it scales with the viewport instead of the column width. The
            wrapper carries no bottom padding, so the silhouette sits
            flush on the section edge rather than floating above it. */}
        <div className="relative mt-6 flex min-h-0 flex-1 flex-col justify-end sm:mt-8">
          <motion.div
            className="flex w-full min-h-0 flex-1 items-end justify-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
          >
            {/* Cut-out standing directly on the page: no frame, no plate.
                The effect depends on the silhouette having nothing to
                compete with. */}
            {/* WebP first (91 KB) with the PNG as fallback (665 KB) - both
                carry the alpha channel, and modern browsers never fetch
                the PNG. Intrinsic size is set so the layout is reserved
                before the image decodes. */}
            <picture className="contents">
              <source srcSet={images.portraitWebp} type="image/webp" />
              <img
                src={images.portrait}
                alt={`${person.name}, ${person.role}`}
                width={921}
                height={1272}
                decoding="async"
                className="block w-[min(78vw,340px)] select-none sm:h-full sm:max-h-full sm:w-auto sm:max-w-full sm:object-contain sm:object-bottom"
                draggable={false}
              />
            </picture>
          </motion.div>

          {/* On wide screens this sits beside the portrait, as in the
              reference; below lg it stacks under it and centres. */}
          <motion.div
            className="mx-auto mt-10 max-w-[420px] text-center lg:absolute lg:bottom-12 lg:right-0 lg:mt-0 lg:max-w-[320px] lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <p className="text-[15.5px] leading-[1.65]" style={{ color: "var(--pa-muted)" }}>
              {person.lede}
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href="#building"
                className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-[14px] font-medium transition-opacity hover:opacity-88"
                style={{ background: "var(--pa-green)", color: "#fff" }}
              >
                See what I'm building
              </a>
              <a
                href="#story"
                className="inline-flex items-center justify-center rounded-full border bg-white px-6 py-3.5 text-[14px] font-medium transition-colors hover:border-[#000000]"
                style={{ borderColor: "var(--pa-line-2)", color: "var(--pa-text)" }}
              >
                The story
              </a>
            </div>
          </motion.div>

          {/* Balances the right-hand block so the portrait stays optically
              centred on wide screens. Carries the role and location, so it
              is real content - not aria-hidden. */}
          <div className="hidden lg:absolute lg:bottom-16 lg:left-0 lg:block lg:max-w-[330px]">
            <p className="text-[15.5px] leading-[1.65]" style={{ color: "var(--pa-muted)" }}>
              <span className="pa-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: "var(--pa-peach-deep)" }}>
                {person.role}
              </span>
              <br />
              <span className="mt-1 inline-block" style={{ color: "var(--pa-text)" }}>
                {person.location}
              </span>
            </p>
          </div>
        </div>
      </div>

    </section>
    {/* Credentials strip - sits directly beneath the portrait, so no top
        margin here: the silhouette must land flush on this rule. */}
    <div className="mt-8 border-t sm:mt-0" style={{ borderColor: "var(--pa-line)" }}>
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        {/* Dividers come from a 1px grid gap over a line-coloured
            backdrop rather than per-cell borders. Every seam is then
            exactly 1px at any column count - the previous mix of
            `border-r` plus an inline left border doubled the 0|1 and
            2|3 seams while leaving 1|2 single - and no first/last-child
            special-casing is needed when the grid reflows 2 -> 4.

            The negative margin cancels the container padding so the
            grid spans the full width; each cell re-applies it, so the
            first cell's text still lines up with the page copy. */}
        <div
          className="-mx-5 grid grid-cols-2 gap-px sm:-mx-8 lg:grid-cols-4"
          style={{ background: "var(--pa-line)" }}
        >
          {credentials.map((c) => (
            <div
              key={c.label}
              className="px-5 py-6 sm:px-8"
              style={{ background: "var(--pa-bg)" }}
            >
              <div
                className="pa-display text-[19px] font-semibold tracking-[-0.02em] sm:text-[22px]"
                style={{ color: "var(--pa-text)" }}
              >
                {c.value}
              </div>
              <div className="mt-1 text-[12.5px]" style={{ color: "var(--pa-dim)" }}>
                {c.label}
                {c.todo && <Todo label="tbc" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
