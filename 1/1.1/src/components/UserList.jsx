import React from "react";

const user = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 22 },
];

const UserList = () => {
  return <div>
    {user.map(person =>(
        <ul key={person.id}>
            <li>name : {person.name}</li>
            <li>age : {person.age}</li>
        </ul>
    ))}
  </div>;
};

export default UserList;
