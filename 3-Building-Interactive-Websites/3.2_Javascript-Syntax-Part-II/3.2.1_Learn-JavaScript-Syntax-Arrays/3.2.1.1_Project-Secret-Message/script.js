let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

secretMessage.pop();
console.log(secretMessage.pop());
secretMessage.push("to", "program");
secretMessage[7] = "right";
secretMessage.shift();
secretMessage.unshift("Programming");
secretMessage.slice(7, 11);
console.log(secretMessage.join(" "));
