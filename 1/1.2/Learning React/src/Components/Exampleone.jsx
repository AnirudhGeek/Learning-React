import React, { useState } from "react";

const Exampleone = () => {
  const [count, setCount] = useState(() => {
    //this function will only runs when our components first render
    const initialCount = 10;
    return initialCount;
  });

  const increment = ()=>{
    setCount(prevCount => prevCount+1)
  }

  return <div>
    <h1>Count : {count}</h1>
    <button onClick={increment}>Increment</button>
  </div>;
};

export default Exampleone;
