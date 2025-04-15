import React, { useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity) return;

    const newItem = {
      name,
      quantity,
    };

    setItems((prev) => [...prev, newItem]);
    setName("");
    setQuantity("");
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Item name :
          <input
            type="text"
            placeholder="Item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Item quantity :
          <input
            type="number"
            placeholder="Item quantity"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </label>
        <button type="submit">Add Item</button>
      </form>
      <br></br>
      <h3>Details of Shopping List</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
