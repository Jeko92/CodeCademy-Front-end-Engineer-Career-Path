/*
Top Score Sorter
Write a scoreSorter() function that will take a list of unsorted scores along with the highest possible score.
It should return a sorted list of all of the scores, in descending order from high to low.
You are expected to create and implement your own sorting algorithm for this challenge.

For example, scoreSorter([1, 2, 3, 9999, 13], 10000) should return [9999, 13, 3, 2, 1].
 */

const scoreSorter = (array, topScore) => {
  // Write your code here
  let swapping = true;
  let swapCount = 0;

  if (!array.some((score) => score > topScore)) {
    while (swapping) {
      swapping = false;
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < array[i + 1]) {
          swap(array, i, i + 1);
          swapCount++;
          swapping = true;
        }
      }
    }
  }
  console.log(`Swapped ${swapCount} times`);
  return array;
};

const swap = (arr, indexOne, indexTwo) => {
  const temp = arr[indexTwo];
  arr[indexTwo] = arr[indexOne];
  arr[indexOne] = temp;
};

console.log(scoreSorter([1, 2, 3, 9999, 13], 10000));
// Leave this so we can test your code:
module.exports = scoreSorter;
