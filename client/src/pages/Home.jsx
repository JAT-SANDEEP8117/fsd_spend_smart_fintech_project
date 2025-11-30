import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import calculateTotals from "../utils/calculateTotals";
import { FaArrowUp, FaArrowDown, FaPiggyBank, FaWallet } from "react-icons/fa";

const Home = () => {
  const { transactions } = useContext(TransactionContext);
  const { totalIncome, totalExpense, balance } = calculateTotals(transactions);

  // ⭐ Sort by DATE newest first
  const sortedRecent = [...transactions]
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (dateB - dateA !== 0) return dateB - dateA;
      const idA = typeof a.id === 'string' ? a.id : String(a.id);
      const idB = typeof b.id === 'string' ? b.id : String(b.id);
      return idB.localeCompare(idA);
    })
    .slice(0, 6);

  return (
    <div className="text-gray-900 dark:text-white animate-fadeIn">
      {/* Header with Illustration */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Welcome back! Here's your financial overview</p>
          </div>
          <div className="hidden md:flex items-center justify-center w-32 h-32 bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full">
            <FaWallet className="text-6xl text-blue-600 dark:text-blue-400" />
          </div>
        </div>
      </div>

      {/* Summary Cards with Icons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="p-6 bg-linear-to-br from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 rounded-xl shadow-lg text-white hover:shadow-xl transition-all transform hover:scale-105">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/20 rounded-lg">
              <FaArrowUp className="text-2xl" />
            </div>
          </div>
          <h2 className="text-lg font-semibold mb-2">Total Income</h2>
          <p className="text-3xl font-bold">₹{totalIncome.toLocaleString()}</p>
        </div>

        <div className="p-6 bg-linear-to-br from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 rounded-xl shadow-lg text-white hover:shadow-xl transition-all transform hover:scale-105">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/20 rounded-lg">
              <FaArrowDown className="text-2xl" />
            </div>
          </div>
          <h2 className="text-lg font-semibold mb-2">Total Expense</h2>
          <p className="text-3xl font-bold">₹{totalExpense.toLocaleString()}</p>
        </div>

        <div className="p-6 bg-linear-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-xl shadow-lg text-white hover:shadow-xl transition-all transform hover:scale-105">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/20 rounded-lg">
              <FaPiggyBank className="text-2xl" />
            </div>
          </div>
          <h2 className="text-lg font-semibold mb-2">Savings</h2>
          <p className="text-3xl font-bold">₹{balance.toLocaleString()}</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <span>Recent Transactions</span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            ({sortedRecent.length} of {transactions.length})
          </span>
        </h2>
      </div>

      {sortedRecent.length === 0 ? (
        <div className="p-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center border border-gray-200 dark:border-gray-700">
          <FaWallet className="text-5xl text-gray-400 dark:text-gray-500 mx-auto mb-4" />
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-2">No transactions yet</p>
          <p className="text-sm text-gray-400 dark:text-gray-500">Add your first transaction to get started!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sortedRecent.map((t) => (
            <div
              key={t.id}
              className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all transform hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${
                      t.type === "income" 
                        ? "bg-green-100 dark:bg-green-900/30" 
                        : "bg-red-100 dark:bg-red-900/30"
                    }`}>
                      {t.type === "income" ? (
                        <FaArrowUp className="text-green-600 dark:text-green-400" />
                      ) : (
                        <FaArrowDown className="text-red-600 dark:text-red-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white capitalize text-lg">
                        {t.category}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t.date}</p>
                    </div>
                  </div>
                  {t.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 ml-11">
                      {t.description}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <span
                    className={`text-xl font-bold ${
                      t.type === "income" 
                        ? "text-green-600 dark:text-green-400" 
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {t.type === "income" ? "+ ₹" : "- ₹"}
                    {t.amount.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
