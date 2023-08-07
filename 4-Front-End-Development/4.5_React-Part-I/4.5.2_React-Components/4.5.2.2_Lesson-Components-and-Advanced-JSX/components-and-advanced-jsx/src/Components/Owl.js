import React from "react";
import OwlImg from "../assets/img/react_photo-owl.png";

const owl = {
  title: "Excellent Owl",
  src: OwlImg,
};

//Define function component here:
export default function Owl() {
  return (
    <div>
      <h1>{owl.title}</h1>
      <img src={owl.src} alt={owl.title} />
    </div>
  );
}
