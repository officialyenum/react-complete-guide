import React from 'react';

import ExpenseForm from "../Expenses/ExpenseForm";
import "../NewExpense/NewExpense.css";

const NewExpense = (props) => {
  return (<div className="new-expense">
       <ExpenseForm />
  </div>);
};

export default NewExpense;
