import React, { useReducer, useState } from "react";
import { counterReducer, inititalState } from "../counterReducer.js";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, inititalState);
  const [inputValue , setInputValue] = useState(0)

  const handleIncrement = ()=>dispatch({type:'increment'})
  const handleDecrement = ()=> dispatch({type:'decrement'})

  const handleIncrementByAmount = () =>{
    dispatch({type:"incrementByAmount",payload :Number(inputValue)})
    setInputValue("")
  }
  const handleDecrementByAmount = () =>{
    dispatch({type:"decrementByAmount",payload :Number(inputValue)})
    setInputValue("")
  }

  return <div>
    <h1>Count : {state.count}</h1>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>

    <div>
      <input value={inputValue} onChange={e=>setInputValue(e.target.value)}/>
      <button onClick={handleIncrementByAmount}>Add</button>
      <button onClick={handleDecrementByAmount}>Sub</button>
    </div>
  </div>;
};

export default Counter;
