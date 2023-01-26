import React, { useState, useEffect } from "react";

const UseEffectFn = () => {

    const [queryData, setQueryData] = useState({
        hi: 'hi'
    })
    useEffect(() => {
        console.log('First Effect')
        setQueryData(prevData =>{ 
            return {...prevData, firstEffect: true}
        })
    }, [])

    useEffect(() => {
        console.log('Second Effect')
    })

  return (
    <>
      <h1>Use Effect Demonstration</h1>
      <div>The Queried Data from Backend {JSON.stringify(queryData, null, 2)}</div>
    </>
  );
};

export default UseEffectFn;
