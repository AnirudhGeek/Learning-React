import React from "react";
import useFetch from "./useFetch";


const App = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")
  return <div>
    {data && data.map((item)=>(
      <p key={item.id }>{item.title}</p>
    ))}
  </div>;
};

export default App;
