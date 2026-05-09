import Image from "next/image";
import { heroData } from "@/data/about";
import { socialMediaLinks } from "@/data/about";

export function HeroSection() {
  const { badge, headline, subtitle, ctaPrimary, ctaSecondary, heroImage, floatingCard } = heroData;

  return (
    <section id="about" className="min-h-screen pt-32 pb-16 flex flex-col items-center justify-center relative overflow-hidden px-6">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-container/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 flex-grow">
        {/* Left: Text */}
        <div className="lg:col-span-7 space-y-8">
          {/* Badge */}
          <div className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high border border-outline-variant/30 text-secondary text-xs font-bold tracking-[0.2em] uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
            </span>
            {badge}
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-7xl font-black font-headline tracking-tighter leading-none">
            {headline.before}
            <span className="text-gradient">{headline.highlight}</span>
            <br />
            {headline.after}
          </h1>

          {/* Subtitle */}
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl font-body font-light leading-relaxed">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center md:justify-start flex-wrap gap-4">
            <button className="cursor-pointer px-4 md:px-8 py-4 bg-gradient-to-r from-primary-container to-secondary rounded-xl font-headline font-bold text-white tracking-wide hover:shadow-[0_0_30px_-5px_rgba(29,78,216,0.5)] transition-all">
              <a href="#projects">
                {ctaPrimary}
              </a>
            </button>
            <button className="cursor-pointer px-4 md:px-8 py-4 bg-surface-container-high border border-outline-variant/20 rounded-xl font-headline font-bold text-white tracking-wide hover:bg-surface-container-highest transition-all flex items-center gap-2">
              <a href="#contact">
                {ctaSecondary}
              </a>
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="mx-4 lg:col-span-5 relative group">
          <div className="relative w-full aspect-square rounded-3xl overflow-hidden glass-panel p-2">
            <Image
              src={heroImage}
              alt="Work Environment"
              fill
              className="ml-12 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 41vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
          </div>

          <div className="absolute flex flex-col gap-2 -left-6 top-16">

            <a href={socialMediaLinks.find((sml) => sml.label === "github")?.href || ""}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center glass-panel rounded-xl ring-1 ring-inset ring-white/5 w-12 aspect-square">
              <img className="w-8 aspect-square" src="/resources/icons/github-logo.png" alt="Work Environment" />
            </a>

            <a href={socialMediaLinks.find((sml) => sml.label === "linkedin")?.href || ""}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center glass-panel rounded-xl ring-1 ring-inset ring-white/5 w-12 aspect-square">
              <img className="w-8 aspect-square" src="/resources/icons/linkedin.png" alt="Work Environment" />
            </a>
          </div>

          {/* Floating info card */}
          <div className="absolute -bottom-12 md:-bottom-6 -left-6 glass-panel p-6 rounded-2xl max-w-[240px] shadow-2xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-secondary">{floatingCard.icon}</span>
              <span className="font-headline font-bold text-sm tracking-widest text-secondary">{floatingCard.label}</span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">{floatingCard.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}