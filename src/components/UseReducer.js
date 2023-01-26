// import React, { useState } from "react";

// const UseReducerFn = () => {
//   const [count, setCount] = useState(0);
//   const [toggleText, setToggleText] = useState(true);
//   return (
//     <>
//       <h1>Use Reducer demonstration</h1>
//       <h2>{count}</h2>
//       <button
//         onClick={() => {
//           setCount((prevCount) => prevCount + 1);
//           setToggleText((prevValue) => !prevValue);
//         }}
//       >
//         Click Me
//       </button>
//       {toggleText && <div>This is the toggle text</div>}
//     </>
//   );
// };

// export default UseReducerFn;



/////////// lets do it with reducer hook

import React, { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {...state, count: state.count + 1}
        case "TOGGLE_TEXT":
            return {...state, toggleText: !state.toggleText}
        default:
            return state
    }
}

const UseReducerFn = () => {
    const [state, dispatch] = useReducer(reducer, {
        count: 1,
        toggleText: true
    })
  return (
    <>
      <h1>Use Reducer demonstration</h1>
      <h2>{state.count}</h2>
      <button
        onClick={() => {
          dispatch({type: 'INCREMENT'})
          dispatch({type: 'TOGGLE_TEXT'})
        }}
      >
        Click Me
      </button>
      {state.toggleText && <div>This is the toggle text</div>}
    </>
  );
};

export default UseReducerFn;
