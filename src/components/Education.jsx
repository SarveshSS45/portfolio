import { useEffect, useRef, useState } from 'react';
import { educationData } from '../data/data';

const Education = () => {
  const [visibleItems, setVisibleItems] = useState(
    new Array(educationData.length).fill(false)
  );
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleItems((prev) => {
          const updated = [...prev];
          entries.forEach((entry) => {
            const index = parseInt(entry.target.getAttribute('data-index'), 10);
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
      id="education"
      className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 overflow-x-hidden"
    >
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
        Education
      </h2>

      <div className="max-w-6xl mx-auto space-y-6">
        {educationData.map((edu, index) => {
          const isVisible = visibleItems[index];
          const fromLeft = index % 2 === 0;

          return (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              data-index={index}
              className={`flex flex-col md:flex-row items-center justify-between gap-6 
                bg-gray-100 dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-md 
                border border-gray-200 dark:border-gray-700 
                transform transition-all duration-700 ease-out
                ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : fromLeft
                    ? 'opacity-0 -translate-x-6 md:-translate-x-12'
                    : 'opacity-0 translate-x-6 md:translate-x-12'
                }
                hover:-translate-y-1 hover:scale-[1.02] 
                hover:border-indigo-400 hover:shadow-indigo-500/40`}
            >
              {/* University Image */}
              <div className="w-20 h-20 md:w-28 md:h-28 flex-shrink-0 rounded-lg overflow-hidden border-2 border-indigo-300 dark:border-indigo-600 shadow-md">
                <img
                  src={edu.universityImage}
                  alt={edu.university}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Education Info */}
              <div className="flex-1 w-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-md text-gray-700 dark:text-gray-300">
                    {edu.university}
                  </p>
                </div>
                <div className="text-sm md:text-right text-gray-600 dark:text-gray-400">
                  <p>{edu.batch}</p>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                    {edu.grade}
                  </p>
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