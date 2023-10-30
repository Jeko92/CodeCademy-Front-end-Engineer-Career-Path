// 1: Basic Implementation
const sieveOfEratosthenes = (limit) => {
  if (limit <= 1) {
    return [];
  }

  // Step One: Create the Array
  // Create the output
  const output = new Array(limit + 1).fill(true);
  // Mark 0 and 1 as non-prime
  output[0] = false;
  output[1] = false;

  // Step Two: Iterate
  // Iterate from 2 to the limit
  for (let i = 2; i <= limit; i++) {
    if (output[i] === true) {
      // Mark all multiples of i as non-prime
      for (let j = i * 2; j <= limit; j = j + i) {
        output[j] = false;
      }
    }
  }

  // Step Three: Return Values
  // option 1:replace true values with the corresponding number value and filter out non-primes
  return output.reduce((primes, current, index) => {
    if (current) {
      primes.push(index);
    }
    return primes;
  }, []);
};

const test = sieveOfEratosthenes(13);
// should return [2, 3, 5, 7, 11, 13]
console.log(test);

const findTrueIndices = (arr) => {
  const indices = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== false) {
      indices.push(i);
    }
  }

  return indices;
};

const test1 = findTrueIndices([
  false,
  false,
  true,
  true,
  false,
  true,
  false,
  true,
]);
// should return [2, 3, 5, 7]
console.log(test1);

// 2: Implementation with Optimizations
const sieveOfEratosthenesOptimized = (limit) => {
  // Handle edge cases
  if (limit <= 1) {
    return [];
  }
  // Create the output
  const output = new Array(limit + 1).fill(true);
  // Mark 0 and 1 as non-prime
  output[0] = false;
  output[1] = false;

  // Iterate up to the square root of the limit
  for (let i = 2; i < Math.pow(limit, 0.5); i++) {
    if (output[i] === true) {
      // Mark all multiples of i as non-prime
      for (let j = Math.pow(i, 2); j <= limit; j = j + i) {
        output[j] = false;
      }
    }
  }

  // Remove non-prime numbers
  return output.reduce((primes, current, index) => {
    if (current) {
      primes.push(index);
    }
    return primes;
  }, []);
};
const test2 = sieveOfEratosthenesOptimized(13);
// should return [2, 3, 5, 7, 11, 13]
console.log(`Optimized Answer: ${test2}`);
