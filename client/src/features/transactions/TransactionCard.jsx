// src/features/transactions/TransactionCard.jsx
import { FaEdit, FaTrash } from "react-icons/fa";

const TransactionCard = ({ t, onDelete, onEdit }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded shadow">
      <div>
        <div className="font-medium">{t.category}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {t.date} • {t.description}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span
          className={`font-semibold ${
            t.type === "income" ? "text-green-500" : "text-red-500"
          }`}
        >
          {t.type === "income" ? "+₹ " : "-₹ "}
          {t.amount}
        </span>

        {/* Edit */}
        <FaEdit
          onClick={() => onEdit(t)}
          className="cursor-pointer text-blue-500 hover:text-blue-700"
        />

        {/* Delete */}
        <FaTrash
          onClick={() => onDelete(t.id)}
          className="cursor-pointer text-red-500 hover:text-red-700"
        />
      </div>
    </div>
  );
};

export default TransactionCard;
