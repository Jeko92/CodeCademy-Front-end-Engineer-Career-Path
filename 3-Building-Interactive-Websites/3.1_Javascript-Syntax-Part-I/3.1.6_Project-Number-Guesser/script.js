let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 9);

const compareGuesses = (humanGuess, computerGuess, target) => {
  if (
    Math.abs(target - humanGuess) < Math.abs(target - computerGuess) ||
    humanGuess === computerGuess
  ) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  winner === "human" ? humanScore++ : computerScore++;
};

const advanceRound = () => {
  return currentRoundNumber++;
};
