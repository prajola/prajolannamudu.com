import { useCallback, useRef, useState } from "react";
import { Section, Reveal, Eyebrow } from "./ui";
import Lightbox from "./Lightbox";
import type { MediaItem } from "./Lightbox";
import { events } from "@/content";
import { ArrowUpRight } from "lucide-react";
import type { EventItem } from "@/content";

/**
 * One outing: a heading line, a note, and a strip of photographs.
 *
 * A strip rather than a grid, because the frames are a mix of portrait
 * and landscape and a grid of mixed orientations either crops them all
 * to one shape or leaves ragged gaps. Giving every frame the same height
 * and letting the width follow its own aspect ratio keeps the originals
 * uncropped and the row level.
 *
 * Each event owns its own lightbox so the arrows walk that event's
 * photographs rather than wandering into the next one's.
 */
function EventBlock({ item, first }: { item: EventItem; first: boolean }) {
  const [index, setIndex] = useState<number | null>(null);
  const triggerRef = useRef<Element | null>(null);

  const close = useCallback(() => {
    setIndex(null);
    (triggerRef.current as HTMLElement | null)?.focus?.();
  }, []);

  const media: MediaItem[] = item.photos.map((p) => ({
    kind: "image",
    src: p.src,
    ratio: p.ratio,
    caption: `${item.name} - ${item.when}`,
    alt: p.alt,
    post: item.post,
  }));

  return (
    <div
      className={first ? "" : "mt-14 border-t pt-14"}
      style={first ? undefined : { borderColor: "var(--pa-line)" }}
    >
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h3
          className="pa-display text-[22px] font-semibold tracking-[-0.02em] sm:text-[25px]"
          style={{ color: "var(--pa-text)" }}
        >
          {item.name}
        </h3>
        <span
          className="pa-mono text-[10.5px] uppercase tracking-[0.18em]"
          style={{ color: "var(--pa-dim)" }}
        >
          {item.when}
        </span>
      </div>

      <div className="mt-1.5 text-[13px]" style={{ color: "var(--pa-dim)" }}>
        {item.where}
      </div>

      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed" style={{ color: "var(--pa-muted)" }}>
        {item.body}
      </p>

      {/* Scrolls horizontally when the strip outruns the viewport, so the
          page itself never does. */}
      <div className="-mx-5 mt-7 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
        <div className="flex w-max gap-3.5">
          {item.photos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => {
                triggerRef.current = document.activeElement;
                setIndex(i);
              }}
              aria-label={`Open photo ${i + 1} of ${item.photos.length} - ${p.alt}`}
              className="group relative h-[180px] shrink-0 overflow-hidden rounded-[12px] border transition-colors hover:border-black sm:h-[220px]"
              style={{ borderColor: "var(--pa-line)", background: "var(--pa-card)" }}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                style={{ aspectRatio: p.ratio }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* min-h-11 keeps the hit area at 44px on a phone. The underline
          lives on the inner span so the link still reads as a text link
          rather than growing into a padded block. */}
      <a
        href={item.post}
        target="_blank"
        rel="noreferrer noopener"
        className="group/post mt-4 inline-flex min-h-11 w-fit items-center gap-2 text-[13px] transition-colors"
        style={{ color: "var(--pa-text)" }}
      >
        <span
          className="border-b pb-1 transition-colors group-hover/post:border-black"
          style={{ borderColor: "var(--pa-line-2)" }}
        >
          Read the post
        </span>
        <ArrowUpRight size={13} aria-hidden="true" />
      </a>

      <Lightbox items={media} index={index} onIndex={setIndex} onClose={close} />
    </div>
  );
}

export default function Events() {
  return (
    <Section id="events" style={{ background: "var(--pa-bg-3)" }}>
      <Reveal>
        <Eyebrow index="06">Out in the ecosystem</Eyebrow>
        <h2
          className="pa-display mt-5 max-w-3xl font-semibold leading-[1.06] tracking-[-0.03em]"
          style={{ fontSize: "clamp(30px, 4.2vw, 52px)", color: "var(--pa-text)" }}
        >
          {events.heading} -{" "}
          <span className="pa-serif font-normal italic">{events.headingLower}.</span>
        </h2>
      </Reveal>

      <Reveal>
        <p className="mt-7 max-w-2xl text-[16.5px] leading-[1.75]" style={{ color: "var(--pa-muted)" }}>
          {events.body}
        </p>
      </Reveal>

      <div className="mt-14">
        {events.items.map((item, i) => (
          <Reveal key={item.post}>
            <EventBlock item={item} first={i === 0} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
