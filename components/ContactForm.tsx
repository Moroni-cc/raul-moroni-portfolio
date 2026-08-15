"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
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

    // Construir el mensaje de WhatsApp bien estructurado
    const text = `¡Hola Moroni! 👋\nEstoy interesado en contactarte desde tu portafolio.\n*Mis Datos:*\n• *Nombre:* ${name}\n• *Correo:* ${email}\n*Mensaje:* ${message}`;

    // Crear enlace y abrir en nueva pestaña con tu número de WhatsApp
    const whatsappUrl = `https://wa.me/51958800505?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");

    setStatus("sent");
    setFormData(initialState);
  }

  return (
    <div className="bg-surface-container-low p-12 rounded-2xl border border-white/5 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10" noValidate>
        <div className="flex flex-col">
          <label htmlFor="name" className="font-label text-xs text-on-surface-variant mb-2">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="w-full bg-transparent border-b border-white/10 py-2 text-on-surface focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="font-label text-xs text-on-surface-variant mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            className="w-full bg-transparent border-b border-white/10 py-2 text-on-surface focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="font-label text-xs text-on-surface-variant mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Cuéntame sobre tu proyecto..."
            className="w-full bg-transparent border-b border-white/10 py-2 text-on-surface focus:outline-none focus:border-primary transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="mt-4 px-8 py-4 bg-primary-container text-on-surface font-label text-xs uppercase tracking-widest transition-all hover:bg-primary hover:text-on-primary hover:shadow-[0_0_20px_rgba(139,13,26,0.3)] flex items-center justify-center gap-2 group w-full md:w-auto self-start"
        >
          Enviar Mensaje
          <Send
            size={14}
            className="transform group-hover:translate-x-1 transition-transform"
            aria-hidden="true"
          />
        </button>

        <p role="status" className="text-sm text-primary min-h-5">
          {status === "sent" && "¡Gracias! Tu mensaje fue enviado."}
        </p>
      </form>
    </div>
  );
}
