// src/features/transactions/TransactionList.jsx
import TransactionCard from "./TransactionCard";

const TransactionList = ({ transactions, onDelete, onEdit }) => {
  if (transactions.length === 0)
    return <p className="text-gray-500 dark:text-gray-400">No transactions yet.</p>;

  return (
    <div className="space-y-3">
      {transactions.map((t) => (
        <TransactionCard
          key={t.id}
          t={t}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TransactionList;
