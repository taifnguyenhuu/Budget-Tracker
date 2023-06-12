import React, { useContext, useReducer } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../Context/AppContext";
import { type } from "@testing-library/user-event/dist/type";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDelete = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };
  return (
    <li class="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span class="badge badge-primary badge-pill mr-3">£{props.cost}</span>
        <TiDelete size="1.5em" onClick={handleDelete} />
      </div>
    </li>
  );
};

export default ExpenseItem;
