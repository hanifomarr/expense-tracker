import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses({ items }) {
  return (
    <Card className="expenses">
      {items.map((item) => (
        <ExpenseItem
          expenseTitle={item.title}
          expenseAmount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
