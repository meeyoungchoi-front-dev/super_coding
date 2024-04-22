import React from 'react';

const ToastButton = ({message}) => {
    let text = "sample";
    const buttonClickHandler = (title) => {
        console.log(title);
        text = "changed!";
    };

    return (
        <div>
            <p>{text}</p>
            <button className="toast__button" onClick={() => buttonClickHandler(message.title)}>Dismiss</button>
        </div>
        
    );
};

export default ToastButton;