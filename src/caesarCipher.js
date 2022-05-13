function caesarCipher(str, offset) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  while (offset < 0) {
    offset = alphabet.length + offset;
  }

  for (let symb of str) {
    let uppercaseFlag = false;
    
    if (symb.toUpperCase() === symb && alphabet.includes(symb.toLowerCase())) {
      uppercaseFlag = true;
      symb = symb.toLowerCase();
    } else if (!alphabet.includes(symb)) {
      result += symb;
      continue;
    }

    let symbIndex = alphabet.indexOf(symb);
    let calcIndex = (symbIndex + offset) % alphabet.length;
    result += uppercaseFlag ? alphabet[calcIndex].toUpperCase() : alphabet[calcIndex]; 
  }

  return result;
}

module.exports = caesarCipher;