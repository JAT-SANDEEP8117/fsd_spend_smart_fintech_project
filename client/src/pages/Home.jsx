import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Home = () => {
  const { transactions, addTransaction } = useContext(TransactionContext);

  return (
    <div className="text-black dark:text-white">
      <button
        onClick={() =>
          addTransaction({
            id: Date.now(),
            type: "income",
            amount: 500,
            category: "Salary",
            date: "2025-01-01"
          })
        }
        className="p-2 bg-blue-600 text-white rounded"
      >
        Add Test Transaction
      </button>

      <h2 className="mt-4 font-semibold">Transactions:</h2>

      <pre className="bg-gray-200 text-black p-2 mt-2 rounded">
        {JSON.stringify(transactions, null, 2)}
      </pre>
    </div>
  );
};

export default Home;
