import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Fade-and-rise on scroll into view. Fires once. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Section marker: `01 ─── About`. */
export function Eyebrow({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="pa-mono flex items-center gap-3 text-[11px] uppercase tracking-[0.24em]">
      <span style={{ color: "var(--pa-green)" }}>{index}</span>
      <span aria-hidden="true" className="h-px w-8" style={{ background: "var(--pa-line-2)" }} />
      <span style={{ color: "var(--pa-muted)" }}>{children}</span>
    </div>
  );
}

/**
 * Marks copy that is still placeholder text. Visible on purpose - an
 * unmarked placeholder is how invented detail ends up shipped as fact.
 * Every one of these disappears when the real content lands in
 * `src/content.ts`.
 */
export function Todo({ label = "to be confirmed" }: { label?: string }) {
  return (
    <span
      className="pa-mono ml-2 inline-block translate-y-[-1px] rounded-sm border px-1.5 py-0.5 align-middle text-[9px] uppercase tracking-[0.14em]"
      style={{
        borderColor: "rgba(0,0,0,0.3)",
        color: "var(--pa-peach-deep)",
        background: "var(--pa-peach-soft)",
      }}
    >
      {label}
    </span>
  );
}

/**
 * Reserves the exact space an image will occupy. Given a `src` it renders
 * the picture; given none it draws a labelled frame of the same aspect
 * ratio - so dropping the real file in later shifts nothing on the page.
 */
export function ImageSlot({
  src,
  alt,
  ratio = "3 / 4",
  label = "Portrait",
  className = "",
  priority = false,
}: {
  src?: string;
  alt: string;
  ratio?: string;
  label?: string;
  className?: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={`h-full w-full object-cover ${className}`}
        style={{ aspectRatio: ratio }}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={`${label} - image not yet added`}
      className={`relative grid place-items-center overflow-hidden rounded-sm border ${className}`}
      style={{
        aspectRatio: ratio,
        borderColor: "var(--pa-line-2)",
        // Opaque on purpose: a transparent placeholder lets the WebGL
        // layer read through it, so the composition only looks right once
        // the real photo arrives. This stands in for it.
        background:
          "linear-gradient(135deg, var(--pa-peach-soft), var(--pa-green-soft))",
      }}
    >
      <div aria-hidden="true" className="pa-noise absolute inset-0 opacity-[0.05]" />
      {/* Diagonals, the standard "image goes here" convention. */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <line x1="0" y1="0" x2="100" y2="100" stroke="var(--pa-line)" strokeWidth="0.3" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="var(--pa-line)" strokeWidth="0.3" />
      </svg>
      <div className="relative text-center">
        <div
          className="pa-mono text-[10px] uppercase tracking-[0.22em]"
          style={{ color: "var(--pa-green)" }}
        >
          {label}
        </div>
        <div className="pa-mono mt-1.5 text-[9.5px]" style={{ color: "var(--pa-dim)" }}>
          add to /public, set in content.ts
        </div>
      </div>
    </div>
  );
}

/** Standard section wrapper: consistent rhythm and max width. */
export function Section({
  id,
  children,
  className = "",
  style,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`} style={style}>
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">{children}</div>
    </section>
  );
}

/**
 * LinkedIn glyph. lucide-react v1 removed brand icons, so this is
 * supplied locally rather than imported.
 */
export function LinkedInIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

/** X (formerly Twitter) glyph. Supplied locally, as above. */
export function XIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.22-6.82-5.97 6.82H1.66l7.73-8.84L1.25 2.25h6.82l4.71 6.23zm-1.16 17.52h1.83L7.08 4.13H5.11z" />
    </svg>
  );
}

/** YouTube glyph. Supplied locally, as above. */
export function YouTubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.08 0 12 0 12s0 3.92.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.81ZM9.55 15.57V8.43L15.82 12z" />
    </svg>
  );
}

/** Discord glyph. Supplied locally, as above. */
export function DiscordIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.32 4.57A19.8 19.8 0 0 0 15.43 3c-.21.38-.46.9-.63 1.3a18.3 18.3 0 0 0-5.6 0C9.03 3.9 8.77 3.38 8.56 3a19.74 19.74 0 0 0-4.9 1.57C.55 9.22-.3 13.76.13 18.24a19.9 19.9 0 0 0 6.05 3.07c.49-.67.92-1.38 1.3-2.13-.71-.27-1.4-.6-2.04-.99.17-.13.34-.26.5-.4a14.2 14.2 0 0 0 12.13 0l.5.4c-.65.39-1.33.72-2.05.99.37.75.81 1.46 1.3 2.13a19.87 19.87 0 0 0 6.05-3.07c.5-5.19-.86-9.69-3.55-13.67ZM8.02 15.49c-1.18 0-2.15-1.09-2.15-2.42s.95-2.42 2.15-2.42 2.17 1.09 2.15 2.42c0 1.33-.95 2.42-2.15 2.42Zm7.96 0c-1.18 0-2.15-1.09-2.15-2.42s.95-2.42 2.15-2.42 2.17 1.09 2.15 2.42c0 1.33-.95 2.42-2.15 2.42Z" />
    </svg>
  );
}

/**
 * Instagram glyph. Same reason as LinkedInIcon: lucide-react v1 dropped
 * every brand icon, so importing `Instagram` from it throws at module load
 * and blanks the page.
 */
export function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
