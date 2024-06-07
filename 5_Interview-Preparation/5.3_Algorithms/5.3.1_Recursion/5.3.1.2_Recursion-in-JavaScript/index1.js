const recursiveFactorial = (n) => {
  if (n === 0) {
    return 1;
  }

  if (n > 0) {
    console.log(`Execution context: ${n}`);

    // recursiveFactorial(n - 1);
    return n * recursiveFactorial(n - 1);
  }
};

// const recursiveSolution = recursiveFactorial(4);
// const recursiveSolution = recursiveFactorial(0);
const recursiveSolution = recursiveFactorial(5);
console.log(recursiveSolution);

module.exports = {
  recursiveFactorial,
};
