import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-6 px-4 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-200 dark:border-white/20 transition-colors duration-300">
      <p className="text-sm text-center md:text-left">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
          My Portfolio ~ Sarvesh Sonawane 
        </span>
        . All rights reserved.
      </p>

      <div className="flex gap-6 text-2xl text-indigo-600 dark:text-indigo-400">
        <a
          href="https://github.com/SarveshSS45"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white hover:scale-110 transition-transform duration-200"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sarvesh-sonawane-hesvras/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white hover:scale-110 transition-transform duration-200"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;