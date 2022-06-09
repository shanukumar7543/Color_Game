import { useState } from 'react';

function App() {
  let [red, setRed] = useState(0);
  let [green, setGreen] = useState(0);
  let [blue, setBlue] = useState(0);

  function changeColor() {

    setRed(Math.floor(Math.random() * 255));
    setGreen(Math.floor(Math.random() * 255));
    setBlue(Math.floor(Math.random() * 255));

  }
  function reset() {
    setRed(255);
    setGreen(255);
    setBlue(255);
  }

  return (
    <div className='App'>
      <div style={{
        border: "4px solid",
        borderRadius: "10px",
        height: "600px",
        margin: "20px",
        backgroundColor: `rgb(${red},${green},${blue})`
      }}>
      </div>
      <button onClick={changeColor}>Change color</button>
      <button onMouseEnter={reset}>Reset</button>

    </div>
  );

}

export default App;
