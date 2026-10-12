/**
 * ─────────────────────────────────────────────────────────────────────
 *  EVERYTHING ABOUT PRAJOL LIVES HERE.
 *  Edit this one file; every section of the site reads from it.
 * ─────────────────────────────────────────────────────────────────────
 *
 *  All biography, timeline and venture detail below was supplied
 *  directly. Nothing here is placeholder copy.
 *
 *  `Todoable` is retained so a future entry can be flagged `todo: true`
 *  and render a visible "to be confirmed" badge rather than shipping an
 *  unmarked guess - but nothing currently uses it.
 */

export interface Todoable {
  todo?: boolean;
}

/* ── Identity ─────────────────────────────────────────────────────── */

export const person = {
  name: "Prajol Annamudu",
  role: "Co-Founder & CPO, KubeGraf",
  location: "Belfast, Northern Ireland",
  /** Discipline line, shown under the name in the About section. */
  disciplines: [
    "Technology Entrepreneur",
    "Deep-Tech Founder",
    "Product Leader",
    "AI & Cloud Infrastructure",
  ],
  /** The hero eyebrow, set uppercase and letterspaced above the name. */
  headline: "Building deep tech product KubeGraf",
  /** Supporting line under the headline. */
  lede: "Co-founder and CPO of KubeGraf, out of Belfast. Building the autonomous SRE that finds the root cause in seconds and ships the fix - so engineers get their nights back.",
  email: "prajol@kubegraf.io",
  links: {
    linkedin: "https://www.linkedin.com/in/prajol-annamudu-193019249/",
    linkedinHandle: "@prajol-annamudu-193019249",
    instagram: "https://www.instagram.com/prajol.annamudu",
    instagramHandle: "@prajol.annamudu",
    kubegraf: "https://kubegraf.io",
  },
};

/* ── Hero credentials strip ───────────────────────────────────────── */

export const credentials: (Todoable & { value: string; label: string })[] = [
  { value: "KubeGraf", label: "Co-Founder & CPO" },
  { value: "Orkastor", label: "Technology venture" },
  { value: "Belfast", label: "Northern Ireland" },
  { value: "Nellore", label: "Andhra Pradesh, born" },
];

/* ── Biography ────────────────────────────────────────────────────── */

export const bio = {
  heading: "About",
  paragraphs: [
    "I'm a technology entrepreneur, deep-tech founder and product leader working at the intersection of artificial intelligence, cloud infrastructure, software engineering and business innovation. Originally from Nellore, Andhra Pradesh, India, and now professionally based in Belfast, Northern Ireland, I'm part of a new generation of entrepreneurs building technology ventures with international ambitions.",
    "With an academic background in Computer Science and professional exposure across cloud engineering, quality assurance, product development and technology operations, I've developed a multidisciplinary approach to building technology businesses.",
    "I completed my Bachelor of Technology in Computer Science and Engineering between 2019 and 2023, before a Master of Science in Computer Science at the University of Lancashire in 2024-2025. Alongside my academic work I gained practical experience in AWS cloud engineering, product improvement, quality assurance and technical operations.",
    "Since February 2020 I've been associated with Yours Foundation as a Volunteer Coordinator and Organising Director, contributing to fundraising, food distribution, blood donation initiatives and community support.",
    "My entrepreneurial journey has involved exploring multiple business ideas, working across different startup functions, and developing an understanding of what it takes to build and commercialise a technology product.",
    "Beyond KubeGraf I'm associated with Orkastor, a technology venture exploring AI-powered cloud infrastructure and developer platforms.",
    "Based in Northern Ireland, I engage actively with the wider UK startup ecosystem - entrepreneurial networks, innovation communities, investors and business support organisations. My long-term ambition is to build globally relevant deep-tech companies and contribute to the next generation of intelligent infrastructure systems.",
    "My philosophy is grounded in continuous learning, persistence and practical innovation - and the belief that meaningful technology businesses are built by understanding real problems and working consistently towards solving them.",
  ],
};

/* ── Timeline ─────────────────────────────────────────────────────── */

export interface Chapter extends Todoable {
  /** Groups entries into acts in the timeline. */
  era: "Roots" | "Craft" | "Ventures";
  when: string;
  title: string;
  body: string;
  /** Optional image from /public. Omitted entries render as text only. */
  image?: string;
}

export const story: Chapter[] = [
  {
    era: "Roots",
    when: "Early life",
    title: "Roots in Nellore",
    body: "Born and raised in Nellore, Andhra Pradesh, India - schooled there and through to a Bachelor's degree.",
  },
  {
    era: "Roots",
    when: "2019 - 2023",
    title: "BTech, Computer Science and Engineering",
    body: "Bachelor of Technology in Computer Science and Engineering.",
  },
  {
    era: "Roots",
    when: "February 2020",
    title: "Yours Foundation",
    body: "Began an association with Yours Foundation as Volunteer Coordinator and Organising Director - fundraising, food distribution, blood donation drives and community support.",
  },
  {
    era: "Craft",
    when: "2023",
    title: "QA and product improvement at iSmile",
    body: "Quality assurance and product improvement work - the first close look at how products actually fail in the hands of users.",
  },
  {
    era: "Craft",
    when: "2023 onwards",
    title: "Cloud, support and product operations",
    body: "Professional exposure across AWS cloud engineering, support, product and technology operations.",
  },
  {
    era: "Craft",
    when: "2024 - 2025",
    title: "MSc Computer Science, University of Lancashire",
    body: "A move to the United Kingdom for a Master of Science in Computer Science.",
  },
  {
    era: "Craft",
    when: "2024 - 2025",
    title: "Student Ambassador",
    body: "Student Ambassador and university volunteering alongside the MSc.",
  },
  {
    era: "Ventures",
    when: "2025 - 2026",
    title: "Building ventures",
    body: "Developing technology and startup ventures - exploring ideas, working across startup functions, and learning what commercialising a product really demands.",
  },
  {
    era: "Ventures",
    when: "1 March 2026",
    title: "Orkastor Limited",
    body: "Incorporated - a technology venture exploring AI-powered cloud infrastructure and developer platforms.",
  },
  {
    era: "Ventures",
    when: "2026",
    title: "KubeGraf launches",
    body: "Product development, launch and commercialisation of KubeGraf - alongside engagement with the UK and Northern Ireland startup ecosystem.",
  },
  {
    era: "Ventures",
    when: "October 2026",
    title: "Present",
    body: "Continuing as a technology entrepreneur and founder.",
  },
];

/* ── What I'm building ────────────────────────────────────────────── */

export const building = {
  name: "KubeGraf",
  url: "https://kubegraf.io",
  /**
   * ✓ Taken from the live kubegraf.io, rendered (it is a JS app, so the
   * HTML source alone returns only the shell). Keep these in step with
   * the product site. An earlier version of this page carried a
   * confidence-percentage stat taken from a repo copy that the live site
   * does not publish; figures here must come from the rendered site.
   */
  tagline: "The AI SRE platform for Kubernetes",
  taglineLower: "the AI SRE platform for Kubernetes",
  /** The product's own headline. */
  promise: "Detect. Diagnose. Fix. Kubernetes heals itself.",
  body: "An AI SRE platform that puts production on autopilot - detecting an incident, understanding it, fixing it and verifying the recovery, with every step signed. The ambition is to make sophisticated infrastructure operations more intelligent, reliable and accessible to engineering teams.",
  /** One incident, end to end - the product's core claim. */
  stats: [
    { value: "200 ms", label: "To detect" },
    { value: "4 s", label: "To the root cause" },
    { value: "4m 21s", label: "To a closed incident" },
  ],
  features: [
    {
      name: "Multi-agent workflow",
      body: "Detect, understand, fix, verify - four stages, each handled by agents rather than a human paging through dashboards.",
    },
    {
      name: "Secure, encrypted, confidential",
      body: "Every step signed. Confidential by design, so the cluster's data stays the cluster's.",
    },
    {
      name: "It pays for itself",
      body: "200% average first-year ROI and 30% lower cloud spend - every incident it closes, it also pays for.",
    },
  ],
  /** The other venture, shown beneath KubeGraf. */
  also: [
    {
      name: "Orkastor",
      role: "Technology venture",
      body: "Exploring AI-powered cloud infrastructure and developer platforms. Incorporated March 2026.",
      url: "",
    },
  ],
};

/* ── Role models ──────────────────────────────────────────────────── */

export interface RoleModel {
  name: string;
  /** Factual descriptor — dates and what they were known for. */
  known: string;
  /** Their own words. Short, attributed quotes only. */
  quote: string;
  /** Why they matter to Prajol. Edit freely — this is the personal part. */
  why: string;
}

export const roleModels: RoleModel[] = [
  {
    name: "Steve Jobs",
    known: "1955-2011 - co-founder of Apple, NeXT and Pixar",
    quote: "Stay hungry. Stay foolish.",
    why: "For the insistence that a product is not finished when it works, but when it is right - and that taste and engineering are the same discipline, not opposing ones.",
  },
  {
    name: "A. P. J. Abdul Kalam",
    known: "1931-2020 - aerospace scientist and 11th President of India",
    quote: "Dream is not what you see in sleep.",
    why: "For proving that a boy from a small town on the Indian coast can build things that reach orbit - and for staying a teacher through all of it.",
  },
];

/* ── Images ───────────────────────────────────────────────────────── */

export const images = {
  /** Hero portrait - transparent cut-out. */
  portrait: "/portrait-cutout.png",
  /** WebP twin of the portrait, served first via <picture>. */
  portraitWebp: "/portrait-cutout.webp",
  /** Open Graph / social preview - 1200×630. */
  og: "",
};

export const siteMeta = {
  title: `${person.name} - Co-Founder & CPO of KubeGraf, Belfast`,
  description:
    "Prajol Annamudu is a technology entrepreneur and deep-tech founder. Co-founder and CPO of KubeGraf, based in Belfast, Northern Ireland.",
  url: "https://prajolannamudu.com",
};
