import type { Project } from "./types"

export const projects: Project[] = [
  {
    id: "kyro",
    title: "Kyro",
    subtitle: "Emotional Scheduling",
    description: "Reschedules your day based on capacity, not just availability.",
    fullDescription:
      "Kyro reimagines calendar management by recognizing that our capacity fluctuates throughout the day. Instead of treating all time blocks equally, it learns your energy patterns and adjusts your schedule to match your emotional and cognitive capacity.",
    impact: {
      people: { level: "Medium" as const, evidence: "30+ learners supported" },
      scale: { level: "Medium" as const, evidence: "Pilot deployment" },
      craft: { level: "High" as const, evidence: "Multiple prototypes tested" },
    },
    tags: ["HCI", "AI/ML", "Mobile"],
    image: "/modern-calendar-app-with-emotional-scheduling.jpg",
    demoUrl: "#",
    figmaUrl: "#",
    githubUrl: "#",
    awards: ["Stanford Design Award Finalist", "Featured in TechCrunch"],
    metrics: ["85% reduction in schedule-related stress", "4.8/5 user satisfaction", "30+ daily active users"],
    userQuote: {
      text: "For the first time, my calendar works with me instead of against me.",
      author: "Sarah, Product Manager",
    },
    decisionLog: [
      {
        title: "Energy tracking method",
        description: "Initially used manual check-ins, but users found it too intrusive.",
        outcome: "Switched to passive pattern recognition using calendar behavior and time-of-day patterns.",
      },
      {
        title: "Notification timing",
        description: "We wanted to suggest reschedules in real-time but users felt pressured.",
        outcome: "Moved to daily digest model with preview-before-apply functionality.",
      },
      {
        title: "Next iteration",
        description: "Add integration with health tracking apps for more accurate capacity prediction.",
        outcome: "Planned for Q2 2025 based on user feedback.",
      },
    ],
  },
  {
    id: "dayo",
    title: "Dayo",
    subtitle: "Student Calendar",
    description: "Turns syllabi into calendars you can preview before syncing.",
    fullDescription:
      "Dayo eliminates the tedious process of manually adding assignments and deadlines from syllabi to calendars. Students can upload their syllabus, preview the auto-generated calendar, make adjustments, and sync it all at once.",
    impact: {
      people: { level: "High" as const, evidence: "500+ students at Stanford" },
      scale: { level: "High" as const, evidence: "Live deployment" },
      craft: { level: "High" as const, evidence: "10+ user interviews" },
    },
    tags: ["Education", "AI/ML", "Accessibility"],
    image: "/modern-calendar-app-interface.jpg",
    demoUrl: "#",
    figmaUrl: "#",
    githubUrl: "#",
    awards: ["Stanford Innovation Grant Recipient"],
    metrics: ["95% parsing accuracy", "500+ students using daily", "2 hours saved per student per quarter"],
    userQuote: {
      text: "I used to spend hours every quarter adding deadlines. Now it takes 2 minutes.",
      author: "Alex, Stanford CS Student",
    },
    decisionLog: [
      {
        title: "Preview before sync",
        description: "Early versions auto-synced immediately, causing trust issues.",
        outcome: "Added review step where users can edit before committing to their calendar.",
      },
      {
        title: "Multi-format support",
        description: "Syllabi come in PDF, Word, and even images of printed documents.",
        outcome: "Built OCR pipeline to handle all formats with 95% accuracy.",
      },
      {
        title: "What's next",
        description: "Add recurring event detection for weekly assignments and office hours.",
        outcome: "In development based on top user request.",
      },
    ],
  },
  {
    id: "collegeplan",
    title: "CollegePlan",
    subtitle: "AI Essay Platform (Acquired)",
    description: "Structured AI guidance that helped drive an acquisition.",
    fullDescription:
      "CollegePlan provides high school students with AI-powered guidance for college essays. Unlike generic chatbots, it uses a structured approach based on proven writing frameworks, helping students develop their own voice while meeting admission standards.",
    impact: {
      people: { level: "High" as const, evidence: "10,000+ students helped" },
      scale: { level: "High" as const, evidence: "Acquired by EduTech Corp" },
      craft: { level: "High" as const, evidence: "Rigorous A/B testing" },
    },
    tags: ["AI/ML", "Education", "Startup"],
    image: "/ai-essay-writing-platform-for-students.jpg",
    demoUrl: "#",
    figmaUrl: "#",
    githubUrl: "#",
    awards: ["TechCrunch Disrupt Finalist", "Acquired in 2024"],
    metrics: ["10K+ students served", "4.9/5 average rating", "Successful acquisition"],
    userQuote: {
      text: "It felt like having a writing coach available 24/7 who actually understood my story.",
      author: "Maria, College Freshman",
    },
    decisionLog: [
      {
        title: "Structured vs freeform",
        description: "Considered letting AI generate full essays but worried about authenticity.",
        outcome: "Created a guided framework that helps students develop ideas while maintaining their voice.",
      },
      {
        title: "Pricing model",
        description: "Tradeoff between accessibility and sustainability.",
        outcome: "Implemented freemium model: core features free, advanced feedback paid.",
      },
      {
        title: "Key to acquisition",
        description: "Strong user retention and word-of-mouth growth demonstrated product-market fit.",
        outcome: "Caught attention of major EdTech player looking to add AI capabilities.",
      },
    ],
  },
  {
    id: "finding-our-voice",
    title: "Finding Our Voice",
    subtitle: "Immigrant ESL",
    description: "Language support designed with and for newcomers.",
    fullDescription:
      "Finding Our Voice is a mobile app that helps recent immigrants practice English in realistic scenarios. Built through extensive co-design with immigrant communities, it focuses on practical language skills for everyday situations like grocery shopping, medical appointments, and job interviews.",
    impact: {
      people: { level: "Medium" as const, evidence: "100+ immigrants supported" },
      scale: { level: "Medium" as const, evidence: "Community partnership" },
      craft: { level: "High" as const, evidence: "Co-designed with users" },
    },
    tags: ["HCI", "Accessibility", "Social Impact"],
    image: "/esl-language-learning-app-for-immigrants.jpg",
    demoUrl: "#",
    figmaUrl: "#",
    githubUrl: "#",
    awards: ["Social Impact Design Award", "Community Choice Award"],
    metrics: ["100+ active learners", "70% improvement in confidence", "Partnership with 3 community centers"],
    userQuote: {
      text: "I can now talk to my children's teachers without feeling embarrassed about my English.",
      author: "Rosa, Recent Immigrant",
    },
    decisionLog: [
      {
        title: "Co-design approach",
        description: "Early versions were built based on assumptions about learner needs.",
        outcome: "Shifted to weekly co-design sessions with immigrant community members as equal partners.",
      },
      {
        title: "Scenario selection",
        description: "We thought job interviews were the top priority.",
        outcome: "Learned that medical appointments and parent-teacher conferences were more urgent needs.",
      },
      {
        title: "Future expansion",
        description: "Exploring multilingual support beyond Spanish speakers.",
        outcome: "Seeking funding to add Mandarin, Vietnamese, and Tagalog support.",
      },
    ],
  },
  {
    id: "maternal-health",
    title: "Maternal Health Tool",
    subtitle: "Offline & Multilingual",
    description: "Offline maternal health support for low-connectivity settings.",
    fullDescription:
      "This tool provides essential maternal health information to expectant mothers in areas with limited internet access. It works completely offline, supports multiple languages, and uses SMS as a fallback for critical alerts.",
    impact: {
      people: { level: "High" as const, evidence: "1,000+ mothers reached" },
      scale: { level: "Medium" as const, evidence: "Deployed in 3 regions" },
      craft: { level: "High" as const, evidence: "Field-tested design" },
    },
    tags: ["Accessibility", "Social Impact", "Mobile"],
    image: "/maternal-health-mobile-app-offline-multilingual.jpg",
    demoUrl: "#",
    figmaUrl: "#",
    githubUrl: "#",
    awards: ["Global Health Innovation Award"],
    metrics: ["1,000+ mothers supported", "Available in 5 languages", "Works fully offline"],
    userQuote: {
      text: "This app gave me information I couldn't get anywhere else in my village.",
      author: "Amara, New Mother",
    },
    decisionLog: [
      {
        title: "Offline-first architecture",
        description: "Initially designed for online use with offline fallback.",
        outcome: "Flipped to offline-first after field research showed connectivity was the exception, not the rule.",
      },
      {
        title: "SMS integration",
        description: "Debated whether SMS was worth the complexity and cost.",
        outcome: "Critical for appointment reminders and emergency alerts in zero-connectivity situations.",
      },
      {
        title: "Cultural adaptation",
        description: "Translation alone wasn't enough - needed cultural contextualization.",
        outcome: "Worked with local healthcare workers to adapt content for each region's cultural norms.",
      },
    ],
  },
]
