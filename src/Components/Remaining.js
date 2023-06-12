import React, { useContext, useReducer } from "react";
import { AppContext } from "../Context/AppContext";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const remainingAlert =
    budget > totalExpenses ? "alert-success" : "alert-danger";
  return (
    <div className={`alert ${remainingAlert}`}>
      <span>Remaining: £{budget - totalExpenses}</span>
    </div>
  );
};

export default Remaining;
