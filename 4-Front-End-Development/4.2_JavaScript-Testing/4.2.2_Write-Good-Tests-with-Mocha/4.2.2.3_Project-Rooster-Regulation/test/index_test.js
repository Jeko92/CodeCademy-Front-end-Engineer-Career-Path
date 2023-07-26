const assert = require("assert");
const rooster = require("../index.js");

describe("Rooster", () => {
  describe("announceDawn", () => {
    it("returns a rooster call", () => {
      // Setup
      const expected = "moo!";

      // Exercise
      const result = rooster.announceDawn();

      // Verify
      assert.strictEqual(result, expected);
    });
  });

  describe("timeAtDawn", () => {
    it("returns its argument as a string", () => {
      // Setup
      const expected = "15";

      // Exercise
      const result = rooster.timeAtDawn(15);

      // Verify
      assert.strictEqual(result, expected);
    });

    it("throws an error if passed a number less than 0", () => {
      // Setup
      const hour = -3;

      assert.throws(() => {
        Rooster.timeAtDawn(hour);
      }, RangeError);
    });

    it("throws an error if passed a number greater than 23", () => {
      // Setup
      const hour = 25;

      assert.throws(() => {
        Rooster.timeAtDawn(hour);
      }, RangeError);
    });
  });
});
