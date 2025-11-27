// src/features/transactions/TransactionList.jsx
import TransactionCard from "./TransactionCard";

const TransactionList = ({ transactions, onDelete, onEdit }) => {
  return (
    <div className="space-y-3">
      {transactions.length === 0 ? (
        <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
          No transactions found. Add your first transaction to get started!
        </div>
      ) : (
        transactions.map((tx) => (
          <TransactionCard
            key={tx.id}
            transaction={tx}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
};

export default TransactionList;
