import React from "react";
import { Data, Data1 } from "../App";

const ComponentC = () => {
  return (
    <Data.Consumer>
      {/* this consumer will allows us to get or consume the data */}

      {(name) => {
        return (
          <Data1.Consumer>
            {(age) => (
              <h1>
                My name is : {name} and my age is : {age}
              </h1>
            )}
          </Data1.Consumer>
        );
      }}
    </Data.Consumer>
  );
};

export default ComponentC;
