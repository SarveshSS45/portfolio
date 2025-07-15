import { useEffect, useState } from "react";
import {
  FaHome,
  FaProjectDiagram,
  FaTools,
  FaGraduationCap,
  FaEnvelope,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [selectedTab, setSelectedTab] = useState("home");

  // Sync with URL hash on load
  useEffect(() => {
    const currentHash = window.location.hash.replace("#", "");
    if (currentHash) setSelectedTab(currentHash);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: <FaHome className="text-xl" /> },
    { id: "projects", label: "Projects", icon: <FaProjectDiagram className="text-xl" /> },
    { id: "skills", label: "Skills", icon: <FaTools className="text-xl" /> },
    { id: "education", label: "Education", icon: <FaGraduationCap className="text-xl" /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope className="text-xl" /> },
  ];

  const NavLink = ({ id, label, icon }) => (
    <a
      href={`#${id}`}
      onClick={() => setSelectedTab(id)}
      className={`flex items-center justify-center text-sm transition-all duration-300 px-3 py-2 rounded-lg ${
        selectedTab === id ? "bg-gray-100 dark:bg-gray-800 shadow-md" : ""
      }`}
    >
      <div className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
        <div className="flex items-center gap-2">
          {icon}
          <AnimatePresence mode="wait" initial={false}>
            {selectedTab === id && (
              <motion.span
                key={id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.25 }}
                className="font-bold text-[17px]"
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </a>
  );

  return (
    <header className="bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-md border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold leading-tight text-gray-900 dark:text-indigo-400">
          &lt; Sarvesh Sonawane /&gt;
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 font-bold text-[17px]">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setSelectedTab(item.id)}
              className={`relative group transition-colors duration-300 px-2 py-1 ${
                selectedTab === item.id
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
              }`}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full origin-left"></span>
            </a>
          ))}
        </div>

        {/* Dark Mode Toggle for Desktop */}
        <div className="hidden md:flex">
          <DarkModeToggle />
        </div>
      </div>

      {/* Bottom Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-2 py-2 flex justify-around items-center z-50">
        {navItems.map((item) => (
          <NavLink key={item.id} {...item} />
        ))}
      </div>

      {/* Dark Mode Toggle for Mobile */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;