// 2/6 Big Theta (Θ)

/* 
Pseudocode:

Function with input that is a list of size N:
   For each value in list:
    Print the value
 */

const printList = (list) => {
  for (const item of list) {
    // console.log(item);
    console.log(`${item}`);
  }
};

// const myList = printList([
//   "France",
//   "Portugal",
//   "UK",
//   "Norway",
//   "Iceland",
//   "Sweden",
//   "Estonia",
//   "Poland",
//   "Montenegro",
//   "Malta",
//   "Poland",
//   "Finland",
//   "Slovakia",
//   "Romania",
//   "Serbia",
//   "Albania",
//   "Bulgaria",
//   "Macedonia",
//   "Luxemburg",
//   "Holland",
//   "Switzerland",
//   "Vatican",
//   "Slovenia",
//   "Bosnia and Herzogowina",
//   "Croatia",
// ]);

/* 
Pseudocode:

Function that has integer input N:
    Set a count variable to 0
    Loop while N is not equal to 1:
        Increment count
        N = N/2
    Return count
 */

const counter = (n) => {
  let count = 0;
  while (n !== 0) {
    console.log(`Number is: ${n}. Current Count is:${count}`);
    count++;
    // n = Math.floor(n / 2);
    n /= 2;
  }
  console.log(`Final Counter is:${count}`);
  return count;
};

// const myCounter = counter(13);

// 4/6 Big Omega (Ω) and Big O (O)
/* 
Pseudocode

Function with input that is a list of size N:
    For each value in the list:
        If value is equal to 12:
            Return True
    Return False

There are many ways we could describe the runtime of this program:

-This program has a best case runtime of Θ(1).
-This program has a worst case runtime of Θ(N).
-This program has a runtime of Ω(1).
-This program has a runtime O(N).
-You may be tempted to say the following:

This program has a runtime of Θ(N).

 */
const isEqualToTwelve = (numArr) => {
  console.log(`We ara checking arr: ${numArr}`);
  let count = 0;
  for (const num of numArr) {
    if (num === 12) {
      // console.log(num);
      count++;
      // return true;
    }
  }
  console.log(`Number 12 was ${count} times in our list`);
  return count;
};

const generateRandomList = (n) => {
  let numbersList = [];
  for (let i = 0; i < n; i++) {
    numbersList.push(Math.floor(Math.random() * (20 - 0 + 1) + 0));
  }
  console.log(numbersList);
  return numbersList;
};

// const myNumbers = generateRandomList(1000);

// isEqualToTwelve(myNumbers);

// 5/6 Adding Runtimes
/*
Pseudocode

Function that takes a positive integer N:
    Set a variable i equal to 1
    Loop until i is equal to N:
        Print i
        Increment i
    
    Set a count variable to 0
    Loop while N is not equal to 1:
        Increment count
        N = N/2
    Return count

 */

const equalsToN = (n) => {
  let i = 1;
  while (1 !== n) {
    console.log(i);
    i++;
  }

  let count = 0;
  while (n !== 1) {
    count++;
    n = Math.floor(n / 2);
  }
  return count;
};
