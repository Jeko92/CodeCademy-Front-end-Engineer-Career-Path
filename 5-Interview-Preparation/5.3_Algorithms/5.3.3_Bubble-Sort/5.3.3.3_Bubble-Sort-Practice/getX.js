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
  // Write your code here
  let swapping = true;
  let swapCount = 0;

  while (swapping) {
    swapping = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        swap(nums, i, i + 1);
        swapCount++;
        swapping = true;
      }
    }
  }
  console.log(`Swapped ${swapCount} times`);
  if (x > nums.length || x < 1) {
    return 0;
  }
  return nums[x - 1];
};

const swap = (arr, indexOne, indexTwo) => {
  const temp = arr[indexOne];
  arr[indexOne] = arr[indexTwo];
  arr[indexTwo] = temp;
};

console.log(getX(2, [5, 10, -3, -3, 7, 9]));

// Leave this so we can test your code:
module.exports = getX;
