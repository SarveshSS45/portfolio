import { useEffect, useState } from "react";

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
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white transition-all duration-300 hover:scale-110 shadow-md"
      title="Toggle Dark Mode"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
};

export default DarkModeToggle;
