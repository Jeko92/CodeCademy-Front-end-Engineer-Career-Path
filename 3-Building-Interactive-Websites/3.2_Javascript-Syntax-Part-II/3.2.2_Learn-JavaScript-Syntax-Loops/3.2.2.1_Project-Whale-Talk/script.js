let input = "Fortune favors the brave";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  // console.log(`i is: ${i}`);
  if (input[i] === "e" || input[i] === "u") {
    resultArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length; j++) {
    // console.log(`j is: ${j}`);
    if (input[i] === vowels[j]) {
      // console.log(`There\'s a matched letter: ${input[i]}`);
      resultArray.push(vowels[j]);
    }
  }
}

const resultString = resultArray.join("").toUpperCase();
console.log(resultString);
