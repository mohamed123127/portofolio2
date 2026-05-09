import { aboutData } from "@/data/about";

export function AboutSection() {
  const { sectionLabel, tagline, description, stats, specialties } = aboutData;

  return (
    <section className="py-32 bg-surface-container-low px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-24 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <span className="text-4xl md:text-5xl text-secondary font-headline font-bold uppercase">
              {sectionLabel}
            </span>
            <h2 className="font-black text-lg font-headline tracking-tighter">
              {tagline}
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-lg">{description}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat: any) => (
                <div key={stat.label} className="space-y-2">
                  <h4 className="text-3xl font-black font-headline text-white">{stat.value}</h4>
                  <p className="text-xs text-outline uppercase tracking-widest font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Specialty cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-full mx-auto gap-4">
            {specialties.map((spec, i) => (
              <div
                key={spec.title}
                className={`bg-surface-container p-8 rounded-3xl space-y-4 border border-outline-variant/10 ${i === 1 ? "row-span-2 h-fit mt-0 md:mt-24" : ""}`}
              >
                <span className={`material-symbols-outlined text-3xl`}>
                  {spec.icon}
                </span>
                <h3 className="font-headline font-bold text-lg">{spec.title}</h3>
                <p className="text-sm text-on-surface-variant">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
