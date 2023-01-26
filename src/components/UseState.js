import React, { useState } from "react";

const UseStateFn = () => {
  let [counter, setCounter] = useState(0);
  let [input1Value, setInput1Value] = useState('');
  let [input2Value, setInput2Value] = useState('');

  function handleDecrement() {
    setCounter(prevValue => prevValue - 1)
    console.log(counter);
  };

  const handleIncrements = () => {
    setCounter(prevValue => prevValue + 1)
    console.log(counter);
  };

  const handleInput1Change = (event) => {
     setInput1Value(event.target.value);
  }
  const handleInput2Change = (event) => {
    setInput2Value(event.target.value);
}
  return (
    <>
    <h1>Use State Demonstration</h1>
    <div> Learn Use State </div>
    <div>{counter}</div>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleIncrements}>Increment</button>
    <input type='text' placeholder="Test Usestate" value={input1Value} onChange={handleInput1Change}/>
    <input type='text' placeholder="set the value" value={input2Value} onChange={handleInput2Change}/>
  </>
  )
};

export default UseStateFn;
