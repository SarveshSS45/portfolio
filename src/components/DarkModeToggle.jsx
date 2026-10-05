import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (localStorage.theme) return localStorage.theme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="glass-card glass-card-hover flex items-center justify-center w-10 h-10 rounded-full text-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-400"
      title="Toggle Dark Mode"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <FaSun className="text-amber-300" />
      ) : (
        <FaMoon className="text-indigo-600" />
      )}
    </button>
  );
};

export default DarkModeToggle;