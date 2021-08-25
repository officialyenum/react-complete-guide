import React from "react";

import ExpenseForm from "../Expenses/ExpenseForm";
import "../NewExpense/NewExpense.css";

const NewExpense = (props) => {
  const enteredExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random(),
    };
    props.onAddExpense(expenseData);
    console.log("In NewExpense.js");
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseForm={enteredExpenseHandler} />
    </div>
  );
};

export default NewExpense;
