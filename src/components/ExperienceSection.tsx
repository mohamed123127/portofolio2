import { experienceData } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section className="py-32 px-6" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <span className="text-secondary font-headline font-bold text-sm tracking-[0.3em] uppercase">
            Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter">
            Experience
          </h2>
        </div>

        <div className="space-y-12 relative before:content-[''] before:absolute before:left-0 md:before:left-1/2 before:w-[2px] before:h-full before:bg-outline-variant/20">
          {experienceData.map((entry, i) => {
            const isLeft = entry.side === "left";
            return (
              <div key={i} className="relative flex flex-col md:flex-row gap-8 items-end md:items-center group">
                {isLeft ? (
                  <>
                    <div className="w-[80%] md:w-1/2 md:pr-12 order-2 md:order-1">
                      <div className={`bg-surface-container p-8 rounded-3xl border border-outline-variant/10 ${entry.hoverBorder} transition-all text-left md:text-right`}>
                        <h3 className="text-xl font-bold font-headline mb-1">{entry.title}</h3>
                        <p className="text-sm text-primary mb-4">{entry.company}</p>
                        <p className="text-sm text-on-surface-variant leading-relaxed">{entry.description}</p>
                      </div>
                    </div>
                    <div className={`absolute left-[-6px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full ${entry.dotColor} z-10`} />
                    <div className="w-full md:w-1/2 text-left md:text-left pl-4 -mt-1 md:mt-0 order-1 md:order-2">
                      <h4 className="text-slate-500 font-headline font-bold text-sm tracking-widest uppercase">{entry.period}</h4>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-full md:w-1/2 text-left md:text-right pl-4 -mt-1 md:mt-0">
                      <h4 className="text-secondary font-headline font-bold text-sm tracking-widest uppercase">{entry.period}</h4>
                    </div>
                    <div className={`absolute left-[-6px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full ${entry.dotColor} z-10`} />
                    <div className="w-[80%] md:w-1/2 pl-0 md:pl-12">
                      <div className={`bg-surface-container p-8 rounded-3xl border border-outline-variant/10 ${entry.hoverBorder} transition-all`}>
                        <h3 className="text-xl font-bold font-headline mb-1">{entry.title}</h3>
                        <p className="text-sm text-primary mb-4">{entry.company}</p>
                        <p className="text-sm text-on-surface-variant leading-relaxed">{entry.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
