//concept =================================================
console.log("abcd".charCodeAt(0));
console.log("abcd".charCodeAt(1));
console.log("abcd".charCodeAt(2));
console.log("efgh".charCodeAt(1));
console.log("ijkl".charCodeAt(2));

console.log("A".charCodeAt(0));
console.log("Z".charCodeAt(0));
console.log("C".charCodeAt(0));
console.log("D".charCodeAt(0));

console.log("a" < "b");
console.log("b" < "a");

console.log("A" < "B");
console.log("B" < "A");
//=========================================================

function isStringInAlphabeticOrder(inputString) {
  inputString = inputString.replace(/ /g, "");
  inputString = inputString.toLowerCase();

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
