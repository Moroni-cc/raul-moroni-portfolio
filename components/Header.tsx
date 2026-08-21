"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Download } from "lucide-react";
import { navLinks } from "@/lib/content";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="h-20 max-w-[1200px] mx-auto px-5 lg:px-6 flex items-center justify-between">
        <a 
          href="#home" 
          className="flex items-center gap-3.5 group transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="relative w-8 h-8 rounded-lg p-0.5 border border-primary/40 bg-surface-container flex items-center justify-center overflow-hidden shadow-[0_0_12px_rgba(255,77,90,0.2)]">
            <Image
              src="/images/logop.png"
              alt="Raúl Moroni"
              width={28}
              height={28}
              className="h-7 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-wider text-on-surface">
              MORONI<span className="text-primary font-normal">.DEV</span>
            </span>
            <span className="font-label text-[9px] text-on-surface-variant/60 uppercase tracking-widest -mt-1">
              Frontend Architect
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.href}
              className="font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://drive.google.com/file/d/1qOdgtwpyC-GBVNyRKJt2GWbsG5oqFfYi/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded bg-surface-container-high border border-primary/30 text-on-surface font-label text-xs uppercase tracking-widest transition-all duration-300 hover:bg-primary hover:text-on-primary hover:shadow-[0_0_20px_rgba(255,77,90,0.3)]"
          >
            <Download size={13} aria-hidden="true" />
            <span>CV</span>
          </a>
          
          <div className="relative">
            <Image
              src="/images/moro1.png"
              alt="Foto de perfil de Raúl Moroni"
              width={38}
              height={38}
              className="w-9 h-9 rounded-full border border-primary/40 object-cover p-0.5 bg-surface-container shadow-[0_0_10px_rgba(155,17,30,0.3)]"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-background" title="Online" />
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="lg:hidden text-on-surface p-2 rounded-lg bg-surface-container border border-white/10 hover:border-primary/50 transition-colors"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Navegación móvil"
          className="lg:hidden border-t border-white/5 bg-surface-container-lowest/95 backdrop-blur-2xl px-6 py-6 flex flex-col gap-5"
        >
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors py-2 border-b border-white/5 flex items-center justify-between"
            >
              <span>{link.label}</span>
              <span className="text-primary text-xs">→</span>
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1qOdgtwpyC-GBVNyRKJt2GWbsG5oqFfYi/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 mt-2 px-5 py-3 rounded bg-primary-container text-on-surface font-label text-xs uppercase tracking-widest font-bold"
          >
            <Download size={14} />
            Descargar CV Completo
          </a>
        </nav>
      )}
    </header>
  );
}
