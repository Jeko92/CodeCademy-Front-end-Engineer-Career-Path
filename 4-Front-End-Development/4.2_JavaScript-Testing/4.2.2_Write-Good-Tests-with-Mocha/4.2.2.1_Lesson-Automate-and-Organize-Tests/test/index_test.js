const assert = require("assert");
const fs = require("fs");
let path, str;

// 4/9 describe and it blocks
// 5/9 assert
describe("Math", () => {
  describe(".max", () => {
    it("returns the argument with the highest value", () => {
      const minimum = 1;
      const median = 2;
      const maximum = 3;

      const result = Math.max(median, minimum, maximum);

      assert.ok(result === maximum);
    });
    it("returns -Infinity when no arguments are provided", () => {
      const negInfinity = -Infinity;

      const result = Math.max();

      assert.ok(result === negInfinity);
    });
  });
  describe(".min", () => {
    it("returns the argument with the lowest value", () => {
      const minimum = 1;
      const median = 2;
      const maximum = 3;

      const result1 = Math.min(median, minimum, maximum);

      assert.ok(result1 === minimum);
    });
    it("returns Infinity when no arguments are provided", () => {
      const posInfinity = Infinity;

      const result = Math.min();

      assert.ok(result === posInfinity);
    });
  });
});

// 6/9 Setup, Exercise, and Verify
// Naive approach
describe(".pop", () => {
  it("returns the last element in the array [naive]", () => {
    assert.ok(["padawan", "knight"].pop() === "knight");
  });
});

// 3 phase approach
/* describe(".pop", () => {
  it("returns the last element in the array [3phase]", () => {
    // Setup
    const knightString = "knight";
    const jediPath = ["padawan", knightString];

    // Exercise
    const popped = jediPath.pop();

    // Verify
    assert.ok(popped === knightString);
  });
});

// 7/9 Teardown
describe("appendFileSync", () => {
  it("creates a new file with a string of text", () => {
    // Setup
    path = "./message.txt";
    str = "Hello Node.js";

    // Exercise: write to file
    fs.appendFileSync(path, str);

    // Verify: compare file contents to string
    const contents = fs.readFileSync(path);
    assert.equal(contents.toString(), str);

    // Teardown: restore file
    fs.unlinkSync(path);
  });

  it("creates a new file with a string of text", () => {
    // Setup
    path = "./message.txt";
    str = "";

    // Exercise: write to file
    fs.appendFileSync(path, str);

    // Verify: compare file contents to string
    const contents = fs.readFileSync(path);
    assert.equal(contents.toString(), str);

    // Teardown: restore file
    fs.unlinkSync(path);
  });
}); */

// 8/9 Hooks
describe("appendFileSync", () => {
  // Write hooks above the tests
  let testFile; // Variable used by both tests

  before(() => {
    path = "./message.txt";
  });
  afterEach(() => {
    fs.unlinkSync(path);
  });

  it("writes a string to text file at given path name", () => {
    // Setup
    // path = "./message.txt";
    str = "Hello Node.js";

    // Exercise: write to file
    fs.appendFileSync(path, str);

    // Verify: compare file contents to string
    const contents = fs.readFileSync(path);
    assert.equal(contents.toString(), str);

    // Teardown: restore file
    // fs.unlinkSync(path);
  });

  it("writes an empty string to text file at given path name", () => {
    // Setup
    // path = "./message.txt";
    str = "";

    // Exercise: write to file
    fs.appendFileSync(path, str);

    // Verify: compare file contents to string
    const contents = fs.readFileSync(path);
    assert.equal(contents.toString(), str);

    // Teardown: restore file
    // fs.unlinkSync(path);
  });
});
