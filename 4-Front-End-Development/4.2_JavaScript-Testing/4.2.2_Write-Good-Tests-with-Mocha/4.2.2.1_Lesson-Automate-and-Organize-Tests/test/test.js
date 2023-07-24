console.log = function () {};

const assert = require("chai").assert;
const fs = require("fs");
const Structured = require("structured");

const code = fs.readFileSync("./test/index_test.js", "utf8");

describe("Checkpoint 4", () => {
  it("asserts that `fs.unlinkSync(path)` is in it block after `assert.ok()`", () => {
    let structure = function () {
      describe(_, () => {
        it(_, () => {
          assert.deepEqual();
          fs.unlinkSync($expr);
        });

        it(_, () => {
          assert.deepEqual();
          fs.unlinkSync($expr);
        });
      });
    };

    // assert that structure matches
    let isMatch = Structured.match(code, structure);
    let failureMessage =
      "Call `fs.unlinkSync(path)` beneath the Teardown comment in both tests.";
    assert.isOk(isMatch, failureMessage);

    // assert that regex matches
    let codeMatch = code.match(/fs\.\s*unlinkSync\s*\(\s*path\s*\)/);
    assert.isOk(codeMatch, "Pass `path` as an argument to `.unlinkSync()`.");
  });
});

describe("Checkpoint 1", () => {
  it("asserts `before` hook is within `describe` block", () => {
    // arrow notation
    let structure1 = function () {
      describe(_, () => {
        before(() => {});
        it();
        it();
      });
    };

    // function() notation
    let structure2 = function () {
      describe(_, () => {
        before(function () {});
        it();
        it();
      });
    };

    // assert that structure1 or structure2 matches
    let isMatch1 = Structured.match(code, structure1);
    let isMatch2 = Structured.match(code, structure2);
    let failureMessage =
      "`before` hook must be outside of `it()` but within `describe()`";
    assert.isOk(isMatch1 || isMatch2, failureMessage);
  });
});
