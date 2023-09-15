import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";

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
      <ExpenseList filter={filterChangehandler} />
    </Card>
  );
}

export default Expenses;
