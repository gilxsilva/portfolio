export const siteData = {
  name: 'Gil Silva',
  taglineEs: 'Ingeniero y diseñador.',
  taglineEn: 'Engineer and designer building technology that empowers people.',
  availability: 'Available for Summer 2026',

  links: {
    linkedin: 'https://linkedin.com/in/gilxsilva',
    email: 'gscgilbertosilva@gmail.com',
    resume: '/resume.pdf',
  },

  about: {
    paragraphs: [
      'I grew up in Guadalajara, México, and came to the U.S. as a first-generation student — carrying two languages, two cultures, and a conviction that technology should work for everyone, not just the people who build it.',
      'At Stanford, I study Symbolic Systems and HCI because the hardest problems sit at the intersection of how minds work and how systems are designed. My coursework spans AI, cognitive science, linguistics, and human-computer interaction — and I bring all of it to whatever I build.',
      "I've shipped production code at Amazon twice, co-founded an English-learning program that still runs at Mission High, and built tools for rural communities in the Philippines. The throughline isn't any specific technology — it's engineering with people, not just for them.",
    ],
    highlights: [
      { value: '2×', label: 'Amazon SDE Intern' },
      { value: '6+', label: 'Projects shipped' },
      { value: '$10K', label: 'Grant awarded' },
      { value: 'EN · ES · IT', label: 'Languages' },
    ],
  },

  experience: {
    featured: [
      {
        company: 'Amazon',
        role: 'SDE Intern — Flex Assignment Team',
        period: 'Summer 2025',
        description:
          "Shipped features for the Flex Assignment Team within Amazon's Last Mile delivery network, improving driver-assignment algorithms deployed globally across Amazon Flex.",
        tags: ['Java', 'AWS', 'Distributed Systems'],
      },
      {
        company: 'Amazon',
        role: 'SDE Intern — Stops Team',
        period: 'Summer 2024',
        description:
          "Designed and deployed features for the Stops Team, improving routing and stop-sequencing for Amazon's last-mile delivery at scale.",
        tags: ['Java', 'AWS', 'APIs'],
      },
      {
        company: 'CollegePlan',
        role: 'Product Engineering Intern',
        period: '2023',
        description:
          'First engineering intern. Built the AI essay-coaching platform end-to-end — model integration, UI, and product systems. Growth contributed to acquisition by New Oriental Education.',
        tags: ['React', 'Node.js', 'AI', 'EdTech'],
        note: 'Acquired by New Oriental Education',
      },
    ],
    earlier: [
      {
        company: '826 Valencia',
        role: 'Published Writer & Youth Mentor',
        period: '2020–2022',
      },
      {
        company: 'Juma Ventures',
        role: 'Youth Worker',
        period: '2021–2022',
      },
      {
        company: 'SFUSD',
        role: 'Entrepreneur Fellow',
        period: '2022',
      },
    ],
  },

  projects: [
    {
      id: 'kyro',
      title: 'Kyro',
      tag: 'HCI · Product',
      description:
        'Emotional scheduling app using voice AI. Plan by energy, not just time.',
      detail:
        'Prototyped an AI scheduling system that interprets emotional state and energy levels — not just calendar slots. Built for people who think in feelings, not blocks.',
      year: '2025',
      award: 'Best Concept & Most Novel Product — Stanford CS147',
      context: 'Stanford CS147',
    },
    {
      id: 'maternal-health',
      title: 'AI Maternal Health Tool',
      tag: 'Global Health · AI',
      description:
        'Offline-capable triage and multilingual chatbot targeting postpartum hemorrhage in rural Philippines.',
      detail:
        'Supports English, Tagalog, and Bisaya. Designed for community health workers in areas with limited connectivity. Built with VSee for Stanford CS+Social Good.',
      year: '2025',
      context: 'Stanford CS+Social Good × VSee',
    },
    {
      id: 'finding-our-voice',
      title: 'Finding Our Voice',
      tag: 'Community · EdTech',
      description:
        'Co-founded English-learning program for 30+ newcomer immigrant students at Mission High. $10K grant.',
      detail:
        'Started as a high school senior noticing that newly arrived students had no space to practice English outside the classroom. Built from scratch: curriculum, partnerships, volunteer training.',
      year: '2022–present',
      context: 'Mission High School, San Francisco',
    },
    {
      id: 'operation-lone-star',
      title: 'Operation Lone Star Hub',
      tag: 'Civic Tech · Legal',
      description:
        'Digital advocacy platform built from a Stanford border-law course.',
      detail:
        'Translated legal research on Operation Lone Star into a usable resource for advocates, journalists, and affected communities.',
      year: '2025',
      context: 'Stanford Law Course Project',
    },
    {
      id: 'astronerds',
      title: 'AstroNerds',
      tag: 'EdTech · Research',
      description:
        'Research + AI math chatbot studying peer vs. instructor learning models.',
      detail:
        'Investigated whether peer-led AI tutoring produces better learning outcomes than instructor-led models. Built and tested a math chatbot to run the experiment.',
      year: '2024',
      context: 'Stanford Research Project',
    },
    {
      id: 'deserver-art',
      title: 'Deserver Art',
      tag: 'Nonprofit · Product',
      description:
        'Platform paying high school artists fairly. Presented at NNTE Bay Area.',
      detail:
        'Connects buyers with young artists from underserved schools, ensuring fair compensation and professional exposure.',
      year: '2022',
      context: 'NNTE Bay Area',
    },
  ],

  skills: {
    engineering: [
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Java',
      'Python',
      'AWS',
      'REST APIs',
      'Full-Stack Web',
    ],
    design: [
      'Figma',
      'Prototyping',
      'User Research',
      'Usability Testing',
      'HCI',
      'Information Architecture',
      'Accessibility (WCAG)',
    ],
    context: [
      'Product Thinking',
      'AI / LLMs',
      'EdTech',
      'Community Organizing',
      'English',
      'Spanish',
      'Italian',
    ],
  },

  contact: {
    headingEs: 'Hablemos.',
    subheading: "Let's build something that matters.",
    email: 'gscgilbertosilva@gmail.com',
    linkedinHandle: 'linkedin.com/in/gilxsilva',
    linkedinUrl: 'https://linkedin.com/in/gilxsilva',
    closingLine: 'Based in the Bay Area. Open to remote.',
  },
};
