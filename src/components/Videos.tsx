import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Section, Reveal, Eyebrow } from "./ui";
import Lightbox from "./Lightbox";
import type { MediaItem } from "./Lightbox";
import { videos } from "@/content";
import { Play } from "lucide-react";
import type { VideoItem } from "@/content";

/**
 * One film: a large poster frame, its running time, and the title.
 *
 * Every thumbnail is the same 4:5 portrait, which is what keeps the row
 * balanced - the films themselves are a mix of 9:16 and 16:9, and
 * letting each card take its own shape left the grid ragged. 4:5 leans
 * the way the material does: four of the five films are phone-shot
 * verticals, so it crops them barely at all, and it buys height over a
 * square without costing a column.
 *
 * The crop stays centred. An earlier version biased portrait frames
 * upwards on the assumption that a face sits high in the frame; in these
 * films the subject sits at or below the midpoint, so the bias cropped
 * to ceiling instead.
 *
 * Hovering plays a muted preview in place of the poster. Three things
 * keep that from being expensive or annoying:
 *
 *  - The <video> only exists while hovering, so nothing is requested
 *    until then. The films come to 30 MB and none of it should load for
 *    someone scrolling past to the contact details.
 *  - A short delay before it starts, so sweeping the cursor across the
 *    row doesn't fire five downloads.
 *  - Only on devices that actually hover, and never under reduced
 *    motion. On a touchscreen `mouseenter` fires on tap, which would
 *    start a preview on the way to opening the player.
 *
 * Muted is not a preference: browsers refuse to autoplay with sound.
 */
function VideoTile({ item, onOpen }: { item: VideoItem; onOpen: () => void }) {
  const reduced = useReducedMotion();
  const [preview, setPreview] = useState(false);
  /* The poster stays on top until the first frame is actually painted,
     otherwise the tile flashes black while the video buffers. */
  const [playing, setPlaying] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const start = () => {
    if (reduced) return;
    if (!window.matchMedia("(hover: hover)").matches) return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setPreview(true), 160);
  };

  const stop = () => {
    if (timer.current) clearTimeout(timer.current);
    setPreview(false);
    setPlaying(false);
  };

  return (
    <button
      type="button"
      onClick={onOpen}
      onMouseEnter={start}
      onMouseLeave={stop}
      /* Keyboard users get the same preview when the tile takes focus. */
      onFocus={start}
      onBlur={stop}
      className="group flex w-full flex-col text-left"
    >
      <span
        className="relative block w-full overflow-hidden rounded-[14px] border transition-colors group-hover:border-black"
        style={{ aspectRatio: "4 / 5", background: "#0a0a0a", borderColor: "var(--pa-line)" }}
      >
        <img
          src={item.poster}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />

        {preview && (
          <video
            src={item.src}
            poster={item.poster}
            muted
            loop
            autoPlay
            playsInline
            preload="none"
            aria-hidden="true"
            tabIndex={-1}
            onPlaying={() => setPlaying(true)}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
            style={{ opacity: playing ? 1 : 0 }}
          />
        )}

        {/* A gradient only along the bottom, replacing the scrim that used
            to cover the whole tile. That scrim existed to keep a large
            centred button legible; with the control in the corner, the
            picture can be left alone and only the strip under the
            controls needs darkening. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))" }}
        />

        {/* Play bottom-left, running time bottom-right: the two controls
            bracket the same baseline instead of competing for the middle
            of the picture. */}
        <span
          className="absolute bottom-3 left-3 grid h-9 w-9 place-items-center rounded-full backdrop-blur-sm transition-transform duration-300 group-hover:scale-110"
          style={{ background: "rgba(255,255,255,0.94)", color: "#000" }}
        >
          {/* Nudged right: a triangle centred on its bounding box reads
              as off-centre inside a circle. */}
          <Play size={13} fill="currentColor" className="translate-x-[1px]" />
        </span>

        <span
          className="pa-mono absolute bottom-3 right-3 rounded-full px-2.5 py-1 text-[10px] tracking-[0.1em]"
          style={{ background: "rgba(0,0,0,0.5)", color: "rgba(255,255,255,0.92)" }}
        >
          {item.length}
        </span>
      </span>

      {/* The running time is on the badge already, so it is not repeated
          here - the caption carries the title alone. */}
      <span className="mt-4 block text-[15.5px] font-medium leading-snug" style={{ color: "var(--pa-text)" }}>
        {item.title}
      </span>
    </button>
  );
}

const MEDIA: MediaItem[] = videos.items.map((v) => ({
  kind: "video",
  src: v.src,
  poster: v.poster,
  ratio: v.ratio,
  caption: v.title,
  post: v.post,
}));

export default function Videos() {
  const [index, setIndex] = useState<number | null>(null);
  const triggerRef = useRef<Element | null>(null);

  const close = useCallback(() => {
    setIndex(null);
    (triggerRef.current as HTMLElement | null)?.focus?.();
  }, []);

  /* border-t because Inspiration above is also white - without a rule
     the two sections run together. Same treatment About and Inspiration
     already use for a white-on-white boundary. */
  return (
    <Section
      id="videos"
      className="border-t"
      style={{ background: "var(--pa-bg)", borderColor: "var(--pa-line)" }}
    >
      <Reveal>
        <Eyebrow index="05">On camera</Eyebrow>
        <h2
          className="pa-display mt-5 max-w-3xl font-semibold leading-[1.06] tracking-[-0.03em]"
          style={{ fontSize: "clamp(30px, 4.2vw, 52px)", color: "var(--pa-text)" }}
        >
          {videos.heading} -{" "}
          <span className="pa-serif font-normal italic">{videos.headingLower}.</span>
        </h2>
      </Reveal>

      <Reveal>
        <p className="mt-7 max-w-2xl text-[16.5px] leading-[1.75]" style={{ color: "var(--pa-muted)" }}>
          {videos.body}
        </p>
      </Reveal>

      {/* One column per film, so the row reads as a single set rather
          than wrapping with a stray card on the end. Gaps are kept tight
          because at five across every pixel not spent on a gutter goes
          into the pictures. */}
      <Reveal>
        <div className="mt-11 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5">
          {videos.items.map((item, i) => (
            <VideoTile
              key={item.src}
              item={item}
              onOpen={() => {
                triggerRef.current = document.activeElement;
                setIndex(i);
              }}
            />
          ))}
        </div>
      </Reveal>

      <Lightbox items={MEDIA} index={index} onIndex={setIndex} onClose={close} />
    </Section>
  );
}
