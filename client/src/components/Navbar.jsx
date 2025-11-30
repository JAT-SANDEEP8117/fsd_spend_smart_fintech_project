// src/components/Navbar.jsx
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMoon, FaSun, FaWallet, FaUser, FaSignOutAlt, FaChevronDown } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggle = () => {
    toggleTheme();
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
    setShowDropdown(false);
  };

  const handleProfile = () => {
    navigate("/profile");
    setShowDropdown(false);
  };

  return (
    <nav className="w-full px-6 py-4 bg-white dark:bg-gray-900 shadow-md flex justify-between items-center border-b border-gray-200 dark:border-gray-700 transition-colors">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold bg-linear-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
          Spend Smart
        </h1>
      </div>

      <div className="flex items-center gap-4">
        {user && (
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
            >
              <FaUser className="text-gray-700 dark:text-gray-300" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {user.username}
              </span>
              <FaChevronDown className="text-gray-700 dark:text-gray-300 text-xs" />
            </button>

            {showDropdown && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowDropdown(false)}
                ></div>
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-20">
                  <button
                    onClick={handleProfile}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-t-lg"
                  >
                    <FaUser className="text-blue-600 dark:text-blue-400" />
                    <span>Profile</span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-b-lg"
                  >
                    <FaSignOutAlt />
                    <span>Logout</span>
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
