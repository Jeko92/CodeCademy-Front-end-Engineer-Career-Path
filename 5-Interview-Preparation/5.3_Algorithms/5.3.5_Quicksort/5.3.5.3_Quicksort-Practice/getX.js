/*
Write a function, getX, that given an int x and a integer array num,
returns the Xth number if the list was in sorted order. In other words, the Xth smallest number.

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

const quicksort = (array, leftBound = 0, rightBound = array.length - 1) => {
  if (leftBound < rightBound) {
    const pivotIndex = partition(array, leftBound, rightBound);
    quicksort(array, leftBound, pivotIndex - 1);
    quicksort(array, pivotIndex, rightBound);
  }

  return array;
};

const partition = (array, leftIndex, rightIndex) => {
  const pivot = array[Math.floor((rightIndex + leftIndex) / 2)];

  while (leftIndex <= rightIndex) {
    while (array[leftIndex] < pivot) {
      leftIndex++;
    }
    while (array[rightIndex] > pivot) {
      rightIndex--;
    }
    if (leftIndex <= rightIndex) {
      swap(array, leftIndex, rightIndex);
      leftIndex++;
      rightIndex--;
    }
  }
  return leftIndex;
};

const swap = (arr, indexOne, indexTwo) => {
  const temp = arr[indexTwo];
  arr[indexTwo] = arr[indexOne];
  arr[indexOne] = temp;
};

const getX = (x, nums) => {
  return quicksort(nums)[x - 1];
};

console.log(getX(2, [5, 10, -3, -3, 7, 9]));
