import React from "react";
import GroceryButton from "./GroceryButton";

export default function GroceryItem(props) {
  function handleClick() {
    alert(`${props.item} has been added to the cart`);
  }
  return <GroceryButton onClick={handleClick} item={props.item} />;
}
