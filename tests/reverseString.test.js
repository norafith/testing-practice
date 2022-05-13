const reverseString = require("../src/reverseString");

test("just works #1", () => {
  expect(reverseString("asd")).toBe("dsa");
})

test("just works #2", () => {
  expect(reverseString("word")).toBe("drow");
})

test("works with one length string", () => {
  expect(reverseString("a")).toBe("a");
})

test("works with empty string", () => {
  expect(reverseString("")).toBe("");
})