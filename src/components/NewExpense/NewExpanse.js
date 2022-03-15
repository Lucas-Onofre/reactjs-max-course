import React from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpanse.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    
    props.onAddExpanse(expenseData);
  }

  return(
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense