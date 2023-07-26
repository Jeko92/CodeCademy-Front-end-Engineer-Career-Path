const assert = require("assert");
const Calculate = require("../index.js");

/* describe("Calculate", () => {
  describe(".sum", () => {
    it("returns the sum of an array of numbers", () => {});
  });
}); */

// 2/9 Getting Into The Red I
describe("Calculate", () => {
  describe(".sum", () => {
    it("returns the sum of an array of numbers", () => {
      // Code here
      const result = Calculate.sum([1, 2, 3]);
      assert.strictEqual(result, 6);
    });
  });
});
