//Lesosn-Core concepts in Redux

// 3/9 State
const state = ["Take Five", "Clair de Lune", "Respect"];

// 4/9 Actions
const addNewSong = {
  type: "songs/addSong",
  payload: "Halo",
};

const removeSong = {
  type: "songs/removeSong",
  payload: "Take Five",
};

const removeAll = {
  type: "songs/removeAll",
};

// 5/9 Reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "songs/addSong": {
      return [...state, action.payload];
    }
    case "songs/removeSong": {
      return state.filter((song) => song !== action.payload);
    }
    default: {
      return state;
    }
  }
};

// 6/9 Rules of Reducers
// Reducer violates rule 1:
// They should only calculate the new state value based on the state and action arguments.

const globalSong = "We are the World";

export const playlistReducer = (state = [], action) => {
  switch (action.type) {
    case "songs/addGlobalSong": {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

// Example call to reducer
const state1 = ["Take Five", "Claire de Lune", "Respect"];
const addAction = { type: "songs/addGlobalSong", payload: "We are the World" };
const newState = playlistReducer(state, addAction);

// Reducer violates rule 2:
// They are not allowed to modify the existing state.
// Instead, they must copy the existing state and make changes to the copied values.

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "todos/addTodo": {
      // state.push(action.payload);
      return [...state, action.payload];
    }
    case "todos/removeAll": {
      return [];
    }
    default: {
      return state;
    }
  }
};

// Example call to reducer
const state2 = ["Print trail map", "Pack snacks", "Summit the mountain"];
const addTodoAction = { type: "todos/addTodo", payload: "Descend" };
const newState1 = todoReducer(state, addTodoAction);
