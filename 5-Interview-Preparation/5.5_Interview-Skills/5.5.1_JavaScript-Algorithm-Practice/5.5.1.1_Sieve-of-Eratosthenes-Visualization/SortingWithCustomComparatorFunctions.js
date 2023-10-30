const array1 = [10, 43, 5, 0, 4, 3, 2, 1, 11];
console.log(array1.sort());

const array2 = ["f", "e", "d", "a", "h", "b", "actual", "aardvark"];
console.log(array2.sort());

const ascendingOrder = (a, b) => {
  return a - b;
};

// Use this array to test your code:
const testArray = [10, 43, 5, 0, -2, -20, 4, 3, 2, 1, 11];
testArray.sort(ascendingOrder);
console.log(testArray);

const sortByLength = (a, b) => {
  if (a.length < b.length) {
    return -1;
  } else if (a.length > b.length) {
    return 1;
  } else {
    return ascendingOrder1(a, b);
  }
};

const ascendingOrder1 = (a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
};

// Use this array to test your code:
const testArray1 = ["car", "train", "plane", "bike", "skateboard", "jet"];
testArray.sort(sortByLength);
console.log(testArray1);

const explicitSortWithComparator = (inputArray, order) => {
  const explicitComparator = (a, b) => {
    // Write your code here:
    let indexA = order.length;
    let indexB = order.length;
    if (order.includes(a)) {
      indexA = order.indexOf(a);
    }
    if (order.includes(b)) {
      indexB = order.indexOf(b);
    }
    return indexA - indexB;
  };

  return inputArray.sort(explicitComparator).slice();
};

// Use this array to test your code:
const inputArray = ["a", "b", "c", "d", "e", "f", "n", "y", "g"];
const order = ["a", "n", "d", "y"];
console.log(explicitSortWithComparator(inputArray, order));
