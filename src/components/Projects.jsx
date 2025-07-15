import React, { useRef } from "react";
import { projectsData } from "../data/data";
import { motion, useInView } from "framer-motion";

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-white dark:bg-gray-900 p-8"
      ref={sectionRef}
    >
      <motion.h2
        className="text-3xl font-bold text-center text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center border-2 border-gray-200 dark:border-gray-700 
              transition duration-300 ease-in-out 
              hover:-translate-y-1 hover:scale-105 
              hover:border-blue-500 dark:hover:border-indigo-400"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {project.name}
            </h3>

            <div className="flex justify-center gap-2 flex-wrap mt-3">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-indigo-100 dark:bg-indigo-700 text-indigo-600 dark:text-white px-3 py-1 rounded-md text-sm font-medium border border-indigo-300 dark:border-indigo-500"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="mt-3 text-gray-600 dark:text-gray-300">
              {project.description}
            </p>

            {/* Conditional buttons */}
            {(project.github || project.live) && (
              <div className="flex justify-center gap-4 mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500 transition"
                  >
                    Live
                  </a>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;