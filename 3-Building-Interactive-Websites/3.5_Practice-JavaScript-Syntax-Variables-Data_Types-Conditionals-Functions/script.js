// Write your function here:

// 1/15 GreetingWorld
const greetWorld = () => "Hello, World!";

// 2/15 canIVote
const canIVote = (age) => (age >= 18 ? true : false);

// 3/15 agreeOrDisagree
const agreeOrDisagree = (str1, str2) =>
  str1 === str2 ? "You agree!" : "You disagree!";

// 4/15 lifePhase
const lifePhase = (age) =>
  age < 0 || age > 140
    ? "This is not a valid age"
    : age >= 0 && age <= 3
    ? "baby"
    : age <= 12
    ? "child"
    : age <= 19
    ? "teen"
    : age <= 64
    ? "adult"
    : "senior citizen";

// 5/15 finalGrade
const finalGrade = (grade1, grade2, grade3) => {
  if (
    grade1 < 0 ||
    grade1 > 100 ||
    grade2 < 0 ||
    grade2 > 100 ||
    grade3 < 0 ||
    grade3 > 100
  ) {
    return "You have entered an invalid grade";
  } else {
    const averageGrade = Math.round((grade1 + grade2 + grade3) / 3);
    console.log(`averageGrade is : ${averageGrade}`);
    return averageGrade >= 0 && averageGrade <= 59
      ? "F"
      : averageGrade <= 69
      ? "D"
      : averageGrade <= 79
      ? "C"
      : averageGrade <= 89
      ? "B"
      : "A";
  }
};

// 6/15 reportingForDuty
const reportingForDuty = (rank, lastName) =>
  `${rank} ${lastName} reporting for duty!`;

// 7/15 Fix The Broken Code
const rollTheDice = () => {
  // Math.random() gives us a random number from 0 up to, but not including, 1
  // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
  let dice1 = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;

  return dice1 + dice2;
};

// 8/15 calculateWeight
const calculateWeight = (earthWeight, planet) => {
  let weight = 0;
  switch (planet) {
    case "Mercury":
      weight = earthWeight * 0.378;
      break;
    case "Venus":
      weight = earthWeight * 0.907;
      break;
    case "Mars":
      weight = earthWeight * 0.377;
      break;
    case "Jupiter":
      weight = earthWeight * 2.36;
      break;
    case "Saturn":
      weight = earthWeight * 0.916;
      break;
    default:
      weight =
        "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
  }

  return weight;
};

// 9/15 truthyOrFalsy
const truthyOrFalsy = (value) => (value ? true : false);

// 10/15 numImaginaryFriends
const numImaginaryFriends = (numOfFriends) => Math.ceil(numOfFriends / 4);

// 11/15 sillySentence
const sillySentence = (str1, str2, str3) =>
  `I am so ${str1} because I ${str2} coding! Time to write some more awesome ${str3}!`;

// 12/15 howOld
const 

/*Write code to test your function. Even if we provide code to test your function, you should add
further tests to make sure your function works correctly in all the specified situations*/

console.log(`greetWorld function logs: ${greetWorld}`);
console.log(`canIVote function logs: ${canIVote(19)}`);
console.log(
  `agreeOrDisagree function logs: ${agreeOrDisagree(
    "You're absolutely right.",
    "You're absolutely right."
  )}`
);

console.log(`canIVote function logs: ${lifePhase(141)}`);
console.log(`canIVote function logs: ${lifePhase(139)}`);
console.log(`canIVote function logs: ${lifePhase(-4)}`);
console.log(`finalGrade function logs: ${finalGrade(-101, -102, -103)}`);
console.log(`finalGrade function logs: ${finalGrade(101, 102, 103)}`);
console.log(`finalGrade function logs: ${finalGrade(24, 24, 24)}`);
console.log(`finalGrade function logs: ${finalGrade(62, 62, 62)}`);
console.log(`finalGrade function logs: ${finalGrade(73, 72, 73)}`);
console.log(`finalGrade function logs: ${finalGrade(83, 83, 83)}`);
console.log(`finalGrade function logs: ${finalGrade(93, 94, 95)}`);
console.log(
  `reportingForDuty function logs: ${reportingForDuty("Private", "Fido")}`
);
console.log(`rollTheDice function logs: ${rollTheDice()}`);
console.log(`calculateWeight function logs: ${calculateWeight(67, "Mars")}`);
console.log(`calculateWeight function logs: ${calculateWeight(67, "Solaris")}`);
console.log(`truthyOrFalsy function logs: ${truthyOrFalsy(0)}`);
console.log(`truthyOrFalsy function logs: ${truthyOrFalsy(1)}`);
console.log(`numImaginaryFriends function logs: ${numImaginaryFriends(20)}`);
console.log(
  `sillySentence function logs: ${sillySentence(
    "excited",
    "love",
    "functions"
  )}`
);
