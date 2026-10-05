import { useEffect, useRef, useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import { experienceData } from "../data/data";

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState(
    new Array(experienceData.length).fill(false)
  );
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleItems((prev) => {
          const updated = [...prev];
          entries.forEach((entry) => {
            const index = parseInt(entry.target.getAttribute("data-index"), 10);
            updated[index] = entry.isIntersecting;
          });
          return updated;
        });
      },
      { threshold: 0.3 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section
      id="experience"
      className="md:min-h-[60vh] bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 overflow-x-hidden"
    >
      <h2 className="text-3xl font-bold text-center gradient-text mb-10">
        Work Experience
      </h2>

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-[11px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-cyan-400 opacity-60" />

        <div className="space-y-8">
          {experienceData.map((exp, index) => {
            const isVisible = visibleItems[index];
            const fromLeft = index % 2 === 0;
            const isCurrent = /present/i.test(exp.duration);

            return (
              <div key={index} className="relative pl-10 md:pl-12">
                {/* Timeline dot (stays in place while the card slides in) */}
                <div className="absolute left-0 top-7 w-6 h-6 rounded-full gradient-bg flex items-center justify-center ring-4 ring-gray-100 dark:ring-gray-900 shadow-[0_0_14px_rgba(99,102,241,0.8)]">
                  <span className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Animated wrapper */}
                <div
                  ref={(el) => (sectionRefs.current[index] = el)}
                  data-index={index}
                  className={`transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : fromLeft
                      ? "opacity-0 -translate-x-6 md:-translate-x-12"
                      : "opacity-0 translate-x-6 md:translate-x-12"
                  }`}
                >
                  {/* Glass card */}
                  <div className="relative overflow-hidden glass-card glass-card-hover rounded-xl p-4 md:p-6">
                    {/* Gradient accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 gradient-bg" />

                    {/* Role, Company and Duration */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 shrink-0 rounded-xl gradient-bg flex items-center justify-center text-white text-lg shadow-md">
                          <FaBriefcase />
                        </div>
                        <div className="text-left">
                          <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                            {exp.role}
                          </h3>
                          <p className="text-sm md:text-base text-gray-600 dark:text-slate-300">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Duration pill */}
                      <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full text-sm font-medium text-indigo-700 dark:text-cyan-200 bg-indigo-500/10 dark:bg-white/10 border border-indigo-500/30 dark:border-white/10">
                        {isCurrent && (
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                          </span>
                        )}
                        {exp.duration}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-700 dark:text-slate-300 text-left">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full gradient-bg" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;