import React, { useState } from "react";
import ItemList from "./ItemList";
import { produce, pantryItems } from "./StoreItems";

export default function GroceryCart() {
  // declare and initialize state
  const [cart, setCart] = useState([]);
  const addItem = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItem = (targetIndex) => {
    setCart((prev) => {
      return prev.filter((item, index) => index !== targetIndex);
    });
  };

  //   let counter = 1;

  return (
    <div className="grocery-cart">
      <h1>6/9 Arrays in State</h1>
      <h2>Grocery Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <div className="produce">
        <h2>Produce</h2>
        <ItemList items={produce} onItemClick={addItem} />
      </div>
      <div className="pantry-items">
        <h2>Pantry Items</h2>
        <ItemList items={pantryItems} onItemClick={addItem} />
      </div>
    </div>
  );
}
