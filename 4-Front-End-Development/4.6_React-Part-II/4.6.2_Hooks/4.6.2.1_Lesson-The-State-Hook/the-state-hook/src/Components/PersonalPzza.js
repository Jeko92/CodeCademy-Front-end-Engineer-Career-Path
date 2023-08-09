/*
To-Do:
1-- display in a better order and styling
2-- map over ingredients so that before last ingredient will be 'and' inserted
3-- add order now button
4-- after button click return confirmation message
5-- add extra modal to ask if user really wants to remove topping (is it good user experience??)

 */
// import "./style.css";

import React, { useState } from "react";

//Static array of pizza options offered.
const options = ["Bell Pepper", "Sausage", "Pepperoni", "Pineapple"];

export default function App() {
  const [selected, setSelected] = useState([]);

  const toggleTopping = ({ target }) => {
    const clickedTopping = target.value;
    setSelected((prev) => {
      // check if clicked topping is already selected
      if (prev.includes(clickedTopping)) {
        // filter the clicked topping out of state
        return prev.filter((t) => t !== clickedTopping);
      } else {
        // add the clicked topping to our state
        return [clickedTopping, ...prev];
      }
    });
  };

  return (
    <div>
      {options.map((option) => (
        <button value={option} onClick={toggleTopping} key={option}>
          {selected.includes(option) ? "Remove " : "Add "}
          {option}
        </button>
      ))}
      <p>Order a {selected.join(", ")} pizza</p>
    </div>
  );
}
