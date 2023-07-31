const inventory = {
  //   sunglasses: 1900,
  sunglasses: 0,
  pants: 1088,
  bags: 1344,
};

// 3/11 Constructing a Promise Object
/* const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses) {
    resolve("Sunglasses order processed.");
  } else {
    reject("That item is sold out.");
  }
};

const orderSunglasses = () => new Promise(myExecutor);
const orderPromise = orderSunglasses();
console.log(orderPromise); */

// 4/11 The Node setTimeout() Function
/* console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:
const usingSTO = () => {
  console.log("This line will be print next?");
};

setTimeout(usingSTO, 3000);

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js."); */

// 5/11 Consuming Promises
// .then(onFulfilled, onRejected)   it alwa returns a promise

// 6/11 Success and Failure Callback Functions
/* const { checkInventory } = require("./library.js");

const order = [
  ["sunglasses", 1],
  ["bags", 2],
];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
}; */
// checkInventory(order).then(handleSuccess, handleFailure);

// 7/11 Using catch() with Promises

// checkInventory(order).then(handleSuccess).catch(handleFailure);

// 8/11 Chaining Multiple Promises
/* const { checkInventory, processPayment, shipOrder } = require("./library.js");

const order = {
  items: [
    ["sunglasses", 1],
    ["bags", 2],
  ],
  giftcardBalance: 79.82,
};

checkInventory(order)
  .then((resolvedValueArray) => {
    // Write the correct return statement here:
    return processPayment(resolvedValueArray);
  })
  .then((resolvedValueArray) => {
    // Write the correct return statement here:
    return shipOrder(resolvedValueArray);
  })
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  }); */

//   9/11 Avoiding Common Mistakes
/* 
Mistake 1: Nesting promises instead of chaining them.
Mistake 2: Forgetting to return a promise.

checkInventory(order)
  .then((resolvedValueArray) => {
    return processPayment(resolvedValueArray);
  })
  .then((resolvedValueArray) => {
    return shipOrder(resolvedValueArray);
  })
  .then((successMessage) => {
    console.log(successMessage);
  });
*/

// 10/11 Using Promise.all()
const { checkAvailability } = require("./library.js");

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(
    `Every item was available from the distributor. Placing order now.`
  );
};

const onReject = (rejectionReason) => {
  console.log(rejectionReason);
};

// Write your code below:
const checkSunglasses = checkAvailability("sunglasses", "Favorite Supply Co.");
const checkPants = checkAvailability("pants", "Favorite Supply Co.");
const checkBags = checkAvailability("bags", "Favorite Supply Co.");

let myPromises = Promise.all([checkSunglasses, checkPants, checkBags]);

myPromises.then(onFulfill).catch(onReject);
