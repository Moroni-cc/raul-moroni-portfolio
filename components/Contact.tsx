"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Briefcase, Code2, MessageCircle, type LucideIcon } from "lucide-react";
import { contactChannels } from "@/lib/content";
import type { ContactChannel } from "@/types";
import ContactForm from "./ContactForm";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const ICONS: Record<ContactChannel["icon"], LucideIcon> = {
  mail: Mail,
  briefcase: Briefcase,
  code: Code2,
};

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const formColRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      gsap.fromTo(
        leftColRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        formColRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
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
    <section id="contact" ref={sectionRef} className="relative pt-[120px] pb-24 overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-gradient-to-t from-primary-container/15 to-transparent blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-5 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div ref={leftColRef} className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-white/10 w-fit">
              <MessageCircle size={14} className="text-primary" />
              <span className="font-label text-xs text-primary uppercase tracking-[0.2em] font-semibold">
                Canales de Contacto
              </span>
            </div>

            <h2 className="text-[2.5rem] lg:text-[4rem] font-bold font-display text-on-surface leading-tight tracking-tight">
              ¿Listo para crear algo <span className="text-gradient-crimson italic">extraordinario</span>?
            </h2>

            <p className="text-base lg:text-lg text-on-surface-variant/80 max-w-md leading-relaxed">
              Disponible para proyectos innovadores, consultoría técnica frontend o integración en equipos de ingeniería de alto nivel.
            </p>

            <ul className="flex flex-col gap-3 pt-2">
              {contactChannels.map((channel) => {
                const Icon = ICONS[channel.icon];
                return (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3.5 rounded-xl bg-surface-container-low border border-white/5 hover:border-primary/40 hover:bg-surface-container transition-all group w-full sm:w-fit"
                    >
                      <span className="w-10 h-10 rounded-lg bg-surface-container-high border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all shadow-[0_0_10px_rgba(255,77,90,0.15)]">
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      <span className="font-label text-xs uppercase tracking-wider text-on-surface-variant group-hover:text-primary transition-colors">
                        {channel.label}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div ref={formColRef} className="lg:col-span-6">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
