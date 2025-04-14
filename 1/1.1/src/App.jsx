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
import Props from "./components/Props";
import Person from "./components/Person";
import Product from "./components/Product";
import Card1 from "./components/Card1";
import Cart from "./components/Cart";
import Weather from "./components/Weather";
import Userstatus from "./components/Userstatus";
import Greeting2 from "./components/Greeting2";


const ValidPass = () => <h1>Valid Password</h1>;
const InvalidPass = () => <h1>Invalid Password</h1>;

const Password = ({ isValid }) => 
  // if (isValid) {
  //   return <ValidPass/>;
  // }
  // return <InvalidPass/>;
   isValid ? <ValidPass/> : <InvalidPass/>


const App = () => {
  return (
    <div>
      <h1>Exercise 1</h1>
      <Greet />
      <Header />
      <MainContent />
      <Footer />
      <h2>Exercise 2</h2>
      <WelcomeMessage />
      <Form />
      <br />
      <ExpressionsInJsx />
      <Greeting />
      <ProductInfo />
      <List />
      <UserList />
      <ProductListComponent />
      <Props />
      <Person name="Anirudh" age={20} />
      <Product name="Toothpaste" price={12} />
      <Card1>
        <h1>My Card</h1>
        <p>This is some content for card 1</p>
      </Card1>
      <Card1>
        <h1>My Card</h1>
        <p>This is some content for card 2</p>
      </Card1>
      <Card1>
        <h1>My Card</h1>
        <p>This is some content for card 3</p>
      </Card1>
     
      <Password isValid={true}/>
      <Password isValid={false}/>
      <Cart/>


      <Weather temperature = {10}/>
      <Userstatus loggedIn={true} isAdmin={false}/>
      <Greeting2 timeOfDay="afternoon" />
    </div>
  );
};

export default App;
