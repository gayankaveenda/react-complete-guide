import React from "react";
import NewExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const addNewExpenseHandler = (newExpenseData) => {
    //OPTION-1
    // props.addExpenseToExpenses(newExpenseData);
    // const clonedExpense = JSON.parse(JSON.stringify(newExpenseData));
    // clonedExpense.id = Math.random().toString();

    //OPTION-2
    const clonedExpense = {
      ...newExpenseData,
      id: Math.random().toString(),
    };

    console.log(clonedExpense);
    props.addExpenseToExpenses(clonedExpense);
  };

  return (
    <div className="new-expense">
      <NewExpenseForm saveNewExpense={addNewExpenseHandler} />
    </div>
  );
};

export default NewExpense;
