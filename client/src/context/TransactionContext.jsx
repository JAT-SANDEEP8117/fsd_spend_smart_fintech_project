// src/context/TransactionContext.jsx
import { createContext, useReducer, useEffect } from "react";

// 🌟 Initial State
const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || []
};

// 🌟 Helper: Sort by DATE + TIME (newest first)
const sortByDateTime = (list) => {
  return list.sort((a, b) => {
    const dateA = new Date(a.date + "T" + (a.time || "23:59"));
    const dateB = new Date(b.date + "T" + (b.time || "23:59"));
    return dateB - dateA;
  });
};

// 🌟 Reducer
const TransactionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION": {
      const updated = [action.payload, ...state.transactions]; // add at top
      return { ...state, transactions: sortByDateTime(updated) };
    }

    case "EDIT_TRANSACTION": {
      const updated = state.transactions.map((t) =>
        t.id === action.payload.id ? action.payload : t
      );
      return { ...state, transactions: sortByDateTime(updated) };
    }

    case "DELETE_TRANSACTION": {
      const updated = state.transactions.filter(
        (t) => t.id !== action.payload
      );
      return { ...state, transactions: sortByDateTime(updated) };
    }

    default:
      return state;
  }
};

// 🌟 Context
export const TransactionContext = createContext();

// 🌟 Provider
export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TransactionReducer, initialState);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state.transactions]);

  const addTransaction = (tx) =>
    dispatch({ type: "ADD_TRANSACTION", payload: tx });

  const updateTransaction = (tx) =>
    dispatch({ type: "EDIT_TRANSACTION", payload: tx });

  const deleteTransaction = (id) =>
    dispatch({ type: "DELETE_TRANSACTION", payload: id });

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        updateTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
