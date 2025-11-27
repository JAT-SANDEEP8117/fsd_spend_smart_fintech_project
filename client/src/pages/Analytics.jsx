// src/pages/Analytics.jsx
import { useContext, useMemo } from "react";
import { TransactionContext } from "../context/TransactionContext";

import LineChartComponent from "../components/charts/LineChart";
import CategoryChart from "../components/charts/CategoryChart";
import IncomeChart from "../components/charts/IncomeChart";
import IncomeExpenseSavingsChart from "../components/charts/IncomeExpenseSavingsChart";

const Analytics = () => {
  const { transactions } = useContext(TransactionContext);

  // Category totals for expense chart
  const categoryTotals = useMemo(() => {
    const totals = {};
    transactions.forEach((t) => {
      if (t.type === "expense") {
        totals[t.category] = (totals[t.category] || 0) + t.amount;
      }
    });
    return totals;
  }, [transactions]);

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>

      {/* 1️⃣ Line Chart (Top full width) */}
      <div className="bg-gray-800 p-6 rounded-lg shadow mb-10">
        <h2 className="text-xl font-semibold mb-4">Income vs Expense (Monthly)</h2>
        <LineChartComponent data={transactions} />
      </div>

      {/* 2️⃣ Middle row — 2 charts side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">

        {/* Category-wise Expenses */}
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Category-wise Expenses</h2>
          <CategoryChart data={categoryTotals} />
        </div>

        {/* Income Breakdown */}
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Income Breakdown</h2>
          <IncomeChart data={transactions} />
        </div>

      </div>

      {/* 3️⃣ Bottom row — Expense Breakdown alone OR add something else */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* 4️⃣ Income vs Savings vs Expense */}
<div className="bg-gray-800 p-6 rounded-lg shadow">
  <h2 className="text-xl font-semibold mb-4">Income vs Savings vs Expenses</h2>
  <IncomeExpenseSavingsChart data={transactions} />
</div>


        {/* Empty space or future chart */}
        <div className="hidden lg:block"></div>

      </div>
    </div>
  );
};

export default Analytics;
