function countCharacters(inputString) {
  const result = {};
  inputString = inputString.toLowerCase();

  for (let i = 0; i < inputString.length; i++) {
    if (!result[inputString[i]]) {
      result[inputString[i]] = 0;
    }
    result[inputString[i]] = result[inputString[i]] + 1;
  }

  return result;
}

console.log(countCharacters("Ashish Saluja 1"));
// ===========================================================
function countCharacters2(inputString) {
  inputString = inputString.toLowerCase();
  const splittedString = inputString.split("");
  // console.log(splittedString);
  const result = splittedString.reduce((acc, char) => {
    if (!acc[char]) {
      acc[char] = 0;
    }
    acc[char] = acc[char] + 1;
    return acc;
  }, {});

  return result;
}

console.log(countCharacters2("Ashish Saluja 1"));
// ==============================================================
function char2(str) {
  str = str.toLowerCase().split("");
  // console.log(str)
  let res = str.reduce((acc, char) => {
    if (!acc[char]) {
      acc[char] = 0;
    }
    acc[char] = acc[char] + 1;
    return acc;
  }, {});

  return res;
}

console.log(char2("Parth Sarthi aa zzz k"));
