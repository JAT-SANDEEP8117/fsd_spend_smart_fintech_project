// src/pages/Transactions.jsx
import { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";

import AddTransaction from "../features/transactions/AddTransaction";
import EditTransaction from "../features/transactions/EditTransaction";
import TransactionList from "../features/transactions/TransactionList";

const Transactions = () => {
  const { transactions, deleteTransaction, updateTransaction } = useContext(TransactionContext);

  const [editOpen, setEditOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  // ⭐ Correct sorting: newest → oldest (date + optional time)
  const sortedTransactions = [...transactions].sort((a, b) => {
    const dateA = new Date(a.date + "T" + (a.time || "00:00"));
    const dateB = new Date(b.date + "T" + (b.time || "00:00"));
    return dateB - dateA; // newest first
  });

  const handleEdit = (transaction) => {
    setSelectedTransaction(transaction);
    setEditOpen(true);
  };

  const handleUpdate = (updated) => {
    updateTransaction(updated);
  };

  return (
    <div className="text-black dark:text-white">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <AddTransaction />
      </div>

      <TransactionList
        transactions={sortedTransactions}
        onDelete={deleteTransaction}
        onEdit={handleEdit}
      />

      {/* Edit Modal */}
      <EditTransaction
        open={editOpen}
        setOpen={setEditOpen}
        transaction={selectedTransaction}
        saveEdit={handleUpdate}
      />
    </div>
  );
};

export default Transactions;
