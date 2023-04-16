import React, { useState } from "react";

import "./ExpenseForm.css";

const NewExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  const handleTitle = (e) => {
    setTitle((prevState) => {
      console.log("prevTitle = " + prevState.title);
      console.log("e.target.value = " + e.target.value);
      return { ...prevState, title: e.target.value };
    });
  };

  const handleAmount = (event) => {
    setAmount((prevState) => {
      console.log("Prev State of Amount " + prevState.amount);
      return { ...prevState, amount: event.target.value};
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event);

    const expenseData = {
      newTitle: title,
      newAmount: amount,
    };
    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={handleTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min={0.01} step={0.01} onChange={handleAmount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min={"2019-01-01"} />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default NewExpenseForm;
