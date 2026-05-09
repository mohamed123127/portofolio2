export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  href: string;
}

export interface TimelineEntry {
  period: string;
  title: string;
  company: string;
  description: string;
  side: "left" | "right";
  dotColor: string; // Tailwind class e.g. "bg-secondary"
  hoverBorder: string; // Tailwind class e.g. "group-hover:border-secondary/30"
}

export interface Certification {
  title: string;
  issuer: string;
  issued: string;
  icon: string;
  iconColor: string;
  gradientFrom: string;
  gradientTo: string;
  glowColor: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  icon?: string;
  colSpan: number;
  skills: string[];
  hoverVariant?: "primary" | "secondary";
  type: "tags" | "bullets" | "badges";
  description?: string;
}
