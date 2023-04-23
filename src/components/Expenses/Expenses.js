import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function NewExpenses(props) {

  return (
    <div className="expenses">
      {props.expenses.map(function (data) {
        return <ExpenseItem key={data.id} data={data} />;
      })}
    </div>
  );
}

export default NewExpenses;
