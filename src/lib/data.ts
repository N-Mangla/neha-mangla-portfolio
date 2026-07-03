import {
  Award,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Database,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Workflow,
} from "lucide-react";

export const profile = {
  name: "Neha Mangla",
  role: "Senior Full Stack Engineer",
  tagline: "React · TypeScript · Node.js · Python APIs · Enterprise SaaS",
  summary:
    "I build full-stack SaaS features across React, TypeScript, REST APIs, backend workflows, dashboards, calendar systems, and tested product experiences.",
  email: "nehamangla500@gmail.com",
  emailUrl:
    "https://mail.google.com/mail/?view=cm&fs=1&to=nehamangla500@gmail.com",
  github: "https://github.com/N-Mangla",
  linkedin: "https://www.linkedin.com/in/neha-mangla-abb161171",
};

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const highlights = [
  {
    label: "7+ Years",
    description: "Software engineering",
    icon: BriefcaseBusiness,
  },
  {
    label: "React + TS",
    description: "Frontend systems",
    icon: Code2,
  },
  {
    label: "Backend APIs",
    description: "Node.js · NestJS · Python",
    icon: Workflow,
  },
  {
    label: "90%+ Test Coverage",
    description: "Test-focused delivery",
    icon: TestTube2,
  },
];

export const featuredProject = {
  title: "Workforce Calendar UI Lab",
  eyebrow: "Featured public project",
  description:
    "A React + TypeScript calendar dashboard using safe mock roster data to demonstrate Day/Week/Month views, timezone-aware events, filters, API-driven loading/error states, reusable components, and tested transformation logic.",
  liveUrl: "https://workforce-calendar-ui-lab.vercel.app",
  githubUrl: "https://github.com/N-Mangla/workforce-calendar-ui-lab",
  stack: [
    "React",
    "TypeScript",
    "Vite",
    "React Query",
    "Zustand",
    "Tailwind CSS",
    "Vitest",
  ],
  outcomes: [
    "Built dense calendar views with readable event density and +X more interactions.",
    "Separated mock API models from UI calendar models through a testable transformation layer.",
    "Handled loading, retry, empty, and error states with reusable UI primitives.",
    "Designed event detail and day detail modals for workflow-heavy product UX.",
  ],
};

export const skillGroups = [
  {
    title: "Frontend",
    icon: Layers3,
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive UI",
    ],
  },
  {
    title: "State & API Layer",
    icon: Workflow,
    skills: [
      "React Query",
      "Zustand",
      "Redux",
      "REST APIs",
      "Async Workflows",
      "Caching Patterns",
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "NestJS", "Express.js", "Python", "MySQL", "MongoDB"],
  },
  {
    title: "Testing & Delivery",
    icon: ShieldCheck,
    skills: [
      "Vitest",
      "Jest",
      "React Testing Library",
      "Git",
      "GitHub",
      "Bitbucket",
      "Jira",
      "Azure DevOps",
    ],
  },
  {
    title: "AI-Assisted Engineering",
    icon: BrainCircuit,
    skills: [
      "Feature Implementation",
      "Debugging",
      "Refactoring",
      "Unit-Test Generation",
      "Documentation",
      "PR Review",
      "Code Optimisation",
    ],
  },
];

export const experiences = [
  {
    company: "GlobalLogic",
    role: "Associate Consultant",
    period: "Feb 2025 — Present",
    bullets: [
      "Build enterprise scheduling and workforce-management interfaces using React, TypeScript, reusable components, and API-driven state.",
      "Develop calendar-based workflows with data transformations, caching, refresh flows, and performance-aware UI patterns.",
      "Implemented and updated Python backend APIs, including response restructuring, payload optimisation, and access-controlled workflow support.",
      "Support 90%+ application test coverage through Vitest, Jest, PR reviews, and technical discussions.",
    ],
  },
  {
    company: "Lucida Technologies Pvt. Ltd.",
    role: "Software Developer",
    period: "Sep 2022 — Feb 2025",
    bullets: [
      "Delivered full-stack web applications using React, Node.js, and NestJS across customer-facing and internal workflows.",
      "Designed REST APIs, integrated frontend/backend services, and implemented authentication and role-based access control.",
      "Worked with MySQL and MongoDB for data modelling, query optimisation, and backend performance improvements.",
      "Mentored junior developers and supported production releases with maintainable engineering practices.",
    ],
  },
  {
    company: "Agami Technologies Pvt. Ltd.",
    role: "Software Specialist",
    period: "Mar 2019 — Sep 2022",
    bullets: [
      "Built responsive React interfaces and integrated REST APIs for client-focused web applications.",
      "Developed backend services using Node.js and improved API efficiency through focused data-flow enhancements.",
      "Optimised SQL queries and database interactions to improve application performance and reliability.",
      "Contributed to planning, technical discussions, deployment cycles, and cross-functional delivery.",
    ],
  },
];

export const projects = [
  {
    title: "Workforce Calendar UI Lab",
    description:
      "Public React + TypeScript demo focused on complex calendar workflows, mock API states, reusable components, and tested transformation logic.",
    stack: ["React", "TypeScript", "React Query", "Zustand", "Vitest"],
    href: "https://workforce-calendar-ui-lab.vercel.app",
    github: "https://github.com/N-Mangla/workforce-calendar-ui-lab",
  },
  {
    title: "Enterprise Scheduling Interfaces",
    description:
      "Professional work on workflow-heavy scheduling screens with calendar views, dynamic legends, caching, and permission-aware product interactions.",
    stack: ["React", "TypeScript", "React Query", "Zustand", "Vitest"],
    href: null,
    github: null,
  },
  {
    title: "Wellbeing Assessment Platform",
    description:
      "Full-stack assessment and administration workflows with REST APIs, relational persistence, and role-based access control.",
    stack: ["Angular", "NestJS", "MySQL", "RBAC"],
    href: null,
    github: null,
  },
  {
    title: "Client Retention & Loan Workflows",
    description:
      "Frontend and backend modules connecting responsive interfaces with API and database layers for customer retention and digital loan workflows.",
    stack: ["React", "Node.js", "MongoDB", "MySQL", "REST APIs"],
    href: null,
    github: null,
  },
];

export const certifications = [
  "Claude Code Certification — GlobalLogic, May 2026",
  "AI 101 Certification — GlobalLogic, May 2026",
  "5-Day AI Agents Intensive Course with Google — Dec 2025",
];

export const achievements = [
  {
    title: "Spotlight of the Month",
    description: "Recognised for technical ownership and impactful contributions.",
    icon: Award,
  },
  {
    title: "Star of the Department",
    description: "Recognised for technical excellence and consistent delivery quality.",
    icon: BadgeCheck,
  },
  {
    title: "AI-Assisted Engineering",
    description:
      "Uses AI tools across analysis, debugging, refactoring, tests, documentation, and PR review.",
    icon: Sparkles,
  },
];

export const education = {
  degree: "Bachelor of Technology in Computer Science and Engineering",
  university: "I.K. Gujral Punjab Technical University",
  period: "2015 — 2018",
  icon: GraduationCap,
};

export const socialActions = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Email", href: profile.emailUrl, icon: Mail },
];