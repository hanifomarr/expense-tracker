import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense({ onAddExpense }) {
  const [addExpense, setAddExpense] = useState("");
  const submitExpenseData = (submitedExpenseData) => {
    const expenseData = {
      ...submitedExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const addExpenseButtonHandler = () => {
    setAddExpense("click");
  };

  const cancelHandler = () => {
    setAddExpense("");
  };
  return (
    <div className="new-expense">
      {addExpense === "" ? (
        <button onClick={addExpenseButtonHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSubmitExpenseData={submitExpenseData}
          cancelHandler={cancelHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
