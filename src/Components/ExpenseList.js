import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../Context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  const [filteredResults, setfilteredResults] = useState(expenses || []);

  useEffect(() => {
    setfilteredResults(expenses);
    console.log("render");
  }, [expenses]);

  const handleChange = (event) => {
    const searchResults = expenses.filter((filteredResult) =>
      filteredResult.name.toLowerCase().includes(event.target.value)
    );
    setfilteredResults(searchResults);
    console.log(searchResults);
  };
  return (
    <>
      <input
        type="text"
        class="form-control mb-2 mr-sm-2"
        placeholder="Type to search..."
        onChange={handleChange}
      />
      <ul class="list-group">
        {filteredResults.map((expense) => (
          <ExpenseItem
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;
