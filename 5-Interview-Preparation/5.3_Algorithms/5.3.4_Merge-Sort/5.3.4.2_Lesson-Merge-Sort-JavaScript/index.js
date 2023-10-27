const mergeSort = (startArray) => {
  // 2/6 Splitting: Base Case
  const length = startArray.length;
  if (length === 1) {
    return startArray;
  }

  // 3/6 Splitting: Recursive Case
  const mid = Math.floor(length / 2);
  const leftArray = startArray.slice(0, mid);
  const rightArray = startArray.slice(mid, length);

  mergeSort(leftArray);
  mergeSort(rightArray);

  // 4/6 Call merge() from mergeSort()
  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

// const inputArr = [3];
const merge = (leftArray, rightArray) => {
  // 5/6 Merging
  /* console.log(leftArray);
  console.log(rightArray); */
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

const inputArr = [3, 5, 2, 90, 4, 7];

console.log(mergeSort(inputArr));

module.exports = {
  mergeSort,
};
