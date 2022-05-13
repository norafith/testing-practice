const caesarCipher = require("../src/caesarCipher");

test("works with zero offset", () => {
  expect(caesarCipher("asd", 0)).toBe("asd");
})

test("works with positive offset", () => {
  expect(caesarCipher("asfsfasa", 5)).toBe("fxkxkfxf");
})

test("works with uppercase letters", () => {
  expect(caesarCipher("DSADSA", 5)).toBe("IXFIXF");
})

test("works with big positive offset", () => {
  expect(caesarCipher("cxzvdsagsga", 53)).toBe("dyawetbhthb");
})

test("works with negative offset", () => {
  expect(caesarCipher("vcxbvdsgfsh", -5)).toBe("qxswqynbanc")
})

test("works with big negative offset", () => {
  expect(caesarCipher("dsaxzvdsgfsaf", -42)).toBe("nckhjfncqpckp");
})

test("works with non-alphabetic symbols (numbers, punctuation, etc.)", () => {
  expect(caesarCipher("dsadasd..fsafsaf//saf/24124mklmkt3l2m<<,,,dsaxzvz", -4325))
    .toBe("ujrurju..wjrwjrw//jrw/24124dbcdbk3c2d<<,,,ujroqmq") 
});