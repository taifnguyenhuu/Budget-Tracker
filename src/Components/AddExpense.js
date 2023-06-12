import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { uuid as uuidv4 } from "react-uuid";

const AddExpense = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const OnSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4,
      name,
      cost: parseInt(cost),
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
    setName("");
    setCost("");
  };
  return (
    <form onSubmit={OnSubmit}>
      <div className="row">
        <div className="col-sm">
          <label for="name">Name</label>
          <input
            required="required"
            className="form-control"
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="col-sm">
          <label for="cost">Cost</label>
          <input
            required="required"
            className="form-control"
            id="cost"
            type="text"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpense;
