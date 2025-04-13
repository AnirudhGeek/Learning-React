import React from "react";

const userInfo = [
  {
    username: "john_doe",
    email: "john@example.com",
    location: "New York",
  },
  {
    username: "jane_smith",
    email: "jane@example.com",
    location: "Los Angeles",
  },
  {
    username: "mike_lee",
    email: "mike@example.com",
    location: "Chicago",
  },
];

const List = () => {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      {numbers.map(number => (
        <ul key={number}>
          <li>{number}</li>
        </ul>
      ))}
      {userInfo.map(({username,email,location}) => (
        <ul key={Math.random()}>
          <li>username : {username}</li>
          <li>email : {email}</li>
          <li>location : {location}</li>
        </ul>
      ))}
    </div>
  );
};

export default List;
