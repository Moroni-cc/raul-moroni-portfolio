"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, Sparkles, FolderGit2 } from "lucide-react";
import { projects } from "@/lib/content";
import type { Project } from "@/types";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 pt-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-2.5 py-1 text-[11px] font-label text-on-surface-variant uppercase border border-white/5 rounded bg-surface-container hover:border-primary/40 hover:text-primary transition-colors"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectActions({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-3">
      {project.demoUrl && (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={`Ver demo en vivo de ${project.title}`}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-primary-container text-on-surface font-label text-xs uppercase tracking-wider hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-[0_0_15px_rgba(155,17,30,0.3)]"
        >
          <span>Demo</span>
          <ExternalLink size={13} aria-hidden="true" />
        </a>
      )}
      {project.codeUrl && (
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={`Ver código de ${project.title}`}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-surface-container border border-white/10 text-on-surface font-label text-xs uppercase tracking-wider hover:border-primary/40 hover:bg-surface-container-high transition-colors"
        >
          <Github size={13} aria-hidden="true" />
          <span>Código</span>
        </a>
      )}
    </div>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <article
      data-project-item
      className="group relative flex flex-col lg:flex-row bg-surface-container-low/90 rounded-2xl overflow-hidden border border-primary/30 transition-all duration-500 hover:border-primary shadow-[0_10px_40px_rgba(155,17,30,0.15)]"
    >
      <div className="w-full lg:w-3/5 aspect-video lg:aspect-auto min-h-[320px] overflow-hidden relative bg-surface-container-highest">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover transform group-hover:scale-105 transition-transform duration-700 filter contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background/90 via-transparent to-transparent z-10 pointer-events-none" />
        
        {/* Featured Tag Badge */}
        <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-on-primary font-label text-[10px] uppercase tracking-widest font-bold shadow-lg">
          <Sparkles size={12} />
          Destacado
        </div>
      </div>

      <div className="relative z-20 p-8 lg:p-12 flex-grow flex flex-col justify-between w-full lg:w-2/5 gap-6">
        <div>
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="font-label text-xs text-primary tracking-widest uppercase">
              Web Application
            </span>
          </div>
          <h3 className="font-display text-2xl lg:text-3xl text-on-surface font-bold mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm lg:text-base leading-relaxed text-on-surface-variant mb-4">
            {project.description}
          </p>
          <TagList tags={project.tags} />
        </div>

        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
          <ProjectActions project={project} />
          <span className="font-label text-[10px] text-on-surface-variant/40 uppercase tracking-widest">
            Production Ready
          </span>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      data-project-item
      className="group relative flex flex-col crimson-glow-card rounded-2xl overflow-hidden h-full justify-between"
    >
      <div className="p-6 pb-0">
        <div className="w-full aspect-video mb-5 overflow-hidden rounded-xl bg-surface-container-highest relative border border-white/5">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 pointer-events-none" />
        </div>

        <h3 className="font-display text-2xl text-on-surface mb-2 font-semibold group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-on-surface-variant line-clamp-3 mb-4 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="p-6 pt-0 flex flex-col gap-4">
        <TagList tags={project.tags} />
        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
          <ProjectActions project={project} />
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const featured = projects.filter((p) => p.featured);
  const standard = projects.filter((p) => !p.featured);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      // Header Animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Projects Fade + Slide with ScrollTrigger
      const items = containerRef.current?.querySelectorAll("[data-project-item]");
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 50, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section id="projects" ref={sectionRef} className="py-[120px] bg-surface-container-lowest relative border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
        
        {/* Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-white/10 mb-4">
              <FolderGit2 size={14} className="text-primary" />
              <span className="font-label text-xs text-primary uppercase tracking-[0.2em] font-semibold">
                Portafolio Seleccionado
              </span>
            </div>
            <h2 className="text-[2.5rem] lg:text-[4rem] font-bold font-display text-on-surface tracking-tight">
              Proyectos <span className="text-gradient-crimson italic">Destacados</span>
            </h2>
          </div>

          <p className="text-sm text-on-surface-variant/80 max-w-sm">
            Soluciones web completas creadas con estándares de ingeniería, alto desempeño y experiencia interactiva.
          </p>
        </div>

        {/* Project Container */}
        <div ref={containerRef} className="flex flex-col gap-10">
          {/* Featured items first */}
          {featured.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}

          {/* Standard items in grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {standard.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
