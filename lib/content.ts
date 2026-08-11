import type { NavLink, SkillGroup, Project, ContactChannel } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "#home", path: "home" },
  { label: "Sobre mí", href: "#about", path: "about-me" },
  { label: "Habilidades", href: "#skills", path: "skills" },
  { label: "Proyectos", href: "#projects", path: "projects" },
  { label: "Contacto", href: "#contact", path: "contact" },
];

export const skillGroups: SkillGroup[] = [
  {
    icon: "code",
    title: "Lenguajes",
    items: ["JS (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL"],
  },
  {
    icon: "layers",
    title: "Frameworks",
    items: ["React", "Next.js", "Tailwind CSS", "Redux", "Context API"],
  },
  {
    icon: "wrench",
    title: "Herramientas",
    items: ["Git & GitHub", "Vite", "Postman", "Figma", "Scrum"],
  },
];

export const projects: Project[] = [
  {
    id: "windbnb",
    title: "Windbnb",
    description:
      "Una aplicación de búsqueda de alojamientos inspirada en Airbnb, construida con enfoque en el rendimiento y una interfaz de usuario fluida.",
    image: "/images/projects/windbnb.jpg",
    imageAlt:
      "Captura de pantalla de Windbnb, una aplicación de reservas de alojamiento con diseño minimalista en modo oscuro.",
    tags: ["Vanilla JS", "Vite", "Tailwind", "Vercel"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: "moodbeats",
    title: "Moodbeats",
    description:
      "Plataforma de recomendación musical basada en estados de ánimo, integrando múltiples APIs REST para ofrecer una experiencia auditiva personalizada.",
    image: "/images/projects/moodbeats.jpg",
    imageAlt:
      "Captura de pantalla de Moodbeats, una interfaz de streaming de música en modo oscuro con visualizaciones de datos.",
    tags: ["JavaScript", "REST APIs", "CSS3"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: "sleepoutside",
    title: "SleepOutside",
    description:
      'Una aplicación de comercio electrónico robusta para equipamiento de exteriores. Diseñada con un enfoque "Mobile First", utilizando CSS Grid y Flexbox para layouts complejos y responsive.',
    image: "/images/projects/sleepoutside.jpg",
    imageAlt:
      "Captura de pantalla de SleepOutside, una tienda en línea de equipamiento de camping con diseño oscuro de alto contraste.",
    tags: ["HTML5", "CSS Grid/Flexbox", "JavaScript", "Git"],
    demoUrl: "#",
    codeUrl: "#",
    featured: true,
  },
];

export const contactChannels: ContactChannel[] = [
  { icon: "mail", label: "contacto@raulmoroni.com", href: "mailto:contacto@raulmoroni.com" },
  { icon: "briefcase", label: "LinkedIn Profile", href: "#" },
  { icon: "code", label: "GitHub Repositories", href: "#" },
];
