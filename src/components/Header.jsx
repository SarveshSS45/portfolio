import { useEffect, useState } from "react";
import {
  FaHome,
  FaBriefcase,
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
    { id: "experience", label: "Experience", icon: <FaBriefcase className="text-xl" /> },
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
        selectedTab === id
          ? "bg-indigo-500/10 dark:bg-white/10 ring-1 ring-indigo-500/30 dark:ring-white/10"
          : ""
      }`}
    >
      <div
        className={`transition-colors duration-300 ${
          selectedTab === id
            ? "text-indigo-600 dark:text-cyan-300"
            : "text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-300"
        }`}
      >
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
                className="font-bold text-[17px] gradient-text"
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
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Glass background layer (kept separate so the fixed mobile elements below stay pinned to the screen) */}
      <div className="absolute inset-0 bg-white/70 dark:bg-ink-950/70 backdrop-blur-xl border-b border-gray-200/60 dark:border-white/10 pointer-events-none" />

      <div className="relative container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold leading-tight gradient-text">
          &lt; Sarvesh Sonawane /&gt;
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 font-bold text-[17px]">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setSelectedTab(item.id)}
              className="relative group px-2 py-1"
            >
              <span
                className={`transition-colors duration-300 ${
                  selectedTab === item.id
                    ? "gradient-text"
                    : "text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-cyan-300"
                }`}
              >
                {item.label}
              </span>
              <span
                className={`absolute bottom-0 left-0 h-0.5 gradient-bg transition-all duration-300 origin-left ${
                  selectedTab === item.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          ))}
        </div>

        {/* Dark Mode Toggle for Desktop */}
        <div className="hidden md:flex">
          <DarkModeToggle />
        </div>
      </div>

      {/* Bottom Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white/80 dark:bg-ink-950/80 backdrop-blur-xl border-t border-gray-200/60 dark:border-white/10 px-2 py-2 flex justify-around items-center z-50">
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