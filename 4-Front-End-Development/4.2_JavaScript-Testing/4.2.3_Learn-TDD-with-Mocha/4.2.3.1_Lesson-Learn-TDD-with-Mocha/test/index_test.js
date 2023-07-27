const assert = require("assert");
const Calculate = require("../index.js");

/* describe("Calculate", () => {
  describe(".sum", () => {
    it("returns the sum of an array of numbers", () => {});
  });
}); */

// 2/9 Getting Into The Red I
/* describe("Calculate", () => {
  describe(".sum", () => {
    it("returns the sum of an array of numbers", () => {
      // Code here
      const result = Calculate.sum([1, 2, 3]);
      assert.strictEqual(result, 6);
    });
  });
}); */

// 4/9 Refactor I
/* describe("Calculate", () => {
  describe(".sum", () => {
    it("returns the sum of an array of numbers", () => {
      // Code here
      // Setup
      const inputArr = [1, 2, 3];
      const expectedNum = 6;
      // Exercise
      const result = Calculate.sum(inputArr);
      // Verification
      assert.strictEqual(result, expectedNum);
    });
  });
}); */

// 5/9 Getting into the Red II
describe("Calculate", () => {
  describe(".sum", () => {
    it("returns the sum of an array of numbers", () => {
      // Code here
      // Setup
      const inputArr = [1, 2, 3];
      const expectedNum = 6;
      // Exercise
      const result = Calculate.sum(inputArr);
      // Verification
      assert.strictEqual(result, expectedNum);
    });

    it("returns the sum of a four-item list", () => {
      // Code here
      // Setup
      const inputArr = [4, 5, 6, 7];
      const expectedNum = 22;
      // Exercise
      const result = Calculate.sum(inputArr);
      // Verification
      assert.strictEqual(result, expectedNum);
    });

    it("returns zero for an empty array", () => {
      // Code here
      // Setup
      const inputArr = [];
      const expectedNum = 0;
      // Exercise
      const result = Calculate.sum(inputArr);
      // Verification
      assert.strictEqual(result, expectedNum);
    });
  });
});
