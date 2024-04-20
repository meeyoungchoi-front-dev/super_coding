import React from 'react';
import "./Toast.css";
import ToastButton from './ToastButton';
import ToastMessage from './ToastMessage';
const Toast = ({message}) => {
    return (
        <div className={`toast toast-${message.title}`}>
            <ToastMessage message={message}/>
            <ToastButton/>
        </div>
    );
};

export default Toast;