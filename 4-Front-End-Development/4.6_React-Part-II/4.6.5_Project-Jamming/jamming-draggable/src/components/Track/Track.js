import React, { useCallback } from "react";
import "./Track.css";
import { Draggable } from "react-beautiful-dnd";

const Track = ({ track, onAdd, onRemove, isRemoval }) => {
  const addTrack = useCallback(
    (e) => {
      onAdd(track);
    },
    [onAdd, track]
  );

  const removeTrack = useCallback(
    (e) => {
      onRemove(track);
    },
    [onRemove, track]
  );

  const renderAction = () => {
    if (isRemoval) {
      return (
        <button className="track-action" onClick={removeTrack}>
          -
        </button>
      );
    }

    return (
      <button className="track-action" onClick={addTrack}>
        +
      </button>
    );
  };
  return (
    <Draggable draggableId="draggable-1" index={0}>
      {(provided, snapshot) => (
        <div
          className="track"
          id={track.id}
          // {...this.props}
          ref={this.props.innerRef}
        >
          <div className="track-info">
            <h3>{track.name}</h3>
            <p>
              {track.artist} | {track.album}
            </p>
          </div>
          {renderAction()}
        </div>
      )}
    </Draggable>
  );
};

export default Track;
