import AlexaImage from'./images/alexa.png'
import SiriImage from'./images/siri.png'
import logo from './logo.svg';
import './App.css';

console.log("AlexaImage", AlexaImage);
console.log("SiriImage", SiriImage);

function App() {
  return (
    <div className="App">
        <p>hello image</p>
        <img src={AlexaImage} alt="alexa"/>
        <img src={SiriImage} alt="siri"/>
    </div>
  );
}

export default App;
