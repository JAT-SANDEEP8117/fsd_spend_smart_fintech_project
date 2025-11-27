// src/features/transactions/EditTransaction.jsx
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

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
  if (!open || !transaction) return null;

  const [type, setType] = useState(transaction.type);
  const [amount, setAmount] = useState(transaction.amount);
  const [category, setCategory] = useState(transaction.category);
  const [date, setDate] = useState(transaction.date);
  const [description, setDescription] = useState(transaction.description);

  const categories = type === "income" ? incomeCategories : expenseCategories;

  const handleUpdate = () => {
    saveEdit({
      ...transaction,
      type,
      amount: Number(amount),
      category,
      date,
      description: description || "No description",
    });

    setOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-xl w-[420px] animate-scaleIn">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold dark:text-white">Edit Transaction</h2>
          <FaTimes
            onClick={() => setOpen(false)}
            className="cursor-pointer text-gray-700 dark:text-gray-300"
          />
        </div>

        {/* TYPE SWITCH */}
        <div className="flex mb-4">
          <button
            className={`flex-1 py-2 rounded-l-lg ${
              type === "income"
                ? "bg-green-600 text-white"
                : "bg-gray-300 dark:bg-gray-700 dark:text-gray-300"
            }`}
            onClick={() => {
              setType("income");
              setCategory(incomeCategories[0]);
            }}
          >
            Income
          </button>

          <button
            className={`flex-1 py-2 rounded-r-lg ${
              type === "expense"
                ? "bg-red-600 text-white"
                : "bg-gray-300 dark:bg-gray-700 dark:text-gray-300"
            }`}
            onClick={() => {
              setType("expense");
              setCategory(expenseCategories[0]);
            }}
          >
            Expense
          </button>
        </div>

        {/* AMOUNT */}
        <label className="text-sm dark:text-gray-300">Amount</label>
        <input
          type="number"
          className="w-full mt-1 p-2 rounded bg-white dark:bg-gray-900 border dark:border-gray-700"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        {/* CATEGORY */}
        <label className="text-sm mt-4 block dark:text-gray-300">Category</label>
        <select
          className="w-full mt-1 p-2 rounded bg-white dark:bg-gray-900 border dark:border-gray-700"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        {/* DATE */}
        <label className="text-sm mt-4 block dark:text-gray-300">Date</label>
        <input
          type="date"
          className="w-full mt-1 p-2 rounded bg-white dark:bg-gray-900 border dark:border-gray-700"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        {/* DESCRIPTION */}
        <label className="text-sm mt-4 block dark:text-gray-300">
          Description
        </label>
        <input
          className="w-full mt-1 p-2 rounded bg-white dark:bg-gray-900 border dark:border-gray-700"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* BUTTONS */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 dark:text-white"
          >
            Cancel
          </button>

          <button
            onClick={handleUpdate}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Update
          </button>
        </div>

      </div>
    </div>
  );
};

export default EditTransaction;
