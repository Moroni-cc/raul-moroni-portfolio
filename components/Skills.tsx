import { Code2, Layers, Wrench, type LucideIcon } from "lucide-react";
import { skillGroups } from "@/lib/content";
import type { SkillGroup } from "@/types";

const ICONS: Record<SkillGroup["icon"], LucideIcon> = {
  code: Code2,
  layers: Layers,
  wrench: Wrench,
};

function SkillCard({ group }: { group: SkillGroup }) {
  const Icon = ICONS[group.icon];

  return (
    <div className="bg-surface-container-low p-8 rounded-xl border border-white/5 transition-all duration-300 hover:border-primary-container hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(139,13,26,0.15)] group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <Icon className="text-primary" size={28} strokeWidth={1.75} aria-hidden="true" />
          <h3 className="font-display text-xl text-on-surface">{group.title}</h3>
        </div>
        <ul className="flex flex-wrap gap-2 mt-auto">
          {group.items.map((item) => (
            <li
              key={item}
              className="px-3 py-1 bg-surface rounded text-on-surface-variant font-label text-xs border border-white/5 group-hover:border-primary/30 transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-[120px] relative">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="font-label text-xs text-primary uppercase tracking-[0.2em] mb-4">
            Competencias Técnicas
          </span>
          <h2 className="text-[2.5rem] lg:text-[4rem] font-bold font-display text-on-surface">
            Habilidades
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skillGroups.map((group) => (
            <SkillCard key={group.title} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
