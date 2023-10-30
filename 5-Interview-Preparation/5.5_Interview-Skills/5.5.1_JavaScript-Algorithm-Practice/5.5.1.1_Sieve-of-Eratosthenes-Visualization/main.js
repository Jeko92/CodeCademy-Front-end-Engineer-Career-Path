// Set-up JS
const mainContainer = document.getElementById("sieve-container");
const description = document.querySelector(".description");

for (let tens = 0; tens < 10; tens++) {
  let container = document.createElement("div");
  container.classList.add("row");
  for (let ones = 1; ones <= 10; ones++) {
    const currentNode = document.createElement("div");
    const value = tens * 10 + ones;
    currentNode.textContent = tens === 0 && ones === 1 ? "-" : value;
    currentNode.classList.add("node");
    currentNode.id = `number-${value}`;
    container.appendChild(currentNode);
  }
  mainContainer.appendChild(container);
}

let scheduled = [];

const sieveOfEratosthenes = (limit) => {
  if (limit <= 1) {
    return [];
  }
  // Create the output
  const output = new Array(limit + 1).fill(true);

  let timeToSchedule = 0;
  const longInterval = 500;
  const shortInterval = 100;
  // Iterate up to the square root of the limit
  for (let i = 2; i < limit; i++) {
    if (output[i] === true) {
      const current = document.getElementById(`number-${i}`);
      scheduled.push(
        window.setTimeout(() => {
          current.classList.add("active");
          description.textContent = `Marking multiples of ${i}`;
        }, timeToSchedule)
      );
      // Mark all multiples of i as non-prime
      for (let j = Math.pow(i, 2); j <= limit; j = j + i) {
        if (output[j] !== false) {
          scheduled.push(
            window.setTimeout(() => {
              document.getElementById(`number-${j}`).classList.add("not-prime");
            }, timeToSchedule)
          );
        }
        timeToSchedule += shortInterval;

        output[j] = false;
      }
      timeToSchedule += longInterval;
      scheduled.push(
        window.setTimeout(() => {
          current.classList.remove("active");
          current.classList.add("prime");
        }, timeToSchedule)
      );
    }
  }
  timeToSchedule += longInterval;
  scheduled.push(
    window.setTimeout(() => {
      description.textContent = "All primes found!";
    }, timeToSchedule)
  );
  scheduled.push(
    window.setTimeout(() => {
      reset();
    }, timeToSchedule + 5000)
  );
};

sieveOfEratosthenes(100);

const reset = () => {
  scheduled.forEach((id) => window.clearTimeout(id));
  scheduled = [];
  document.querySelectorAll(".node").forEach((node) => {
    node.classList.remove("active");
    node.classList.remove("prime");
    node.classList.remove("not-prime");
  });
  sieveOfEratosthenes(100);
};

const playButton = document.getElementById("play");
playButton.addEventListener("click", reset);
