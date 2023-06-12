import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, setisEditing] = useState(false);

  const handleEditClick = () => {
    setisEditing(true);
  };
  const handleSaveClick = (value) => {
    dispatch({
      type: "SAVE",
      payload: value,
    });
    setisEditing(false);
  };
  return (
    <div className="alert alert-secondary d-flex justify-content-between align-items-center ">
      {isEditing ? (
        <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
      ) : (
        <ViewBudget handleEditClick={handleEditClick} budget={budget} />
      )}
    </div>
  );
};

export default Budget;
