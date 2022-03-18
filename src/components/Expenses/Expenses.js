import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";

import { Card } from "../UI/Card";

import './Expenses.css';

export const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2019');
  const filteredItems = expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);

  const yearFilterSelectedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onYearFilterSelected={yearFilterSelectedHandler} />
        {filteredItems && filteredItems.map((expense) => {
            return (
            <ExpenseItem 
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          )
          })}
      </Card>
    </>
  );
}