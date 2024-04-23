import React from 'react';

import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const date = new Date(props.date);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}월</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}일</div>
    </div>
  );
};

export default ExpenseDate;