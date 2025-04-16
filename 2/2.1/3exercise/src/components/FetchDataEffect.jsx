import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const FetchDataEffect = () => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) setValue(data);
    }
    getData();
  });
  return (
    <div>
      <h3>First post Title</h3>
      <h5>{value.length>0?value[0].body:<p>loading...</p>}</h5>
    </div>
  );
};

export default FetchDataEffect;
