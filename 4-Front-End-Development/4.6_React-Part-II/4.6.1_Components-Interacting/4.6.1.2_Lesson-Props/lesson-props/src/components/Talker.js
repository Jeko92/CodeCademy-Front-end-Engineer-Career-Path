import React from "react";
import ButtonComp from "./ButtonComp";

function Talker() {
  function handleClick() {
    let speech = "";
    for (let i = 0; i < 10000; i++) {
      speech += "blah ";
    }
    alert(speech);
  }
  // Here onClick is a prop because, event handlers only work o HTML-Like elements
  return <ButtonComp onClick={handleClick} />;
}

export default Talker;
