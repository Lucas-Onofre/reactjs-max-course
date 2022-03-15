import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";

import { Card } from "../UI/Card";

import './Expenses.css';

export const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2019');

  const yearFilterSelectedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

    console.log(filteredYear);
  }

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onYearFilterSelected={yearFilterSelectedHandler} />
          {expenses.map((expense) => {
            return (
            <ExpenseItem 
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          )
          })
          }
      </Card>
    </>
  );
}