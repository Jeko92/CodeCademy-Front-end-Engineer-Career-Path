import React from "react";
import "./SearchResults.css";
// import { Droppable } from "react-beautiful-dnd";

import TrackList from "../TrackList/TrackList";

const SearchResults = ({ searchResults, onAdd }) => {
  return (
    <div className="search-results">
      <h2>Results</h2>
      {/* 
      <Droppable droppableId="droppable-1" type="SEARCH_RESULTS">
        {(provided, snapshot) => ( */}
      <TrackList tracks={searchResults} onAdd={onAdd} />
      {/* )}
      </Droppable> */}
    </div>
  );
};

export default SearchResults;
