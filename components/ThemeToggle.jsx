"use client";

import { useTheme } from "./ThemeProvider";
import { useState, useEffect } from "react";

export default function EnhancedThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-neutral-800 flex items-center justify-center">
        <span className="sr-only">Toggle theme</span>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        w-10 h-10 rounded-full flex items-center justify-center
        transition-all duration-300 ease-in-out relative overflow-hidden
        ${
          theme === "dark"
            ? "bg-neutral-800 text-amber-400"
            : "bg-amber-50 text-amber-800"
        }
      `}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {/* Sun Icon - Shown in light mode */}
      <svg
        className={`h-5 w-5 absolute transition-all duration-500 ${
          theme === "dark"
            ? "opacity-0 rotate-90 scale-0"
            : "opacity-100 rotate-0 scale-100"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clipRule="evenodd"
        />
      </svg>

      {/* Moon Icon - Shown in dark mode */}
      <svg
        className={`h-5 w-5 absolute transition-all duration-500 ${
          theme === "light"
            ? "opacity-0 -rotate-90 scale-0"
            : "opacity-100 rotate-0 scale-100"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>

      {/* Background effect */}
      <span
        className={`
          absolute inset-0 rounded-full transform transition-all duration-700
          ${
            theme === "dark"
              ? "bg-gradient-to-br from-amber-700/20 to-amber-500/10 opacity-100"
              : "bg-gradient-to-br from-amber-200/30 to-amber-100/20 opacity-0"
          }
        `}
      />
    </button>
  );
}
