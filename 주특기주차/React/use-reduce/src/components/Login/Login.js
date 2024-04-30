import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
    // 값이 바뀌는 경우 
    if (action.type === 'USER_INPUT') {
      return {
        value: action.val,
        isValid: action.val.includes('@')
      }
    }

    // 유효성 검사를 해야 하는 경우
    if (action.type === 'INPUT_BLUR') {
        return {
          value: state.value,
          isValid: state.value.includes("@"),
        }
    }

    return {
      value: '',
      isValid: null
    }
}

const passwordReducer = (state, action) => {
  // 값이 바뀌는 경우 
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6
    };
  }

  // 유효성 검사를 해야 하는 경우
  if (action.type === 'INPUT_BLUR') {
      return {
        value: state.value,
        isValid: action.val.trim().length > 6,
      };
  }

  return {
    value: '',
    isValid: null
  }
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');

  const [formIsValid, setFormIsValid] = useState(false);
  const [emailSate, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log('Checking form validity!');
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);

  //   return () => {
  //     console.log('CLEANUP');
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    //setEnteredEmail(event.target.value);
    dispatchEmail({type: 'USER_INPUT', val: event.target.value})

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.value.trim().length > 6
    // );

  };

  const passwordChangeHandler = (event) => {
    //setEnteredPassword(event.target.value);
    dispatchPassword({type: 'USER_INPUT', val: event.target.value})

    setFormIsValid(
      emailSate.value.includes('@') && passwordState.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    //setEmailIsValid(enteredEmail.includes('@'));
    dispatchEmail({type: 'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    //setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type: 'INPUT_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailSate.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailSate.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            value={emailSate.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            로그인
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;