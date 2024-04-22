import React, {useState} from 'react';

const ToastButton = ({message}) => {
    const [text, setText] = useState('sample');
    const buttonClickHandler = (title) => {
        console.log(title);
        setText("changed!");
    };

    return (
        <div>
            <p>{text}</p>
            <button className="toast__button" onClick={() => buttonClickHandler(message.title)}>Dismiss</button>
        </div>
        
    );
};

export default ToastButton;