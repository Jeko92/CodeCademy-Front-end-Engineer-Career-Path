let assert = require("assert");
let Calculate = require("../index.js");

describe("Calculate", () => {
  describe(".factorial", () => {
    it("tests if the output of 5! is 120", () => {
      // setup
      const inputNum = 5;
      const expectedResult = 120;

      // Exercise
      const result = Calculate.factorial(inputNum);

      // Verification
      assert.equal(result, expectedResult);
    });

    it("tests if the output of 3! is 6", () => {
      // setup
      const inputNum = 3;
      const expectedResult = 6;

      // Exercise
      const result = Calculate.factorial(inputNum);

      // Verification
      assert.equal(result, expectedResult);
    });

    it("tests if the output of 0! is 1", () => {
      // setup
      const inputNum = 0;
      const expectedResult = 1;

      // Exercise
      const result = Calculate.factorial(inputNum);

      // Verification
      assert.equal(result, expectedResult);
    });
  });
});
