import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  setSearchTerm,
  clearSearchTerm,
  selectSearchTerm,
} from "./searchTermSlice.js";

import searchIcon from "../../assets/img/icons/search.svg";
import clearIcon from "../../assets/img/icons/clear.svg";

const searchIconUrl = searchIcon;
const clearIconUrl = clearIcon;

export const SearchTerm = () => {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const onSearchTermChangeHandler = (e) => {
    const userInput = e.target.value;
    dispatch(setSearchTerm(userInput));
  };

  const onClearSearchTermHandler = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <div id="search-container">
      <img id="search-icon" alt="" src={searchIconUrl} />
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={onSearchTermChangeHandler}
        placeholder="Search recipes"
      />
      {searchTerm.length > 0 && (
        <button
          onClick={onClearSearchTermHandler}
          type="button"
          id="search-clear-button"
        >
          <img src={clearIconUrl} alt="" />
        </button>
      )}
    </div>
  );
};
