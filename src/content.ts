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
  /**
   * KubeGraf's own channels, taken from the footer of kubegraf.io.
   *
   * These are the company's, kept separate from `person.links` further
   * up, which are Prajol's. The directory listings that also sit in that
   * footer (FYS, Acid Tools, MarketingDB) are not channels and are left
   * out. Note the site publishes two Discord invites - the vanity
   * discord.gg/kubegraf elsewhere on the page, and this one in the
   * footer.
   */
  social: [
    { name: "LinkedIn", url: "https://www.linkedin.com/company/kubegraf/" },
    { name: "X", url: "https://x.com/kubegraf" },
    { name: "Instagram", url: "https://www.instagram.com/kubegraf.io" },
    { name: "YouTube", url: "https://www.youtube.com/@kubegraf" },
    { name: "Discord", url: "https://discord.gg/eaRSvWjzV5" },
  ],
  /** Supporting line for the follow block. */
  socialLede: "Product updates, demos and the occasional incident taken apart in public.",
  /**
   * The company behind KubeGraf.
   *
   * kubegraf.io's own footer reads "KUBEGRAF® - A PRODUCT OF ORKASTOR
   * LIMITED", so Orkastor is the parent rather than a side project, and
   * it is stated that way here. `body` and `line` are taken from
   * orkastor.com's own copy.
   */
  parent: {
    name: "Orkastor Limited",
    short: "Orkastor",
    url: "https://orkastor.com",
    attribution: "KubeGraf is a product of Orkastor Limited",
    tagline: "Infrastructure for teams who run Kubernetes",
    body: "Orkastor builds infrastructure software for Kubernetes teams - an agent you install, in infrastructure that stays yours. Incorporated March 2026.",
  },
};

/* ── Video ────────────────────────────────────────────────────────── */

/**
 * KubeGraf's product films, shown between "What I'm building" and the
 * closing "Let's talk".
 *
 * The files are served from /public rather than embedded as LinkedIn
 * iframes on purpose. A LinkedIn embed renders its own cookie consent
 * wall over the card, loads third-party tracking on page load for every
 * visitor, and puts the post copy above the video - so the film itself
 * lands below the iframe's own fold. Self-hosting keeps the section
 * fast, private and on-brand; `post` still links out to the original so
 * the LinkedIn engagement is one click away.
 *
 * All four assets are 9:16, 720p, taken from KubeGraf's own posts.
 */
export interface VideoItem extends Todoable {
  /** File in /public. */
  src: string;
  /** Poster frame in /public - same aspect ratio as the video. */
  poster: string;
  title: string;
  body: string;
  /** Running time, shown as a badge. */
  length: string;
  /**
   * The footage's own shape. These are not all the same: the phone-shot
   * films are 9:16 and the product walkthrough is 16:9, so the player has
   * to be told rather than assuming one of them.
   */
  ratio: "9 / 16" | "16 / 9";
  /** The original LinkedIn post. */
  post: string;
}

export const videos = {
  heading: "KubeGraf, in motion",
  headingLower: "the product doing the thing",
  body: "Short films on what the platform does when an incident fires, why the time it saves is the whole point, and where the whole thing is going. Newest first.",
  /* Newest first - the dates are the posts' own upload dates. */
  items: [
    {
      src: "/video-mttr.mp4",
      /* Grabbed from 5s in, same as the film below. See the note there
         on why the frame number is part of the filename. */
      poster: "/video-mttr-05s.jpg",
      title: "The real cost of an incident",
      body: "Downtime is the part everyone sees. The bill is SRE hours, developer time, rollbacks and the meetings in between - which is why MTTR is the number that matters.",
      length: "0:27",
      ratio: "9 / 16",
      post: "https://www.linkedin.com/posts/kubegraf-incidentmanagement-mttr-ugcPost-7516175067660070913-gXjG/",
    },
    {
      src: "/video-beyond-monitoring.mp4",
      /* Grabbed from 5s into the film. The frame number is in the
         filename because the poster has been changed more than once and
         reusing the old name left browsers serving a cached copy of the
         previous frame - a new URL is the only reliable way to retire
         the old image. */
      poster: "/video-beyond-monitoring-05s.jpg",
      title: "Monitoring is just the beginning",
      body: "Detection tells you something broke. KubeGraf goes on to investigate it, find the root cause, support the fix and verify the result - detect, investigate, resolve.",
      length: "0:24",
      ratio: "9 / 16",
      post: "https://www.linkedin.com/posts/kubernetes-kubegraf-devops-ugcPost-7513647207191842816-j3Ap/",
    },
    {
      src: "/video-ops-in-minutes.mp4",
      poster: "/video-ops-in-minutes.jpg",
      title: "Kubernetes operations in minutes",
      body: "The long version: AI-powered investigation, root-cause analysis and safe remediation, driven from the dashboard, Slack or Teams. Detect, investigate, fix, verify - hours turned into minutes.",
      length: "1:32",
      ratio: "16 / 9",
      post: "https://www.linkedin.com/feed/update/urn:li:activity:7504551035365945346",
    },
    {
      src: "/video-paradigm-shift.mp4",
      poster: "/video-paradigm-shift.jpg",
      title: "Not another DevOps tool",
      body: "The argument behind the product: every hour lost to firefighting is lost velocity. The future of operations isn't more dashboards - it's systems that decide and resolve on their own.",
      length: "0:34",
      ratio: "9 / 16",
      post: "https://www.linkedin.com/feed/update/urn:li:activity:7471959664331571200",
    },
    {
      src: "/video-built-for-scale.mp4",
      poster: "/video-built-for-scale.jpg",
      title: "Built for scale",
      body: "Enterprise-ready by design: root-cause analysis across distributed systems, auto-remediation to hold downtime down, and pricing that bends to multi-cluster and mission-critical workloads rather than the other way round.",
      length: "0:25",
      ratio: "9 / 16",
      post: "https://www.linkedin.com/posts/prajol-annamudu-193019249_enterprisetech-kubernetes-devops-ugcPost-7468356729567592448-DsC8/",
    },
  ] satisfies VideoItem[],
};

/* ── Out in the ecosystem ─────────────────────────────────────────── */

/**
 * Photographs from the meetups and conferences. Same reasoning as the
 * films: the images are served from /public rather than through a
 * LinkedIn embed, and `post` carries the link back to the original.
 *
 * Third-party attendees are named in the posts themselves but
 * deliberately not reproduced here - this is Prajol's site, and other
 * people's names are theirs to publish. The hosts and organisations are
 * credited, since the posts thank them by name.
 *
 * Dates are the posts' own upload dates. Several say "yesterday", so
 * these are kept to the month rather than claiming a precise day.
 */
export interface PhotoItem extends Todoable {
  src: string;
  alt: string;
  ratio: "3 / 4" | "4 / 3";
}

export interface EventItem extends Todoable {
  name: string;
  when: string;
  where: string;
  body: string;
  post: string;
  photos: PhotoItem[];
}

export const events = {
  heading: "Out of the building",
  headingLower: "founders, investors, and a lot of conversations",
  body: "Part of how the work actually gets done: meetups and conferences across the UK and Northern Ireland, introducing KubeGraf, and finding out what engineering teams and founders are really wrestling with. Newest first.",
  /* Newest first. */
  items: [
    {
      name: "DevOps evening",
      when: "September 2026",
      where: "Hosted by Synechron",
      body: "An evening with the DevOps, cloud, AI and engineering communities - talking through KubeGraf, cloud infrastructure and CI/CD, and how AI is changing the way teams build, deploy and operate.",
      post: "https://www.linkedin.com/posts/prajol-annamudu-193019249_great-evening-at-the-devops-event-yesterday-ugcPost-7508457634220486656-30ZO/",
      photos: [
        { src: "/devops-1.jpg", alt: "A talk in progress, the audience seated facing a presentation screen", ratio: "4 / 3" },
        { src: "/devops-2.jpg", alt: "Prajol Annamudu with another attendee at the DevOps evening", ratio: "3 / 4" },
        { src: "/devops-3.jpg", alt: "A wider view of the room and audience at the DevOps evening", ratio: "4 / 3" },
      ],
    },
    {
      name: "Founders First Mixer",
      when: "August 2026",
      where: "Founder Labs, at Ormeau Labs",
      body: "Introducing KubeGraf to a room of founders - AI-powered investigation, root-cause analysis, safe fixes and security guardrails - and getting the kind of questions that make you look at your own product differently.",
      post: "https://www.linkedin.com/posts/founderlabs-ormeaulabs-entrepreneurship-ugcPost-7496157944510791680-6Irj/",
      photos: [
        { src: "/founderlabs-1.jpg", alt: "Founders gathered in the white vaulted room at Ormeau Labs", ratio: "4 / 3" },
        { src: "/founderlabs-2.jpg", alt: "Prajol Annamudu with a fellow founder at the Founders First Mixer", ratio: "3 / 4" },
        { src: "/founderlabs-3.jpg", alt: "Prajol Annamudu with two other founders at the mixer", ratio: "4 / 3" },
        { src: "/founderlabs-4.jpg", alt: "Attendees talking in groups across the room at Ormeau Labs", ratio: "4 / 3" },
        { src: "/founderlabs-5.jpg", alt: "Conversations near the screen at the far end of the room", ratio: "4 / 3" },
      ],
    },
    {
      name: "ProductTank",
      when: "July 2026",
      where: "Leeds, hosted by Channel 4",
      body: "Conversations on how AI is evolving, vibe coding, and how quickly companies are adopting AI tooling - plus how Channel 4 approaches innovation in media and product management.",
      post: "https://www.linkedin.com/posts/prajol-annamudu-193019249_producttank-ai-artificialintelligence-ugcPost-7480932841762045952-KrZE/",
      photos: [
        { src: "/producttank-1.jpg", alt: "Prajol Annamudu with another attendee in the open-plan event space", ratio: "4 / 3" },
        { src: "/producttank-2.jpg", alt: "Attendees mingling in a bright open-plan office overlooking the city", ratio: "4 / 3" },
        { src: "/producttank-3.jpg", alt: "The Leeds skyline seen through the venue's tall corner window", ratio: "3 / 4" },
        { src: "/producttank-4.jpg", alt: "A domed stone building in central Leeds under a clear blue sky", ratio: "3 / 4" },
        { src: "/producttank-5.jpg", alt: "Prajol Annamudu with the ProductTank crowd behind him", ratio: "4 / 3" },
      ],
    },
    {
      name: "TechTides",
      when: "June 2026",
      where: "Belfast, with Allstate, HighLevel and Alchemy (NTT DATA)",
      body: "A day meeting startup and SME founders, introducing KubeGraf and Orkastor, and talking through AI, Kubernetes and where operations goes next.",
      post: "https://www.linkedin.com/feed/update/urn:li:activity:7470912646440054784",
      photos: [
        { src: "/techtides-1.jpg", alt: "Prajol Annamudu and another attendee in front of a TechTides branded backdrop", ratio: "3 / 4" },
        { src: "/techtides-2.jpg", alt: "Prajol Annamudu in a navy suit in front of a TechTides backdrop", ratio: "4 / 3" },
        { src: "/techtides-3.jpg", alt: "A panel on stage at TechTides Belfast, beside a slide on AI governance for regulated enterprises", ratio: "4 / 3" },
        { src: "/techtides-4.jpg", alt: "Prajol Annamudu in front of the TechTides sponsor wall, carrying Allstate, HighLevel and Alchemy among others", ratio: "4 / 3" },
        { src: "/techtides-5.jpg", alt: "Prajol Annamudu with a fellow founder in the venue concourse at TechTides", ratio: "3 / 4" },
      ],
    },
  ] satisfies EventItem[],
};

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
