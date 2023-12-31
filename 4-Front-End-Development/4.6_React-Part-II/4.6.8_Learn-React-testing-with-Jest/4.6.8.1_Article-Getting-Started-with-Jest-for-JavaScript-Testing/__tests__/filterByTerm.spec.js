//import filterByTerm1 from "../src/filterByTerm";
const filterByTerm = require("../src/filterByTerm");

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" },
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm(input, "link")).toEqual(output);

    expect(filterByTerm(input, "LINK")).toEqual(output);
  });

  test("it should filter by a search term (uRl)", () => {
    // solution ex 1
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" },
    ];

    const output = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
    ];

    expect(filterByTerm(input, "uRl")).toEqual(output);
  });

  test("it should throw when searchTerm is empty string", () => {
    // solution ex 2
    const input = [];
    expect(() => {
      filterByTerm(input, "");
    }).toThrowError(Error("searchTerm cannot be empty"));
  });
});

/*
function filterByTerm(inputArr, searchTerm) {
  const regex = new RegExp(searchTerm, "i");
  return inputArr.filter(function (arrayElement) {
    return arrayElement.url.match(regex);
  });
}

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" },
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];
    const uRIOutput = [];
    const emptyOutput = [];

    expect(filterByTerm(input, "link")).toEqual(output);
    expect(filterByTerm(input, "LINK")).toEqual(output); // New test
    expect(filterByTerm(input, "uRI")).toEqual(uRIOutput);
    expect(filterByTerm(input, "")).toEqual(input);
  });
});
*/
