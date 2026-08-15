"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/5">
      <div className="h-20 max-w-[1200px] mx-auto px-5 lg:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-4">
          <Image
            src="/images/logop.png"
            alt="Raúl Moroni"
            width={32}
            height={32}
            className="h-8 w-auto object-contain"
          />
          <span className="font-display text-lg tracking-tight text-on-surface">
            MORONI DEV
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-12" aria-label="Navegación principal">
          {navLinks.map((link, i) => (
            <a
              key={link.path}
              href={link.href}
              aria-current={i === 0 ? "page" : undefined}
              className={
                i === 0
                  ? "font-label text-xs uppercase tracking-widest text-primary font-bold"
                  : "font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://drive.google.com/file/d/1qOdgtwpyC-GBVNyRKJt2GWbsG5oqFfYi/view?usp=drive_link"
            className="hidden sm:flex items-center px-6 py-2 bg-primary-container text-on-surface font-label text-xs uppercase tracking-widest transition-all hover:bg-primary-container/80 hover:shadow-[0_0_15px_rgba(139,13,26,0.4)]"
          >
            Descargar CV
          </a>
          <Image
            src="/images/moro1.png"
            alt="Foto de perfil de Raúl Moroni"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full border border-outline-variant object-cover"
          />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="lg:hidden text-on-surface p-1"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Navegación móvil"
          className="lg:hidden border-t border-white/5 bg-surface px-5 py-6 flex flex-col gap-6"
        >
          {navLinks.map((link, i) => (
            <a
              key={link.path}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={
                i === 0
                  ? "font-label text-xs uppercase tracking-widest text-primary font-bold"
                  : "font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
