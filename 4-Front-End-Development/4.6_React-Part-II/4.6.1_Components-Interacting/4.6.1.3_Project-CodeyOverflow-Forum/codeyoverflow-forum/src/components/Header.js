import React from "react";

export default function Header(props) {
  return (
    <div>
      <img src={props.profileImg} alt={props.username} />
      <h1>{props.username}</h1>
    </div>
  );
}
