// Introduction to Iterators
const artists = ["Picasso", "Kahlo", "Matisse", "Utamaro"];

artists.forEach((artist) => {
  console.log(artist + " is one of my favorite artists.");
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map((number) => {
  return number * number;
});

console.log(squareNumbers);

const things = ["desk", "chair", 5, "backpack", 3.14, 100];

const onlyNumbers = things.filter((thing) => {
  return typeof thing === "number";
});

console.log(onlyNumbers);

// The .forEach() Method
const fruits = ["mango", "papaya", "pineapple", "apple"];
fruits.forEach((fruit) => console.log(`I want to eat a ${fruit}`));

// The .map() Method

const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];

// Create the secretMessage array below
const secretMessage = animals.map((animal) => animal[0]);

console.log(secretMessage.join(""));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map((num) => num / 100);

// The .filter() Method
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers1 = randomNumbers.filter((num) => num < 250);

const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter((word) => word.length > 7);

// The .findIndex() Method
const animals1 = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

const foundAnimal = animals1.findIndex((animal) => animal === "elephant");
const startsWithS = animals1.findIndex((animal) => animal[0] === "s");

// The .reduce() Method
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log(`The value of accumulator: ${accumulator}`);
  console.log(`The value of currentValue: ${currentValue}`);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

// Iterator Documentation
const words = ["unique", "uncanny", "pique", "oxymoron", "guise"];

// Something is missing in the method call below

console.log(
  words.some((word) => {
    return word.length < 6;
  })
);

// Use filter to create a new array
const interestingWords = words.filter((word) => word.length > 5);

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => word.length > 5));

// Choose the Right Iterator
const cities = [
  "Orlando",
  "Dubai",
  "Edinburgh",
  "Chennai",
  "Accra",
  "Denver",
  "Eskisehir",
  "Medellin",
  "Yokohama",
];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
// cities.method((city) => console.log("Have you visited " + city + "?"));
cities.forEach((city) => console.log("Have you visited " + city + "?"));

// Choose a method that will return a new array
// const longCities = cities.method((city) => city.length > 7);
const longCities = cities.filter((city) => city.length > 7);

// Choose a method that will return a single value
// const word = cities.method((acc, currVal) => {
//   return acc + currVal[0];
// }, "C");
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0];
}, "C");

console.log(word);

// Choose a method that will return a new array
// const smallerNums = nums.method((num) => num - 5);
const smallerNums = nums.map((num) => num - 5);

// Choose a method that will return a boolean value
// nums.method((num) => num < 0);
nums.every((num) => num < 0);
