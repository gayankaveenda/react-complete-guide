import ExpenseItem from "../../components/ExpenseItem";

const ExpenseAsList = (props) => {
  const Expenses = props.expenseList;

  const listItems = Expenses.map((element, index) => (
    <ExpenseItem key={element.id}
      title={element.title}
      amount={element.amount}
      date={element.date}
    ></ExpenseItem>
  ));
  return listItems;
};

export default ExpenseAsList;
