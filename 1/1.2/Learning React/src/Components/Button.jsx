import React from "react";

const Button = () => {
  const handleClick = () => console.log(Math.round(Math.random() * 10));
  function moveHandler() {
    alert("Mouse move event fired");
    console.log("Mouse move event fired");
  }
  return (
    <div>
      <button onClick={() => console.log("Yes you clicked on me!")}>
        Click!
      </button>
      <button onClick={handleClick}>Click!</button>
      <p onMouseMove={moveHandler}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        nostrum nobis hic fugit modi earum dolor odio distinctio rerum tenetur.
      </p>
    </div>
  );
};

export default Button;
