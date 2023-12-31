// 1/9 introduction
/* const fs = require("fs");
const promisifiedReadfile = require("./promisifiedReadfile");

// Here we use fs.readfile() and callback functions:
fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) throw err;
  let firstSentence = data;
  fs.readFile("./file2.txt", "utf-8", (err, data) => {
    if (err) throw err;
    let secondSentence = data;
    console.log(firstSentence, secondSentence);
  });
});

// Here we use native promises with our "promisified" version of readfile:
let firstSentence;
promisifiedReadfile("./file.txt", "utf-8")
  .then((data) => {
    firstSentence = data;
    return promisifiedReadfile("./file2.txt", "utf-8");
  })
  .then((data) => {
    let secondSentence = data;
    console.log(firstSentence, secondSentence);
  })
  .catch((err) => {
    console.log(err);
  });

// Here we use promisifiedReadfile() again but instead of using the native promise .then() syntax, we declare and invoke an async/await function:
async function readFiles() {
  let firstSentence = await promisifiedReadfile("./file.txt", "utf-8");
  let secondSentence = await promisifiedReadfile("./file2.txt", "utf-8");
  console.log(firstSentence, secondSentence);
}

readFiles(); */

// 2/9 The async Keyword
/* function withConstructor(num) {
  return new Promise((resolve, reject) => {
    if (num === 0) {
      resolve("zero");
    } else {
      resolve("not zero");
    }
  });
}

withConstructor(0).then((resolveValue) => {
  console.log(
    ` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`
  );
});

// Write your code below:
async function withAsync(num) {
  if (num === 0) {
    return "zero";
  } else {
    return "not zero";
  }
}

withAsync(100).then((resolveValue) => {
  console.log(
    ` withAsync(100) returned a promise which resolved to: ${resolveValue}.`
  );
}); */

// 3/9 The await Operator
/* const brainstormDinner = require("./library.js");

// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
    console.log(`I'm going to make ${meal} for dinner.`);
  });
}

// async/await version:
async function announceDinner() {
  // Write your code below:
  let meal = await brainstormDinner();
  console.log(`I'm going to make ${meal} for dinner.`);
}

// nativePromiseDinner();
announceDinner();
 */
// 4/9 Writing async Functions
/* const shopForBeans = require("./library.js");

 function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
} 

async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();
 */

/* // 5/9 Handling Dependent Promises
const { shopForBeans, soakTheBeans, cookTheBeans } = require("./library.js");

// Write your code below:
async function makeBeans() {
  let type = await shopForBeans();
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}

makeBeans(); */

// 6/9 Handling Errors
/* const cookBeanSouffle = require("./library.js");

// Write your code below:
async function hostDinnerParty() {
  try {
    let resolvedValue = await cookBeanSouffle();
    console.log(`${resolvedValue} is served!`);
  } catch (error) {
    console.log(error);
    console.log("Ordering a pizza!");
  }
}

 hostDinnerParty();*/

// 7/9 Handling Independent Promises
/* let {
  cookBeans,
  steamBroccoli,
  cookRice,
  bakeChicken,
} = require("./library.js");

// Write your code below:
const serveDinner = async function () {
  let vegetablePromise = steamBroccoli();
  let starchPromise = cookRice();
  let proteinPromise = bakeChicken();
  let sidePromise = cookBeans();
  console.log(
    `Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`
  );
};

serveDinner(); */

// 8/9 Await Promise.all()
let {
  cookBeans,
  steamBroccoli,
  cookRice,
  bakeChicken,
} = require("./library.js");

// Write your code below:
const serveDinnerAgain = async function () {
  let foodArray = await Promise.all([
    steamBroccoli(),
    cookRice(),
    bakeChicken(),
    cookBeans(),
  ]);

  let vegetable = foodArray[0];
  let starch = foodArray[1];
  let protein = foodArray[2];
  let side = foodArray[3];

  console.log(
    `Dinner is served. We're having ${vegetable}, ${starch}, ${protein}, and ${side}.`
  );
};

serveDinnerAgain();
