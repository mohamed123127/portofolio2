"use client";

import { useState } from "react";
import Image from "next/image";
import { projectsData } from "@/data/projects";

export function ProjectsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(projectsData.length - itemsPerPage, prev + 1)
    );
  };

  const visibleProjects = projectsData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-32 bg-surface-container-low px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="flex flex-col items-center md:items-start space-y-1 md:space-y-4 w-full">
            <span className="text-secondary font-headline font-bold text-sm tracking-[0.3em] uppercase">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter">
              Selected Works
            </h2>
          </div>
          <div className={`flex ${projectsData.length <= 3 ? 'hidden' : 'flex'}`}>
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container-high transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex >= projectsData.length - itemsPerPage}
              className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container-high transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.title}
              className="group bg-surface-container rounded-[2rem] overflow-hidden border border-outline-variant/10 hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}
              <div className="h-64 relative overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold font-headline">{project.title}</h3>
                  <a href={project.href} className="text-secondary">
                    <span className="material-symbols-outlined">open_in_new</span>
                  </a>
                </div>
                <p className="text-sm text-on-surface-variant line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-black tracking-widest uppercase text-outline"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

