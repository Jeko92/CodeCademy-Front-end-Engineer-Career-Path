import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  favoriteRecipesSlice,
  selectFilteredFavoriteRecipes,
} from "./favoriteRecipesSlice.js";
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";

import unfavoriteIcon from "../../assets/img/icons/unfavorite.svg";

const unfavoriteIconUrl = unfavoriteIcon;

// Import removeRecipe from favoriteRecipesSlice.js
const { removeRecipe } = favoriteRecipesSlice.actions;
export const FavoriteRecipes = () => {
  const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);
  const dispatch = useDispatch();

  const onRemoveRecipeHandler = (recipe) => {
    dispatch(removeRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {favoriteRecipes.map(createRecipeComponent)}
    </div>
  );

  // Helper Function
  function createRecipeComponent(recipe) {
    return (
      <Recipe recipe={recipe} key={recipe.id}>
        <FavoriteButton
          onClickHandler={() => onRemoveRecipeHandler(recipe)}
          icon={unfavoriteIconUrl}
        >
          Remove Favorite
        </FavoriteButton>
      </Recipe>
    );
  }
};
