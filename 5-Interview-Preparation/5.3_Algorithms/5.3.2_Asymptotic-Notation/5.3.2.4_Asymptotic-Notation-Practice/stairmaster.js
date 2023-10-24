/*
Stairmaster
Write a function, stairmaster(n), that will compute the number of ways to climb a flight of n steps, taking 1, 2, or 3 steps at a time.

Take the example of climbing n = 4 steps. There are seven different ways one can climb four stairs using 1, 2, or 3 steps at a time: [1,1,1,1] [2,1,1] [1,2,1] [1,1,2] [2,2] [1,3] [3,1].

Make sure to find all permutations, not combinations, as the order matters. Climbing one step then two steps is different from climbing two steps then one step.
 */

function theseAddToSum(steps = [], sum) {
  // Base cases
  if (sum < 0) return []; // No Solution
  if (sum === 0) return [[]]; // A Solution

  let results = [];

  if (steps.length < 1) return "error";

  for (let i = 0; i < steps.length; i++) {
    let cur = steps[i];
    let remaining = sum - cur;
    let c = theseAddToSum(steps, remaining);

    for (let solution of c) {
      solution.push(cur);
      results.push(solution);
    }
  }

  return results;
}

function stairmaster(n) {
  // Base cases
  if (n === 0) return 0;

  let ways = theseAddToSum([1, 2, 3], n);
  console.log(ways);
  return ways.length;
}

console.log(stairmaster(4));
