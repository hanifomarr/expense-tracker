import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense({ onAddExpense }) {
  const submitExpenseData = (submitedExpenseData) => {
    const expenseData = {
      ...submitedExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseData={submitExpenseData} />
    </div>
  );
}

export default NewExpense;
