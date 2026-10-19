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
  /** e.g. "Team of 4". */
  team?: string;
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
  href?: string;
}

export interface Award {
  title: string;
  detail: string;
}

export const siteData = {
  name: "Gil Silva",
  albumTitle: "Ingeniero y Diseñador",
  volume: "Vol. 1 · 2027",
  graduation: "Graduating Dec 2027",
  availability: "Open to Summer 2027 internships and full-time roles starting 2028.",
  tagline: "Software engineer and designer building technology that empowers people.",
  heroFacts: ["Stanford · Symbolic Systems + HCI", "3× Amazon SDE Intern", "CollegePlanAI · acquired"],

  links: {
    linkedin: "https://linkedin.com/in/gilxsilva",
    github: "https://github.com/gilxsilva",
    email: "gscgilbertosilva@gmail.com",
    resume: "/Gil_Silva_Resume.pdf",
    linkedinProjects: "https://www.linkedin.com/in/gilxsilva/details/projects/",
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
      team: "Team of 4",
      stack: ["Figma", "React", "Voice AI"],
      color: "#3A4FA8",
      problem: "Your calendar knows when you're free, not when you have the energy. In our user research, people blamed missed goals on unexpected drops in energy, something no scheduling tool plans around.",
      built: "Went from needfinding to Figma and React prototypes for an app that uses voice-AI reflections to learn which people, places, and patterns drain or restore you, then suggests rescheduling when your energy and your calendar don't match.",
      outcome: "**Top 6** of **23** projects at the CS147 Expo, winning Best Concept and Most Novel Product. Our concept video also won Best Soundtrack.",
      awards: ["Top 6 of 23", "Best Concept", "Most Novel Product", "Best Soundtrack"],
      liveUrl: "https://web.stanford.edu/class/cs147/projects/DesignforMentalWellbeing/Kyro/",
      githubUrl: "https://github.com/gilxsilva/kyro-app",
    },
    {
      id: "gem",
      title: "GEM",
      tag: "Mobile · Social",
      year: "2026",
      context: "Stanford CS 278 · Social Computing",
      team: "Team of 3",
      stack: ["React Native", "Expo", "Supabase"],
      color: "#1F7A52",
      problem: "Rating apps surface what's popular, not what's meaningful. The best cafés, study spots, and views usually come from friends you trust.",
      built: "Designed the database schema and built posting gems, browsing places, saving, commenting, reporting, onboarding, and profiles in a mobile-first app. Also shaped the product design, UX, and technical architecture.",
      outcome: "A working app that explores trust, social context, community norms, and safety, so recommendations feel personal instead of algorithmic.",
      githubUrl: "https://github.com/gilxsilva/gem-cs278",
    },
    {
      id: "maternal-health",
      title: "Maternal Health × VSee",
      tag: "Global Health · AI",
      year: "2025",
      context: "Stanford CS+Social Good",
      team: "Team of 5",
      color: "#2C7DB8",
      problem: "Postpartum hemorrhage causes over **70,000** maternal deaths worldwide each year. Midwives in the rural Philippines work with limited internet, many languages, and low tech literacy.",
      built: "Interviewed medical students and community midwives, then designed an offline-capable triage system and a multilingual AI chatbot (English, Tagalog, Bisaya) for emergency guidance, education, and risk assessment.",
      outcome: "A human-centered tool built with telehealth company VSee, designed for sustainable use in low-resource health systems.",
    },
    {
      id: "finding-our-voice",
      title: "Finding Our Voice",
      tag: "Community · EdTech",
      year: "2022–present",
      context: "With 826 Valencia, San Francisco",
      team: "Co-founded with 2 others",
      color: "#B4441A",
      problem: "**23%** of students at my San Francisco high school were newcomer English learners, with scattered support and few Spanish-speaking mentors. I knew that confusion firsthand.",
      built: "Co-founded a program with 826 Valencia where newcomer, immigrant, refugee, and undocumented students learn English in a dynamic way, find community, and get resources to pursue college.",
      outcome: "Backed by a **$10K** Youth Funding Youth Ideas grant, it helped **30+** newcomer students in its first semester and still runs today.",
      awards: ["$10K grant"],
      liveUrl: "https://gilxsilva.github.io/finding-our-voice/",
    },
    {
      id: "sone",
      title: "Sone",
      tag: "Dreams · Creative Web",
      year: "2026",
      context: "Personal project",
      stack: ["React", "TypeScript", "Tailwind CSS", "Motion"],
      color: "#294632",
      problem: "Dream dictionaries can make a strange night feel like a fixed prediction. I wanted a more curious way to explore dreams, with room for folklore, personal context, and clear limits on what we know.",
      built: "Built a bilingual dream explorer with original SVG illustrations, keyword-based readings, and **32 symbols**. Each card separates dictionary associations from original reflections and names its source. A research page explains the approach.",
      outcome: "A free English and Spanish prototype: describe a dream, explore its symbols, and copy a reading to share. No accounts, saved dreams, or paid interpretation service.",
      liveUrl: "https://sone-tau.vercel.app/",
      githubUrl: "https://github.com/gilxsilva/sone",
    },
    {
      id: "still-here",
      title: "Still Here",
      tag: "Probability · Interactive Web",
      year: "2026",
      context: "Personal project · Probability",
      stack: ["JavaScript", "HTML", "CSS"],
      color: "#454545",
      problem: "A Reel about having 9,000 days left made me wonder what the numbers actually say. Taking a probability class gave me a way to explore the question: what are the odds I die tomorrow?",
      built: "Built an interactive walkthrough using Social Security life-table data, explaining how an annual mortality rate becomes a daily estimate. Added a life-in-weeks view and a weekly time planner, with the assumptions visible throughout.",
      outcome: "A small, accessible website that makes the math inspectable and turns an abstract number into a reflection on time. Population estimates are clearly separated from personal predictions, and inputs stay in the browser.",
      liveUrl: "https://still-here-theta-coral.vercel.app/",
      githubUrl: "https://github.com/gilxsilva/still-here",
    },
  ] as Project[],

  bonusTracks: [
    {
      title: "Chrona",
      description: "All-in-one academic dashboard for students, built at HackHarvard.",
      year: "2025",
      context: "HackHarvard",
      href: "https://github.com/gilxsilva/hackharvard-2025",
    },
    {
      title: "Operation Lone Star Hub",
      description: "Advocacy site on the human rights impact of Texas' Operation Lone Star: research, visualizations, and a social media toolkit.",
      year: "2025",
      context: "Stanford LAWGEN 118Q",
      href: "https://gilxsilva.github.io/ols-advocacy-hub/",
    },
    {
      title: "Cash Transfers & Teacher Burnout",
      description: "Randomized controlled trial proposal testing unconditional cash transfers as a way to reduce K-12 teacher burnout.",
      year: "2024",
      context: "Stanford DATASCI 154",
    },
    {
      title: "AstroNerds",
      description: "Found students scored higher with peer explanations (**92%** vs. **86%**), then prototyped an AI math chatbot that acts like a peer.",
      year: "2024",
      context: "Stanford CS 53N",
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
      { label: "Studies", value: "Symbolic Systems + HCI, Stanford · Graduating December 2027" },
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
