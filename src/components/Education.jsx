import { useEffect, useRef, useState } from "react";
import { educationData } from "../data/data";

const Education = () => {
  const [visibleItems, setVisibleItems] = useState(
    new Array(educationData.length).fill(false),
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
      { threshold: 0.3 },
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
      id="education"
      className="md:min-h-[60vh] bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 overflow-x-hidden"
    >
      <h2 className="text-3xl font-bold text-center gradient-text mb-10">
        Education
      </h2>

      <div className="max-w-6xl mx-auto space-y-6">
        {educationData.map((edu, index) => {
          const isVisible = visibleItems[index];
          const fromLeft = index % 2 === 0;

          return (
            // Outer layer: slide-in animation
            <div
              key={index}
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
              {/* Inner layer: glass card + hover effect */}
              <div className="relative overflow-hidden glass-card glass-card-hover rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Gradient accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 gradient-bg" />

                {/* University Image */}
                <div className="flex-shrink-0 p-1 rounded-xl border border-indigo-500/30 dark:border-white/20 bg-white/30 dark:bg-white/5 shadow-lg shadow-indigo-500/20">
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-lg overflow-hidden">
                    <img
                      src={edu.universityImage}
                      alt={edu.university}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Education Info */}
                <div className="flex-1 w-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-base text-gray-700 dark:text-slate-300">
                      {edu.university}
                    </p>
                  </div>

                  <div className="text-sm text-center md:text-right space-y-1">
                    <p className="text-gray-600 dark:text-slate-400">
                      {edu.batch}
                    </p>
                    <p className="text-indigo-600 dark:text-cyan-300 font-semibold">
                      {edu.grade}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
