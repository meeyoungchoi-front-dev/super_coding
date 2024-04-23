import React, { useState } from 'react';

import './PaymentForm.css';

const PaymentForm = () => {
  // 여러개의 state를 하나의 객체에 담아서 관리하기
  const [objectState, setObjectState] = useState({
    name: '',
    price: 0,
    today: new Date()
  })

  // onChange를 통해 input에서 값을 받고 이벤트를 감지한다
  const inputTypeTextChangeHandler = (event) => {
    setObjectState(prevState => ({...prevState, name: event.target.value}));   
  };

  const inputTypeNumberChangeHandler = (event) => {
    setObjectState(prevState => ({...prevState, price: event.target.value}));   
  };

  const inputTypeDateChangeHandler = (event) => {
    setObjectState(prevState => ({...prevState, today: event.target.value}));   
  };

  const buttonSubmitHandler = (event) => {
      event.preventDefault();
      console.log('name', objectState.name);
      console.log('price', objectState.price);
      console.log('today', objectState.today);
      // 객체를 초기화 해준다
      setObjectState({
        name: '',
        price: 0,
        today: new Date()
      });
  }

  return (
    <form onSubmit={buttonSubmitHandler}>
      <div className='new-payment__controls'>
        <div className='new-payment__control'>
          <label>이름</label>
          <input type='text' value={objectState.name}  onChange={inputTypeTextChangeHandler}/>
        </div>
        <div className='new-payment__control'>
          <label>금액</label>
          <input type='number' min='0.01' step='0.01' value={objectState.price}  onChange={inputTypeNumberChangeHandler}/>
        </div>
        <div className='new-payment__control'>
          <label>날짜</label>
          <input type='date' min='2024-01-01' max='2024-12-31' value={objectState.today} onChange={inputTypeDateChangeHandler}/>
        </div>
      </div>
      <div className='new-payment__actions'>
        <button type='submit' onClick={buttonSubmitHandler}>결제 추가</button>
      </div>
    </form>
  );
};

export default PaymentForm;