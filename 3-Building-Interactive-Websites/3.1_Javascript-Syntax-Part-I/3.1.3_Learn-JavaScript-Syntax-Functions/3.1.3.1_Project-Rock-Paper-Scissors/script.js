const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 2);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

const determineWinner = (getUserChoice, getComputerChoice) => {
  if (userChoice === "bomb") {
    return "You won! Thank to the bomb!";
  }

  if (userChoice === computerChoice) {
    return "The game is a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
};

// const userChoice = getUserChoice("paper");
// const userChoice = getUserChoice("bomb");
const userChoice = getUserChoice("Bomb");
const computerChoice = getComputerChoice();
console.log(userChoice, computerChoice);
const playGame = (userChoice, computerChoice) =>
  `You chose: ${userChoice}, Computer chose: ${computerChoice}. \n The result of this round is: ${determineWinner(
    userChoice,
    computerChoice
  )}`;
//   determineWinner(userChoice, computerChoice);
playGame();
console.log(playGame(userChoice, computerChoice));
