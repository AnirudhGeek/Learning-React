import React, { useRef } from "react";

const App = () => {
  const inputElement = useRef(null);

  const focusInput = () =>{
    inputElement.current.focus()
    inputElement.current.value = "Anirudh"
  }

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={()=>focusInput()}>Focus and write Anirudh</button>
    </div>
  );
};

export default App;
