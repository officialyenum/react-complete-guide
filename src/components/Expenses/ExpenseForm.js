import React, { useState } from "react";

import '../Expenses/ExpenseForm.css'

const ExpenseForm = (props) => {
    // multiple state approach
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // single state approach
    // const [userInput, setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // })
    const titleChangeHandler = (event) => {
        //style 1
        setEnteredTitle(event.target.value);
        //style 2
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        // style 3
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value}
        // })
    }

    const amountChangeHandler = (event) => {
        //style 1
        setEnteredAmount(event.target.value);
        //style 2
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
        // style 3
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value}
        // })
    }

    const dateChangeHandler = (event) => {
        //style 1
        setEnteredDate(event.target.value);
        //style 2
        // setUserInput({
        //     ...userInput, 
        //     enteredDate: event.target.value
        // })
        // style 3
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value}
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        // console.log(expenseData);
        props.onSubmitExpenseForm(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }

    return ( 
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2021-08-23" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit"> Add Expense </button>
        </div>
    </form>
    );
}

export default ExpenseForm;