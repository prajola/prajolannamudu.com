import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { EASE } from "./ui";

/**
 * What the lightbox can show. Films and photographs differ only in how
 * they are painted, so they share one shell rather than two dialogs with
 * duplicated escape handling, scroll locking and focus return.
 */
export interface MediaItem {
  kind: "video" | "image";
  src: string;
  /** Poster frame - video only. */
  poster?: string;
  /** CSS aspect-ratio string. Mixed across the set, so never assumed. */
  ratio: string;
  /** Shown under the media. */
  caption: string;
  alt?: string;
  /** The original LinkedIn post, linked under the media when present. */
  post?: string;
}

/**
 * The viewer, opened from a tile or a thumbnail.
 *
 * Height-constrained rather than width-constrained: the portrait films
 * are 9:16, and sized to the viewport width they would run off the
 * bottom of the screen on any laptop. The width cap then catches the
 * landscape ones.
 *
 * Conventions follow ContactForm, the page's other dialog: escape to
 * dismiss, backdrop click to dismiss, scroll locked while open, focus
 * handed back to whatever opened it. Sets of more than one gain arrows
 * and left/right keys.
 */
export default function Lightbox({
  items,
  index,
  onIndex,
  onClose,
}: {
  items: MediaItem[];
  /** null when closed. */
  index: number | null;
  onIndex: (next: number) => void;
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const open = index !== null;
  const item = open ? items[index] : null;
  const many = items.length > 1;

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (!many) return;
      if (e.key === "ArrowRight") onIndex((index + 1) % items.length);
      if (e.key === "ArrowLeft") onIndex((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, index, items.length, many, onIndex, onClose]);

  /* Opening a film *is* the request to watch it, so it starts itself
     rather than asking for a second click on a second play button.
     Keyed on src so stepping to the next film restarts playback. */
  useEffect(() => {
    if (!item || item.kind !== "video") return;
    const t = setTimeout(() => void videoRef.current?.play().catch(() => {}), 60);
    return () => clearTimeout(t);
  }, [item]);

  const step = (d: number) => () => onIndex((index! + d + items.length) % items.length);

  /* Swipe, because arrows at the edge of a phone screen are a poor way
     to page through photographs. The threshold keeps a vertical scroll
     or a stray tap from counting as a swipe. */
  const touchX = useRef<number | null>(null);
  const touchY = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.changedTouches[0].clientX;
    touchY.current = e.changedTouches[0].clientY;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null || touchY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    const dy = e.changedTouches[0].clientY - touchY.current;
    touchX.current = null;
    touchY.current = null;
    if (!many) return;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
    step(dx < 0 ? 1 : -1)();
  };

  const navButton =
    "absolute top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 text-white transition-colors hover:border-white hover:bg-white/10";

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="fixed inset-0 z-[100] grid place-items-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-[3px]"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={item.caption}
            className="relative flex max-h-full flex-col items-center"
            initial={{ y: 18, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 10, opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {item.kind === "video" ? (
              <video
                ref={videoRef}
                key={item.src}
                src={item.src}
                poster={item.poster}
                controls
                playsInline
                className="max-h-[78vh] max-w-[88vw] rounded-[14px] bg-black"
                style={{ aspectRatio: item.ratio }}
              >
                This browser cannot play the video.{" "}
                {item.post && (
                  <a href={item.post} target="_blank" rel="noreferrer noopener">
                    Watch it on LinkedIn
                  </a>
                )}
              </video>
            ) : (
              <img
                key={item.src}
                src={item.src}
                alt={item.alt ?? item.caption}
                className="max-h-[78vh] max-w-[88vw] rounded-[14px] object-contain"
              />
            )}

            <div className="mt-4 flex w-full items-center justify-between gap-6">
              <p className="text-[13.5px] text-white/80">
                {item.caption}
                {many && (
                  <span className="pa-mono ml-3 text-[11px] text-white/45">
                    {index! + 1}/{items.length}
                  </span>
                )}
              </p>
              {item.post && (
                <a
                  href={item.post}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex shrink-0 items-center gap-1.5 text-[13px] text-white/60 transition-colors hover:text-white"
                >
                  LinkedIn
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              )}
            </div>
          </motion.div>

          {many && (
            <>
              <button type="button" onClick={step(-1)} aria-label="Previous" className={`${navButton} left-3 sm:left-6`}>
                <ChevronLeft size={19} />
              </button>
              <button type="button" onClick={step(1)} aria-label="Next" className={`${navButton} right-3 sm:right-6`}>
                <ChevronRight size={19} />
              </button>
            </>
          )}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white sm:right-8 sm:top-8"
          >
            <X size={17} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
