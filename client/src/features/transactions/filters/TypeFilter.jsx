// src/features/transactions/filters/TypeFilter.jsx
import { FaFilter } from "react-icons/fa";

const TypeFilter = ({ filterType, setFilterType }) => {
  return (
    <div className="flex items-center gap-2">
      <FaFilter className="text-gray-600 dark:text-gray-400" />
      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all active:scale-95"
      >
        <option value="all">All Transactions</option>
        <option value="income">Income Only</option>
        <option value="expense">Expense Only</option>
      </select>
    </div>
  );
};

export default TypeFilter;

