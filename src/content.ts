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
  headline: "Building KubeGraf into a billion dollar company",
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
    "Since February 2020 I've been Co-Founder and Director of Yours Foundation in Nellore - fundraising for underprivileged families, running the annual blood and blanket donation drive every January 1st, and distributing food to more than 800 families through the COVID-19 period.",
    "My entrepreneurial journey has involved exploring multiple business ideas, working across different startup functions, and developing an understanding of what it takes to build and commercialise a technology product.",
    "Beyond KubeGraf I'm associated with Orkastor, a technology venture exploring AI-powered cloud infrastructure and developer platforms.",
    "Based in Northern Ireland, I engage actively with the wider UK startup ecosystem - entrepreneurial networks, innovation communities, investors and business support organisations. My long-term ambition is to build globally relevant deep-tech companies and contribute to the next generation of intelligent infrastructure systems.",
    "My philosophy is grounded in continuous learning, persistence and practical innovation - and the belief that meaningful technology businesses are built by understanding real problems and working consistently towards solving them.",
  ],
};

/* ── Timeline ─────────────────────────────────────────────────────── */

export interface Chapter extends Todoable {
  /** Groups entries into acts in the timeline. */
  era: "Roots" | "Craft" | "Ventures" | "Ecosystem";
  /** Period, e.g. "Jul 2025 - Present". Anchors the row. */
  when: string;
  /** The role, or the milestone where there is no role. */
  title: string;
  /** Company, school or organisation. Omitted for life events. */
  org?: string;
  /** Employment basis - Full-time, Internship, Freelance, Community. */
  kind?: string;
  /** Place, and remote/hybrid/on-site where it was stated. */
  where?: string;
  /** The entry in one or two sentences. Always shown. */
  body: string;
  /** What the work actually involved. Shown beneath the body. */
  points?: string[];
  /** Still ongoing - marks the row with a filled dot. */
  current?: boolean;
  /** Optional image from /public. Omitted entries render as text only. */
  image?: string;
}

/**
 * The full record, in four acts. Roles, periods, locations and
 * descriptions are as supplied from the LinkedIn profile; the repeated
 * IT-support boilerplate that had accreted across the early QA entries
 * is consolidated rather than restated four times.
 */

export const story: Chapter[] = [
  /* ── Act 01 · Roots ─────────────────────────────────────────────── */
  {
    era: "Roots",
    when: "Early life",
    title: "Born in Nellore",
    where: "Nellore, Andhra Pradesh, India",
    body: "Born and brought up in Nellore, on the Andhra Pradesh coast, and schooled there. Everything that came after started a long way from any technology capital.",
  },
  {
    era: "Roots",
    when: "2019 - 2023",
    title: "Bachelor of Technology, Computer Science and Engineering",
    where: "Andhra Pradesh, India",
    body: "Four years of computer science and engineering - the foundation in systems, networks and software that the rest of the work is built on.",
  },
  {
    era: "Roots",
    when: "Feb 2020 - Present",
    title: "Co-Founder & Director",
    org: "Yours Foundation",
    kind: "Full-time",
    where: "Nellore, Andhra Pradesh, India",
    body: "Co-founded Yours Foundation while still an undergraduate - fundraising to support underprivileged families in Nellore, and running the drives that followed.",
    points: [
      "Directed fundraising initiatives providing financial support to underprivileged families.",
      "Organised the annual blood and blanket donation drive, held every January 1st.",
      "Distributed food to 800+ families through the COVID-19 period, with a volunteer team.",
      "Continuing blood donation and community health work as Organisational Director and Coordinator.",
    ],
    current: true,
  },

  /* ── Act 02 · Craft ─────────────────────────────────────────────── */
  {
    era: "Craft",
    when: "Sep 2020 - Oct 2022",
    title: "Product / Scrum Coordinator",
    org: "Freelancer",
    kind: "Freelance",
    where: "Greater Bengaluru Area - Remote",
    body: "Two years of client work alongside the degree: testing websites for small businesses, and learning to report findings to the person paying for them.",
    points: [
      "Website testing focused on UI and functionality, with cross-browser coverage and usability reporting.",
      "Smoke testing before every client launch and version update.",
      "Test case writing, defect reporting and Agile stand-ups.",
      "Communicated results and improvement recommendations directly to clients.",
    ],
  },
  {
    era: "Craft",
    when: "Nov 2022 - Jan 2023",
    title: "Product / QA - Cloud Associate",
    org: "TechArk - Innovative Digital Solutions",
    kind: "Internship",
    where: "Malaysia - Remote",
    body: "A first formal internship, and first contact with cloud infrastructure: functional and UI testing on internal applications, plus an AWS internship alongside it.",
    points: [
      "Executed functional and UI test scenarios; wrote test cases and defect reports.",
      "Learned SDLC, STLC and Agile in practice - test prioritisation, defect severity, status reporting.",
      "Worked with developers to reproduce issues, validate fixes and confirm closure.",
      "AWS core services: IAM, EC2, S3, VPC, CloudWatch, auto scaling and load balancing.",
    ],
  },
  {
    era: "Craft",
    when: "Jul 2023 - Sep 2023",
    title: "QA / Product Improvement Specialist",
    org: "iSmile Technologies",
    kind: "Full-time",
    where: "Hyderabad, Telangana, India - Hybrid",
    body: "Manual testing across web application modules, built from requirement documents and wireframes - the first close look at how a product actually fails in a user's hands.",
    points: [
      "Functional, UI and regression testing across core application features; defects reported in Bugzilla.",
      "Cross-browser verification on Chrome, Firefox and Edge for a consistent experience.",
      "Infrastructure alongside the QA: AWS with Terraform, CloudWatch and CloudTrail, Azure Virtual Desktop, Microsoft 365, Windows Autopilot.",
      "Administered Microsoft 365, Active Directory and VMware/Hyper-V systems; wrote the knowledge-base and troubleshooting guides the team ran on.",
    ],
  },
  {
    era: "Craft",
    when: "2024 - 2025",
    title: "MSc Computer Science",
    org: "University of Lancashire",
    where: "Preston, England, United Kingdom",
    body: "The move from India to the United Kingdom, for a Master of Science in Computer Science - and the point at which the work turned from testing other people's products to building one.",
  },
  {
    era: "Craft",
    when: "2024 - 2025",
    title: "Student Ambassador",
    org: "University of Lancashire",
    where: "Preston, England, United Kingdom",
    body: "Student Ambassador and university volunteering alongside the MSc.",
  },
  {
    era: "Craft",
    when: "Oct 2024 - Dec 2025",
    title: "Product / QA Lead",
    org: "Finden",
    kind: "Full-time",
    where: "Greater London, England - Remote",
    body: "Leading product and QA at an early-stage company, which in practice meant owning far more than the test plan.",
    points: [
      "Manual testing across functional, integration, UI and regression cycles, to comprehensive coverage.",
      "Logged, tracked and retested defects in JIRA - reproducibility, severity classification, resolution.",
      "Full Agile cadence: daily stand-ups, sprint planning, retrospectives and backlog grooming.",
      "Prepared test data, validated QA and test deployments, and maintained documentation and summary reports in Confluence and SharePoint.",
      "Also ran web development, research support and university customer acquisition - the reality of a small team.",
    ],
  },

  /* ── Act 03 · Ventures ──────────────────────────────────────────── */
  {
    era: "Ventures",
    when: "Jan 2025 - Sep 2026",
    title: "Co-Founder",
    org: "Orkastor",
    kind: "Full-time",
    where: "Greater London, England - Remote",
    body: "Co-founded Orkastor - an AI-powered SRE platform for modern cloud infrastructure, built local-first so that data never leaves the environment it runs in. The AI SRE that never leaves your network.",
    points: [
      "Helping DevOps teams automatically detect, analyse and fix Kubernetes issues.",
      "Local-first AI by design, so the cluster's data stays in the cluster.",
      "Reimagining cloud operations around intelligent orchestration and autonomous debugging.",
      "Mission: zero downtime, through AI-driven infrastructure reliability.",
    ],
  },
  {
    era: "Ventures",
    when: "Jul 2025 - Present",
    title: "Co-Founder & CPO",
    org: "KubeGraf",
    kind: "Full-time",
    where: "Greater London, England - Remote",
    body: "Launched KubeGraf, the flagship AI-powered Kubernetes incident intelligence platform that came out of Orkastor - and now own its product strategy, roadmap and AI-driven features.",
    points: [
      "Defined and executed product strategy, roadmap and AI-driven features, improving incident detection and resolution speed.",
      "Led engineering, design and product teams to deliver enterprise-grade observability.",
      "Secured early adopters, strategic partnerships and investor engagement, driving adoption and growth.",
      "Positioned the company as a leader in cloud-native observability and incident intelligence, recognised across the tech ecosystem.",
    ],
    current: true,
  },
  {
    era: "Ventures",
    when: "Oct 2025 - Feb 2026",
    title: "Co-Founder",
    org: "ESTOSPACES",
    kind: "Full-time",
    where: "England, United Kingdom - Remote",
    body: "Co-founded a PropTech startup, taking end-to-end ownership of product direction, hiring, marketing and business execution through the earliest stage.",
    points: [
      "Shaped product and business strategy from the start.",
      "Translated real estate operational challenges into actionable product requirements and system designs.",
      "Defined the product vision and turned business requirements into initial direction and workflows.",
    ],
  },

  /* ── Act 04 · Ecosystem ─────────────────────────────────────────── */
  {
    era: "Ecosystem",
    when: "Jul 2026 - Present",
    title: "Member, Centre for SME & Enterprise Development",
    org: "University of Lancashire",
    kind: "Community",
    where: "Preston, England - Remote",
    body: "Member of a 1,900+ SME network focused on business growth, innovation and collaboration - engaging founders, industry professionals and academic experts through networking events, workshops and enterprise programmes, to build partnerships and market insight for KubeGraf.",
    current: true,
  },
  {
    era: "Ecosystem",
    when: "Jul 2026 - Present",
    title: "Startup Member",
    org: "Startup Grind",
    kind: "Community",
    where: "Manchester Area, United Kingdom - Remote",
    body: "Selected as a Startup Grind member - part of a global community of founders, investors and innovators.",
    points: [
      "Access to the international startup network and investor ecosystem.",
      "Founder events, conferences and mentorship sessions.",
      "Engaging global founders to scale KubeGraf.",
    ],
    current: true,
  },
  {
    era: "Ecosystem",
    when: "Aug 2026 - Present",
    title: "Community Member, Barclays Eagle Labs",
    org: "Barclays Innovation Hub powered by Eagle Labs",
    kind: "Community",
    where: "London Area, United Kingdom - Remote",
    body: "Member of the Barclays Eagle Labs community - a UK entrepreneurial ecosystem supporting startups and scaleups through founder networking, mentoring, learning, events and growth programmes.",
    points: [
      "Connecting with founders, mentors, investors and industry experts while building and scaling KubeGraf.",
    ],
    current: true,
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

/* ── Role models ──────────────────────────────────────────────────── */

/**
 * Credit for a portrait. Both photographs here are reused under licences
 * that *require* visible attribution, so this is not decoration - the
 * credit line in the Inspiration section is a condition of using them.
 * Any portrait added later must carry one too.
 */
export interface ImageCredit {
  /** Photographer or rights holder, as the licence requires it named. */
  author: string;
  /** Licence short name, e.g. "CC BY-SA 3.0". */
  licence: string;
  licenceUrl: string;
  /** The file page it came from, so the claim can be checked. */
  sourceUrl: string;
}

export interface RoleModel {
  name: string;
  /** Factual descriptor — dates and what they were known for. */
  known: string;
  /** Their own words. Short, attributed quotes only. */
  quote: string;
  /** Why they matter to Prajol. Edit freely — this is the personal part. */
  why: string;
  /** Portrait from /public. Panels render quote-only without one. */
  image?: string;
  /** WebP twin, served first via <picture>. */
  imageWebp?: string;
  /** Required whenever `image` is set — see ImageCredit. */
  credit?: ImageCredit;
}

export const roleModels: RoleModel[] = [
  {
    name: "Steve Jobs",
    known: "1955-2011 - co-founder of Apple, NeXT and Pixar",
    quote: "Stay hungry. Stay foolish.",
    why: "For the insistence that a product is not finished when it works, but when it is right - and that taste and engineering are the same discipline, not opposing ones.",
    image: "/inspiration-steve-jobs.jpg",
    imageWebp: "/inspiration-steve-jobs.webp",
    credit: {
      author: "Matthew Yohe",
      licence: "CC BY-SA 3.0",
      licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Steve_Jobs_Headshot_2010-CROP.jpg",
    },
  },
  {
    name: "A. P. J. Abdul Kalam",
    known: "1931-2020 - aerospace scientist and 11th President of India",
    quote: "Dream is not what you see in sleep.",
    why: "For proving that a boy from a small town on the Indian coast can build things that reach orbit - and for staying a teacher through all of it.",
    image: "/inspiration-abdul-kalam.jpg",
    imageWebp: "/inspiration-abdul-kalam.webp",
    credit: {
      author: "Government of India",
      licence: "GODL-India",
      licenceUrl: "https://data.gov.in/government-open-data-license-india",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:A._P._J._Abdul_Kalam.jpg",
    },
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
