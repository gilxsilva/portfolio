export interface Project {
  id: string;
  title: string;
  tag: string;
  description: string;
  detail: string;
  year?: string;
  context?: string;
  award?: string;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export interface OtherWork {
  title: string;
  description: string;
  year: string;
  context: string;
}

export const siteData = {
  name: "Gil Silva",
  taglineEs: "Ingeniero y diseñador.",
  taglineEn: "Engineer and designer building technology that empowers people.",
  availability: "Available for Summer 2027",

  links: {
    linkedin: "https://linkedin.com/in/gilxsilva",
    github: "https://github.com/gilxsilva",
    email: "gscgilbertosilva@gmail.com",
    resume: "/Gil_Silva_Resume.pdf",
  },

  about: {
    paragraphs: [
      "Born in San Francisco, raised in Chapala, Jalisco. I came back to the U.S. for Stanford carrying two languages, two cultures, and a conviction that technology should work for everyone, not just the people who build it.",
      "At Stanford, I study Symbolic Systems and HCI because the hardest problems sit at the intersection of how minds work and how systems are designed. My coursework spans AI, cognitive science, linguistics, and HCI. I bring all of it to whatever I build.",
      "I've shipped production code at Amazon three times, co-founded an English-learning program that still runs at 826 Valencia, and built tools for rural communities in the Philippines. The throughline isn't any specific technology. It's engineering with people, not just for them.",
    ],
    highlights: [
      { value: "3×", label: "Amazon SDE Intern" },
      {
        value: "3.6M",
        label: "Silent vendor EDI failures surfaced at Amazon SCOT",
      },
      { value: "Acquired", label: "CollegePlanAI, by New Oriental Education" },
      { value: "$10K", label: "Grant for Finding Our Voice" },
    ],
  },

  experience: {
    featured: [
      {
        company: "Amazon",
        role: "SDE Intern, Supply Chain Optimization Technologies (SCOT)",
        period: "Jun–Sep 2026",
        description:
          "Owned end-to-end and launched to pre-production a serverless AWS pipeline (CDK, Step Functions, Lambda, EventBridge) delivering weekly root-cause digests, surfacing the 83% of vendor EDI failures (3.6M of 4.3M) that never reached vendors. Built root-cause clustering plus an Amazon Bedrock LLM agent (cut guardrail blocks 14% to 4%). Shipped it as a Vendor Central tab, projected to cut vendor investigation from 5 hrs to 1/week.",
        tags: ["Java", "TypeScript", "AWS", "LLMs"],
      },
      {
        company: "Amazon",
        role: "SDE Intern, Last Mile Stops Team",
        period: "Jun–Sep 2025",
        description:
          "Replaced 2+ hour delivery-stop investigations with a self-service workflow, eliminating 8+ hrs/week of engineering toil. Shipped 26+ geospatial and package fields to production across Java services, S3, and React.",
        tags: ["Java", "AWS", "React"],
      },
      {
        company: "Amazon",
        role: "SDE Intern, Last Mile Amazon Flex",
        period: "Jun–Sep 2024",
        description:
          "Built a location-preference signal for Flex's assignment optimizer (Java distance-matrix algorithm feeding a Python integer-program solver) and an event-driven S3/SNS/Lambda ingestion pipeline.",
        tags: ["Java", "Python", "AWS"],
      },
      {
        company: "CollegePlanAI",
        role: "Full-Stack Software Engineer Intern",
        period: "May–Nov 2025",
        description:
          "Primary engineer at a 3-person startup. Built an AI college essay app (Next.js, Supabase, Claude) used by hundreds of students; shipped Stripe, OAuth, and credit-gated AI.",
        tags: ["Next.js", "Supabase", "Claude", "Stripe"],
        note: "Acquired by New Oriental Education",
      },
    ],
    earlier: [
      {
        company: "826 Valencia",
        role: "Published Writer & Youth Mentor",
        period: "2020–2022",
      },
      {
        company: "Juma Ventures",
        role: "Youth Worker",
        period: "2021–2022",
      },
      {
        company: "SFUSD",
        role: "Entrepreneur Fellow",
        period: "2022",
      },
    ],
  },

  projects: [
    {
      id: "kyro",
      title: "Kyro",
      tag: "HCI · Product",
      description:
        "Emotional scheduling app using voice AI. Plan by energy, not just time.",
      detail:
        "Prototyped an AI scheduling system that interprets emotional state and energy levels, not just calendar slots. Built for people who think in feelings, not blocks.",
      year: "2025",
      award: "Top 6 of 23 · Best Concept & Most Novel Product",
      context: "Stanford CS147",
    },
    {
      id: "gem",
      title: "GEM",
      tag: "Mobile · Social",
      description:
        "Mobile app for trusted, friend-sourced place recommendations. Designed the database schema and built posting, saving, commenting, reporting, and onboarding.",
      detail:
        "Built with React Native, Expo, and Supabase. Recommendations come from people you trust, not anonymous reviews.",
      context: "Stanford CS 278",
    },
    {
      id: "maternal-health",
      title: "AI Maternal Health Tool",
      tag: "Global Health · AI",
      description:
        "Offline-capable triage and multilingual chatbot targeting postpartum hemorrhage in rural Philippines.",
      detail:
        "Supports English, Tagalog, and Bisaya. Designed for community health workers in areas with limited connectivity. Built with VSee for Stanford CS+Social Good.",
      year: "2025",
      context: "Stanford CS+Social Good × VSee",
    },
    {
      id: "finding-our-voice",
      title: "Finding Our Voice",
      tag: "Community · EdTech",
      description:
        "Co-founded English-learning program for 30+ newcomer immigrant students at 826 Valencia. $10K grant.",
      detail:
        "Started as a high school senior noticing that newly arrived students had no space to practice English outside the classroom. Built from scratch: curriculum, partnerships, volunteer training.",
      year: "2022–present",
      context: "826 Valencia, San Francisco",
    },
  ] as Project[],

  otherWork: [
    {
      title: "Operation Lone Star Hub",
      description:
        "Digital advocacy platform built from a Stanford border-law course.",
      year: "2025",
      context: "Stanford Law",
    },
    {
      title: "AstroNerds",
      description:
        "Research + AI math chatbot studying peer vs. instructor learning models.",
      year: "2024",
      context: "Stanford Research",
    },
    {
      title: "Deserver Art",
      description:
        "Platform paying high school artists fairly. Presented at NNTE Bay Area.",
      year: "2022",
      context: "NNTE Bay Area",
    },
  ] as OtherWork[],

  skills: {
    engineering: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Java",
      "Python",
      "AWS",
      "REST APIs",
      "Full-Stack Web",
    ],
    design: [
      "Figma",
      "Prototyping",
      "User Research",
      "Usability Testing",
      "HCI",
      "Information Architecture",
      "Accessibility (WCAG)",
    ],
    context: [
      "Product Thinking",
      "AI / LLMs",
      "EdTech",
      "Community Organizing",
      "English",
      "Spanish",
      "Italian",
    ],
  },

  contact: {
    headingEs: "Hablemos.",
    subheading: "Let's build something that matters.",
    email: "gscgilbertosilva@gmail.com",
    linkedinHandle: "linkedin.com/in/gilxsilva",
    linkedinUrl: "https://linkedin.com/in/gilxsilva",
    githubHandle: "github.com/gilxsilva",
    githubUrl: "https://github.com/gilxsilva",
    closingLine:
      "Eyeing NYC. Open to Europe. Honestly, anywhere good work is happening.",
    closingLineSub: "Remote works too.",
  },
};
