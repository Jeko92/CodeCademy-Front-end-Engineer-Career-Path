import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";
import { Droppable } from "react-beautiful-dnd";

const TrackList = ({ tracks, onAdd, isRemoval, onRemove }) => {
  // const TrackList = (props) => {
  return (
    <div className="tracklist">
      {/* {props.tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={props.onAdd}
            isRemoval={props.isRemoval}
            onRemove={props.onRemove}
          />
        );
      })} */}
      {tracks.map((track, i) => {
        return (
          <Droppable droppableId="droppable-1" type="TRACK_LIST">
            {(provided, snapshot) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <Track
                  track={track}
                  key={track.id}
                  // key={i}
                  onAdd={onAdd}
                  isRemoval={isRemoval}
                  onRemove={onRemove}
                  innerRef={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                />
              </div>
            )}
          </Droppable>
        );
      })}
    </div>
  );
};

export default TrackList;
