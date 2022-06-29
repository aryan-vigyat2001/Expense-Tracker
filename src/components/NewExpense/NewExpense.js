import React from 'react';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
const NewExpense=(props)=>
{
    const [currstate,setState]=useState(false);
    const onSaveExpenseDataHandler=(enteredExpenseData)=>
    {
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        console.log(expenseData)
        props.onAddExpense(expenseData);

    };
    const changeState=()=>{
        setState(true);
    }
    const cancelClicked=()=>{
        setState(false);
    }
    return (
    <div className='new-expense'>
        {!currstate && <button onClick={changeState}>Add New Expense</button>}
        
        {currstate && <ExpenseForm cancelfunc={cancelClicked} onSaveExpenseData={onSaveExpenseDataHandler}/>}
    </div>
    );zxx

};


export default NewExpense;