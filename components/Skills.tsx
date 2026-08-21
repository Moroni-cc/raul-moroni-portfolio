"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Layers, Wrench, Terminal, Cpu, type LucideIcon } from "lucide-react";
import { skillGroups } from "@/lib/content";
import type { SkillGroup } from "@/types";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const ICONS: Record<SkillGroup["icon"], LucideIcon> = {
  code: Code2,
  layers: Layers,
  wrench: Wrench,
};

function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  const Icon = ICONS[group.icon] || Terminal;

  return (
    <div
      data-skill-card
      className="crimson-glow-card p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden h-full"
    >
      {/* Ambient hover gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-white/10 flex items-center justify-center text-primary group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300 shadow-[0_0_15px_rgba(255,77,90,0.1)]">
            <Icon size={24} strokeWidth={2} aria-hidden="true" />
          </div>
          <span className="font-label text-xs text-on-surface-variant/40 group-hover:text-primary transition-colors">
            0{index + 1}
          </span>
        </div>

        <h3 className="font-display text-2xl text-on-surface mb-3 font-semibold group-hover:text-primary transition-colors">
          {group.title}
        </h3>

        <p className="text-xs text-on-surface-variant/70 mb-6 font-body">
          {index === 0 && "Bases robustas de programación web, tipado estricto y estándares modernos."}
          {index === 1 && "Arquitecturas reactivas, renderizado optimizado y estilizado atómico."}
          {index === 2 && "Flujos de trabajo ágiles, control de versiones e ingeniería de software."}
        </p>
      </div>

      <ul className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
        {group.items.map((item) => (
          <li
            key={item}
            className="px-3 py-1.5 bg-surface-container rounded-md text-on-surface-variant font-label text-xs border border-white/5 group-hover:border-primary/20 group-hover:text-on-surface transition-all duration-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      // Header entrance
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

      // Cards staggered entrance with ScrollTrigger
      const cards = cardsContainerRef.current?.querySelectorAll("[data-skill-card]");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.18,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section id="skills" ref={sectionRef} className="py-[120px] relative border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
        <div ref={headerRef} className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container border border-white/10 mb-4">
            <Cpu size={14} className="text-primary" />
            <span className="font-label text-xs text-primary uppercase tracking-[0.2em] font-semibold">
              Stack & Habilidades
            </span>
          </div>

          <h2 className="text-[2.5rem] lg:text-[4rem] font-bold font-display text-on-surface tracking-tight">
            Tecnologías de <span className="text-gradient-crimson italic">Alto Nivel</span>
          </h2>
          <p className="text-base text-on-surface-variant/80 max-w-xl mt-2">
            Herramientas y tecnologías seleccionadas para ofrecer velocidad, escalabilidad y calidad de código.
          </p>
        </div>

        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
