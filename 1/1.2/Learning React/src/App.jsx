import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import StyledCard from "./Components/StyledCard";
import ProfileCard from "./Components/ProfileCard";
import IconComponent from "./Components/IconComponent";
import Button from "./Components/Button";

import { useState } from "react";
import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";
import Exampleone from "./Components/Exampleone";
import ExampleTwo from "./Components/ExampleTwo";
import ExampleThree from "./Components/ExampleThree";

const App = () => {
  // const counter = useState(0)
  // console.log(counter)
  const [count, setCount] = useState(10);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const [friends, setFriends] = useState(["Alex", "John"]);

  const [movie, setMovie] = useState({
    title: "Eqaualizer 3",
    ratings: 7,
  });

  const [holywoodMovies, setHollywoodMovies] = useState([
    { id: 1, title: "Spiderman", ratings: 3 },
    { id: 2, title: "Superman", ratings: 5 },
  ]);

  const addOneFriend = () => {
    setFriends([...friends, "Anirudh"]);
  };

  const removeFriend = () => setFriends(friends.filter((f) => f !== "John"));

  const updateFriend = () =>
    setFriends(friends.map((f) => (f === "Alex" ? "Alex smith" : f)));

  //using useState with objects
  const handleClick = () => {
    setMovie({ ...movie, ratings: 5 });
  };

  //using usestate with array of objects
  const handleHolyClick = () => {
    setHollywoodMovies(
      holywoodMovies.map((mov) =>
        mov.id === 1 ? { ...holywoodMovies, title: "John Wick 5" } : mov
      )
    );
  };


  //passing in another component
  const [counting,setCounting] = useState(0)

  return (
    <div>
      <h1 style={{ color: "white", backgroundColor: "teal", padding: "2rem" }}>
        Inline styling
      </h1>
      <FaCartArrowDown />
      <StyledCard />
      <ProfileCard />
      <IconComponent />
      <Button />

      {/* usestate */}
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}

      <button onClick={addOneFriend}>Add new friend</button>
      <button onClick={removeFriend}>Remove one friend</button>
      <button onClick={updateFriend}>Update one friend</button>

      <div>
        <h1>Movie : {movie.title}</h1>
        <h1>Ratings : {movie.ratings}</h1>
        <button onClick={handleClick}>Change ratings</button>
      </div>

      <div>
        {holywoodMovies.map((mov) => (
          <li key={Math.random()}>{mov.title}</li>
        ))}
        <button onClick={handleHolyClick}>Change name</button>
      </div>
      {/* 
        sharing the state in another Components */}
        <Component1 counting={counting} onClickHandler={()=>setCounting(counting + 1)}/>
        <Component2 counting={counting} onClickHandler={()=>setCounting(counting - 1)}/>


        {/* Passing a function or arrow function in useState */}
        <Exampleone/>
        <ExampleTwo/>
        <ExampleThree/>
    </div>
  );
};

export default App;
