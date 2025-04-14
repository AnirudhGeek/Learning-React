import React, { useState } from "react";

const ExampleTwo = () => {
  const [randomNum, setRandomNum] = useState(() =>
    Math.floor(Math.random() * 100)
  );

  const genNewRandomNum = () => {
    const newNumber = Math.floor(Math.random() * 100);
    setRandomNum(newNumber)
  };

  return (
    <div>
      <h1>Random Number : {randomNum}</h1>
      <button onClick={genNewRandomNum}>Generate New Number</button>
    </div>
  );
};

export default ExampleTwo;
