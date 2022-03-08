import React from "react";
import ExpenseItem from "./ExpenseItem";

import { Card } from "../UI/Card";

import './Expenses.css';

export const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
    {expenses.map((expense, index) => {
    return (
      <ExpenseItem 
        key={index}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    )
    })}
    </Card>
  );
}