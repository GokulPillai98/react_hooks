import React, { useImperativeHandle, forwardRef, useState, useRef } from "react";

const Button = (props, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => {
    return (
        {
            addCount() {
                handleCount();
            }
        }
    )
  })
  const handleCount = () => {
    console.log('child button')
    setCount(prev => prev + 1);
  }
  return (
    <>
      <button onClick={handleCount}>Click the clild Button</button>
      <h1>{count}</h1>
    </>
  );
};

const ButtonWithImperative = forwardRef(Button)

const UseImperativeFn = () => {
    const buttonRef = useRef()
    const handlePbutton = () => {
        buttonRef.current.addCount()
    }
    return (
        <>
        <h1>Use Impreative Demonstration</h1>
            <button onClick={handlePbutton}>Click the parent Button</button>
            <ButtonWithImperative ref={buttonRef} />
        </>
    )
}

export default UseImperativeFn; 
