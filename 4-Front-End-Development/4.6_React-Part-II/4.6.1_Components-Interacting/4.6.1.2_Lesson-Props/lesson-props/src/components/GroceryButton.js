import React from "react";

export default function GroceryButton(props) {
  return <button onClick={props.onClick}>{props.item}</button>;
}
