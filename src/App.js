import React, {useState} from 'react';
import {Message} from './message.js'
import './App.css';

function App() {
  let [count, setCount] = useState(0) 
  let [num, setNum] = useState(0) 
  let [isMorning, setisMorning] = useState(false) 
  
  // setCount(+2);
  return (
    <div className={`box ${isMorning ? 'daylight' : ''}`}>
      <h1>Day time = {isMorning ? 'Morning' : 'Night'} </h1>
      <button onClick={()=> setisMorning(!isMorning)}> Change dayLight </button><br /><br />
      
      <Message counter={count} />
      {count}
      <br />
      <button onClick={()=> alert('Button pressed, '+count+' counts')}> update counter for alert!!!!</button> <br /><br />
      <button onClick={()=> setCount(count+1)}> Add counter </button><br /><br />
      <button onClick={()=> setCount(count-1)}> Sub counter </button><br />
      <label>Enter Number:
                <input type="text" name="num" size="25" maxlength="40" /><br />
      </label>
      <button onClick={()=> setNum(num+1)}> Add counter </button><br /><br />
      <button onClick={()=> setNum(num-1)}> Sub counter </button><br />
      {num}
      
      <br />
      
    </div>

    );
}

export default App;
