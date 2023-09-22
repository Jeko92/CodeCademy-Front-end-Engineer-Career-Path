import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addRecipe } from "../favoriteRecipes/oldFavoriteRecipesSlice.js";
import { loadData, selectFilteredAllRecipes } from "./allRecipesSlice.js";

import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";

import favoriteIcon from "../../assets/img/icons/favorite.svg";

const favoriteIconURL = favoriteIcon;

export const AllRecipes = () => {
  const allRecipes = useSelector(selectFilteredAllRecipes);
  const dispatch = useDispatch();

  const onFirstRender = () => {
    dispatch(loadData());
  };
  useEffect(onFirstRender, [dispatch]);

  const onAddRecipeHandler = (recipe) => {
    dispatch(addRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddRecipeHandler(recipe)}
            icon={favoriteIconURL}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};
