import React from "react";
const myName = "Anirudh";
const multiply = (a, b) => a * b;
const specialClass = "simple-class"; //giving classname dynamicallly

const ExpressionsInJsx = () => {
  return (
    <div>
      <p>2*5={multiply(2, 5)}</p>
      <h3>{myName}</h3>
      <p className={specialClass}>This is a special-class</p>
    </div>
  );
};

export default ExpressionsInJsx;
