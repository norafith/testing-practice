const analyzeArray = require("../src/analyzeArray");

test("works with basic array #1", () => {
  expect(analyzeArray([2, 2, 2, 4]))
    .toEqual({
      avg: 2.5,
      sum: 10,
      min: 2,
      max: 4,
      length: 4
    })
})

test("works with basic array #2", () => {
  expect(analyzeArray([1, 1, 1, 9]))
    .toEqual({
      avg: 3,
      sum: 12,
      min: 1,
      max: 9,
      length: 4
    })
})

test("works with empty array", () => {
  expect(() => analyzeArray([]))
    .toThrow("Empty array, nothing to analyze.");
})