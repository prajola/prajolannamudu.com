import { useState } from "react";
import { Reveal, LinkedInIcon, InstagramIcon } from "./ui";
import ContactForm from "./ContactForm";
import { person } from "@/content";
import { Mail, ArrowUpRight, Send } from "lucide-react";
import type { ReactNode } from "react";

/**
 * "Let's talk" - the closing section, and now the last thing on the page.
 *
 * Set in the same condensed display face as the hero name so the page is
 * bookended: it opens on PRAJOL ANNAMUDU and closes on LET'S TALK at a
 * comparable scale. The channels sit as equal columns beneath, each
 * inverting to black on hover so the whole tile reads as the target
 * rather than just the handle.
 */
function Channel({
  href,
  icon,
  label,
  handle,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  handle: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className="group flex items-center gap-4 px-5 py-7 transition-colors duration-300 hover:bg-black sm:px-8 sm:py-8"
      style={{ background: "var(--pa-bg)" }}
    >
      <span
        className="grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-colors duration-300 group-hover:border-white/30 group-hover:text-white"
        style={{ borderColor: "var(--pa-line-2)", color: "var(--pa-text)" }}
      >
        {icon}
      </span>

      <span className="min-w-0 flex-1">
        <span
          className="pa-mono block text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 group-hover:text-white/55"
          style={{ color: "var(--pa-dim)" }}
        >
          {label}
        </span>
        {/* break-words, not break-all: the long LinkedIn slug should wrap
            at its hyphens, not mid-token. */}
        <span
          className="mt-1 block break-words text-[15px] leading-snug transition-colors duration-300 group-hover:text-white sm:text-[16px]"
          style={{ color: "var(--pa-text)" }}
        >
          {handle}
        </span>
      </span>

      <ArrowUpRight
        size={17}
        aria-hidden="true"
        className="shrink-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
        style={{ color: "var(--pa-dim)" }}
      />
    </a>
  );
}

export default function Talk() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <section id="talk" className="relative overflow-hidden pt-24 sm:pt-32">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal>
          <div
            className="inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 text-[12.5px]"
            style={{ borderColor: "var(--pa-line-2)", color: "var(--pa-text)" }}
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--pa-text)" }}
            />
            Open for conversations
          </div>

          {/* Same face and treatment as the hero name, closing the frame. */}
          <h2
            className="pa-mega mt-6 whitespace-nowrap"
            style={{ fontSize: "clamp(52px, 19.5vw, 290px)", color: "var(--pa-text)" }}
          >
            Let's talk
          </h2>

          <p
            className="mt-3 max-w-xl text-[16.5px] leading-[1.7] sm:-mt-1"
            style={{ color: "var(--pa-muted)" }}
          >
            Investor, fellow founder, or just want to say hello - drop a line.
          </p>

          <button
            type="button"
            onClick={() => setFormOpen(true)}
            className="group mt-7 inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-[14px] font-medium transition-opacity hover:opacity-88"
            style={{ background: "var(--pa-text)", color: "#fff" }}
          >
            <Send size={15} aria-hidden="true" />
            Send a message
          </button>
        </Reveal>
      </div>

      {/* Channels, full-bleed. The 1px gaps over a line-coloured backdrop
          draw every divider, so the tiles stay flush with no stray edges. */}
      <Reveal>
        <div className="mx-auto mt-14 max-w-[1320px] px-5 sm:px-8">
          <div
            className="-mx-5 grid gap-px border-y sm:-mx-8 sm:grid-cols-3"
            style={{ background: "var(--pa-line)", borderColor: "var(--pa-line)" }}
          >
            <Channel
              href={`mailto:${person.email}`}
            icon={<Mail size={19} />}
            label="Email"
            handle={person.email}
          />
            <Channel
            href={person.links.linkedin}
            icon={<LinkedInIcon size={18} />}
            label="LinkedIn"
            handle={person.links.linkedinHandle}
          />
            <Channel
            href={person.links.instagram}
            icon={<InstagramIcon size={19} />}
            label="Instagram"
            handle={person.links.instagramHandle}
            />
          </div>
        </div>
      </Reveal>

      <div className="mx-auto max-w-[1320px] px-5 py-8 sm:px-8">
        <div className="flex flex-col gap-1 text-[12.5px] sm:flex-row sm:items-center sm:justify-between"
          style={{ color: "var(--pa-dim)" }}>
          <span>© {new Date().getFullYear()} {person.name}</span>
          <span>{person.location}</span>
        </div>
      </div>

      <ContactForm open={formOpen} onClose={() => setFormOpen(false)} />
    </section>
  );
}
