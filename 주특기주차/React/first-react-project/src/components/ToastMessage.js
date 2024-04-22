import React from 'react';

const ToastMessage = ({message, children}) => {
    return (
        <main className="toast__message">
            {children}
        </main>
    );
};

export default ToastMessage;