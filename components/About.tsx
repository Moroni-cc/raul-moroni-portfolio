"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, GraduationCap, Award } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const cardContentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      // Animate Image on Scroll
      gsap.fromTo(
        imageContainerRef.current,
        { opacity: 0, x: -50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate Narrative Card on Scroll
      gsap.fromTo(
        cardContentRef.current,
        { opacity: 0, x: 50, y: 30 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-[120px] bg-surface-container-lowest relative overflow-hidden border-b border-white/5"
    >
      {/* Background ambient spotlight */}
      <div
        className="absolute top-1/2 right-0 w-[45vw] h-[45vw] bg-primary-container/15 blur-[140px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-5 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Image with Crimson Accent Frame */}
          <div ref={imageContainerRef} className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-primary" />
              <span className="font-label text-xs uppercase tracking-[0.25em] text-primary font-semibold">
                Sobre mí
              </span>
            </div>

            <div className="relative group rounded-xl p-1 bg-gradient-to-b from-primary/30 via-white/5 to-transparent shadow-[0_0_30px_rgba(155,17,30,0.15)]">
              <div className="w-full aspect-[4/5] bg-surface-container rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent z-10 opacity-70" />
                <Image
                  src="/images/about-workspace.png"
                  alt="Espacio de trabajo minimalista de Raúl Moroni"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-105"
                />
                
                {/* Floating badge inside image */}
                <div className="absolute bottom-4 left-4 right-4 z-20 p-3 rounded-lg bg-surface-container-low/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-primary" />
                    <span className="font-label text-[11px] uppercase tracking-wider text-on-surface">
                      Crafting Digital Experiences
                    </span>
                  </div>
                  <span className="font-label text-[10px] text-primary">PERÚ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative Card */}
          <div
            ref={cardContentRef}
            className="md:col-span-7 flex flex-col gap-5 bg-surface-container/70 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-white/5 md:-ml-8 relative z-20 shadow-2xl hover:border-primary/30 transition-all duration-500"
          >
            <h3 className="font-display text-2xl lg:text-3xl text-on-surface font-bold leading-tight">
              Ingeniería frontend enfocada en el{" "}
              <span className="text-gradient-crimson italic">detalle y rendimiento</span>.
            </h3>

            <p className="text-base lg:text-lg leading-relaxed text-on-surface-variant">
              Mi objetivo es trascender el código básico creando aplicaciones web que combinan una 
              <strong className="text-on-surface font-medium"> estética refinada</strong> con una 
              <strong className="text-on-surface font-medium"> arquitectura robusta</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
              <div className="p-4 rounded-xl bg-surface-container-high/60 border border-white/5 flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-primary font-label text-xs uppercase tracking-wider">
                  <GraduationCap size={16} />
                  <span>BYU-Pathway Worldwide</span>
                </div>
                <p className="text-xs text-on-surface-variant/80">
                  Fundamentos avanzados de Ciencias de la Computación y desarrollo internacional.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-high/60 border border-white/5 flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-primary font-label text-xs uppercase tracking-wider">
                  <Award size={16} />
                  <span>Fundación Funval</span>
                </div>
                <p className="text-xs text-on-surface-variant/80">
                  Especialización intensiva en desarrollo Frontend moderno con React y Next.js.
                </p>
              </div>
            </div>

            <p className="text-sm lg:text-base leading-relaxed text-on-surface-variant/75">
              Me enfoco en código limpio, componentes escalables, micro-animaciones fluidas con GSAP 
              y accesibilidad de primer nivel para que la experiencia del usuario sea memorable.
            </p>

            <div className="flex items-center gap-4 pt-3 border-t border-white/5">
              <span className="w-12 h-px bg-primary/40" />
              <span className="font-label text-[11px] text-primary uppercase tracking-[0.25em] font-semibold">
                High Performance & Design Obsessed
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
