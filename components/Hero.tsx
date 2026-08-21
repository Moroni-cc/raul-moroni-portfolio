"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight, Terminal, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const videoCardRef = useRef<HTMLDivElement>(null);
  const verticalLabelRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.5"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.7"
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current?.children ? Array.from(ctaRef.current.children) : [],
          { opacity: 0, y: 15, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.15, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          videoCardRef.current,
          { opacity: 0, scale: 0.9, x: 40 },
          { opacity: 1, scale: 1, x: 0, duration: 1.2, ease: "power3.out" },
          "-=0.8"
        )
        .fromTo(
          verticalLabelRef.current,
          { opacity: 0, x: -10 },
          { opacity: 0.7, x: 0, duration: 0.8 },
          "-=0.6"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-center max-w-full mx-auto px-5 lg:px-12 pt-24 pb-20 w-full overflow-hidden border-b border-white/5 bg-background"
    >
      {/* Subtle Background Glows */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-container/15 blur-[140px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-primary/10 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Label Vertical Signature */}
        <div
          ref={verticalLabelRef}
          className="hidden lg:flex lg:col-span-1 items-center justify-center opacity-0"
        >
          <div className="flex items-center gap-3" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
            <span className="font-label text-[10px] text-primary uppercase tracking-[0.3em] font-semibold">
              CRIMSON NOCTURNE — 2026
            </span>
            <span className="w-8 h-px bg-primary/40" />
          </div>
        </div>

        {/* Main Text Content */}
        <div className="flex flex-col gap-6 lg:col-span-6 relative">
          
          {/* Live Status Badge */}
          <div ref={badgeRef} className="opacity-0">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-high/90 border border-primary/30 backdrop-blur-md shadow-[0_0_20px_rgba(155,17,30,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant flex items-center gap-1.5 font-medium">
                <Terminal size={12} className="text-primary" />
                Disponible para nuevos proyectos
              </span>
            </div>
          </div>

          <div>
            <h1
              ref={titleRef}
              className="opacity-0 text-[2.75rem] leading-[1.08] lg:text-[4.25rem] font-bold font-display text-on-surface tracking-tight mb-3"
            >
              Hola, soy <br />
              <span className="text-gradient-crimson italic font-normal font-serif">
                Moroni Capcha
              </span>
            </h1>

            <h2
              ref={subtitleRef}
              className="opacity-0 text-lg lg:text-2xl font-medium font-body text-on-surface-variant/90 tracking-wide flex items-center gap-3"
            >
              <span className="w-6 h-px bg-primary" />
              Frontend Developer & UI Architect
            </h2>
          </div>

          <p
            ref={descRef}
            className="opacity-0 text-base lg:text-lg leading-relaxed text-on-surface-variant/80 max-w-xl font-normal"
          >
            Especializado en construir interfaces web dinámicas de alto rendimiento, 
            sistemas de diseño escalables y arquitecturas frontend limpias con{" "}
            <strong className="text-on-surface font-semibold">React, Next.js y TypeScript</strong>.
          </p>

          <div ref={ctaRef} className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary-container text-on-surface font-label text-xs uppercase tracking-widest overflow-hidden rounded-md transition-all duration-300 hover:bg-primary hover:text-on-primary hover:shadow-[0_0_35px_rgba(255,77,90,0.4)] cursor-pointer"
            >
              <span className="relative z-10 font-bold">Explorar Proyectos</span>
              <ArrowUpRight
                size={16}
                className="relative z-10 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-surface-container/80 border border-outline-variant/60 text-on-surface font-label text-xs uppercase tracking-widest rounded-md hover:border-primary/60 hover:bg-surface-container-high transition-all duration-300"
            >
              Iniciar Conversación
            </a>
          </div>
        </div>

        {/* Dedicated Interactive Avatar Video Card */}
        <div 
          ref={videoCardRef}
          className="lg:col-span-5 flex justify-center lg:justify-end opacity-0"
        >
          <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl p-1 bg-gradient-to-b from-primary/40 via-white/10 to-transparent shadow-[0_15px_50px_rgba(155,17,30,0.25)] group">
            
            <div className="w-full h-full rounded-xl overflow-hidden relative bg-surface-container-lowest border border-white/10">
              <video
                className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/images/avatar1.mp4" type="video/mp4" />
                Tu navegador no soporta video MP4.
              </video>
              
              {/* Atmospheric Gradient inside Avatar frame */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 pointer-events-none" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-surface-container-low/90 backdrop-blur-md border border-primary/20 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-xs text-on-surface">Moroni Capcha</span>
                    <span className="font-label text-[9px] text-primary uppercase tracking-wider">Interactive Avatar</span>
                  </div>
                </div>
                <div className="p-1.5 rounded-lg bg-surface-container border border-white/5 text-primary">
                  <Sparkles size={14} />
                </div>
              </div>
            </div>

            {/* Corner Decorative Lights */}
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-primary/30 blur-xl rounded-full pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
