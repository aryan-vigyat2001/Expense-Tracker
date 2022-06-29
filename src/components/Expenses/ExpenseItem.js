import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import {useState} from 'react';
function ExpenseItem(props) {
    const [title,setTitle]=useState(props.title);
    const clickHandler=()=>
    {
        setTitle('Updated');
        console.log("Clicked a Button");
    }
    const month=props.date.toLocaleString('en-us',{month:'long'});
    const day=props.date.toLocaleString('en-us',{day:'2-digit'});
    var year=props.date.getFullYear();
    return (
        <li>
        <Card className="expense-item">
            <ExpenseDate month={month} day={day} year={year}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
        </li>


    );
}

export default ExpenseItem;