export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center max-w-[1200px] mx-auto px-5 lg:px-6 pt-12 pb-[120px] w-full"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(19,19,19,0.95) 30%, rgba(19,19,19,0.4) 100%), url("/images/avatar.gif")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="flex flex-col gap-4 relative lg:col-span-10 pt-12">
          <div
            className="absolute -top-32 -left-32 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none"
            aria-hidden="true"
          />

          <p
            className="hidden lg:block font-label text-xs text-primary tracking-[0.2em] uppercase absolute -left-10 top-0 opacity-70"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Portfolio 2026
          </p>

          <h1 className="text-[2.5rem] leading-[1.2] font-bold lg:text-[4rem] lg:leading-[1.1] lg:tracking-[-0.02em] font-display text-on-surface">
            Hola, soy <br />
            <span className="text-gradient-primary">Moroni Capcha</span>
          </h1>

          <h2 className="text-2xl lg:text-[2rem] font-semibold leading-[1.3] font-display text-on-surface-variant">
            Frontend Developer
          </h2>

          <p className="text-lg leading-relaxed text-on-surface-variant/80 max-w-2xl">
            Especializado en crear experiencias web dinámicas, interactivas y
            altamente optimizadas. Transformo ideas complejas en interfaces
            elegantes y funcionales, priorizando la arquitectura limpia y el
            rendimiento excepcional.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-primary-container text-on-surface font-label text-xs uppercase tracking-widest overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(139,13,26,0.4)]"
            >
              <span className="relative z-10 font-bold">Ver Proyectos</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border border-outline-variant text-on-surface font-label text-xs uppercase tracking-widest hover:bg-surface-container-high transition-colors"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
