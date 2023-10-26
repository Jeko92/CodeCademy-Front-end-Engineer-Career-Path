const bubbleSortContainer = document.getElementById("bubble-sort");
const bubbleSwaps = document.getElementById("swaps");
const comparisons = document.getElementById("comparisons");

const resetButton = document.getElementById("play");
const randomButton = document.getElementById("random");
const reverseButton = document.getElementById("reverse-sorted");
const sortedButton = document.getElementById("sorted");

const firstSwap = document.getElementById("first-swap");
const firstSwapValue = document.getElementById("first-swap-value");
const secondSwap = document.getElementById("second-swap");
const secondSwapValue = document.getElementById("second-swap-value");
const action = document.getElementById("action");

let timeouts = [];
let bubbleCount = 1;
let speed = 300;
const scale = 20;

for (let i = 0; i < 10; i++) {
  const element = document.createElement("div");
  element.classList.add("element-container");
  const data = document.createElement("div");
  element.appendChild(data);
  data.classList.add("data");
  data.id = `bubble-${i}`;
  bubbleSortContainer.appendChild(element);
}
const bubbleNodes = document.querySelectorAll("#bubble-sort .data");

const generateRandomInput = (length) =>
  new Array(length).fill(0).map(() => Math.ceil(Math.random() * 10));

const generateSortedList = (length) =>
  new Array(length).fill(0).map((_, i) => i + 1);

const generateOutOfOrderList = (limit) => {
  const output = [];
  for (let i = limit; i > 0; i--) {
    output.push(i);
  }
  return output;
};

let currentGeneratorFunction = generateRandomInput;

const swap = (arr, indexOne, indexTwo) => {
  const temp = arr[indexTwo];
  arr[indexTwo] = arr[indexOne];
  arr[indexOne] = temp;
};

let comparisonCount = 0;
let swapCount = 0;

const runBubbleSort = (arrayGeneratorFunction) => {
  // Setup
  const input = arrayGeneratorFunction(10);
  for (let i = 0; i < input.length; i++) {
    bubbleNodes[i].style.height = input[i] * scale;
  }

  let swapping = true;
  while (swapping) {
    swapping = false;
    for (let i = 0; i < input.length - 1; i++) {
      const internalInput = [...input];
      const start = i;
      const end = i + 1;
      timeouts.push(
        window.setTimeout(() => {
          bubbleNodes[start].classList.add("active");
          bubbleNodes[end].classList.add("secondary");

          firstSwap.innerText = start;
          firstSwapValue.innerText = input[start];
          secondSwap.innerText = end;
          secondSwapValue.innerText = input[end];
          action.innerText = "Comparing";

          for (let i = 0; i < internalInput.length; i++) {
            bubbleNodes[i].style.height = internalInput[i] * scale;
          }
          comparisonCount++;
          comparisons.innerText = comparisonCount;
          timeouts.push(
            window.setTimeout(() => {
              bubbleNodes[start].classList.remove("active");
              bubbleNodes[end].classList.remove("secondary");
            }, speed)
          );
        }, bubbleCount * speed)
      );
      bubbleCount++;
      if (input[i] > input[i + 1]) {
        swap(input, i, i + 1);
        timeouts.push(
          window.setTimeout(() => {
            swap(internalInput, i, i + 1);
            const currentInput = [...internalInput];
            firstSwap.innerText = end;
            firstSwapValue.innerText = currentInput[start];
            secondSwap.innerText = start;
            secondSwapValue.innerText = currentInput[end];
            action.innerText = "Swapping";
            bubbleNodes[start].classList.add("pivot");
            bubbleNodes[end].classList.add("pivot");

            for (let i = 0; i < currentInput.length; i++) {
              bubbleNodes[i].style.height = currentInput[i] * scale;
            }
            swapCount++;
            bubbleSwaps.innerText = swapCount;
            timeouts.push(
              window.setTimeout(() => {
                bubbleNodes[start].classList.remove("pivot");
                bubbleNodes[end].classList.remove("pivot");
              }, speed)
            );
          }, bubbleCount * speed)
        );
        bubbleCount++;
        bubbleCount++;
        swapping = true;
      }
    }
  }
};

function resetTimers() {
  timeouts.forEach((id) => {
    window.clearTimeout(id);
  });
  timeouts = [];
}

const runAllSorts = (arrayGeneratorFunction = currentGeneratorFunction) => {
  resetTimers();
  bubbleNodes.forEach((node) => node.classList.remove("active"));
  bubbleNodes.forEach((node) => node.classList.remove("secondary"));
  bubbleNodes.forEach((node) => node.classList.remove("pivot"));
  bubbleCount = 1;
  swapCount = 0;
  comparisonCount = 0;
  bubbleSwaps.innerText = 0;
  comparisons.innerText = 0;
  runBubbleSort(arrayGeneratorFunction);
};

resetButton.addEventListener("click", function reset() {
  runAllSorts();
});

randomButton.addEventListener("click", function reset() {
  currentGeneratorFunction = generateRandomInput;
  runAllSorts();
});

reverseButton.addEventListener("click", function reset() {
  currentGeneratorFunction = generateOutOfOrderList;
  runAllSorts();
});

sortedButton.addEventListener("click", function reset() {
  currentGeneratorFunction = generateSortedList;
  runAllSorts();
});

// Kickstart it!
runAllSorts();
