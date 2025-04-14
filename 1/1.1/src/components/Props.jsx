import React from "react";

const Props = () => {
  return <User name=" Anirudh" banana={true} isMarried={false} />;
};

const User = (props) => {
  console.log(props);
  return;
  <div>
    <h1>Name : {props.name}</h1>
    <h1>banana : {props.banana}</h1>
  </div>;
};

export default Props;
