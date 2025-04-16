import React from "react";
import { Data, Data1 } from "../App";
import { useContext } from "react";

const ComponentC = () => {
  const userName = useContext(Data); // we have to tell our hook that from where the data is coming
  const age = useContext(Data1);
  return (
    <h1>
      My name is : {userName} and I am {age} years old.
    </h1>
  );
};

export default ComponentC;
