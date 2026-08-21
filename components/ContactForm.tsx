"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, MessageSquare } from "lucide-react";
import type { ContactFormData } from "@/types";

const initialState: ContactFormData = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialState);
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      return;
    }

    const text = `¡Hola Moroni! 👋\nEstoy interesado en contactarte desde tu portafolio Crimson Nocturne.\n\n*Mis Datos:*\n• *Nombre:* ${name}\n• *Correo:* ${email}\n\n*Mensaje:* ${message}`;
    const whatsappUrl = `https://wa.me/51958800505?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");

    setStatus("sent");
    setFormData(initialState);
  }

  return (
    <div className="crimson-glow-card p-8 md:p-12 rounded-2xl relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-48 h-48 bg-primary/10 blur-[60px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="flex items-center gap-2 mb-6">
        <MessageSquare size={16} className="text-primary" />
        <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-medium">
          Envío directo a WhatsApp
        </span>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10" noValidate>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="font-label text-xs uppercase tracking-wider text-on-surface-variant">
            Nombre / Empresa
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Ej. Alexander Vance"
            className="w-full bg-surface-container/60 border border-white/10 rounded-lg px-4 py-3 text-on-surface text-sm focus:outline-none focus:border-primary focus:bg-surface-container transition-all"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="font-label text-xs uppercase tracking-wider text-on-surface-variant">
            Correo Electrónico
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="alexander@company.com"
            className="w-full bg-surface-container/60 border border-white/10 rounded-lg px-4 py-3 text-on-surface text-sm focus:outline-none focus:border-primary focus:bg-surface-container transition-all"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="font-label text-xs uppercase tracking-wider text-on-surface-variant">
            Mensaje / Descripción del proyecto
          </label>
          <textarea
            id="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Cuéntame sobre los objetivos, alcance o consulta técnica..."
            className="w-full bg-surface-container/60 border border-white/10 rounded-lg px-4 py-3 text-on-surface text-sm focus:outline-none focus:border-primary focus:bg-surface-container transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          className="mt-2 px-8 py-4 bg-primary-container text-on-surface font-label text-xs uppercase tracking-widest font-bold rounded-lg transition-all duration-300 hover:bg-primary hover:text-on-primary hover:shadow-[0_0_25px_rgba(255,77,90,0.4)] flex items-center justify-center gap-2 group w-full cursor-pointer"
        >
          <span>Enviar Mensaje</span>
          <Send
            size={14}
            className="transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform"
            aria-hidden="true"
          />
        </button>

        {status === "sent" && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/10 border border-primary/30 text-primary text-xs font-label">
            <CheckCircle2 size={16} />
            <span>¡Redirigiendo a WhatsApp con tu mensaje formateado!</span>
          </div>
        )}
      </form>
    </div>
  );
}
