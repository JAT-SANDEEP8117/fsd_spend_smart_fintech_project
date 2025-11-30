// src/pages/PDFExport.jsx
import { useContext, useState, useMemo } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { FaDownload, FaFilePdf, FaFilter } from "react-icons/fa";
import { toast } from "react-toastify";
import PDFGenerator from "../features/pdf/PDFGenerator";

const PDFExport = () => {
  const { transactions } = useContext(TransactionContext);
  const [filterType, setFilterType] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [reportType, setReportType] = useState("all"); // all, monthly
  const [selectedMonth, setSelectedMonth] = useState("");

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set();
    transactions.forEach((t) => cats.add(t.category));
    return Array.from(cats).sort();
  }, [transactions]);

  // Get available months for monthly reports
  const availableMonths = useMemo(() => {
    const months = new Set();
    transactions.forEach((t) => {
      const month = t.date.slice(0, 7); // YYYY-MM
      months.add(month);
    });
    return Array.from(months).sort().reverse();
  }, [transactions]);

  // Filter transactions based on selected filters
  const filteredTransactions = useMemo(() => {
    let filtered = [...transactions];

    if (filterType !== "all") {
      filtered = filtered.filter((t) => t.type === filterType);
    }

    if (filterCategory !== "all") {
      filtered = filtered.filter((t) => t.category === filterCategory);
    }

    // Monthly report filter
    if (reportType === "monthly" && selectedMonth) {
      filtered = filtered.filter((t) => t.date.startsWith(selectedMonth));
    }

    // Sort by latest first
    return filtered.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (dateB - dateA !== 0) return dateB - dateA;
      const idA = typeof a.id === 'string' ? a.id : String(a.id);
      const idB = typeof b.id === 'string' ? b.id : String(b.id);
      return idB.localeCompare(idA);
    });
  }, [transactions, filterType, filterCategory, reportType, selectedMonth]);

  // Calculate totals
  const totals = useMemo(() => {
    const income = filteredTransactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);
    const expense = filteredTransactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);
    return { income, expense, balance: income - expense };
  }, [filteredTransactions]);

  const handleDownload = () => {
    if (filteredTransactions.length === 0) {
      toast.warning("No transactions to export!");
      return;
    }

    try {
      PDFGenerator.generatePDF({
        transactions: filteredTransactions,
        filterType,
        filterCategory,
        reportType,
        selectedMonth,
        totals,
      });
      toast.success("PDF downloaded successfully! 🎉");
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("Failed to generate PDF. Please try again.");
    }
  };

  return (
    <div className="text-gray-900 dark:text-white animate-fadeIn">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-linear-to-br from-red-500 to-red-600 rounded-xl shadow-lg">
          <FaFilePdf className="text-white text-2xl" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">PDF Export</h1>
          <p className="text-gray-600 dark:text-gray-400">Export your transactions as PDF</p>
        </div>
      </div>

      {/* Filters Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <FaFilter className="text-blue-600 dark:text-blue-400" />
          <h2 className="text-xl font-semibold">Export Filters</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {/* Report Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Report Type
            </label>
            <select
              value={reportType}
              onChange={(e) => {
                setReportType(e.target.value);
                if (e.target.value === "all") setSelectedMonth("");
              }}
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all active:scale-95"
            >
              <option value="all">All Transactions</option>
              <option value="monthly">Monthly Report</option>
            </select>
          </div>

          {/* Month Selector (only show for monthly reports) */}
          {reportType === "monthly" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Select Month
              </label>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all active:scale-95"
              >
                <option value="">Select Month</option>
                {availableMonths.map((month) => (
                  <option key={month} value={month}>
                    {new Date(month + "-01").toLocaleDateString("en-US", { year: "numeric", month: "long" })}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Type Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Transaction Type
            </label>
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

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category
            </label>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all active:scale-95"
            >
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Transactions</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {filteredTransactions.length}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Income</p>
              <p className="text-xl font-bold text-green-600 dark:text-green-400">
                ₹{totals.income.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Expense</p>
              <p className="text-xl font-bold text-red-600 dark:text-red-400">
                ₹{totals.expense.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className="flex justify-center">
        <button
          onClick={handleDownload}
          disabled={filteredTransactions.length === 0}
          className="px-8 py-4 bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl shadow-lg font-semibold text-lg flex items-center gap-3 transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          <FaDownload />
          Download PDF
        </button>
      </div>

      {/* Preview Info */}
      {filteredTransactions.length > 0 && (
        <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            <strong>Preview:</strong> Your PDF will include {filteredTransactions.length} transaction
            {filteredTransactions.length !== 1 ? "s" : ""}
            {reportType === "monthly" && selectedMonth && (
              <> for {new Date(selectedMonth + "-01").toLocaleDateString("en-US", { year: "numeric", month: "long" })}</>
            )}.
          </p>
        </div>
      )}
    </div>
  );
};

export default PDFExport;

