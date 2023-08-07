import React from "react";
// import { createRoot } from "react-dom/client";
import "./App.css";
import { animals } from "./animals";
import ocean from "./assets/img/ocean.jpeg";

const title = "";
const background = <img className="background" alt="ocean" src={ocean} />;
const images = [];
const showBackground = Math.random() < 0.5;

const displayFact = (e) => {
  // console.log(e.target.alt);
  const clickedAnimal = e.target.alt;
  const funFact =
    animals[clickedAnimal].facts[
      Math.floor(Math.random() * animals[clickedAnimal].facts.length)
    ];
  // console.log(funFact);
  const pToChange = document.getElementById("fact");
  pToChange.innerHTML = funFact;
};

for (const animalKey in animals) {
  const animal = animals[animalKey];
  images.push(
    <img
      src={animal.image}
      alt={animalKey} // Use the animal key as the alt text
      key={animalKey}
      className="animal"
      aria-label={animalKey}
      role="button"
      onClick={displayFact}
    />
  );
}

const animalFacts = (
  <div>
    {/* <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1> */}
    <h1>{title || "Click an animal for a fun fact"}</h1>
    {showBackground && background}
    <div className="animals">{images}</div>
    <p id="fact">{}</p>
  </div>
);

function App() {
  return <>{animalFacts}</>;
}

export default App;
