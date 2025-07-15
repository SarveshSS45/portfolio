import { skillsData } from '../data/data';

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-4 transition-colors duration-300"
    >
      <div className="container mx-auto">
        {/* Heading */}
        <div className="animate-fade-in-down transition-all duration-700 ease-out">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-2">
            My Skills
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Here are the technologies I work with to build modern, responsive, and efficient applications.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {skillsData.map((skillCategory, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl 
                border border-gray-200 dark:border-gray-700 
                transition-all duration-500 ease-in-out 
                hover:-translate-y-2 hover:shadow-2xl 
                hover:shadow-cyan-500/20 dark:hover:shadow-blue-500/20
                hover:border-indigo-300 dark:hover:border-indigo-400 
                animate-fade-in-up"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
                {skillCategory.category}
              </h3>

              <div className="flex justify-center gap-8 flex-wrap">
                {skillCategory.skills.map((skill, i) => (
                  <div
                    key={`${skill.name}-${i}`}
                    className="flex flex-col items-center group p-3 rounded-lg 
                      hover:bg-gray-100 dark:hover:bg-gray-700 
                      transition-all duration-300 ease-in-out 
                      transform hover:scale-105"
                  >
                    <div
                      className="w-16 h-16 flex items-center justify-center mb-2 
                        transition-transform duration-300 
                        group-hover:scale-110 group-hover:shadow-lg 
                        group-hover:shadow-blue-500/30"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <span
                      className="text-gray-700 dark:text-gray-200 font-medium 
                        group-hover:text-indigo-600 dark:group-hover:text-indigo-400 
                        transition-colors duration-300"
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;