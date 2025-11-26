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
