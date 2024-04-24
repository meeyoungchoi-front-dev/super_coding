import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  
    // boolean 타입의 flag를 선언한다
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    console.log(event.target.value);
    // 값의 길이가 0보다 크면 유효하기 때문에 isValid가 ture가 되어야 한다
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    // 값이 빈문자열이라면 빨간배경을 UI에 표시해줘야 한다
    if (enteredValue.trim().length === 0) {
      console.log(enteredValue);
      setIsValid(false);
      setEnteredValue("");
      return;
    };
    props.onAddGoal(enteredValue);
  };

  console.log(isValid)
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>목표</label>
        <input type="text" onChange={goalInputChangeHandler} 
        style={ {backgroundColor: isValid ? "transparent" : "pink", borderColor: isValid ? "#ccc" : "red"}}
        />
      </div>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;