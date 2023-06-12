import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { AppProvider } from "./Context/AppContext";
import Budget from "./Components/Budget";
import Remaining from "./Components/Remaining";
import Spent from "./Components/Spent";
import ExpenseList from "./Components/ExpenseList";
import AddExpense from "./Components/AddExpense";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">My Budget Planer</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <Spent />
          </div>
        </div>

        <h3 className="mt-3">Expenses</h3>
        <div className="row">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>

        <h3 className="mt-4"> Add Expense</h3>
        <div className="row">
          <div className="col-sm">
            <AddExpense />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
