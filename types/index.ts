export interface NavLink {
  label: string;
  href: string;
  path: string;
}

export interface SkillGroup {
  icon: "code" | "layers" | "wrench";
  title: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  featured?: boolean;
}

export interface ContactChannel {
  icon: "mail" | "briefcase" | "code";
  label: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
