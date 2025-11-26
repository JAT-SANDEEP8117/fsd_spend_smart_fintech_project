import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaList,
  FaBrain,
  FaFilePdf,
  FaInfoCircle
} from "react-icons/fa";

const Sidebar = () => {
  const linkClass =
    "flex items-center gap-3 px-4 py-3 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition";

  return (
<aside className="w-60 h-screen fixed left-0 top-0 bg-gray-100 dark:bg-gray-900 shadow-lg p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
        Menu
      </h2>

      <nav className="flex flex-col gap-3">
        <NavLink to="/" className={linkClass}>
          <FaHome /> Dashboard
        </NavLink>

        <NavLink to="/transactions" className={linkClass}>
          <FaList /> Transactions
        </NavLink>

        <NavLink to="/insights" className={linkClass}>
          <FaBrain /> Insights
        </NavLink>

        <NavLink to="/pdf" className={linkClass}>
          <FaFilePdf /> PDF Export
        </NavLink>

        <NavLink to="/about" className={linkClass}>
          <FaInfoCircle /> About
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
