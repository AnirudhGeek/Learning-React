import React, { useEffect, useState } from 'react'

const App = () => {
  const [value,setValue] = useState(0)
  const [something,setSomething] = useState(0)
  useEffect(()=>{       // first argument it takes is a call back function and second argumnet is the dependancy array
    console.log("call useEffect")
    document.title = `Increment ${value}`
  },[value])  //if we do not give the dependency array, then it will run this code every single time whenever our component re renders
  //now you will think if we add value to dependacy array and do not making a dependency array gives the same result then we are wrong
  //=> when we secify value inside the dependency array and anytime when our component changes becaues of this state the call back function will gonna be fire 
  // => but if we have a sort of some other state and that state is also rerendering then the call back function code will not gonna be fire 
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={()=>setValue(value+1)}>Add</button>
      <button onClick={()=>setSomething(something+1)}>Something add</button>
    </div>
  )
}

export default App
