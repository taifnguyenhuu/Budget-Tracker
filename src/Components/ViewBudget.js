import React, { useContext, useReducer } from "react";
import { AppContext } from "../Context/AppContext";
import EditBudget from "../Components/EditBudget";

const ViewBudget = (props) => {
  return (
    <>
      <span>Budget: £{props.budget}</span>
      <button
        type="button"
        class="btn btn-primary"
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </>
  );
};

export default ViewBudget;
