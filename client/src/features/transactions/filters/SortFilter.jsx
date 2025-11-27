// src/features/transactions/filters/SortFilter.jsx
import { FaSort } from "react-icons/fa";

const SortFilter = ({ sortBy, setSortBy }) => {
  return (
    <div className="flex items-center gap-2">
      <FaSort className="text-gray-600 dark:text-gray-400" />
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all active:scale-95"
      >
        <option value="latest">Latest First</option>
        <option value="oldest">Oldest First</option>
        <option value="amount-high">Amount: High to Low</option>
        <option value="amount-low">Amount: Low to High</option>
        <option value="category">Category (A-Z)</option>
      </select>
    </div>
  );
};

export default SortFilter;

