const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-surface-container-lowest border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-on-surface-variant font-label text-xs uppercase">
          © {currentYear} Raúl Moroni. Engineering Excellence.
        </p>
        <div className="flex items-center gap-12">
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors font-label text-xs uppercase">
            LinkedIn
          </a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors font-label text-xs uppercase">
            GitHub
          </a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors font-label text-xs uppercase">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
