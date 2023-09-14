import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses({ items }) {
  const [selectedYear, setSelectedYear] = useState("2020");
  const selectedYearHandler = (year) => {
    setSelectedYear(year);
  };

  const filterChangehandler = items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onExpenseFilter={selectedYearHandler}
        selected={selectedYear}
      />
      {filterChangehandler.map((item) => (
        <ExpenseItem
          key={item.id}
          expenseTitle={item.title}
          expenseAmount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
