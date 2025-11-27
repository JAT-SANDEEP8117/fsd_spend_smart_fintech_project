// src/pages/Analytics.jsx
import { useContext, useMemo } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { FaChartLine, FaChartPie, FaDollarSign, FaPiggyBank } from "react-icons/fa";
import calculateTotals from "../utils/calculateTotals";

import LineChartComponent from "../components/charts/LineChart";
import CategoryChart from "../components/charts/CategoryChart";
import IncomeChart from "../components/charts/IncomeChart";
import IncomeExpenseSavingsChart from "../components/charts/IncomeExpenseSavingsChart";

const Analytics = () => {
  const { transactions } = useContext(TransactionContext);
  const { totalIncome, totalExpense, balance } = calculateTotals(transactions);

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

  // Income category totals
  const incomeCategoryTotals = useMemo(() => {
    const totals = {};
    transactions.forEach((t) => {
      if (t.type === "income") {
        totals[t.category] = (totals[t.category] || 0) + t.amount;
      }
    });
    return totals;
  }, [transactions]);

  // Calculate savings rate
  const savingsRate = totalIncome > 0 ? ((balance / totalIncome) * 100).toFixed(1) : 0;

  return (
    <div className="text-gray-900 dark:text-white animate-fadeIn">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Analytics Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">Comprehensive financial insights and visualizations</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 rounded-xl p-4 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <FaDollarSign className="text-2xl" />
            <span className="text-sm opacity-90">Income</span>
          </div>
          <p className="text-2xl font-bold">₹{totalIncome.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 rounded-xl p-4 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <FaChartLine className="text-2xl" />
            <span className="text-sm opacity-90">Expense</span>
          </div>
          <p className="text-2xl font-bold">₹{totalExpense.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-xl p-4 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <FaPiggyBank className="text-2xl" />
            <span className="text-sm opacity-90">Savings</span>
          </div>
          <p className="text-2xl font-bold">₹{balance.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 rounded-xl p-4 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <FaChartPie className="text-2xl" />
            <span className="text-sm opacity-90">Savings Rate</span>
          </div>
          <p className="text-2xl font-bold">{savingsRate}%</p>
        </div>
      </div>

      {/* Main Charts Section */}
      <div className="space-y-6">
        {/* Line Chart - Full Width */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <FaChartLine className="text-blue-600 dark:text-blue-400 text-xl" />
            <h2 className="text-xl font-semibold">Income vs Expense Trend (Monthly)</h2>
          </div>
          <LineChartComponent data={transactions} />
        </div>

        {/* Pie Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Expense Categories */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <FaChartPie className="text-red-600 dark:text-red-400 text-xl" />
              <h2 className="text-xl font-semibold">Expense by Category</h2>
            </div>
            <CategoryChart data={categoryTotals} />
            {Object.keys(categoryTotals).length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Top Category: <span className="font-semibold text-gray-900 dark:text-white">
                    {Object.entries(categoryTotals).sort((a, b) => b[1] - a[1])[0]?.[0]}
                  </span>
                </p>
              </div>
            )}
          </div>

          {/* Income Categories */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <FaChartPie className="text-green-600 dark:text-green-400 text-xl" />
              <h2 className="text-xl font-semibold">Income by Category</h2>
            </div>
            <IncomeChart data={transactions} />
            {Object.keys(incomeCategoryTotals).length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Top Source: <span className="font-semibold text-gray-900 dark:text-white">
                    {Object.entries(incomeCategoryTotals).sort((a, b) => b[1] - a[1])[0]?.[0]}
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Income vs Savings vs Expenses */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <FaChartPie className="text-purple-600 dark:text-purple-400 text-xl" />
            <h2 className="text-xl font-semibold">Financial Overview</h2>
          </div>
          <IncomeExpenseSavingsChart data={transactions} />
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Income</p>
                <p className="text-lg font-bold text-green-600 dark:text-green-400">
                  ₹{totalIncome.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Expenses</p>
                <p className="text-lg font-bold text-red-600 dark:text-red-400">
                  ₹{totalExpense.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Savings</p>
                <p className={`text-lg font-bold ${balance >= 0 ? 'text-blue-600 dark:text-blue-400' : 'text-red-600 dark:text-red-400'}`}>
                  ₹{balance.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
