import './App.css';
import React, {useState} from 'react';


const App = () => {
  const [num, setNum] = useState("");
  
  const handleClick = (e) => {
    setNum(num.concat(e.target.name));
  }

  const calc = () => {
    setNum(eval(num).toString());
  }

return (
  <div>
      <h1>{num}</h1>
      <div className="buttons">
          <div className="row1">
            <button onClick={handleClick} name="/">/</button>
            <button onClick={handleClick} name="*">x</button>
            <button onClick={handleClick} name="+">+</button>
            <button onClick={handleClick} name="-">-</button>
          </div>
          <div className="row2">
            <button onClick={() => setNum("")}>C</button>
            <button id="equals" onClick={calc}>=</button>
            
          </div>
          <div className="row3">
            <button onClick={handleClick} name="7">7</button>
            <button onClick={handleClick} name="8">8</button>
            <button onClick={handleClick} name="9">9</button>
          </div>
          <div className="row4">
            <button onClick={handleClick} name="4">4</button>
            <button onClick={handleClick} name="5">5</button>
            <button onClick={handleClick} name="6">6</button>
               <button onClick={handleClick} name=".">.</button>
          </div>
          <div className="row5">
            <button onClick={handleClick} name="1">1</button>
            <button onClick={handleClick} name="2">2</button>
            <button onClick={handleClick} name="3">3</button>

            <button onClick={handleClick} name="0">0</button>
          </div>

      </div>
  </div>
  )
}


export default App;
