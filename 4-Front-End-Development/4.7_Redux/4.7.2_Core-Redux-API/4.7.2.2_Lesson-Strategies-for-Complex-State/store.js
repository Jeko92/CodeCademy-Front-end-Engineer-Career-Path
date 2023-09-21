import { legacy_createStore as createStore, combineReducers } from "redux";
import allRecipesData from "./data.js";

// 2/10 Slices
// const initialState = {
//   allRecipes: [],
//   favoriteRecipes: [],
//   searchTerm: "",
// };

// 3/10 Actions and Payloads For Complex State
// Dispatched when the user types in the search input.
// Sends the search term to the store.
// export const setSearchTerm = (term) => {
//   return {
//     type: "searchTerm/setSearchTerm",
//     payload: term,
//   };
// };

// Dispatched when the user presses the clear search button.
// export const clearSearchTerm = () => {
//   return {
//     type: "searchTerm/clearSearchTerm",
//   };
// };

// Dispatched when the user first opens the application.
// Sends the allRecipesData array to the store.
// export const loadData = () => {
//   return {
//     type: "allRecipes/loadData",
//     payload: allRecipesData,
//   };
// };

// Dispatched when the user clicks on the heart icon of
// a recipe in the "All Recipes" section.
// Sends the recipe object to the store.
// export const addRecipe = (recipe) => {
//   return {
//     type: "favoriteRecipes/addRecipe",
//     payload: recipe,
//   };
// };

// Dispatched when the user clicks on the broken heart
// icon of a recipe in the "Favorite Recipes" section.
// Sends the recipe object to the store.
// export const removeRecipe = (recipe) => {
//   return {
//     type: "favoriteRecipes/removeRecipe",
//     payload: recipe,
//   };
// };

// 4/10 Immutable Updates & Complex State
/* Complete this reducer */
// const recipesReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "allRecipes/loadData":
//       return {
//         ...state,
//         allRecipes: action.payload,
//       };
//     case "searchTerm/clearSearchTerm":
//       return {
//         ...state,
//         searchTerm: "",
//       };

//     case "searchTerm/setSearchTerm":
//       return {
//         ...state,
//         searchTerm: action.payload,
//       };

//     case "favoriteRecipes/addRecipe":
//       return {
//         ...state,
//         favoriteRecipes: [...state.favoriteRecipes, action.payload],
//       };

//     case "favoriteRecipes/removeRecipe":
//       return {
//         ...state,
//         favoriteRecipes: [...state.favoriteRecipes].filter(
//           (recipe) => recipe.id !== action.payload.id
//         ),
//       };

//     default:
//       return state;
//   }
// };

// export const store = createStore(recipesReducer);

// 5/10 Reducer Composition

// Action Creators
////////////////////////////////////////

export const addRecipe = (recipe) => {
  return {
    type: "favoriteRecipes/addRecipe",
    payload: recipe,
  };
};

export const removeRecipe = (recipe) => {
  return {
    type: "favoriteRecipes/removeRecipe",
    payload: recipe,
  };
};

export const setSearchTerm = (term) => {
  return {
    type: "searchTerm/setSearchTerm",
    payload: term,
  };
};

export const clearSearchTerm = () => {
  return {
    type: "searchTerm/clearSearchTerm",
  };
};

export const loadData = () => {
  return {
    type: "allRecipes/loadData",
    payload: allRecipesData,
  };
};

// Reducers
////////////////////////////////////////

const initialAllRecipes = [];
const allRecipesReducer = (allRecipes = initialAllRecipes, action) => {
  switch (action.type) {
    case "allRecipes/loadData":
      return action.payload;
    default:
      return allRecipes;
  }
};

const initialSearchTerm = "";
const searchTermReducer = (searchTerm = initialSearchTerm, action) => {
  switch (action.type) {
    case "searchTerm/setSearchTerm":
      return action.payload;
    case "searchTerm/clearSearchTerm":
      return "";
    default:
      return searchTerm;
  }
};

// Create the initial state for this reducer.
const initialFavoriteRecipes = [];
const favoriteRecipesReducer = (
  favoriteRecipes = initialFavoriteRecipes,
  action
) => {
  switch (action.type) {
    // Add action.type cases here.
    case "favoriteRecipes/addRecipe":
      return [...favoriteRecipes, action.payload];
    case "favoriteRecipes/removeRecipe":
      return favoriteRecipes.filter(
        (element) => element.id !== action.payload.id
      );
    default:
      return favoriteRecipes;
  }
};

// const rootReducer = (state = {}, action) => {
//   const nextState = {
//     allRecipes: allRecipesReducer(state.allRecipes, action),
//     searchTerm: searchTermReducer(state.searchTerm, action),
//     favoriteRecipes: favoriteRecipesReducer(state.favoriteRecipes, action),
//   };
//   return nextState;
// };

// export const store = createStore(rootReducer);

// 6/10 combineReducers
const reducers = {
  allRecipes: allRecipesReducer,
  searchTerm: searchTermReducer,
  favoriteRecipes: favoriteRecipesReducer,
};

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer);

// 7/10 A File Structure for Redux
