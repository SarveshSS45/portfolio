import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-ink-950 text-gray-900 dark:text-white pt-6 pb-24 md:pb-6 px-4 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
      <p className="text-sm text-center md:text-left text-gray-600 dark:text-slate-300">
        &copy; {new Date().getFullYear()}{" "}
        <span className="gradient-text font-semibold">
          My Portfolio ~ Sarvesh Sonawane
        </span>
        . All rights reserved.
      </p>

      <div className="flex gap-4 text-xl">
        <a
          href="https://github.com/SarveshSS45"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="glass-card glass-card-hover flex items-center justify-center w-11 h-11 rounded-full text-indigo-600 dark:text-cyan-300 hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sarvesh-sonawane-hesvras/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="glass-card glass-card-hover flex items-center justify-center w-11 h-11 rounded-full text-indigo-600 dark:text-cyan-300 hover:scale-110"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;