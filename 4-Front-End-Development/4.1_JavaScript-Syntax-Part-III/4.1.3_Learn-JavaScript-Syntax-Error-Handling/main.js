// 2/7 Runtime Errors
/* console.log("This message will be printed to the console.");

function throwError() {
  return notDefinedVar;
}

// Call throwError() below:
// throwError();

console.log("Because of the error, this will not printed!");
 */
// 3/7 Constructing an Error
// Write your code below:
/* console.log(new Error("User missing name"));
console.log(Error("User missing name"));
console.log("Will logging the error stop our program from running?"); */

// 4/7 The throw Keyword
/* throw new Error("Username or password does not match"); */

// 5/7 The try...catch Statement
/* try {
  throw Error("This error will be caught!");
} catch (error) {
  console.log(error);
  // console.log(`Error is: ${error}`);
}

console.log("The thrown error that was caught in the try...catch statement!"); */

// 6/7 Handling with try...catch
function capAllElements(arr) {
  try {
    arr.forEach((el, index, array) => {
      array[index] = el.toUpperCase();
    });
  } catch (error) {
    console.log(error);
  }
}

capAllElements("Incorrect argument");
