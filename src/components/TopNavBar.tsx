"use client";

import { navLinks } from "@/data/about";

export function TopNavBar() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resources/pdf/CV-EN.pdf';
    link.download = 'CV-EN.pdf';
    link.click();
  };
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl rounded-2xl bg-surface-variant/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(10,16,48,0.3)] flex justify-between items-center px-2 md:px-8 py-4 z-50 transition-all duration-300">
      {/* Logo */}
      <div className="text-xl font-black tracking-tighter text-white bg-gradient-to-r from-primary-container to-secondary bg-clip-text text-transparent font-headline">
        Louahchi Mohamed
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-slate-400 hover:text-white transition-colors font-headline tracking-tight text-sm uppercase font-bold"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <button onClick={handleDownload} className="cursor-pointer bg-primary-container text-white px-6 py-2 rounded-full font-headline text-xs md:text-sm font-bold uppercase tracking-wider hover:scale-105 transition-transform duration-300">
        Download CV
      </button>
    </nav>
  );
}
