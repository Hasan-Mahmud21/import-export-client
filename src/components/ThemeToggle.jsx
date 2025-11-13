import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

 
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative flex items-center w-16 h-8 rounded-full bg-base-300 px-1 transition-all duration-300 border border-base-300 hover:border-primary/60"
    >
      
      <div
        className={`absolute w-6 h-6 rounded-full bg-base-100 shadow-md transform transition-transform duration-300 flex items-center justify-center
          ${theme === "light" ? "translate-x-0" : "translate-x-8"}
        `}
      >
        {theme === "light" ? (
          <FaSun className="text-yellow-400 text-sm" />
        ) : (
          <FaMoon className="text-blue-300 text-sm" />
        )}
      </div>

      {/* labels (for subtle hint) */}
      <span className="flex-1 text-[10px] text-left pl-1 text-base-content/60">
        L
      </span>
      <span className="flex-1 text-[10px] text-right pr-1 text-base-content/60">
        D
      </span>
    </button>
  );
};

export default ThemeToggle;
