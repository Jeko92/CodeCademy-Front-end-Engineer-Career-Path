function doubleArray(inputArray) {
  // Returns an array that is the double of the input array
  const doubledArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    doubledArray[i] = 2 * inputArray[i];
  }
  return doubledArray;
}

function findMin(inputArray) {
  // Returns the smallest element in the array
  let min = inputArray[0];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] < min) {
      min = inputArray[i];
    }
  }
  return min;
}

// doubleArray() has a space complexity of O(N) and findMin() has a space complexity of O(1).
