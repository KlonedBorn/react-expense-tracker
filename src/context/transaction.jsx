import { createContext, useReducer, useEffect } from "react";
import transactionReducer from "../reducer/transaction";

const SESSION_STORAGE_KEY = "transactions";

// Initial state
const initialState = {
  transactions: JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY)) || [],
};

// Create context
export const TransactionContext = createContext(initialState);

// Provider component
export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(transactionReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  // Update sessionStorage whenever transactions change
  useEffect(() => {
    sessionStorage.setItem(
      SESSION_STORAGE_KEY,
      JSON.stringify(state.transactions)
    );
  }, [state.transactions]);

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
