import { motion } from "framer-motion";
import { skillsData } from "../data/data";

const Skills = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  // If the number of categories is odd, the last card spans the full width
  const isOdd = skillsData.length % 2 === 1;

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-4 transition-colors duration-300"
    >
      <div className="container mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-4xl font-bold text-center gradient-text mb-2">
            My Skills
          </h2>
          <p className="text-center text-gray-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            Here are the technologies I work with to build modern, responsive, and efficient applications.
          </p>
        </motion.div>

        {/* Skills Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {skillsData.map((skillCategory, index) => {
            const isLastAndOdd = isOdd && index === skillsData.length - 1;

            return (
              // Outer layer: Framer Motion fade-in
              <motion.div
                key={index}
                className={`flex ${isLastAndOdd ? "md:col-span-2" : ""}`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: false, amount: 0.2 }}
              >
                {/* Inner layer: glass card + hover effect */}
                <div className="relative overflow-hidden glass-card glass-card-hover rounded-xl p-6 flex flex-col flex-1">
                  {/* Gradient line on top */}
                  <div className="absolute top-0 left-0 right-0 h-1 gradient-bg" />

                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 mt-1 text-center">
                    {skillCategory.category}
                  </h3>

                  <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
                    {skillCategory.skills.map((skill, i) => (
                      <div
                        key={`${skill.name}-${i}`}
                        className="group flex flex-col items-center p-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-indigo-500/10 dark:hover:bg-white/10 hover:-translate-y-1"
                      >
                        {/* Light tile so dark icons stay visible in dark mode */}
                        <div className="w-16 h-16 flex items-center justify-center mb-2 rounded-xl bg-white shadow-md ring-1 ring-black/5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-indigo-500/30">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                        <span className="text-sm text-center text-gray-700 dark:text-slate-200 font-medium transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-cyan-300">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;