// src/context/TransactionContext.jsx

import { createContext, useEffect, useState } from "react";
import api from "../utils/api";
import { toast } from "react-toastify";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  // 🔥 SORT: Latest FIRST (by date, then by id)
  const sortByLatest = (data) => {
    return [...data].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      const dateDiff = dateB - dateA;
      if (dateDiff !== 0) return dateDiff;

      // fallback when same date → compare IDs (handle both string and numeric)
      const idA = typeof a.id === 'string' ? a.id : String(a.id);
      const idB = typeof b.id === 'string' ? b.id : String(b.id);
      return idB.localeCompare(idA);
    });
  };

  // 📌 Fetch all transactions from JSON server
  const fetchTransactions = async () => {
    try {
      const res = await api.get("/transactions");
      setTransactions(sortByLatest(res.data));
    } catch (err) {
      console.error("Error fetching transactions:", err);
      toast.error("Failed to load transactions.");
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  // ➕ ADD Transaction
  const addTransaction = async (tx) => {
    try {
      const res = await api.post("/transactions", tx);

      setTransactions((prev) => sortByLatest([...prev, res.data]));
      toast.success("Transaction added!");
    } catch (err) {
      console.error("Error adding transaction:", err);
      toast.error("Failed to add transaction.");
    }
  };

  // 🗑 DELETE Transaction
  const deleteTransaction = async (id) => {
    try {
      await api.delete(`/transactions/${id}`);

      setTransactions((prev) =>
        sortByLatest(prev.filter((t) => t.id !== id))
      );
      toast.info("Transaction deleted!");
    } catch (err) {
      console.error("Error deleting transaction:", err);
      toast.error("Failed to delete transaction.");
    }
  };

  // ✏️ UPDATE Transaction
  const updateTransaction = async (updatedTx) => {
    try {
      const res = await api.put(`/transactions/${updatedTx.id}`, updatedTx);

      setTransactions((prev) =>
        sortByLatest(prev.map((t) => (t.id === updatedTx.id ? res.data : t)))
      );

      toast.success("Transaction updated!");
    } catch (err) {
      console.error("Error updating transaction:", err);
      toast.error("Failed to update transaction.");
    }
  };

  // 🔄 RESET All Transactions
  const resetAllTransactions = async () => {
    try {
      // Delete all transactions one by one
      const deletePromises = transactions.map((t) => api.delete(`/transactions/${t.id}`));
      await Promise.all(deletePromises);
      
      setTransactions([]);
      toast.success("All transactions have been reset!");
    } catch (err) {
      console.error("Error resetting transactions:", err);
      toast.error("Failed to reset transactions.");
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
        updateTransaction,
        resetAllTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
