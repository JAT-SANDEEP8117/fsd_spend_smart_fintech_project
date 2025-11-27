// src/context/ThemeContext.jsx
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

// Apply theme class to document root
const applyThemeClass = (theme) => {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
    root.setAttribute("data-theme", "dark");
  } else {
    root.classList.remove("dark");
    root.setAttribute("data-theme", "light");
  }
};

// Get initial theme from localStorage
const getInitialTheme = () => {
  try {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      applyThemeClass(savedTheme);
      return savedTheme;
    }
  } catch (e) {
    console.error("Error reading theme from localStorage:", e);
  }
  // Default to dark
  applyThemeClass("dark");
  return "dark";
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  // Apply theme whenever it changes
  useEffect(() => {
    applyThemeClass(theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      console.error("Error saving theme to localStorage:", e);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "dark" ? "light" : "dark";
      console.log("Theme toggled from", prev, "to", newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

