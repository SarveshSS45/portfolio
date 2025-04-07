import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({ children, href }) => (
    <a
      href={href}
      className="relative group text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 px-2 py-1"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full origin-left"></span>
    </a>
  );

  return (
    <header className="bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-md border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold leading-tight text-gray-900 dark:text-indigo-400">
            &lt; Sarvesh Sonawane /&gt;
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 font-bold text-[17px]">
          {["Home", "Projects", "Skills", "Education", "Contact"].map((item) => (
            <NavLink key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </NavLink>
          ))}
        </div>

        {/* Right Section (Toggle + Menu for mobile) */}
        <div className="flex items-center gap-4 md:hidden">
          <DarkModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>

        {/* Toggle on desktop (outside nav) */}
        <div className="hidden md:flex">
          <DarkModeToggle />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white dark:bg-gray-900 space-y-2 pb-4 border-t border-gray-200 dark:border-gray-700">
          {["Home", "Projects", "Skills", "Education", "Contact"].map((item) => (
            <NavLink key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
