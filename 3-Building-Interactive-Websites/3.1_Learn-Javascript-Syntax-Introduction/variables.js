/* function foo() {
  var x = 1;
  function bar() {
    var y = 2;
    console.log(x); // 1 (function `bar` closes over `x`)
    console.log(y); // 2 (`y` is in scope)
  }
  bar();
  console.log(x); // 1 (`x` is in scope)
  console.log(y); // ReferenceError, `y` is scoped to `bar`
}

foo();
 */
// Creating Variables -VAR, LET, CONST
var favoriteFood = "pizza";
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

let changeMe = true;
changeMe = false;
console.log(changeMe);

// const entree = "Enchiladas";
// console.log(entree);

// entree = "Tacos";
// console.log("Entree");

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Mathematical Assignment Operators
// Use the mathematical assignments in the space below:

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements.
console.log("The value of levelUp:", (levelUp += 5));
console.log("The value of powerLevel:", (powerLevel -= 100));
console.log("The value of multiplyMe:", (multiplyMe *= 11));
console.log("The value of quarterMe:", (quarterMe /= 4));

// The Increment and Decrement Operator
let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
lostDollar--;

// String Concatenation with Variables
const favoriteAnimal = "Dog";
console.log("My favorite animal: " + favoriteAnimal);

// String Interpolation
const myName = "Jeko";
const myCity = "Kutaisi";
console.log(`My name is ${myName}. My favorite city is ${myCity}`);

// typeof operator
let newVariable = "Playing around with typeof.";
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);
