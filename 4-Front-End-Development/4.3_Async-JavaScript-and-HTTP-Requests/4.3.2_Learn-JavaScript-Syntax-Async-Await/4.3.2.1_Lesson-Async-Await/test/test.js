// 2/9 The async Keyword
/* console.log = function () {};
const { expect } = require("chai");
const rewire = require("rewire");
const fs = require("fs");
const code = fs.readFileSync("app.js", "utf8");

describe("", function () {
  it("", async function () {
    let appModule;
    try {
      appModule = rewire("../app.js");
    } catch (e) {
      expect(
        true,
        "Try checking your code again. You likely have a syntax error."
      ).to.equal(false);
    }
    let withAsync;
    try {
      withAsync = appModule.__get__("withAsync");
    } catch (e) {
      expect(true, "Did you create `withAsync`?").to.equal(false);
    }
    expect(
      withAsync,
      "`withAsync()` should be a function. Make sure to use the `async` keyword."
    ).to.be.an.instanceOf(Function);
    let usedAsync = /async/.test(code);
    expect(usedAsync, "`withAsync()` should be an `async` function.").to.equal(
      true
    );
    let test1 = await withAsync(0);
    let test2 = await withAsync(100);
    expect(
      test1,
      "Your `async` function should return 'zero' if the argument passed to it is `0`."
    ).to.equal("zero");
    expect(
      test2,
      "Your `async` function should return 'not zero' if the argument passed to it is not `0`."
    ).to.equal("not zero");
  });
});
 */

// 3/9 The await Operator
/* console.log = function () {};
const { expect } = require("chai");
const rewire = require("rewire");
let logs = [];

describe("", function () {
  it("", async function () {
    let appModule;
    try {
      appModule = rewire("../app.js");
    } catch (e) {
      expect(
        true,
        "Try checking your code again. You likely have a syntax error."
      ).to.equal(false);
    }
    let announceDinner;
    try {
      announceDinner = appModule.__get__("announceDinner");
    } catch (e) {
      expect(true, "Did you delete the `announceDinner` function?").to.equal(
        false
      );
    }
    console.log = (param) => logs.push(param);
    appModule.__set__("brainstormDinner", () => Promise.resolve("cat"));

    await announceDinner();
    expect(
      logs.includes(`I'm going to make cat for dinner.`),
      "Your `async` function needs to save a variable assigned to `await brainstormDinner()` and then log a string in the format: `I'm going to make [resolved value] for dinner.` Double check spelling and syntax."
    ).to.equal(true);
  });
});
 */

// 5/9 Handling Dependent Promises
/* console.log = function () {};
const { expect } = require("chai");
const rewire = require("rewire");
let logs = [];

describe("", function () {
  it("", async function () {
    let appModule;
    try {
      appModule = rewire("../app.js");
    } catch (e) {
      expect(
        true,
        "Try checking your code again. You likely have a syntax error."
      ).to.equal(false);
    }
    let makeBeans;
    try {
      makeBeans = appModule.__get__("makeBeans");
    } catch (e) {
      expect(true, "Did you create a `makeBeans()` function?").to.equal(false);
    }
    expect(makeBeans, "Is `makeBeans()` a function?").to.be.an.instanceOf(
      Function
    );

    //try{
    let testValue = makeBeans();
    expect(
      testValue,
      "Your `makeBeans()` function needs to be an `async` function. Make sure you've included the keyword `async`"
    ).to.be.an.instanceOf(Object); */
/*}
      catch(e){
       expect(true, `${e}`).to.equal(false);
      }
      */
/*   });
}); */

// 6/9 Handling Errors
/* console.log = function () {};
const { expect } = require("chai");
const rewire = require("rewire");
let logs = [];

describe("", function () {
  it("", async function () {
    let appModule;
    try {
      appModule = rewire("../app.js");
    } catch (e) {
      expect(
        true,
        "Try checking your code again. You likely have a syntax error."
      ).to.equal(false);
    }
    let announceDinner;
    try {
      announceDinner = appModule.__get__("hostDinnerParty");
    } catch (e) {
      expect(
        true,
        "Is your `hostDinnerParty()` function declared properly?"
      ).to.equal(false);
    }
    console.log = (param) => logs.push(param);
    appModule.__set__("cookBeanSouffle", () => Promise.reject("cat"));

    await announceDinner();
    expect(
      logs.includes(`cat`) && logs.includes(`Ordering a pizza!`),
      "Inside your `catch` block, your `async` function needs first log the error to the console and then log the string: `'Ordering a pizza!'` Double check spelling and syntax."
    ).to.equal(true);
  });
}); */

// 7/9 Handling Independent Promises
/* console.log = function () {};
const { expect } = require("chai");
const rewire = require("rewire");
let logs = [];
const fs = require("fs");
const code = fs.readFileSync("app.js", "utf8");

describe("", function () {
  it("", async function () {
    let appModule;
    try {
      appModule = rewire("../app.js");
    } catch (e) {
      expect(
        true,
        "Try checking your code again. You likely have a syntax error."
      ).to.equal(false);
    }
    let serveDinner;
    try {
      serveDinner = appModule.__get__("serveDinner");
    } catch (e) {
      expect(
        true,
        "Is your `serveDinner()` function declared properly?"
      ).to.equal(false);
    }

    expect(
      serveDinner,
      "Did you declare `serveDinner()` as a function? Make sure to use the `async` keyword."
    ).to.be.an.instanceOf(Function);

    appModule.__set__("cookBeans", () => {
      return new Promise((resolve, reject) => {
        logs.push("1");
        resolve("first");
      });
    });

    appModule.__set__("steamBroccoli", () => {
      return new Promise((resolve, reject) => {
        logs.push("2");
        resolve("second");
      });
    });

    appModule.__set__("cookRice", () => {
      return new Promise((resolve, reject) => {
        logs.push("3");
        resolve("third");
      });
    });

    appModule.__set__("bakeChicken", () => {
      return new Promise((resolve, reject) => {
        logs.push("4");
        resolve("fourth");
      });
    });
    let consLog = [];
    console.log = (param) => consLog.push(param);

    let testValue = serveDinner();
    expect(
      testValue,
      "Your `serveDinner()` function needs to be an `async` function. Make sure you've included the keyword `async`"
    ).to.be.an.instanceOf(Object);

    await serveDinner();

    let expectedLogs = ["1", "2", "3", "4"];
    let areAllLogs = expectedLogs.every((item) => logs.includes(item));
    if (areAllLogs) {
      let codeTests = [
        /await *cookBeans *\( *\)/,
        /await *steamBroccoli *\( *\)/,
        /await *cookRice *\( *\)/,
        /await *bakeChicken *\( *\)/,
      ];
      let areAnyRegex = codeTests.some((item) => item.test(code));
      if (areAnyRegex) {
        expect(
          true,
          "Don't directly `await` any of the functions. We want to take advantage of concurrency by invoking the functions without initially `await`-ing them."
        ).to.equal(false);
      } else {
        //check logs
        expect(
          consLog.includes(
            `Dinner is served. We're having second, third, fourth, and first.`
          ),
          "Once each function has been invoked, you need to await those promises resolved values and print the string in the exact format expected. Check your spelling and punctuation. And see the hint for more help."
        ).to.equal(true);
      }
    } else {
      expect(
        true,
        "Your `async` function, `serveDinner()` should invoke each of the promise-returning functions."
      ).to.equal(false);
    }
  });
}); */

// 8/9 Await Promise.all()#
console.log = function () {};
const { expect } = require("chai");
const rewire = require("rewire");
const sinon = require("sinon");
let logs = [];
const fs = require("fs");
const code = fs.readFileSync("app.js", "utf8");

describe("", function () {
  it("", async function () {
    try {
      var appModule = rewire("../app.js");
    } catch (e) {
      expect(
        true,
        "Double check your code. It likely has a syntax error."
      ).to.equal(false);
    }
    let serveDinnerAgain;
    try {
      serveDinnerAgain = appModule.__get__("serveDinnerAgain");
    } catch (e) {
      expect(true, "Did you create `serveDinnerAgain`?").to.equal(false);
    }

    expect(
      serveDinnerAgain,
      "`serveDinnerAgain()` should be a function. Make sure to use the `async` keyword"
    ).to.be.an.instanceOf(Function);

    var promiseAllSpy = sinon.spy(Promise, "all");

    appModule.__set__("cookBeans", () => {
      return new Promise((resolve, reject) => {
        logs.push("1");
        resolve("first");
      });
    });

    appModule.__set__("steamBroccoli", () => {
      return new Promise((resolve, reject) => {
        logs.push("2");
        resolve("second");
      });
    });

    appModule.__set__("cookRice", () => {
      return new Promise((resolve, reject) => {
        logs.push("3");
        resolve("third");
      });
    });

    appModule.__set__("bakeChicken", () => {
      return new Promise((resolve, reject) => {
        logs.push("4");
        resolve("fourth");
      });
    });
    let testValue = serveDinnerAgain();
    expect(
      testValue,
      "Your `serveDinnerAgain()` function needs to be an `async` function. Make sure you've included the keyword `async`"
    ).to.be.an.instanceOf(Object);

    await serveDinnerAgain();

    expect(
      promiseAllSpy.called,
      "Your function should call `Promise.all()`"
    ).to.equal(true);

    let expectedLogs = ["1", "2", "3", "4"];
    let areAllLogs = expectedLogs.every((item) => logs.includes(item));
    if (areAllLogs) {
      let codeTests = [
        /await *cookBeans *\( *\)/,
        /await *steamBroccoli *\( *\)/,
        /await *cookRice *\( *\)/,
        /await *bakeChicken *\( *\)/,
      ];
      let areAnyRegex = codeTests.some((item) => item.test(code));
      if (areAnyRegex) {
        expect(
          true,
          "Don't directly `await` any of the functions. We want to take advantage of concurrency by invoking the functions without initially `await`-ing them."
        ).to.equal(false);
      }

      let correctOrder =
        /steamBroccoli\s*\(\s*\)[^]*cookRice\s*\(\s*\)[^]*bakeChicken\s*\(\s*\)[^]*cookBeans\s*\(\s*\)/.test(
          code
        );

      expect(
        correctOrder,
        "You must pass in an array containing the `steamBroccoli()`, `cookRice()`, `bakeChicken()`, and `cookBeans()` functions in that order."
      ).to.equal(true);
    } else {
      expect(
        true,
        "You should pass into `Promise.all()` an array with each of the promise-returning functions invoked."
      ).to.equal(false);
    }
  });
});
