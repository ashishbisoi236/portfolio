export const profile = {
  name: "Ashish Kumar Bisoi",
  firstName: "Ashish",
  title: "Software Development Engineer",
  roles: [
    "Software Development Engineer",
    "Full-Stack Developer",
    // "React Microfrontend Architect",
    "AI-Augmented Builder",
  ],
  tagline: "I build large-scale web applications end to end — from React frontends to backend services and APIs — that people actually enjoy using.",
  summary:
    "Generalist software engineer with 4+ years of experience building products end to end — frontend-leaning but comfortable across the stack. I craft microfrontends, complex enterprise workflows, and analytics dashboards, plus the Python/FastAPI and Node services behind them, increasingly leveraging AI to ship faster. I care about clean architecture, thoughtful UX, and reliable software backed by tests.",
  location: "Mumbai, India",
  email: "ashishbisoi236@gmail.com",
  links: {
    github: "https://github.com/ashishbisoi236",
    linkedin: "https://linkedin.com/in/ashishbisoi",
    email: "mailto:ashishbisoi236@gmail.com",
    resume: "/resume.pdf",
  },
};

export const stats = [
  { value: "4+", label: "Years of experience" },
  { value: "3", label: "Product companies" },
  { value: "21%", label: "Peak CTR uplift shipped" },
  { value: "1.2M+", label: "Users reached" },
];

export const experiences = [
  {
    company: "Fynd",
    role: "Software Development Engineer",
    period: "Aug 2024 — Present",
    location: "Mumbai, Maharashtra",
    current: true,
    accent: "coral",
    summary:
      "Building the Impetus platform with React microfrontends — owning complex supply-chain workflows used by 30–40k store users end to end.",
    highlights: [
      "Partnered with UX and PMs to revamp the Central Masters Tool and Analytics screens, lifting click-through by 21%.",
      "Designed end-to-end Late Delivery workflows with dynamic UI rendering, conditional validation, and API-driven escalation & approval paths.",
      "Built a robust Maker-Checker workflow with real-time validation, state management, and role-specific access for audit-compliant processes.",
      "Developed Bulk Upload to onboard large team datasets with error handling, preview validation, and confirmation steps.",
      "Built backend services and APIs with Node/Express and Python/FastAPI to power workflow automation and data endpoints consumed by the React microfrontends.",
      "Integrated RBAC across the application, controlling module, screen, and action visibility per user role.",
      "Created a Supplier Code Selection workflow with cookie-based cross-session persistence and routing integration.",
      "Adopted AI-assisted workflows (Claude Code) for scaffolding, refactoring, and test generation — cutting time-to-ship on routine feature work.",
      "Wrote and maintained extensive unit and integration tests, and tracked usage via MS Clarity to guide the roadmap.",
    ],
    tech: ["ReactJS", "JavaScript", "NodeJS", "Express", "VueJS", "Python", "FastAPI", "Kafka"],
  },
  {
    company: "Disprz",
    role: "Software Engineer",
    period: "Jun 2023 — Apr 2024",
    location: "Chennai, Tamil Nadu",
    accent: "plum",
    summary:
      "Worked on the LXP platform microfrontends used by end consumers to create and consume surveys and feedback.",
    highlights: [
      "Rebuilt Feedback Creation and Analytics screens with UX and PMs, raising click-through by 10%.",
      "Added Content Reporting support for Modules and Artefacts on the Search Results page.",
      "Built the Skills Dashboard surfacing results after a user completes their learning journey.",
      "Added test coverage for new features with react-testing-library and tracked usage via Google Analytics.",
    ],
    tech: ["ReactJS", "JavaScript", ".NET Core"],
  },
  {
    company: "Mindbody",
    role: "Associate Software Engineer",
    period: "Jul 2021 — Nov 2022",
    location: "Pune, Maharashtra",
    accent: "olive",
    summary:
      "Built the Mindbody B2C app — used by 1.2M+ consumers to book appointments and classes at fitness establishments.",
    highlights: [
      "Redesigned the app home screen with the Design team around current market trends, boosting click-through by 15%.",
      "Added Liability Waiver support for Family Accounts.",
      "Built Review Summary endpoints for fitness studios and classes.",
      "Drove experimentation via Pendo and Optimizely so PMs could test across user groups.",
    ],
    tech: ["ReactJS", "JavaScript", "Swift", "UIKit"],
  },
];

export const skillGroups = [
  {
    label: "Languages",
    accent: "plum",
    note: "what I think in",
    items: ["JavaScript", "TypeScript", "Python", "C#", "C++"],
  },
  {
    label: "Libraries & Frameworks",
    accent: "olive",
    note: "where I move fastest",
    items: ["React", "React Testing Library", "Jest", "Vue.js", "Node.js", "Express", "FastAPI", ".NET Core"],
  },
  {
    label: "Concepts",
    accent: "amber",
    note: "how I reason about systems",
    items: ["Microfrontends", "AI-Assisted Development", "RBAC & Multi-tenancy", "Event-driven architecture", "BFF pattern", "Data Structures", "Algorithms", "DBMS"],
  },
  {
    label: "Tools & Platforms",
    accent: "teal",
    note: "the daily workbench",
    items: ["Git", "Docker", "VS Code", "Postman", "PostgreSQL", "MongoDB", "Kafka", "Temporal", "MS Clarity", "Sentry", "Claude Code"],
  },
];

export const education = [
  {
    school: "Army Institute of Technology",
    detail: "Bachelor of Engineering, Information Technology",
    meta: "CGPA 9.25",
    location: "Pune, Maharashtra",
    period: "Jul 2017 — Jun 2021",
  },
  {
    school: "Army Public School",
    detail: "Class XII (CBSE)",
    meta: "89%",
    location: "Jammu, J&K",
    period: "2015 — 2016",
  },
];
