import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpanse.css';

const NewExpense = (props) => {
  const [isShowingForm, setIsShowingForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    
    props.onAddExpanse(expenseData);
  }

  const handleDisplayForm = () =>{
    setIsShowingForm((isShowing) => !isShowing);
  }

  return (
    <div className='new-expense'>
      {!isShowingForm && <button type='button' onClick={handleDisplayForm}>Add New Expenses</button>}
      {isShowingForm && <ExpenseForm isShowing={isShowingForm} onHandleDisplayForm={handleDisplayForm} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
}

export default NewExpense