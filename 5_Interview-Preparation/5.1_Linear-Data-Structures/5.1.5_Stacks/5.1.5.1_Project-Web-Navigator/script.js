const Stack = require("./Stack.js");
const prompt = require("prompt-sync")();
// ------------------------------
// Initialization
// ------------------------------
// Task 1:
const backPages = new Stack();
const nextPages = new Stack();
// Task 2:
let currentPage = "/home";
// ------------------------------
// Helper Functions
// ------------------------------
// Task 3:
const showCurrentPage = (action) => {
  console.log(`\n${action}`);
  console.log(`Current page. = ${currentPage}`);
  console.log(`Back page = ${backPages.peek()}`);
  console.log(`Next page = ${nextPages.peek()}`);
};
// Task 4:
const newPage = (page) => {
  backPages.push(currentPage);
  currentPage = page;
  while (!nextPages.isEmpty()) {
    nextPages.pop();
  }

  showCurrentPage(currentPage);
};
// Task 5:
const backPage = () => {
  nextPages.push(currentPage);
  currentPage = backPages.pop();
  showCurrentPage(currentPage);
};
// Task 6:
const nextPage = () => {
  backPages.push();
  currentPage = nextPages.pop();
  showCurrentPage(currentPage);
};

/*
 * The following strings are used to prompt the user
 */
const baseInfo = "\nEnter a url";
const backInfo = "B|b for back page";
const nextInfo = "N|n for next page";
const quitInfo = "Q|q for quit";
const question = "Where would you like to go today? ";

// ------------------------------
// User Interface Part 1
// ------------------------------
// Task 7
// Task 8
let finish = (showBack = showNext = false);
// Task 9
showCurrentPage(currentPage);

// Task 10
while (finish === false) {
  // Task 11
  let instructions = baseInfo;
  if (backPages.peek() != null) {
    instructions = `, ${backInfo}`;
    showBack = true;
  } else {
    showBack = false;
  }
  // Task 12
  if (nextPages.peek() != null) {
    instructions += `, ${nextInfo}`;
    showNext = true;
  } else {
    showNext = false;
  }
  // Task 13
  instructions += `, ${quitInfo}`;
  console.log(instructions);
  // ------------------------------
  // User Interface Part 2
  // ------------------------------
  // Task 14
  const answer = prompt(question);
  // Task 15
  const lowerCaseAnswer = answer.toLowerCase();

  // Task 16
  if (
    lowerCaseAnswer !== "n" &&
    lowerCaseAnswer !== "b" &&
    lowerCaseAnswer !== "q"
  ) {
    // we create a new page based on the url
    newPage(answer);
  } else if (
    showNext === true &&
    // Task 17
    lowerCaseAnswer === "n"
  ) {
    // we navigate forward a page
    nextPage();
  } else if (showBack === true && lowerCaseAnswer === "b") {
    // we navigate back a page
    backPage();
  } else if (lowerCaseAnswer === "b") {
    // Task 18
    // invalid input to a non-available option
    console.log("Cannot go back a page. Stack is empty.");
  } else if (lowerCaseAnswer === "n") {
    // invalid input to a non-available option
    console.log("Cannot go to the next page. Stack is empty.");
  } else if (lowerCaseAnswer === "q") {
    // Task 19
    // we quit the program
    finish = true;
  }
  // While loop ends here, corresponding to Task 10
}
