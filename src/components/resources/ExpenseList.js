import ExpenseItem from "../../components/ExpenseItem";

const ExpenseAsList = (props) => {
  const Expenses = props.expenseList;

  const listItems = Expenses.map((element) => (
    <ExpenseItem
      title={element.title}
      amount={element.amount}
      date={element.date.toLocaleDateString()}
    ></ExpenseItem>
  ));
  return listItems;
};

export default ExpenseAsList;
