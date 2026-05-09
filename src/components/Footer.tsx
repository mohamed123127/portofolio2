import { socialMediaLinks } from "@/data/about";

export function Footer() {
  return (
    <footer className="bg-surface-dim py-12 px-8 border-t border-outline-variant/10">
      <div className="flex flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <div className="w-[75%] md:w-full font-body text-xs tracking-widest uppercase text-slate-500">
          © 2025 Created by Louahchi Mohamed. All rights reserved.
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 mr-0 md:mr-24">
          {socialMediaLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-secondary transition-colors duration-200 font-body text-xs tracking-widest uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
