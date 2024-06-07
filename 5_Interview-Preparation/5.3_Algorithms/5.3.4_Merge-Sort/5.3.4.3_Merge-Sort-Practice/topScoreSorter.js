/*
Write a scoreSorter() function that will take a list of unsorted scores along with the highest possible score.
It should return a sorted list of all of the scores, in descending order from high to low.
You are expected to create and implement your own sorting algorithm for this challenge.

For example, scoreSorter([1, 2, 3, 9999, 13], 10000) should return [9999, 13, 3, 2, 1].
 */

const scoreSorter = (scoresArray, topScore) => {
  if (scoresArray.some((score) => score > topScore)) {
    return;
  } else {
    const length = scoresArray.length;
    if (length === 1) {
      return scoresArray;
    }

    const mid = Math.floor(length / 2);
    const leftArray = scoresArray.slice(0, mid);
    const rightArray = scoresArray.slice(mid, length);

    scoreSorter(leftArray);
    scoreSorter(rightArray);

    return merge(scoreSorter(leftArray), scoreSorter(rightArray));
  }
};

const merge = (leftArray, rightArray) => {
  const sortedArray = [];
  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] > rightArray[0]) {
      sortedArray.push(leftArray[0]);
      leftArray.shift();
    } else {
      sortedArray.push(rightArray[0]);
      rightArray.shift();
    }
  }
  return sortedArray.concat(leftArray).concat(rightArray);
};

console.log(scoreSorter([1, 2, 3, 9999, 13], 10000));
