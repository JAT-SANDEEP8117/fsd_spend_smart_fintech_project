// src/features/transactions/EditTransaction.jsx
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const incomeCategories = [
  "Salary",
  "Freelancing",
  "Business Income",
  "Interest Income",
  "Investments",
  "Others",
];

const expenseCategories = [
  "Food",
  "Transport",
  "Bills",
  "Shopping",
  "Groceries",
  "Rent",
  "Entertainment",
  "Others",
];

const EditTransaction = ({ open, setOpen, transaction, saveEdit }) => {
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  // Load existing data when modal opens
  useEffect(() => {
    if (transaction) {
      setType(transaction.type);
      setAmount(transaction.amount);
      setCategory(transaction.category);
      setDate(transaction.date);
      setDescription(transaction.description || "");
    }
  }, [transaction, open]);

  if (!open || !transaction) return null;

  const categories = type === "income" ? incomeCategories : expenseCategories;

  const handleUpdate = () => {
    if (!amount || !date) {
      toast.error("Amount and Date are required!");
      return;
    }

    const updatedTx = {
      ...transaction,
      type,
      amount: Number(amount),
      category,
      date,
      description,
    };

    saveEdit(updatedTx); // This will call updateTransaction from context
  };

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50" onClick={() => setOpen(false)}>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl w-[420px] max-w-[90vw] border border-gray-200 dark:border-gray-700" onClick={(e) => e.stopPropagation()}>

        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Edit Transaction
        </h2>

        {/* Type Switch */}
        <div className="flex mb-4 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600">
          <button
            className={`flex-1 py-2.5 transition-colors ${
              type === "income"
                ? "bg-green-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
            onClick={() => {
              setType("income");
              setCategory(incomeCategories[0]);
            }}
          >
            Income
          </button>

          <button
            className={`flex-1 py-2.5 transition-colors ${
              type === "expense"
                ? "bg-red-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
            onClick={() => {
              setType("expense");
              setCategory(expenseCategories[0]);
            }}
          >
            Expense
          </button>
        </div>

        {/* Amount */}
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">Amount</label>
        <input
          className="w-full mt-1 mb-4 p-2.5 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />

        {/* Category */}
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">
          Category
        </label>
        <select
          className="w-full mt-1 mb-4 p-2.5 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        {/* Date */}
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">Date</label>
        <input
          className="w-full mt-1 mb-4 p-2.5 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        {/* Description */}
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">
          Description (optional)
        </label>
        <input
          className="w-full mt-1 mb-4 p-2.5 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add a description"
        />

        {/* Buttons */}
        <div className="flex justify-end mt-6 gap-3">
          <button
            onClick={() => setOpen(false)}
            className="px-5 py-2.5 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-all transform hover:scale-105 active:scale-95 font-medium"
          >
            Cancel
          </button>

          <button
            onClick={handleUpdate}
            className="px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95 font-medium"
          >
            Update
          </button>
        </div>

      </div>
    </div>
  );
};

export default EditTransaction;
