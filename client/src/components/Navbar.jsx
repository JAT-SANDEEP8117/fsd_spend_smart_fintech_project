// src/components/Navbar.jsx
import { useContext } from "react";
import { FaMoon, FaSun, FaWallet } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <nav className="w-full px-6 py-4 bg-white dark:bg-gray-900 shadow-md flex justify-between items-center border-b border-gray-200 dark:border-gray-700 transition-colors">
      <div className="flex items-center gap-3">
        {/* Logo commented out - can be enabled later */}
        {/* <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-md">
          <FaWallet className="text-white text-xl" />
        </div> */}
        <h1 className="text-xl font-bold text-gray-900 dark:text-white bg-linear-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
          Spend Smart
        </h1>
      </div>

      {/* Theme toggle commented out - can be enabled later */}
      {/* <button
        onClick={handleToggle}
        aria-label="Toggle theme"
        className="p-2.5 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        type="button"
      >
        {theme === "dark" ? (
          <FaSun className="text-yellow-400 text-lg" />
        ) : (
          <FaMoon className="text-gray-700 text-lg" />
        )}
      </button> */}
    </nav>
  );
};

export default Navbar;
