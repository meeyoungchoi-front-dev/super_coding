import logo from './logo.svg';
// import './App.css';
import TextComponent from './components/TextComponent';
import Section from './components/Section';
import Toast from "./components/Toast";
import ToastMessage from './components/ToastMessage';
import ToastButton from './components/ToastButton';

function App() {
  const messageArray = [
    {
      title: 'success',
      text: 'Right On!'
    },
    {
      title: 'success',
      text: 'Right On!'
    },
    {
      title: 'warning',
      text: 'Hmmm'
    },
    {
      title: 'warning',
      text: 'Hmmm'
    },
    {
      title: 'error',
      text: 'Uh Oh!'
    },
    {
      title: 'error',
      text: 'Uh Oh!'
    }
  ];

  return (
    <div className="wrapper">
      <Toast message={messageArray[0]}>
        <ToastMessage message={messageArray[0]}/>
        <ToastButton/>
      </Toast>
      <Toast message={messageArray[1]}>
        <ToastMessage message={messageArray[1]}/>
        <ToastButton/>
      </Toast>
      <Toast message={messageArray[2]}>
        <ToastMessage message={messageArray[2]}/>
        <ToastButton/>
      </Toast>
    </div>
  );
}

export default App;