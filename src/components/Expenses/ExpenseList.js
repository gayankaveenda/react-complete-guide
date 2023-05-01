import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./ExpenseList.css";
import { useState, useEffect } from "react";

const ExpenseAsList = (props) => {
  const [filteredExpenses, setFilteredExpenses] = useState(props.expenseList);
  const [year, setYear] = useState("ALL");

  useEffect(() => {
    filterExpensesByDateHandler(year);
  }, [props.expenseList]);


  const filterExpensesByDateHandler = (yearInput) => {
    setYear(yearInput);
    console.log("Before Filter");
    console.log(filteredExpenses);

    setFilteredExpenses(
      props.expenseList.filter((expense) => filterByYear(expense, yearInput))
    );

    console.log("After Filter");
    console.log(filteredExpenses);
    console.log("filterExpensesByDateHandler " + yearInput);
  };

  function filterByYear(expense, year) {
    if (year == "ALL") {
      return true;
    } else {
      let calYear = new Date(expense.date).getFullYear();
      console.log("filterByYear " + calYear);
      return calYear == year;
    }
  }

  const listItems = filteredExpenses.map((element, index) => (
    <div key={index.toString()} id={element.title + index.toString()}>
      <ExpenseItem
        title={element.title}
        amount={element.amount}
        date={element.date}
      ></ExpenseItem>
    </div>
  ));

  return (
    <Card className="expenses">
      <ExpensesFilter filterExpenseByYear={filterExpensesByDateHandler} />
      {listItems}
    </Card>
  );
};

export default ExpenseAsList;
