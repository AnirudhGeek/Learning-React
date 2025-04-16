import React from "react";
import ComponentA from "./components/ComponentA";
import { createContext } from "react";

export const Data = createContext();
export const Data1 = createContext();

const App = () => {
  const name = "Anirudh";
  const age = 20;
  return (
    <div>
      <Data.Provider value={name}>
        {/* Provider is simply means that this gonna provide value or our data in multiple components  */}
        {/* and inside value we are gonna pass that data which we wants to pass inside our components */}
        <Data1.Provider value={age}>
          <ComponentA />
        </Data1.Provider>
      </Data.Provider>
    </div>
  );
};

export default App;
