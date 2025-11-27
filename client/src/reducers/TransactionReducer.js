// UNUSED FILE - Transaction reducer not currently used
// State management is handled through TransactionContext instead
// This reducer can be used in the future if Redux or useReducer is implemented

export const TransactionReducer = (state, action) => {
  switch (action.type) {

    case "ADD_TRANSACTION":
      return [...state, action.payload];

    case "EDIT_TRANSACTION":
      return state.map(txn =>
        txn.id === action.payload.id ? action.payload : txn
      );

    case "DELETE_TRANSACTION":
      return state.filter(txn => txn.id !== action.payload);

    default:
      return state;
  }
};
