import React from "react";
import MonkeyWeirdo from "../assets/img/react_photo-monkeyweirdo.png";
import EarnestFrog from "../assets/img/react_photo-earnestfrog.png";
import Alpaca from "../assets/img/react_photo-alpaca.png";
import "../App.css";
const friends = [
  {
    title: "Yummmmmmm",
    src: MonkeyWeirdo,
  },
  {
    title: "Hey Guys! Wait Up!",
    src: EarnestFrog,
  },
  {
    title: "Yikes",
    src: Alpaca,
  },
];

// New function component starts here:
export default function Friend() {
  const randomFriendIndex = Math.floor(Math.random() * friends.length);
  const friend = friends[randomFriendIndex];
  return (
    <div className="friend-container">
      <h1>{friend.title}</h1>
      <img src={friend.src} alt={friend.title} />
    </div>
  );
}
