import React, { createContext, useReducer } from "react";
import { uuid as uuidv4 } from "react-uuid";

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "SAVE":
      console.log(action.payload);
      return {
        ...state,
        budget: action.payload,
      };
    default:
      return state;
  }
};
const initialState = {
  budget: 3000,
  expenses: [
    { id: 1, name: "Shopping", cost: 50 },
    { id: 2, name: "Holiday", cost: 300 },
    { id: 3, name: "Transportation", cost: 400 },
    { id: 4, name: "Fuel", cost: 500 },
    { id: 5, name: "ChildCare", cost: 600 },
  ],
};
export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        budget: state.budget,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
