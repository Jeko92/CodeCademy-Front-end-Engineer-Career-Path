import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ contactsArr, appointmentsArr }) => {
  const renderTile = () => {
    if (contactsArr) {
      return contactsArr.map((contact, index) => (
        <Tile key={index} contact={contact} />
      ));
    } else {
      return appointmentsArr.map((appointment, index) => (
        <Tile key={index} appointment={appointment} />
      ));
    }
  };

  return <div className="tile-container">{renderTile()}</div>;
};
