import { useState } from "react";
import ExpenseAsList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const DEFAULT_LIST = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: "2020, 7, 14",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 79.49,
      date: "2021, 2, 12",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: "2021, 2, 28",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: "2021, 5, 12",
    }
  ];

  const [expenses, setExpenses] = useState(DEFAULT_LIST);

  const updateExpensesHandler = (data) => {
    //expenses.push(data);
    setExpenses([...expenses, data]);
    console.log(expenses);
  }

  return (
    <div>
      <NewExpense addExpenseToExpenses = {updateExpensesHandler} />
      <ExpenseAsList expenseList={expenses} />;
    </div>
  );
}

export default App;
