//concept===================================================
// console.log("ab".charCodeAt(0));
// console.log("b".charCodeAt(0));
// console.log("z".charCodeAt(0));

// console.log("A".charCodeAt(0));
// console.log("Z".charCodeAt(0));

// console.log("a" < "b"); // true
// console.log("b" < "a"); // false
//=========================================================

function isStringInAlphabeticOrder(inputString) {
  inputString = inputString.replace(/ /g, "");
  inputString = inputString.toLowerCase();
  //   console.log(inputString);
  for (let i = 0; i < inputString.length - 1; i++) {
    if (inputString[i] > inputString[i + 1]) {
      return false;
    }
    // console.log(inputString[i], i)
  }
  return true;
}

// console.log(isStringInAlphabeticOrder("abcd"));
// console.log(isStringInAlphabeticOrder("acagz"));
// console.log(isStringInAlphabeticOrder("ac g z"));
// console.log(isStringInAlphabeticOrder("aAc g z"));
// ===========================================================
function alphabeticalOrder(str) {
  str = str.toLowerCase().replace(/ /g, "");
  console.log(str);
  for (let i = 0; i < str.length - 1; i++) {
    // console.log(str[i], str[i + 1], str[i] < str[i + 1]);
    if (str[i] > str[i + 1]) {
      return console.log(false);
    }
  }
  return console.log(true);
}

// alphabeticalOrder("Parth Sarthi");
// alphabeticalOrder("abc   defgh  ijkl");
// alphabeticalOrder("abcd");
// alphabeticalOrder("dge  dA  Sas asEa");
// ==============================================================