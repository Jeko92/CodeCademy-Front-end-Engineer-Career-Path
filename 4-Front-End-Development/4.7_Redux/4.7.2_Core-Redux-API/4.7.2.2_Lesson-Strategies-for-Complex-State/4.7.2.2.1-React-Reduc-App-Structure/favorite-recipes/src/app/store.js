import { legacy_createStore as createStore, combineReducers } from "redux";
import { favoriteRecipesReducer } from "../features/favoriteRecipes/favoriteRecipesSlice.js";
import { searchTermReducer } from "../features/searchTerm/searchTermSlice.js";
import { allRecipesReducer } from "../features/allRecipes/allRecipesSlice.js";
import { searchTermReducer } from "../features/searchTerm/searchTermSlice.js";

export const store = createStore(
  combineReducers({
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: searchTermReducer,
    allRecipes: allRecipesReducer,
    searchTerm: searchTermreducer,
  })
);
