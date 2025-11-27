import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaList,
  FaChartPie,
  FaBrain,
  FaFilePdf,
  FaInfoCircle,
  FaBars
} from "react-icons/fa";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
      isActive
        ? "bg-blue-600 text-white dark:bg-blue-700 shadow-md transform scale-105"
        : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:transform hover:scale-105"
    }`;

  return (
    <aside className="fixed left-0 top-0 w-60 h-screen bg-white dark:bg-gray-900 shadow-xl border-r border-gray-200 dark:border-gray-700 z-50">
      <div className="p-4 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg shadow-md">
              <FaBars className="text-white text-lg" />
            </div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Menu</h2>
          </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 flex-1">
          <NavLink to="/" className={linkClass}>
            <FaHome /> Dashboard
          </NavLink>

          <NavLink to="/transactions" className={linkClass}>
            <FaList /> Transactions
          </NavLink>

          <NavLink to="/analytics" className={linkClass}>
            <FaChartPie /> Analytics
          </NavLink>

          <NavLink to="/pdf" className={linkClass}>
            <FaFilePdf /> PDF Export
          </NavLink>

          <NavLink to="/insights" className={linkClass}>
            <FaBrain /> AI Insights
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            <FaInfoCircle /> About
          </NavLink>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
