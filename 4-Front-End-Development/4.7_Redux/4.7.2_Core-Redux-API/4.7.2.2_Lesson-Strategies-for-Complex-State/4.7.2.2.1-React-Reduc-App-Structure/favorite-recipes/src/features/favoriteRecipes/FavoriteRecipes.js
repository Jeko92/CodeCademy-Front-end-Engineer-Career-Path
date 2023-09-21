import React from "react";
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";

import unfavoriteIcon from "../../assets/img/icons/unfavorite.svg";
import { removeRecipe } from "./favoriteRecipesSlice";

const unfavoriteIconUrl = unfavoriteIcon;

// Import removeRecipe from favoriteRecipesSlice.js
const FavoriteRecipes = (props) => {
  // Extract dispatch and favoriteRecipes from props.
  const { dispatch, favoriteRecipes } = props;
  const onRemoveRecipeHandler = (recipe) => {
    // Dispatch a removeRecipe() action.
    dispatch(removeRecipe(recipe));
  };

  // Map the recipe objects in favoriteRecipes to render <Recipe /> components.
  return (
    <div id="favorite-recipes" className="recipes-container">
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

export default FavoriteRecipes;
