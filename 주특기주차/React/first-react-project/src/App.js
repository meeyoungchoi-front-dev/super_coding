import logo from './logo.svg';
import './App.css';
import TextComponent from './components/TextComponent';
import Section from './components/Section';

function App() {
  return (
    <div className="wrapper">
      <div className="toast toast-success">
        <main className="toast__message">
          <header className="toast__message-title">Success</header>
          <p className="toast__message-text">Right on!</p>
        </main>
        <button className="toast__button">Dismiss</button>
      </div>
      <div className="toast toast-warning">
        <main className="toast__message">
          <header className="toast__message-title">Warning</header>
          <p className="toast__message-text">Hmmm!</p>
        </main>
        <button className="toast__button">Dismiss</button>
      </div>
      <div className="toast toast-error">
        <main className="toast__message">
          <header className="toast__message-title">Error</header>
          <p className="toast__message-text">Oh!</p>
        </main>
        <button className="toast__button">Dismiss</button>
      </div>
    </div>
  );
}

export default App;