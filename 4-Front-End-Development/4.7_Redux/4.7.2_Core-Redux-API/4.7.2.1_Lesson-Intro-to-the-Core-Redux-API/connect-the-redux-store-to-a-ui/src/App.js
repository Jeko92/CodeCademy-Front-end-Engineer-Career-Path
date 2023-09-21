import React from "react";
import { increment, decrement } from "./store";
import "./App.css";

function App({ state, dispatch }) {
  const incrementerClicked = () => {
    dispatch(increment());
  };
  // Dispatch decrement action
  const decrementerClicked = () => {
    dispatch(decrement());
  };

  return (
    <main>
      <p id="counter">{state}</p>
      <div className="button-group">
        <button id="incrementer" onClick={incrementerClicked}>
          +
        </button>
        <button id="decrementer" onClick={decrementerClicked}>
          -
        </button>
      </div>
    </main>
  );
}

export default App;
