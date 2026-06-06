import { SkillGroup } from "../types";

export const preferredStack = [
  { name: "Next.js", icon: "/resources/icons/nextjs.svg" },
  { name: "Tailwind", icon: "/resources/icons/tailwindcss.svg" },
  { name: "TypeScript", icon: "/resources/icons/typescript.svg" },
  { name: "NestJS", icon: "/resources/icons/NestJs.png" },
  { name: "PostgreSQL", icon: "/resources/icons/postgres.png" }
];

export const skillsData: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    colSpan: 2,
    type: "tags",
    skills: ["REACT / NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "REDUX / ZUSTAND / TANSTACK QUERY", "MUI / SHADCN UI"],
    hoverVariant: "primary",
  },
  {
    id: "backend",
    title: "Core Backend",
    colSpan: 2,
    type: "tags",
    skills: ["NEST.JS / DJANGO / LARAVEL / .NET CORE", "TYPEORM / ENTITY FRAMEWORK", "JWT", "POSTGRESQL /MYSQL / SQLSERVER", "DOCKER"],
    hoverVariant: "secondary",
  },
  {
    id: "concepts",
    title: "Concepts & Architectures",
    colSpan: 2,
    type: "tags",
    skills: ["CLEAN ARCHITECTURE", "MVC", "MVVM", "MICROSERVICES", "SOLID PRINCIPLES", "DESIGN PATTERNS"],
    hoverVariant: "primary",
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    colSpan: 2,
    type: "badges",
    skills: ["GIT|/resources/icons/git.svg", "GITHUB|/resources/icons/github.svg", "GITLAB|/resources/icons/gitlab.png", "POSTMAN|/resources/icons/postman.svg", "FIGMA|/resources/icons/figma.svg", "JIRA|/resources/icons/jira.svg", "AZURE DEVOPS|/resources/icons/AzureDevops.png"],
  },
  {
    id: "desktop",
    title: "Desktop",
    colSpan: 1,
    type: "bullets",
    skills: ["Electron.js", "WPF", "Winforms"]
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    colSpan: 3,
    type: "badges",
    description:
      "Building intelligent agents using OpenAI API, LangChain, and fine-tuning models for domain-specific applications.",
    skills: ["MODEL FINE-TUNING|auto_awesome", "NLP|psychology", "COMPUTER VISION|visibility", "AGENTS|smart_toy", "PYTORCH|language"],
  },
];

