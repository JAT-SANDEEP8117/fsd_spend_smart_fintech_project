import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import calculateTotals from "../utils/calculateTotals";

const Home = () => {
  const { transactions } = useContext(TransactionContext);
  const { totalIncome, totalExpense, balance } = calculateTotals(transactions);

  // ⭐ Sort by DATE + TIME newest first
  const sortedRecent = [...transactions]
    .sort((a, b) => {
      const dateA = new Date(a.date + "T" + (a.time || "00:00"));
      const dateB = new Date(b.date + "T" + (b.time || "00:00"));
      return dateB - dateA; // newest first
    })
    .slice(0, 5);

  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="p-6 bg-green-900 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Total Income</h2>
          <p className="text-3xl font-bold mt-2">₹{totalIncome}</p>
        </div>

        <div className="p-6 bg-red-900 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Total Expense</h2>
          <p className="text-3xl font-bold mt-2">₹{totalExpense}</p>
        </div>

        <div className="p-6 bg-blue-900 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Balance</h2>
          <p className="text-3xl font-bold mt-2">₹{balance}</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>

      <ul className="space-y-3">
        {sortedRecent.map((t) => (
          <li
            key={t.id}
            className="p-4 bg-gray-800 rounded-lg shadow flex justify-between"
          >
            <span>{t.category}</span>
            <span
              className={
                t.type === "income" ? "text-green-400" : "text-red-400"
              }
            >
              {t.type === "income" ? "+ ₹" : "- ₹"}
              {t.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
