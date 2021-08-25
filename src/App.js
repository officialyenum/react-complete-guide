import React from 'react';

import Expenses from "../src/components/Expenses/Expenses";
import NewExpense from "../src/components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { date: new Date(2021, 8, 22), title: "Car Insurance", amount: 228.77 },
    { date: new Date(2020, 8, 22), title: "Car Policy", amount: 208.89 },
    { date: new Date(2021, 2, 22), title: "Car Agency", amount: 227.95 },
  ];

  const onAddExpenseHandler = (addedExpenseData) => {
    console.log('In App.js');
    console.log(addedExpenseData);
  }
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={onAddExpenseHandler}/>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
