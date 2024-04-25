import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    console.log(event.target.value);
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by money</label>
        <input type="range" min="200" max="450" step="50" onChange={dropdownChangeHandler}/>
      </div>
    </div>
  );
};

export default ExpensesFilter;