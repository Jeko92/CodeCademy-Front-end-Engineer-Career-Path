// 2/14 reverseArray
// Write your code here:
const reverseArray = (arr) => {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
};

// When you're ready to test your code, uncomment the below and run:

const sentence = ["sense.", "make", "all", "will", "This"];

console.log(reverseArray(sentence));
// Should print ['This', 'will', 'all', 'make', 'sense.'];

// 3/14 greetAliens
// Write your code here:
/* const greetAliens = (arr) =>
  arr.forEach((str) =>
    console.log(
      `Oh powerful ${str}, we humans offer our unconditional surrender!`
    )
  );
   */
/* const greetAliens = (arr) => {
  for (const greeting of arr) {
    console.log(
      `Oh powerful ${greeting}, we humans offer our unconditional surrender!`
    );
  }
}; */
// When you're ready to test your code, uncomment the below and run:

/* const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens); */
// console.log(greetAliens(aliens));

// 4/14 convertToBaby
/* const convertToBaby = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = "baby" + arr[i];
  }
  return arr;
};
const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];

console.log(convertToBaby(animals)); */

// 5/14 Fix The Broken Code!
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = (arr) => {
  let results = [];
  // The 'outer' for loop - loops through each element in the array
  for (let i = 0; i < arr.length; i++) {
    number = arr[i];

    // The 'inner' while loop - searches for smallest power of 2 greater than the given number
    j = 1;
    while (j < number) {
      j = j * 2;
    }
    results.push(j);
  }
  return results;
};

console.log(smallestPowerOfTwo(numbers));
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

// 6/14 declineEverything and acceptEverthing
const veggies = ["broccoli", "spinach", "cauliflower", "broccoflower"];

const politelyDecline = (veg) => {
  console.log("No " + veg + " please. I will have pizza with extra cheese.");
};

// Write your code here:
const declineEverything = (arr) => arr.forEach(politelyDecline);
const acceptEverything = (arr) =>
  arr.forEach((item) => console.log(`Ok, I guess I will eat some ${item}.`));

// 7/14 squareNums
const squareNums = (arr) => arr.map((el) => el ** 2);

// 8/14 shoutGreetings
const shoutGreetings = (arr) => arr.map((str) => str.toUpperCase() + "!");

// 9/14 sortYeears
const sortYears = (arr) => arr.sort((a, b) => b - a);

// 10/14 justCoolStuff
const justCoolStuff = (arr1, arr2) =>
  arr1.filter((el) => (arr2.includes(el) ? el : "")).filter((el) => el !== "");
// Feel free to uncomment the code below to test your function

const coolStuff = [
  "gameboys",
  "skateboards",
  "backwards hats",
  "fruit-by-the-foot",
  "pogs",
  "my room",
  "temporary tattoos",
];

const myStuff = [
  "rules",
  "fruit-by-the-foot",
  "wedgies",
  "sweaters",
  "skateboards",
  "family-night",
  "my room",
  "braces",
  "the information superhighway",
];

console.log(justCoolStuff(myStuff, coolStuff));
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

// 11/14 isTheDinnerVegan
const isTheDinnerVegan = (arr) => arr.every((meal) => meal.source === "plant");

// 12/14 sortSpeciesByTeeth
const sortSpeciesByTeeth = (arr) =>
  arr.sort((specie1, specie2) => specie1.numTeeth - specie2.numTeeth);

const speciesArray = [
  { speciesName: "shark", numTeeth: 50 },
  { speciesName: "dog", numTeeth: 42 },
  { speciesName: "alligator", numTeeth: 80 },
  { speciesName: "human", numTeeth: 32 },
];

// Feel free to comment out the code below when you're ready to test your function!
/*
console.log(sortSpeciesByTeeth(speciesArray))

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]
*/

// 13/14 findMyKeys
const findMyKeys = (arr) => (arr.includes("keys") ? arr.indexOf("keys") : -1);
// Feel free to comment out the code below to test your function
/*
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
// Should print 4
*/

// 14/14 dogFactory
const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    set name(name) {
      if (typeof (this._name === "string")) {
        this._name = name;
      } else {
        console.log("The name should be type of string");
      }
    },
    set breed(breed) {
      if (typeof (this._name === "string")) {
        this._breed = breed;
      } else {
        console.log("The breed should be type of string");
      }
    },
    set weight(weight) {
      if (typeof (this._weight === "number")) {
        this._weight = weight;
      } else {
        console.log("The weight should be type of number");
      }
    },
    get name() {
      return this._name;
    },
    get breed() {
      return this._breed;
    },
    get weight() {
      return this._weight;
    },

    bark() {
      return "ruff! ruff!";
    },
    eatTooManyTreats() {
      this._weight += 1;
    },
  };
};

console.log(dogFactory("Joe", "Pug", 27));
// Should return { name: 'Joe', breed: 'Pug', weight: 27 }

/*
Write a function factorial() that takes a number as an argument and returns the factorial of the number.

Example:

factorial(6);
// returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720
Assume only positive numbers will be given as an argument for the factorial() function. */

const factorial = (num) => (num === 0 ? 1 : num * factorial(num - 1));

/* Write a function subLength() that takes 2 parameters, a string and a single character.
The function should search the string for the two occurrences of the character and return
the length between them including the 2 characters. If there are less than 2 or more than 2
occurrences of the character the function should return 0.

Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0
 */
const subLength = (str, char) => {
  let arr = str.split("");
  let filteredArr = arr.filter((character) => character === char);
  console.log(arr.indexOf(char));
  console.log(arr.lastIndexOf(char));
  return filteredArr.length > 2 || filteredArr.length < 2
    ? 0
    : arr.lastIndexOf(char) - arr.indexOf(char) + 1;
};

console.log(subLength("Gammardjob", "a"));

/*
Write a function groceries() that takes an array of object literals of grocery items.
The function should return a string with each item separated by a comma except the last two
items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

Examples:

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'

groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'

groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls' */

const groceries = (arr) => {
  let items = arr.map((el) => el.item);
  let str = "";
  if (items.length < 2) {
    return items.join(", ");
  } else if (items.length === 2) {
    return items.join(" and ");
  } else {
    for (let i = 0; i < items.length - 2; i++) {
      str += items[i] + ", ";
    }
    return str + `${items[items.length - 2]} and ${items[items.length - 1]}`;
  }
};

console.log(
  groceries([
    { item: "Carrots" },
    { item: "Hummus" },
    { item: "Pesto" },
    { item: "Rigatoni" },
  ])
  // groceries([{ item: "Bread" }, { item: "Butter" }])
  // groceries([{ item: "Cheese Balls" }])
);
