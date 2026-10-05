import { projectsData } from "../data/data";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
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
      className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8"
    >
      <motion.h2
        className="text-3xl font-bold text-center gradient-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {projectsData.map((project, index) => (
          // Outer layer: Framer Motion fade-in
          <motion.div
            key={index}
            className="flex"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* Inner layer: glass card + hover effect */}
            <div className="relative overflow-hidden glass-card glass-card-hover rounded-xl p-6 text-left flex flex-col flex-1">
              {/* Gradient line on top */}
              <div className="absolute top-0 left-0 right-0 h-1 gradient-bg" />

              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">
                {project.name}
              </h3>

              <div className="flex gap-2 flex-wrap mt-3">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-indigo-700 dark:text-cyan-200 bg-indigo-500/10 dark:bg-white/10 border border-indigo-500/30 dark:border-white/15"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* flex-1 pushes the buttons to the bottom of every card */}
              <p className="mt-3 text-gray-600 dark:text-slate-300 flex-1">
                {project.description}
              </p>

              {/* Conditional buttons */}
              {(project.github || project.live) && (
                <div className="flex gap-3 mt-5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-medium text-indigo-700 dark:text-cyan-200 bg-white/40 dark:bg-white/5 border border-indigo-500/60 dark:border-cyan-400/60 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/40"
                    >
                      <FaGithub />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-medium text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-500/30 transition-all duration-300 hover:scale-105"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;