import Image from "next/image";
import { Eye, Code2, ArrowRight } from "lucide-react";
import { projects } from "@/lib/content";
import type { Project } from "@/types";

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="mt-auto flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-2 py-1 text-xs font-label text-outline uppercase border border-outline-variant/30 rounded bg-surface-container-low"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function HoverActions({ project }: { project: Project }) {
  return (
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
      {project.demoUrl && (
        <a
          href={project.demoUrl}
          title="Demo en vivo"
          className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary hover:scale-110 transition-transform shadow-[0_0_15px_rgba(139,13,26,0.6)]"
        >
          <Eye size={20} aria-hidden="true" />
          <span className="sr-only">Ver demo en vivo de {project.title}</span>
        </a>
      )}
      {project.codeUrl && (
        <a
          href={project.codeUrl}
          title="Código fuente"
          className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-on-surface border border-white/20 hover:scale-110 transition-transform hover:bg-white/10"
        >
          <Code2 size={20} aria-hidden="true" />
          <span className="sr-only">Ver código fuente de {project.title}</span>
        </a>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col bg-surface rounded-xl overflow-hidden border border-white/5 transition-colors duration-500 hover:border-primary">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-surface to-surface opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />
      <div className="relative z-10 p-8 flex-grow flex flex-col">
        <div className="w-full aspect-video mb-4 overflow-hidden rounded-lg bg-surface-container-highest relative">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <HoverActions project={project} />
        </div>
        <h3 className="font-display text-2xl text-on-surface mb-2">{project.title}</h3>
        <p className="text-base text-on-surface-variant line-clamp-2 mb-4">
          {project.description}
        </p>
        <TagList tags={project.tags} />
      </div>
    </article>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col md:flex-row bg-surface rounded-xl overflow-hidden border border-white/5 transition-colors duration-500 hover:border-primary shadow-lg">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-primary/5 via-surface to-surface opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />
      <div className="w-full md:w-1/2 aspect-video md:aspect-auto overflow-hidden relative z-10 bg-surface-container-highest">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="relative z-10 p-12 flex-grow flex flex-col justify-center w-full md:w-1/2">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-3xl text-on-surface">{project.title}</h3>
          <div className="flex gap-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                title="Demo en vivo"
                className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface border border-white/10 hover:bg-primary hover:text-on-primary transition-colors hover:border-transparent"
              >
                <Eye size={16} aria-hidden="true" />
                <span className="sr-only">Ver demo en vivo de {project.title}</span>
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                title="Código fuente"
                className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface border border-white/10 hover:bg-surface-bright transition-colors"
              >
                <Code2 size={16} aria-hidden="true" />
                <span className="sr-only">Ver código fuente de {project.title}</span>
              </a>
            )}
          </div>
        </div>
        <p className="text-lg leading-relaxed text-on-surface-variant mb-4">
          {project.description}
        </p>
        <TagList tags={project.tags} />
      </div>
    </article>
  );
}

export default function Projects() {
  const standard = projects.filter((p) => !p.featured);
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-[120px] bg-surface-container-lowest">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="font-label text-xs text-primary uppercase tracking-[0.2em] mb-4 block">
              Portafolio
            </span>
            <h2 className="text-[2.5rem] lg:text-[4rem] font-bold font-display text-on-surface">
              Proyectos Destacados
            </h2>
          </div>
          <a
            href="#"
            className="font-label text-xs text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 group"
          >
            Ver todos los proyectos
            <ArrowRight
              size={14}
              className="transform group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {standard.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {featured.length > 0 && (
          <div className="mt-12 flex flex-col gap-12">
            {featured.map((project) => (
              <FeaturedProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
