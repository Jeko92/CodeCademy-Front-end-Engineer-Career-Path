const recursiveFactorial = (n) => {
  if (n === 0) {
    return 1;
  } else if (n > 0) {
    return n * recursiveFactorial(n - 1);
  }
};

const iterativeFactorial = (n) => {
  result = 1;
  while (n > 0) {
    result *= n;
    n -= 1;
  }
  return result;
};

const factorialRecursive = recursiveFactorial(5);
const factorialIterative = iterativeFactorial(5);

console.log(
  `Recursive Factorial is: ${factorialRecursive} \nIterative Factorial is: ${factorialIterative}`
);
