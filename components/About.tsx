import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-[120px] bg-surface-container-lowest relative overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-primary-container/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-5 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <h2 className="font-display text-2xl text-on-surface mb-4 relative inline-block">
              <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-primary" />
              Sobre mí
            </h2>
            <div className="w-full aspect-[4/5] bg-surface-container rounded-lg overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-surface-dim via-transparent to-transparent z-10" />
              <Image
                src="/images/about-workspace.png"
                alt="Espacio de trabajo minimalista y oscuro con acentos rojos, monitor mostrando código."
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col gap-4 bg-surface p-12 rounded-xl shadow-xl border border-white/5 md:-ml-12 relative z-20 hover:shadow-[0_0_40px_rgba(139,13,26,0.1)] transition-shadow duration-500">
            <p className="text-lg leading-relaxed text-on-surface-variant">
              Mi viaje en el desarrollo frontend comenzó con una pasión por
              crear interfaces que no solo se vean bien, sino que ofrezcan una
              experiencia fluida e intuitiva. Formado a través de programas
              rigurosos en{" "}
              <strong className="text-primary-fixed-dim">
                BYU-Pathway Worldwide
              </strong>{" "}
              y{" "}
              <strong className="text-primary-fixed-dim">
                Fundación Funval
              </strong>
              , he desarrollado una base sólida en ingeniería de software.
            </p>
            <p className="text-base leading-relaxed text-on-surface-variant/70">
              Me enfoco en escribir{" "}
              <span className="text-on-surface">código limpio</span>,
              estructurar{" "}
              <span className="text-on-surface">
                arquitecturas de componentes escalables
              </span>{" "}
              y aplicar principios de{" "}
              <span className="text-on-surface">diseño dinámico</span>. Para
              mí, el desarrollo web no es solo teclear líneas de código, es un
              proceso artesanal donde el rendimiento y la estética coexisten
              en perfecta armonía.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <span className="w-12 h-px bg-outline-variant" />
              <span className="font-label text-xs text-outline tracking-widest uppercase">
                Evolución Continua
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
