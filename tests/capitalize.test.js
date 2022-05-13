const capitalize = require("../src/capitalize");

test("works with letters #1", () => {
  expect(capitalize("asdasd")).toEqual("ASDASD");
})

test("works with letters #2", () => {
  expect(capitalize("dsadsa")).toEqual("DSADSA");
})

test("works with numbers", () => {
  expect(capitalize("dsa12")).toEqual("DSA12");
})