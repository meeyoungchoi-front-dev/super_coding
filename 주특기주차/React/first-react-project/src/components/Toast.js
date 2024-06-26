import React from 'react';
import "./Toast.css";
import ToastButton from './ToastButton';
import ToastMessage from './ToastMessage';
const Toast = ({message, children}) => {
    console.log("toast component is executed");
    return (
        <div className={`toast toast-${message.title}`}>
            {children}
        </div>
    );
};

export default Toast;
const hello = 10;
const world = 20;
export {hello, world}