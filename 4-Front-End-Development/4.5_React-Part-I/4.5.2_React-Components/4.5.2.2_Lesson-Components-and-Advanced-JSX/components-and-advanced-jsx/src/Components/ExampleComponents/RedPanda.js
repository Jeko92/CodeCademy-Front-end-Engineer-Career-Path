import React from "react";
import RedPandaImg from "../../assets/img/Endangered_Red_Panda.jpeg";

const redPanda = {
  src: RedPandaImg,
  alt: "Red Panda",
  width: "200px",
};

function RedPanda() {
  return (
    <div>
      <h1>Cute Red Panda</h1>
      {/* <img src={redPanda.src} alt={redPanda.alt} width={redPanda.width} /> */}
      <img src={redPanda.src} alt={redPanda.alt} />
    </div>
  );
}

export default RedPanda;
