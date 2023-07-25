const assert = require("assert");

// 1/8 Introduction
describe("+", () => {
  it("returns the sum of its arguments", () => {
    assert.ok(3 + 4 === 7);
  });
});

// 2/8 assert.ok
describe("-", () => {
  it("returns the difference of two values", () => {
    const bigNum = 100;
    const smallNum = 4;
    const expected = 96;

    const result = bigNum - smallNum;

    // Write assertion here
    // assert.ok(result === 91);
    // assert.ok(result === 96);
    assert.ok(result === expected);
  });
});

// 3/8 assert.equal
