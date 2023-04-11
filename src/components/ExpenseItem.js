import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const expenseDate = new Date("2023", "04", "11");
  // const title = "Car Insurance";

  return (
    <div>
      <div className="expense-item">
        <div>{props.date}</div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    </div>
  );
};

export const ExerciseComponent = () => {
  return <p>First exercise - done!</p>;
};

export default ExpenseItem;
