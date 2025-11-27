// src/features/transactions/AddTransaction.jsx
import { useState, useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
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

const AddTransaction = () => {
  const { addTransaction } = useContext(TransactionContext);

  const [open, setOpen] = useState(false);
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(incomeCategories[0]);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const categories = type === "income" ? incomeCategories : expenseCategories;

  const openModal = () => {
    setOpen(true);
    setType("income");
    setAmount("");
    setCategory(incomeCategories[0]);
    setDate("");
    setDescription("");
  };

  const saveTransaction = () => {
    if (!amount || !date) {
      alert("Please fill Amount & Date fields!");
      return;
    }

    addTransaction({
      id: Date.now(),
      type,
      amount: Number(amount),
      category,
      date,
      description: description || "No description",
    });

    setOpen(false);
  };

  return (
    <>
      {/* Add Button */}
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
      >
        + Add Transaction
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-xl w-[420px] animate-scaleIn">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-black dark:text-white">
                Add Transaction
              </h2>
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
              placeholder="e.g. 500"
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
              Description (optional)
            </label>
            <input
              placeholder="e.g. salary for November"
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
                onClick={saveTransaction}
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Save
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default AddTransaction;
