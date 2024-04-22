import logo from './logo.svg';
import {useState} from 'react';
// import './App.css';
import TextComponent from './components/TextComponent';
import Section from './components/Section';
import Toast from "./components/Toast";
import ToastMessage from './components/ToastMessage';
import ToastButton from './components/ToastButton';
import ToastMessageContent from './components/ToastMessageContent';
import ToastMessageTitle from './components/ToastMessageTitle';

function App() {
  const messageArray = [
    {
      title: 'success',
      text: 'Right On!'
    },
    {
      title: 'warning',
      text: 'this function is not recommended',
      warningTest: 'please check the version and docs'
    },
    {
      title: 'error',
      text: '404 NOT FOUND',
      errorButton: 'follow'
    }
  ];

  const [title, setTitle] = useState("hello");

  return (
    <div className="wrapper">
      <p>{title}</p>
      <button onClick={() => setTitle("changed!")}>클릭하기</button>
      <Toast message={messageArray[0]}>
        <ToastMessage message={messageArray[0]}>
          <ToastMessageTitle message={messageArray[0]}/>
        </ToastMessage>
      </Toast>
      <Toast message={messageArray[1]}>
        <ToastMessage message={messageArray[1]}>
            <ToastMessageTitle message={messageArray[1]}/>
            <ToastMessageContent message={messageArray[1]}/>
        </ToastMessage>
        <ToastButton  message={messageArray[1]}/>
      </Toast>
      <Toast message={messageArray[2]}>
        <ToastMessage message={messageArray[2]}>
            <ToastMessageTitle message={messageArray[2]}/>
            <ToastMessageContent message={messageArray[2]}/>
        </ToastMessage>
        <ToastButton  message={messageArray[2]}/>
      </Toast>
    </div>
  );
}

export default App;