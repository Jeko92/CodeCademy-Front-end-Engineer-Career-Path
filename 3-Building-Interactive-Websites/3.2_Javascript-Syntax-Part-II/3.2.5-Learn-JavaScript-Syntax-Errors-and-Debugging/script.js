/* const GPA_BENCHMARK = 3.5;
let students = {
  1: {
    name: "Egill Vignission",
    gpa: 3.4,
  },
  2: {
    name: "Bianca Pargas",
    gpa: 3.8,
  },
  3: {
    name: "Aisling O'Sullivan",
    gpa: 3.4,
  },
  4: {
    name: "Sameer Fares",
    gpa: 3.9,
  },
};

let honorRoll = students.filter((student) => {
  return student.gpa >= GPA_BENCHMARK;
});

console.log(honorRoll);

 */
// Syntax Errors
// for (let x = 0; x < 10, x++) {
//     console.log(x)
//   }

const GPA_BENCHMARK = 3.5;
let students = {
  1: {
    name: "Egill Vignission",
    gpa: 3.4,
  },
  2: {
    name: "Bianca Pargas",
    gpa: 3.8,
  },
  3: {
    name: "Aisling O'Sullivan",
    gpa: 3.4,
  },
  4: {
    name: "Sameer Fares",
    gpa: 3.9,
  },
};
let honorRoll = Object.values(students).filter((student) => {
  return student.gpa >= GPA_BENCHMARK;
});
console.log(honorRoll);

const GPA_BENCHMARK1 = 3.5;
let students1 = [
  {
    name: "Egill Vignission",
    gpa: 3.4,
  },
  {
    name: "Bianca Pargas",
    gpa: 3.8,
  },
  {
    name: "Aisling O'Sullivan",
    gpa: 3.4,
  },
  {
    name: "Sameer Fares",
    gpa: 3.9,
  },
];
let honorRoll1 = students1.filter((student) => {
  return student.gpa >= GPA_BENCHMARK1;
});
console.log(honorRoll1);

// Take a moment to test your understanding! Below is an example of code that will throw an error:

function setInstrument(instr) {
  let instrument = instr;
}
console.log(instrument);
// The specific error being:

// ReferenceError: instrument is not defined
// What steps would you take to research a solution and try out your solution?

// Our answer
// Running the code results in the error ReferenceError:
// instrument is not defined. Since instrument is not a generic variable, you can search for something
// more generic like ReferenceError: x is not defined or ReferenceError: variable is not defined.
// When searching with the search phrase “ReferenceError: x is not defined JavaScript”,
// one answer is from a Mozilla documentation page. In the docs, it explains that the error appears if
// the variable is not available in the current scope. Their solution moves the variable to the global scope
// instead of the function scope, so we can try that.

// One possible code solution is:

let instrument;
function setInstrument(instr) {
  instrument = instr;
}
setInstrument("cello");
console.log(instrument);
