// find all the indexes of the word occured in the string
// =======================================================================
console.log("This is a car".indexOf("car")); // first occurance
console.log("This is a car car".lastIndexOf("car")); // last occurance
console.log("This is a car".indexOf("ashish"));
console.log("This is a car".indexOf("big", 11));
// ========================================================================
const bigString =
  "This is a big string with the word big repeated in the big string.";

function findAllOccurences(bigStr, word) {
  const result = [];
  let index = bigStr.indexOf(word); // first occurence index

  while (index !== -1) {
    result.push(index);
    index = bigStr.indexOf(word, index + 1); // takes two parapeters
  }

  return result;
}

console.log(findAllOccurences(bigString, "big"));
console.log(findAllOccurences(bigString, "ashish"));
console.log(findAllOccurences("ashish", "ashish"));
// ================================================================================
let str = "This is a big string with the word big repeated in the big string.";
function indexes(str, word) {
  let arr = [];
  let index = str.indexOf(word);
  while (index !== -1) {
    arr.push(index);
    index = str.indexOf(word, index + 1);
  }

  return arr;
}

console.log(indexes(str, "big"));
console.log(indexes(str, "bigger"));
// ====================================================================================