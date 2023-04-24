import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./ExpenseList.css";

const ExpenseAsList = (props) => {
  const Expenses = props.expenseList;

  const listItems = Expenses.map((element, index) => (
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
      <ExpensesFilter />
      {listItems}
    </Card>
  );
};

export default ExpenseAsList;
