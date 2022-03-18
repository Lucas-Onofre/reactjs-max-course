import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

export const ExpensesList = ({filteredExpenses}) => {
  //returns that if props has no value
  if(!filteredExpenses.length){
    return <h2 className='expenses-list__fallback'>Found no expenses</h2>
  }

  //returns that if props has value
  return (
    <ul className='expenses-list'>
      {!filteredExpenses && <p>No expenses found.</p>}
      {filteredExpenses && filteredExpenses.map((expense) => {
        return (
        <ExpenseItem 
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
        )
      })}
  </ul>
  )
}