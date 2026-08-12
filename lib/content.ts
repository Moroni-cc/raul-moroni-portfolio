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
    id: "SGH-funval",
    title: "SGH-funval",
    description:
      'Plataforma de gestión académica con dashboards para estudiantes y administradores. Registro de horas, gestión de cursos, reportes y estadísticas.',
    image: "/images/projects/SGH-funval.jpg",
    imageAlt:
      "Dashboard de SGH-funval",
    tags: ["React 19", "Vite", "Tailwind CSS", "React Router DOM", "Axios", "Lucide React"],
    demoUrl: "#",
    codeUrl: "#",
    featured: true,
  },
];

export const contactChannels: ContactChannel[] = [
  { icon: "mail", label: "raulmoronicapchacadillo@gmail.com", href: "mailto:raulmoronicapchacadillo@gmail.com" },
  { icon: "briefcase", label: "LinkedIn Profile", href: "https://www.linkedin.com/in/ra%C3%BAl-moroni-capcha-cadillo-659a41341/" },
  { icon: "code", label: "GitHub Repositories", href: "https://github.com/Moroni-cc" },
];
