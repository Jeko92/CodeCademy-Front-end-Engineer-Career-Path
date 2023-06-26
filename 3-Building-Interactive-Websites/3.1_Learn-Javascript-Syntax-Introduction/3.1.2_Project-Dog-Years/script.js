// let dogYears = 15;
// let humanYears = 10.5 * 2 + 4 * (dogYears - 2);
// console.log(dogYears, humanYears);
let myAge = 30;

let earlyYears = 2;

earlyYears *= 10.5;
let lateYears = myAge - 2;
lateYears *= 4;
console.log(earlyYears, lateYears);
let myAgeInDogYears = earlyYears + lateYears;
let myName = "Jeko".toLowerCase();

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
