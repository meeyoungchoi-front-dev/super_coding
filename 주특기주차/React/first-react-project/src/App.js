import logo from './logo.svg';
// import './App.css';
import TextComponent from './components/TextComponent';
import Section from './components/Section';
import Toast from "./components/Toast";

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
      {messageArray.map((message, index) =>  (
          <Toast title={messageArray[index].title} text={messageArray[index].text}/>
        ))}
    </div>
  );
}

export default App;