import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import StyledCard from "./Components/StyledCard";
import ProfileCard from "./Components/ProfileCard";
import IconComponent from "./Components/IconComponent";
import Button from "./Components/Button";

const App = () => {
  return (
    <div>
      <h1 style={{color:"white", backgroundColor:"teal", padding:"2rem"}}>Inline styling</h1>
      <FaCartArrowDown/>   
      <StyledCard/>
      <ProfileCard/>
      <IconComponent/>
      <Button/>
    </div>
  );
};

export default App;
