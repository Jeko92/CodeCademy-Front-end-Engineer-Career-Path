// 3/9 Red To Green I
/* const Calculate = {
  sum(inputArr) {
    return 6;
  },
}; */

// 6/9 Red To Green II
/* const Calculate = {
  sum(inputArray) {
    let totalSum = 0;

    const inputArrayLength = inputArray.length;
    for (let i = 0; i < inputArrayLength; i++) {
      totalSum += inputArray[i];
    }

    return totalSum;
  },
}; */

// 7/9 Refactor II
/* const Calculate = {
  sum(inputArr) {
    return inputArr.reduce((acc, curr) => acc + curr, 0);
  },
}; */

// 8/9 Edge Case
const Calculate = {
  sum(inputArr) {
    if (inputArr.length === 0) {
      return 0;
    }
    return inputArr.reduce((acc, curr) => acc + curr, 0);
  },
};

module.exports = Calculate;
