/*
Write a function, getX, that given an int x and a integer array num, returns the Xth number if the list was in sorted order. In other words, the Xth smallest number.

Function Name: getX

Input: An integer, x, and an unsorted list of integers nums that aren’t necessarily distinct

Output: The integer corresponding to the Xth number in the sorted list

Example:

getX(2, [5, 10, -3, -3, 7, 9]) => -3

The second number in order is -3.

getX(4, [5, 10, -3 , -3, 7, 9]) => 7

The fourth number in order is 7.

Note that this assumes the first number is position 1, not 0.
 */
const getX = (x, nums) => {
  return mergeSort(nums)[x - 1];
};

const mergeSort = (numsArray) => {
  const length = numsArray.length;
  if (length === 1) {
    return numsArray;
  }

  const mid = Math.floor(length / 2);
  const leftArray = numsArray.slice(0, mid);
  const rightArray = numsArray.slice(mid, length);

  mergeSort(leftArray);
  mergeSort(rightArray);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const merge = (leftArray, rightArray) => {
  const sortedArray = [];
  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray[0]);
      leftArray.shift();
    } else {
      sortedArray.push(rightArray[0]);
      rightArray.shift();
    }
  }

  return sortedArray.concat(leftArray).concat(rightArray);
};

console.log(getX(2, [5, 10, -3, -3, 7, 9]));
