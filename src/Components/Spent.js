import React, { useContext, useReducer } from "react";
import { AppContext } from "../Context/AppContext";

const Spent = () => {
  const { expenses } = useContext(AppContext);
  const Spent = expenses.reduce((expense, item) => {
    return (expense += item.cost);
  }, 0);
  return (
    <div className="alert alert-primary">
      <span>Spent so far: £{Spent}</span>
    </div>
  );
};

export default Spent;
