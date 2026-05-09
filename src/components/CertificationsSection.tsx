"use client";

import { useEffect, useRef } from "react";
import { certificationsData } from "@/data/certifications";

export function CertificationsSection() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.25) {
          const diff = (window.innerHeight * 0.25 - rect.top) / 500;
          const scale = Math.max(0.9, 1 - diff * 0.1);
          const opacity = Math.max(0.5, 1 - diff);
          card.style.transform = `scale(${scale}) translateY(${-diff * 20}px)`;
          card.style.opacity = String(opacity);
        } else {
          card.style.transform = "scale(1) translateY(0)";
          card.style.opacity = "1";
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-32 px-6 bg-surface-container-low" id="certifications">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24 space-y-4">
          <span className="text-secondary font-headline font-bold text-sm tracking-[0.3em] uppercase">
            Validation
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter">
            Certifications
          </h2>
        </div>

        <div className="space-y-[40vh] pb-[40vh]">
          {certificationsData.map((cert, i) => (
            <div
              key={cert.title}
              className="cert-card w-full"
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
            >
              <div
                className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl flex flex-col md:flex-row items-center gap-10 transition-shadow"
                style={{ ["--glow" as string]: cert.glowColor }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 50px -10px ${cert.glowColor}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                {/* Icon circle */}
                <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br ${cert.gradientFrom} ${cert.gradientTo} flex items-center justify-center border border-white/10 shrink-0`}>
                  <span className={`material-symbols-outlined text-6xl ${cert.iconColor}`}>
                    {cert.icon}
                  </span>
                </div>

                {/* Text */}
                <div className="space-y-4 text-center md:text-left flex-grow">
                  <span className="text-xs font-black tracking-[0.3em] text-outline uppercase">What</span>
                  <h3 className="text-2xl md:text-3xl font-black font-headline leading-tight">{cert.title}</h3>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-12 pt-2">
                    <div className="space-y-1">
                      <span className="text-[10px] font-black tracking-widest text-outline uppercase block">Where</span>
                      <p className="font-headline font-bold text-white uppercase text-sm">{cert.issuer}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-black tracking-widest text-outline uppercase block">When</span>
                      <p className="font-headline font-bold text-white uppercase text-sm">{cert.issued}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
