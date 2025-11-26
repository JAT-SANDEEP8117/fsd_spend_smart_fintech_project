import { createContext, useReducer, useEffect } from "react";
import { TransactionReducer } from "../reducers/TransactionReducer";

// Create Context
export const TransactionContext = createContext();

// Provider Component
export const TransactionProvider = ({ children }) => {

  // Load from LocalStorage
  const storedData = JSON.parse(localStorage.getItem("transactions")) || [];

  // Initialize reducer
  const [transactions, dispatch] = useReducer(TransactionReducer, storedData);

  // Save to LocalStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // Add
  const addTransaction = (txn) => {
    dispatch({ type: "ADD_TRANSACTION", payload: txn });
  };

  // Edit
  const editTransaction = (txn) => {
    dispatch({ type: "EDIT_TRANSACTION", payload: txn });
  };

  // Delete
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransaction,
        editTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
