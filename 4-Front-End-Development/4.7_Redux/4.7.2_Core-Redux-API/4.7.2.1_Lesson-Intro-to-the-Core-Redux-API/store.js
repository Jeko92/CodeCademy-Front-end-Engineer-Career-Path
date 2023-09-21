// 2/7 Create a Redux Store
/* 
SIDENOTE
createStore is deprecated and it is recommended to use #
configureStore from the @reduxjs/toolkit package, which replaces createStore
*/

// Import createStore here
// import { createStore } from "redux";
import { legacy_createStore as createStore } from "redux";

const initialState = 0;
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return --state;
    default:
      return state;
  }
};

// Create the store here
const store = createStore(countReducer);

console.log(store);
console.log(store.getState());

// 3/7 Dispatch Actions to the Store
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
console.log(store.getState());

store.dispatch({ type: "decrement" });
store.dispatch({ type: "decrement" });
store.dispatch({ type: "decrement" });
console.log(store.getState());

// 4/7 Action Creators
// Create your action creators here.
export const increment = () => {
  return { type: "increment" };
};

export const decrement = () => {
  return { type: "decrement" };
};

store.dispatch(increment());
store.dispatch(increment());
console.log(store.getState());

store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
console.log(store.getState());

// 5/7 Respond to State Changes
