// This variable stores the "Pick a Color" button
let button = document.getElementById("color-button");

// This variable stores "Mystery Color" button
let mysteryButton = document.getElementById("next-button");

// This random number function will create color codes for the randomColor variable
const colorValue = () => Math.floor(Math.random() * 256);

const colorChange = (e) => {
  // console.log(e.target);
  // console.log(colorValue());
  let randomColor = `rgb(${colorValue()}, ${colorValue()}, ${colorValue()})`;
  // console.log(`randomColor: ${randomColor}`);
  e.target.style.backgroundColor = randomColor;
};

button.addEventListener("click", colorChange);
mysteryButton.addEventListener("wheel", colorChange);
