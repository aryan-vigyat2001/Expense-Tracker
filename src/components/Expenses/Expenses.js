import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props)
{
  const [filteredYear,setYear]=useState('2020');
    const yearHandler=(data)=>
    {
      setYear(data);
    }
    const filteredExpenses=props.expenses.filter((e1)=>{
      return e1.date.getFullYear().toString()==filteredYear;
    })
    return(
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} getYear={yearHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
      {/* {filteredExpenses.length===0 ?(<p>No Records Available</p> ):(filteredExpenses.map((expense)=> <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>))} */}
      
      {/* <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}></ExpenseItem>
      <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}></ExpenseItem>
      <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}></ExpenseItem> */}
    </Card>
    );
}
export default Expenses;