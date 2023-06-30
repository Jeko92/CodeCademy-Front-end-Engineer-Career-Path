let ball = document.getElementById("float-circle");

// Write your coce below
const up = () => {
  ball.style.bottom = "250px";
};

const down = () => {
  ball.style.bottom = "50px";
};

// Event handlers
document.addEventListener("keydown", up);
document.addEventListener("keyup", down);
