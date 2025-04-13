import React from "react";
import Greet from "./components/Greet";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";
import Form from "./components/Form";
import ExpressionsInJsx from "./components/ExpressionsInJsx";
import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";
import List from "./components/List";
import UserList from "./components/UserList";
import ProductListComponent from "./components/ProductListComponent";

const App = () => {
  return (
    <div>
      <h1>Exercise 1</h1>
      <Greet />
      <Header />
      <MainContent />
      <Footer />
      <h2>Exercise 2</h2>
      <WelcomeMessage/>
      <Form/>
      <br/>
      <ExpressionsInJsx/>
      <Greeting/>
      <ProductInfo/>
      <List/>
      <UserList/>
      <ProductListComponent/>
    </div>
  );
};

export default App;
