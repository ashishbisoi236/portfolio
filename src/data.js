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
    "Generalist software engineer with 4+ years of experience building products end to end — frontend-leaning but comfortable across the stack. I craft React microfrontends, mobile PWAs and complex enterprise workflows, plus the Python/FastAPI and Node services behind them, increasingly leveraging AI to ship faster. I care about clean architecture, thoughtful UX, and reliable software backed by tests.",
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
    summary:
      "Building the Impetus / StoreOps platform with React microfrontends and a mobile PWA — owning complex retail workflows used daily by 30–40k store users across Reliance Retail.",
    highlights: [
      "Partnered with UX and PMs to revamp the Central Masters Tool and Analytics screens, lifting click-through by 21%.",
      "Designed end-to-end Late Delivery and Maker-Checker workflows with dynamic UI rendering, conditional validation, real-time state, and role-specific access for audit-compliant processes.",
      "Shipped the Size Finder feature end-to-end — a barcode-scan PWA page on the mobile app, backed by a FastAPI BFF that orchestrates 3 external Fynd platform APIs concurrently with GraphQL store resolution and graceful degradation.",
      "Built the Sales KPI dashboard and Inventory Validation flow on the store-staff PWA, plus the Reports Dump, Assignment Audit, and configurable survey-question features on the admin web.",
      "Built backend services and APIs with Python/FastAPI and Node/Express — including the cross-cutting Functions feature (multi-tenant Postgres + Mongo schema, RBAC for function-admins, task-list filtering).",
      "Integrated RBAC across the application controlling module, screen, and action visibility per user role; safely rolled out role-rename and role-slug changes across FE/BE.",
      "Drove the team's AI-augmented workflow with Claude Code — scaffolding, refactoring, AI-aided unit tests, and a new FE↔BE integration loop using .md API contracts.",
      "Set up FE coding standards, contributed to the shared Gends design-system repo, onboarded new joiners, and drove Harbor vulnerability fixes documented in a team-wide runbook.",
      "Added Temporal OpenTelemetry tracing and Sentry alerting across services, and backed the mobile PWA with extensive Jest and React Testing Library unit tests for reliable CI.",
    ],
    tech: ["ReactJS", "TypeScript", "JavaScript", "NodeJS", "Express", "Python", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "Kafka", "Temporal"],
  },
  {
    company: "Disprz",
    role: "Software Engineer",
    period: "Jun 2023 — Apr 2024",
    location: "Chennai, Tamil Nadu",
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

export const projects = [
  {
    title: "FlashBack",
    blurb: "A social platform for sharing memorable events.",
    description:
      "Social media app where users post interesting events and can like, edit, delete, and search posts by tags and titles.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    accent: "violet",
  },
  {
    title: "YouTube Clone",
    blurb: "Search and stream any video or channel.",
    description:
      "Search videos and channels through RapidAPI endpoints, with playback and live channel statistics like subscriber and like counts.",
    tech: ["React", "JavaScript", "RapidAPI", "Material UI"],
    accent: "cyan",
  },
  {
    title: "URL Shortener",
    blurb: "Fast, resilient link shortening service.",
    description:
      "ASP.NET Core service that shortens URLs with a robust fallback route handling unmatched requests and redirecting users to the right long URL.",
    tech: [".NET Core", "C#", "SQLite"],
    accent: "amber",
  },
  {
    title: "Blog API",
    blurb: "A clean REST API for users and blogs.",
    description:
      "Node.js REST server supporting full CRUD on users and blogs, with login credential encryption via bcryptjs.",
    tech: ["Node.js", "Express", "MongoDB"],
    accent: "emerald",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C#", "C++"],
  },
  {
    label: "Libraries & Frameworks",
    items: ["React", "React Testing Library", "Jest", "Vue.js", "Node.js", "Express", "FastAPI", ".NET Core"],
  },
  {
    label: "Concepts",
    items: ["Microfrontends", "AI-Assisted Development", "RBAC & Multi-tenancy", "Event-driven architecture", "BFF pattern", "Data Structures", "Algorithms", "DBMS"],
  },
  {
    label: "Tools & Platforms",
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
