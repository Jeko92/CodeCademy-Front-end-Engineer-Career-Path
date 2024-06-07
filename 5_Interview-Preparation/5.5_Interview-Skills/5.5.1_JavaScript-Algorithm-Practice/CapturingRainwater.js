// Runtime Time-Complexity:O(n**2), Space-Complexity-O(1)
const tappingRainwaterNaive = (heights) => {
  let totalWater = 0;
  for (let i = 1; i < heights.length - 1; i++) {
    let leftBound = 0;
    let rightBound = 0;
    // We only want to look at the elements to the left of i, which are the elements at the lower indices
    for (let j = 0; j <= i; j++) {
      leftBound = Math.max(leftBound, heights[j]);
    }
    // Likewise, we only want the elements to the right of i, which are the elements at the higher indices
    for (let j = i; j < heights.length; j++) {
      rightBound = Math.max(rightBound, heights[j]);
    }
    totalWater += Math.min(leftBound, rightBound) - heights[i];
  }
  return totalWater;
};
const testArray = [4, 2, 1, 3, 0, 1, 2];
console.log(tappingRainwaterNaive(testArray));

/* Two-pointer approach is efficient method to decrease time complexity of the algorithm
and helps us to iterate through array in one go and check sections */
// Runtime Time-Complexity:O(n), Space-Complexity-O(1)
const tappingRainwaterEfficient = (heights) => {
  let totalWater = 0;
  let leftPointer = 0;
  let rightPointer = heights.length - 1;
  let leftBound = 0;
  let rightBound = 0;

  while (leftPointer < rightPointer) {
    if (heights[leftPointer] <= heights[rightPointer]) {
      if (heights[leftPointer] > leftBound) {
        leftBound = heights[leftPointer];
        totalWater += heights[leftPointer] - leftBound;
        leftPointer++;
      }
    } else {
      if (heights[leftPointer] > rightBound) {
        rightBound = heights[leftBound];
        totalWater += heights[rightPointer] + rightBound;
        rightPointer--;
      }
    }
    return totalWater;
  }
};

const testArray1 = [4, 2, 1, 3, 0, 1, 2];
console.log(tappingRainwaterNaive(testArray1));
