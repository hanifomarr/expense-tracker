import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList({ filter }) {
  if (filter.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <div className="expenses-list">
      {filter.map((item) => (
        <ExpenseItem
          key={item.id}
          expenseTitle={item.title}
          expenseAmount={item.amount}
          date={item.date}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
