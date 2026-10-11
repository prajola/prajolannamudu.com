import { Section, Reveal, Eyebrow } from "./ui";
import { person, bio } from "@/content";

/** Prose biography. Opens the page proper, before the timeline. */
export default function About() {
  return (
    <Section id="about" className="border-t" style={{ borderColor: "var(--pa-line)" }}>
      <Reveal>
        <Eyebrow index="01">About</Eyebrow>
        <h2
          className="pa-display mt-5 max-w-4xl font-semibold leading-[1.06] tracking-[-0.03em]"
          style={{ fontSize: "clamp(28px, 3.8vw, 46px)", color: "var(--pa-text)" }}
        >
          Technology entrepreneur, deep-tech founder, product leader.
        </h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {person.disciplines.map((d) => (
            <li
              key={d}
              className="rounded-full border px-3.5 py-1.5 text-[12.5px]"
              style={{ borderColor: "var(--pa-line-2)", color: "var(--pa-muted)" }}
            >
              {d}
            </li>
          ))}
        </ul>
      </Reveal>

      {/* Two columns on wide screens: a long biography in one column reads
          as a wall, and the measure gets uncomfortably wide. */}
      <Reveal>
        <div className="mt-12 gap-x-16 md:columns-2 [&>p]:break-inside-avoid">
          {bio.paragraphs.map((p, i) => (
            <p
              key={i}
              className="mb-5 text-[15.5px] leading-[1.75]"
              style={{ color: i === 0 ? "var(--pa-text)" : "var(--pa-muted)" }}
            >
              {p}
            </p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
