//concept =================================================
console.log("a".charCodeAt(0));
console.log("z".charCodeAt(0));

console.log("A".charCodeAt(0));
console.log("Z".charCodeAt(0));

console.log("a" < "b");
console.log("b" < "a");

console.log("A" < "B");
console.log("B" < "A");
// -----------------------------
console.log("What? Why? How?".replace(/W/g, "!"));
console.log("What? Why? How?".replace(/\?/g, "!")); // for regex we need \ backward slash
console.log("What? Why? How?".replaceAll("W", "!"));
console.log("What? Why? How?".replaceAll("?", "!"));

// Works perfectly:
console.log("apples and apples".replaceAll(/apples/g, "oranges"));
console.log("apples and apples".replaceAll("apples", "oranges"));

// Throws a TypeError (missing the 'g' flag):
// console.log("apples and apples".replaceAll(/apples/, "oranges"));
//=========================================================

function isStringInAlphabeticOrder(inputString) {
  inputString = inputString.toLowerCase();
  inputString = inputString.replace(/ /g, "");

  for (let i = 0; i < inputString.length - 1; i++) {
    if (inputString[i] > inputString[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log(isStringInAlphabeticOrder("abcd"));
console.log(isStringInAlphabeticOrder("acagz"));
console.log(isStringInAlphabeticOrder("ac g z"));
console.log(isStringInAlphabeticOrder("aAc g z"));
// ===========================================================
function alphabeticalOrder(str) {
  str = str.toLowerCase();
  str = str.replaceAll(" ", "");

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] > str[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(alphabeticalOrder("abcd"));
console.log(alphabeticalOrder("acagz"));
console.log(alphabeticalOrder("ac g z"));
console.log(alphabeticalOrder("aAc g z"));
console.log(alphabeticalOrder("abcde f"));
console.log(alphabeticalOrder("abc afgh"));
// ===============================================================