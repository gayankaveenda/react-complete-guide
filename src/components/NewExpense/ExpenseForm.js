import React, { useState } from "react";

import "./ExpenseForm.css";

const NewExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [formDate, setFormDate] = useState(new Date(2020, 1, 1));

  const handleTitle = (e) => {
    //  setTitle(e.target.value);
    setTitle((prevState) => {
      console.log("prevTitle = " + prevState.title);
      console.log("e.target.value = " + e.target.value);
      //watch it - {0: 'b', 1: 'o', 2: 'o', 3: 'k', 4: '1', title: 'book11'}
      // this will create an object not just title but with its all past values so incorrect object
      console.log({ ...prevState, title: e.target.value });
      return e.target.value;
    });
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
    // setAmount((prevState) => {
    //   console.log("Prev State of Amount " + prevState.amount);
    //   console.log("Current Amount = " + e.target.value);
    //   console.log({ ...prevState, amount: e.target.value});

    //WATCHOUT: This returns an object with previous states array and append to the end
    //   return { ...prevState, amount: e.target.value};
    // });
  };

  const handleFormDate = (e) => {
    // setFormDate( (prevState) => {
    //     console.log("Previous Date = " + prevState.formDate);
    //     console.log("Current Date = " + e.target.value);
    //     console.log("Current Date = " + formDate);
    //     return {...prevState, formDate: e.target.value};
    // });
    setFormDate(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event);

    //OPTION-1
    const expenseData = {
      title: title,
      amount: amount,
      date: formDate,
    };

    //OPTION-2
    // const expenseData = {
    //   title: JSON.parse(JSON.stringify(title)),
    //   amount: JSON.parse(JSON.stringify(amount)),
    //   date : JSON.parse(JSON.stringify(formDate))
    // };
    console.log(expenseData);

    // console.log({title,amount,formDate});
    props.saveNewExpense(expenseData);

    //Directly out of the form you can pass like below
    // props.saveNewExpense({title,amount,date:formDate});
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
          <input type="date" min={"2019-01-01"} onChange={handleFormDate} />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default NewExpenseForm;
