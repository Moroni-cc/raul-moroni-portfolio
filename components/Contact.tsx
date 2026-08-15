import { Mail, Briefcase, Code2, type LucideIcon } from "lucide-react";
import { contactChannels } from "@/lib/content";
import type { ContactChannel } from "@/types";
import ContactForm from "./ContactForm";

const ICONS: Record<ContactChannel["icon"], LucideIcon> = {
  mail: Mail,
  briefcase: Briefcase,
  code: Code2,
};

export default function Contact() {
  return (
    <section id="contact" className="relative pt-[120px] pb-12">
      <div
        className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-primary-container/5 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div className="max-w-[1200px] mx-auto px-5 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span className="font-label text-xs text-primary uppercase tracking-[0.2em] mb-4 block">
              Hablemos
            </span>
            <h2 className="text-[2.5rem] lg:text-[4rem] font-bold font-display text-on-surface mb-4">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-lg text-on-surface-variant mb-12 max-w-md">
              Estoy disponible para oportunidades freelance, colaboraciones o
              simplemente para charlar sobre código. Escríbeme y me pondré en
              contacto lo antes posible.
            </p>

            <ul className="flex flex-col gap-4">
              {contactChannels.map((channel) => {
                const Icon = ICONS[channel.icon];
                return (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group w-fit"
                    >
                      <span className="w-12 h-12 rounded-full border border-white/10 bg-surface flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                        <Icon size={20} className="text-on-surface group-hover:text-on-primary" aria-hidden="true" />
                      </span>
                      <span className="text-on-surface-variant group-hover:text-primary transition-colors">
                        {channel.label}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
