import { legacy_createStore as createStore } from "../node_modules/redux";

const increment = () => {
  return { type: "increment" };
};

const decrement = () => {
  return { type: "decrement" };
};

const initialState = 0;
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(countReducer);

export { increment, decrement, store };
