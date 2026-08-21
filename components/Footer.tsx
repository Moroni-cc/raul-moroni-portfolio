import Image from "next/image";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-background border-t border-white/5 relative z-10">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <Image
            src="/images/logop.png"
            alt="Raúl Moroni"
            width={24}
            height={24}
            className="h-6 w-auto object-contain opacity-70"
          />
          <p className="text-on-surface-variant/70 font-label text-xs uppercase tracking-wider">
            © {currentYear} Raúl Moroni. Diseñado con identidad Crimson Nocturne.
          </p>
        </div>

        <div className="flex items-center gap-8">
          <a
            href="https://www.linkedin.com/in/ra%C3%BAl-moroni-capcha-cadillo-659a41341/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant/70 hover:text-primary transition-colors font-label text-xs uppercase tracking-widest"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Moroni-cc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant/70 hover:text-primary transition-colors font-label text-xs uppercase tracking-widest"
          >
            GitHub
          </a>
          <a
            href="mailto:raulmoronicapchacadillo@gmail.com"
            className="text-on-surface-variant/70 hover:text-primary transition-colors font-label text-xs uppercase tracking-widest"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
