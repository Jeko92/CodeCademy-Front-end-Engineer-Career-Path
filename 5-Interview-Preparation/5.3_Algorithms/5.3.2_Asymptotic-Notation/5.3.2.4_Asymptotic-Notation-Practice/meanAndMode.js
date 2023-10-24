function statsFinder(array) {
  // Write your code her
  let average = array.reduce((a, b) => a + b, 0) / array.length;
  const countMap = new Map();

  array.forEach((element) => {
    countMap.set(element, (countMap.get(element) || 0) + 1);
  });

  let mode;
  let maxCount = 0;

  countMap.forEach((count, key) => {
    if (count > maxCount) {
      mode = key;
      maxCount = count;
    }
  });

  // Alternatively we could abstract findMode as separate function
  // const mode = findMode(array);
  return [average, mode];
}

function findMode(arr) {
  // Create an object to store the count of each element in the array
  const count = {};

  // Iterate through the array and count the occurrences of each element
  arr.forEach((element) => {
    if (count[element]) {
      count[element]++;
    } else {
      count[element] = 1;
    }
  });

  let mode;
  let maxCount = 0;

  // Iterate through the count object to find the element with the highest count
  for (const key in count) {
    if (count[key] > maxCount) {
      mode = key;
      maxCount = count[key];
    }
  }

  return mode;
}

console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300]));
