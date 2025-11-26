import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="w-full px-6 py-4 bg-white dark:bg-gray-900 shadow flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
        Spend Smart
      </h1>

      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      >
        {theme === "dark" ? (
          <FaSun className="text-yellow-400" />
        ) : (
          <FaMoon className="text-gray-900" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
