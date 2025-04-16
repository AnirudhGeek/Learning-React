import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {     //fetching of data logic
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }
    getData();
  }, []);
  return <div>
    <ul>
      {data.map((todo)=>(
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  </div>;
};

export default App;
