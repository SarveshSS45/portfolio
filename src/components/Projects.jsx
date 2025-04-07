import React from 'react';
import { projectsData } from '../data/data'; 

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-white dark:bg-gray-900 p-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center border-2 border-gray-200 dark:border-gray-700 
            transition duration-300 ease-in-out 
            hover:-translate-y-1 hover:scale-105 
            hover:border-blue-500 dark:hover:border-indigo-400"
          >
            {/* Project Name */}
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{project.name}</h3>

            {/* Tech Stack box */}
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

            {/* Description */}
            <p className="mt-3 text-gray-600 dark:text-gray-300">{project.description}</p>

            {/* Buttons for GitHub & Live Demo */}
            {project.github && project.live && (
              <div className="flex justify-center gap-4 mt-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition"
                >
                  GitHub
                </a>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500 transition"
                >
                  Live
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
