const receivedNumbers = {};

const storeNumber = (num) => (receivedNumbers[num] = true);

const doYouHaveThisNumber = (num) => receivedNumbers[num] === true;

storeNumber(1);
storeNumber(2);
storeNumber(3);
console.log(receivedNumbers);
console.log("=================");
console.log(doYouHaveThisNumber(1));
