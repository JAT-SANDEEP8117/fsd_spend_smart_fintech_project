import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaList,
  FaChartPie,
  FaBrain,
  FaFilePdf,
  FaInfoCircle
} from "react-icons/fa";

const Sidebar = () => {
  const linkClass =
    "flex items-center gap-3 px-4 py-3 rounded-lg text-gray-200 hover:bg-gray-700 transition";

  return (
    <aside className="w-60 h-screen bg-gray-900 shadow-lg p-4 fixed left-0 top-0">
      <h2 className="text-lg font-semibold mb-6 text-white">Menu</h2>

      <nav className="flex flex-col gap-3">
        
        <NavLink to="/" className={linkClass}>
          <FaHome /> Dashboard
        </NavLink>

        <NavLink to="/transactions" className={linkClass}>
          <FaList /> Transactions
        </NavLink>

        {/*  NEW — Analytics (Charts) */}
        <NavLink to="/analytics" className={linkClass}>
          <FaChartPie /> Analytics
        </NavLink>

        <NavLink to="/pdf" className={linkClass}>
          <FaFilePdf /> PDF Export
        </NavLink>

        {/*  DO NOT REMOVE — Insights (AI/ML Page) */}
        <NavLink to="/insights" className={linkClass}>
          <FaBrain /> AIInsights
        </NavLink>

        <NavLink to="/about" className={linkClass}>
          <FaInfoCircle /> About
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
