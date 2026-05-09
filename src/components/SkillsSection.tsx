"use client";

import Image from "next/image";
import { useState } from "react";
import { skillsData, preferredStack } from "@/data/skills";

const colSpanMap: Record<number, string> = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
};

export function SkillsSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-32 px-6 bg-surface" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:flex-row justify-between md:items-end mb-16 gap-8">
          <div className="space-y-4 text-center md:text-start">
            <span className="text-secondary font-headline font-bold text-sm tracking-[0.3em] uppercase">
              Skills
            </span>
            <h2 className="text-4xl md:text-6xl font-black font-headline tracking-tighter max-w-2xl leading-[0.9]">
              Preferred Tech <br className="hidden md:block" />
              <span className="text-white md:text-outline-secondary text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-container">
                Stack
              </span>
            </h2>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center gap-3 px-8 py-4 bg-secondary text-on-secondary rounded-full font-bold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20"
          >
            {isExpanded ? "Show Less" : "Explore All Skills"}
            <span className={`material-symbols-outlined transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}>
              expand_more
            </span>
          </button>
        </div>

        {/* Preferred Stack Display */}
        <div className="grid grid-cols-2 md:grid-cols-5 md:mx-24 gap-4">
          {preferredStack.map((tech, key) => (
            <div
              key={tech.name}
              className={`${key == 4 ? 'w-1/2 md:w-full mx-auto col-span-2 md:col-span-1' : ''} p-6 bg-surface-container-high rounded-2xl border border-outline-variant/10 flex flex-col items-center justify-center gap-4 group hover:border-secondary/50 transition-all duration-300`}
            >
              <div className="w-12 h-12 relative flex items-center justify-center group-hover:scale-110 transition-transform">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-center">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Expandable Skills Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 transition-all duration-700 overflow-hidden ${isExpanded ? 'max-h-[3000px] opacity-100 mt-12' : 'max-h-0 opacity-0 mt-0'}`}>
          <div className="md:col-span-4 mb-8">
            <h3 className="text-2xl font-bold font-headline mb-2 text-on-surface-variant">Full Expertise</h3>
            <p className="text-on-surface-variant/60">A comprehensive list of technologies and tools I have used in previous projects.</p>
          </div>

          {skillsData.map((group) => {
            const colClass = colSpanMap[group.colSpan] ?? "md:col-span-1";

            /* ── Tags variant (Frontend / Backend / Concepts) ── */
            if (group.type === "tags") {
              const tagHover =
                group.hoverVariant === "primary"
                  ? "group-hover:bg-primary-container/20"
                  : "group-hover:bg-secondary/20";
              return (
                <div
                  key={group.id}
                  className={`${colClass} bg-surface-container-highest  md:bg-surface-container p-8 rounded-3xl border border-outline-variant/10 group hover:border-secondary/30 transition-all duration-500`}
                >
                  <div className="flex justify-between items-start mb-8">
                    <h3 className="font-headline font-bold text-2xl">{group.title}</h3>
                    {group.icon && (
                      <span className="material-symbols-outlined text-secondary">{group.icon}</span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-4 py-2 bg-surface-container-low text-on-surface text-[10px] font-bold rounded-lg border border-outline-variant/10 transition-colors ${tagHover}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            }

            /* ── Bullets variant (Desktop) ── */
            if (group.type === "bullets") {
              return (
                <div
                  key={group.id}
                  className={`${colClass} bg-surface-container-highest p-6 rounded-3xl border border-outline-variant/10`}
                >
                  <h4 className="font-headline font-bold text-sm uppercase tracking-widest mb-4">
                    {group.title}
                  </h4>
                  <ul className="text-md text-on-surface-variant space-y-3">
                    {group.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 font-bold">
                        <span className="w-1 h-1 bg-white rounded-full shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }

            /* ── Badges variant (AI & Tools) ── */
            if (group.type === "badges") {
              return (
                <div
                  key={group.id}
                  className={`${colClass} bg-surface-container-highest p-8 rounded-3xl border border-outline-variant/30 flex flex-col justify-between`}
                >
                  <div>
                    <h4 className="font-headline font-bold text-2xl mb-4">{group.title}</h4>
                    {group.description && (
                      <p className="text-on-surface-variant mb-6 max-w-xl text-sm">{group.description}</p>
                    )}
                  </div>
                  <div className="flex gap-4 flex-wrap">
                    {group.skills.map((raw) => {
                      const [label, icon] = raw.split("|");
                      const isImagePath = icon?.startsWith("/");
                      return (
                        <div
                          key={label}
                          className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-xl border border-outline-variant/10"
                        >
                          {icon && (
                            isImagePath ? (
                              <Image src={icon} alt={label} width={16} height={16} className="object-contain" />
                            ) : (
                              <span className="material-symbols-outlined text-secondary text-sm">
                                {icon}
                              </span>
                            )
                          )}
                          <span className="text-[10px] font-bold">{label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </section>
  );
}


