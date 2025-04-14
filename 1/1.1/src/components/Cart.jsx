import React from "react";

const Cart = () => {
  const items = ["Wireless", "Laptop", "Power Bank"];

  return (
    <div>
      <h1>Cart🛒</h1>
      {items.length > 0 && <h2>You have {items.length} items in your Cart.</h2>}

      <ul>
        <h4>Products</h4>
        {items.map((item) => (
          <li key={Math.random()}>{item} </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
