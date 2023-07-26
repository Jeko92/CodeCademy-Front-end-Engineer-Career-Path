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
describe("+", () => {
  it("returns the sum of two values", () => {
    const bigNum = 100;
    const smallNum = 4;
    const expected = 104;

    const result = bigNum + smallNum;

    // Write assertion here
    assert.equal(result, expected);
  });
});

// 4/8 assert.strictEqual
describe("*", () => {
  it("returns the product of two values", () => {
    const bigNum = 100;
    const smallNum = 4;
    const expected = 400;
    // const expected = "400"; // this will throw error while strictEqual performs === equality and checks for types also

    const result = bigNum * smallNum;

    // Write assertion here
    // assert.equal(result, expected);
    assert.strictEqual(result, expected);
  });
});

// 5/8 assert.deepEqual I
describe("+", () => {
  it("returns the sum of two values", () => {
    // Setup
    let expected = { a: 3, b: 4, result: 7 };
    let sum = { a: 3, b: 4 };

    // Exercise
    sum.result = sum.a + sum.b;

    // Verify
    // assert.equal(sum, expected);
    assert.deepEqual(sum, expected);
  });
});

// 6/8 assert.deepEqual II
describe("+", () => {
  it("returns the sum of two values", () => {
    // Setup
    let expected = [3, 4, 7];
    let sum = [3, 4];

    // Exercise
    sum.push(3 + 4);

    // Verify
    assert.deepEqual(sum, expected);
  });
});

// 7/8 Other assert methods
describe("Numbers", () => {
  it("1 does not equal 2", () => {
    // Verify
    // assert.ok(1 !== 2);
    assert.notStrictEqual(1, 2);
  });
});

describe("interrupting cow", () => {
  before(() => {
    console.log("cow enters the conversation...");
  });

  afterEach(() => {
    console.log("MOO!");
  });

  it("has four legs", () => {});
  it("moos above 20 decibels", () => {});
});
