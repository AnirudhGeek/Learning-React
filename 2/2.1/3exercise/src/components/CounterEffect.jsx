import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log("Count updated!")
    document.title = `Count : ${count}`
  },[count])

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(count+1)}>Add</button>
    </div>
  );
};

export default CounterEffect;
