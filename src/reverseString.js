function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i != -1; i--) {
    result += str[i];
  }

  return result;
}

module.exports = reverseString;