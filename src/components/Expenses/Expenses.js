import React, {useState}from 'react';

import ExpenseItem from "../Expenses/ExpenseItem";
import ExpensesFilter from '../Expenses/ExpensesFilter';
import Card from "../UI/Card";
import "../Expenses/Expenses.css";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
    console.log('YEAR: ',year);
    console.log('FILTERED YEAR',filteredYear);
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
    </Card>
  );
}

export default Expenses;
