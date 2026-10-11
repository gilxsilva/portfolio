// All homepage copy lives here. Wrap text in **double asterisks** to bold a metric.

export interface Job {
  role: string;
  company: string;
  team?: string;
  period: string;
  stack: string[];
  bullets: string[];
  note?: string;
}

export interface Project {
  id: string;
  title: string;
  tag: string;
  year?: string;
  context: string;
  stack?: string[];
  /** Cover color used when there is no screenshot. */
  color: string;
  problem: string;
  built: string;
  outcome: string;
  awards?: string[];
  /** Path under /public, e.g. "/projects/kyro.png". */
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface BonusTrack {
  title: string;
  description: string;
  year: string;
  context: string;
}

export interface Award {
  title: string;
  detail: string;
}

export const siteData = {
  name: "Gil Silva",
  albumTitle: "Ingeniero y Diseñador",
  volume: "Vol. 1 · 2027",
  availability: "Available Summer 2027",
  tagline: "Software engineer and designer building technology that empowers people.",
  heroFacts: ["Stanford · Symbolic Systems + HCI", "3× Amazon SDE Intern", "CollegePlanAI · acquired"],

  links: {
    linkedin: "https://linkedin.com/in/gilxsilva",
    github: "https://github.com/gilxsilva",
    email: "gscgilbertosilva@gmail.com",
    resume: "/Gil_Silva_Resume.pdf",
  },

  experience: [
    {
      role: "SDE Intern",
      company: "Amazon",
      team: "Supply Chain Optimization Technologies (SCOT)",
      period: "Jun–Sep 2026",
      stack: ["Java", "TypeScript", "AWS", "LLMs"],
      bullets: [
        "Owned end-to-end and launched to pre-production a serverless AWS pipeline (CDK, Step Functions, Lambda, EventBridge) delivering weekly root-cause digests.",
        "Surfaced the **83%** of vendor EDI failures (**3.6M of 4.3M**) that never reached vendors.",
        "Built root-cause clustering plus an Amazon Bedrock LLM agent, cutting guardrail blocks from **14% to 4%**.",
        "Shipped it as a Vendor Central tab, projected to cut vendor investigation from **5 hrs to 1 hr per week**.",
      ],
    },
    {
      role: "Full-Stack Software Engineer Intern",
      company: "CollegePlanAI",
      period: "May–Nov 2025",
      stack: ["Next.js", "Supabase", "Claude", "Stripe"],
      bullets: [
        "Primary engineer at a **3-person** startup.",
        "Built an AI college essay app (Next.js, Supabase, Claude) used by **hundreds of students**.",
        "Shipped Stripe payments, OAuth, and credit-gated AI features.",
      ],
      note: "Acquired by New Oriental Education",
    },
    {
      role: "SDE Intern",
      company: "Amazon",
      team: "Last Mile Stops",
      period: "Jun–Sep 2025",
      stack: ["Java", "AWS", "React"],
      bullets: [
        "Replaced **2+ hour** delivery-stop investigations with a self-service workflow, eliminating **8+ hrs/week** of engineering toil.",
        "Shipped **26+** geospatial and package fields to production across Java services, S3, and React.",
      ],
    },
    {
      role: "SDE Intern",
      company: "Amazon",
      team: "Last Mile Amazon Flex",
      period: "Jun–Sep 2024",
      stack: ["Java", "Python", "AWS"],
      bullets: [
        "Built a location-preference signal for Flex's assignment optimizer: a Java distance-matrix algorithm feeding a Python integer-program solver.",
        "Built an event-driven S3/SNS/Lambda ingestion pipeline.",
      ],
    },
  ] as Job[],

  projects: [
    {
      id: "kyro",
      title: "Kyro",
      tag: "HCI · Voice AI",
      year: "2025",
      context: "Stanford CS147",
      color: "#3A4FA8",
      problem: "Calendars schedule time, but people run on energy. Most planners ignore how you actually feel.",
      built: "Prototyped a voice-AI scheduling app that reads emotional state and energy level, then plans the day around it.",
      outcome: "Placed in the top 6 of 23 teams in Stanford CS147 and won Best Concept and Most Novel Product.",
      awards: ["Top 6 of 23", "Best Concept", "Most Novel Product"],
    },
    {
      id: "gem",
      title: "GEM",
      tag: "Mobile · Social",
      context: "Stanford CS 278",
      stack: ["React Native", "Expo", "Supabase"],
      color: "#1F7A52",
      problem: "Anonymous reviews are noisy. The places worth going usually come from friends you trust.",
      built: "Designed the database schema and built posting, saving, commenting, reporting, and onboarding for a friend-sourced recommendations app.",
      outcome: "A working mobile app for trusted, friend-sourced place recommendations.",
    },
    {
      id: "maternal-health",
      title: "Maternal Health × VSee",
      tag: "Global Health · AI",
      year: "2025",
      context: "Stanford CS+Social Good",
      color: "#2C7DB8",
      problem: "Community health workers in the rural Philippines need to catch postpartum hemorrhage early, often with little or no connectivity.",
      built: "An offline-capable triage tool and multilingual chatbot in English, Tagalog, and Bisaya.",
      outcome: "Built with VSee for community health workers through Stanford CS+Social Good.",
    },
    {
      id: "finding-our-voice",
      title: "Finding Our Voice",
      tag: "Community · EdTech",
      year: "2022–present",
      context: "826 Valencia, San Francisco",
      color: "#B4441A",
      problem: "Newly arrived immigrant students had no space to practice English outside the classroom.",
      built: "Co-founded the program from scratch: curriculum, partnerships, and volunteer training.",
      outcome: "Serves **30+** newcomer students at 826 Valencia, backed by a **$10K grant**.",
      awards: ["$10K grant"],
    },
  ] as Project[],

  bonusTracks: [
    {
      title: "Operation Lone Star Hub",
      description: "Digital advocacy platform built from a Stanford border-law course.",
      year: "2025",
      context: "Stanford Law",
    },
    {
      title: "AstroNerds",
      description: "Research + AI math chatbot studying peer vs. instructor learning models.",
      year: "2024",
      context: "Stanford Research",
    },
    {
      title: "Deserver Art",
      description: "Platform paying high school artists fairly. Presented at NNTE Bay Area.",
      year: "2022",
      context: "NNTE Bay Area",
    },
  ] as BonusTrack[],

  about: {
    paragraphs: [
      "Born in San Francisco, raised in Chapala, Jalisco. I came back to the U.S. for Stanford carrying two languages, two cultures, and a conviction that technology should work for everyone, not just the people who build it.",
      "At Stanford, I study Symbolic Systems and HCI because the hardest problems sit at the intersection of how minds work and how systems are designed. My coursework spans AI, cognitive science, linguistics, and HCI.",
      "I've shipped production code at Amazon three times, co-founded an English-learning program that still runs at 826 Valencia, and built tools for rural communities in the Philippines. The throughline is engineering with people, not just for them.",
    ],
    credits: [
      { label: "Recorded in", value: "SF · Chapala · Stanford" },
      { label: "Studies", value: "Senior, Symbolic Systems + HCI, Stanford" },
      { label: "Sessions", value: "Amazon ('24, '25, '26) · CollegePlanAI" },
      { label: "Instruments", value: "Java · TypeScript · Python · React · Next.js · AWS" },
      { label: "Design", value: "Figma · Prototyping · User research · Accessibility" },
      { label: "Off the record", value: "Rugby · Guitar · Songwriting" },
      { label: "Early recordings", value: "826 Valencia writer & mentor · Juma Ventures · SFUSD Entrepreneur Fellow" },
    ],
  },

  awards: [
    { title: "Top 6 of 23", detail: "Kyro · Stanford CS147" },
    { title: "Best Concept & Most Novel", detail: "Kyro · Stanford CS147" },
    { title: "$10K grant", detail: "Finding Our Voice" },
    { title: "Acquired", detail: "CollegePlanAI · New Oriental Education" },
  ] as Award[],

  contact: {
    heading: "Hablemos.",
    subheading: "Let's build something that matters.",
    closingLine: "Eyeing NYC. Open to Europe. Honestly, anywhere good work is happening.",
    closingLineSub: "Remote works too.",
  },
};
