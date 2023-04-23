import React from "react";
import NewExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const addNewExpenseHandler = (newExpenseData) => {
    // const myExpense = new Object();
    // myExpense.title = newExpenseData.newTitle;
    // myExpense.amount = newExpenseData.newAmount;
    // myExpense.date = newExpenseData.newDate;
    // myExpense.id = Math.random().toString();

    console.log(newExpenseData);
    props.addExpenseToExpenses(newExpenseData);
  };

  return (
    <div className="new-expense">
      <NewExpenseForm saveNewExpense={addNewExpenseHandler} />
    </div>
  );
};

export default NewExpense;
