let userName = "";

userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

let userQuestion = "Can I become a good Web-Developer?";

console.log(`User ${userName} asks the following question: ${userQuestion}`);
const randomNumber = Math.floor(Math.random() * 8);
let eightBall;

// Switch flow
switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "It is decidedly so";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}

console.log(eightBall);

// If-else if -else flow

if (randomNumber === 0) {
  eightBall = "It is certain";
} else if (randomNumber === 1) {
  eightBall = "It is decidedly so";
} else if (randomNumber === 2) {
  eightBall = "It is decidedly so";
} else if (randomNumber === 3) {
  eightBall = "Cannot predict now";
} else if (randomNumber === 4) {
  eightBall = "Do not count on it";
} else if (randomNumber === 5) {
  eightBall = "My sources say no";
} else if (randomNumber === 6) {
  eightBall = "Outlook not so good";
} else {
  eightBall = "Signs point to yes";
}

console.log(`decided via if-else if-else flow, result is: ${eightBall}`);
