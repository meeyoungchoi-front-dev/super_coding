import React from 'react';
import NewsList from './components/NewsList';

function App() {

  const postRequestHandler = async () => {
      await fetch('https://react-test-684fe-default-rtdb.firebaseio.com/test.json', {
        method: 'POST',
        body: JSON.stringify(
          {
            "Key1": "value1",
            "Key2": "value2"
          }),
          headers: {
            'Content-Type': 'application/json'
          }
      })
  }

  return (
    // <NewsList />
    <button onClick={postRequestHandler}> onPost</button>
  );
}

export default App;