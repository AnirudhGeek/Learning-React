import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  //it will take the state that what we are updating and action as how we are updating
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 }; //if the action type is increment then we are returning a copy of our entire state and we are only updating the count here and this count is coming from the state which we are going to providing for our dispatch function
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState); 
  // we use this state to show the data into our UI
  // we use this dispatch function to change our state (like they are the rules)


  return <div>
  <button onClick={()=>dispatch({type:"increment"})}>+</button>
  <button onClick={()=>dispatch({type:"decrement"})}>-</button>
  <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    <h1>Count : {state.count}</h1>
  </div>;
};

export default App;
