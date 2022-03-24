import React, { useState } from "react";

import ExpensesFilter from "./ExpenseFilter";
import { ExpensesList } from "./ExpensesList";
import { ExpensesChart } from "./ExpensesChart";
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
        <ExpensesChart expenses={filteredItems}/>
        <ExpensesList filteredExpenses={filteredItems}/>
      </Card>
    </>
  );
}