import React from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Category from './Sidebars/Category/Category'
import Colors from './Sidebars/Colors/Colors'
import Price from './Sidebars/Price/Price'

const App = () => {
  return (
    <div>
      <Nav />
      <Products />
      <Recommended/>
      <Category/>
      <Colors/>
      <Price/>
    </div>
  );
};

export default App;
