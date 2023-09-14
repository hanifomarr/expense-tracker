import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm({ onSubmitExpenseData }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [eneteredDate, setEneteredDate] = useState("");
  // const [enteredInput, setEnteredInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  // const titleChangeHandler = (event) => {
  //   console.log(event.target);
  //   setEnteredInput((prevState) => {
  //     return { ...prevState, title: event.target.value };
  //   });
  // };

  // const amountChangeHandler = (event) => {
  //   setEnteredInput({ ...enteredInput, amount: event.target.value });
  // };

  // const dateChangeHandler = (event) => {
  //   setEnteredInput({ ...enteredInput, date: event.target.value });
  // };

  const inputChangeHandler = (event) => {
    const value = event.target.value;

    if (event.target.name === "title") {
      setEnteredTitle(value);
    } else if (event.target.name === "amount") {
      setEnteredAmount(value);
    } else {
      setEneteredDate(value);
    }
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(eneteredDate),
    };

    console.log(expenseData);
    onSubmitExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEneteredDate("");
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={enteredTitle}
            name="title"
            type="text"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            name="amount"
            type="number"
            min="0.01"
            step="0.01"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={eneteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
