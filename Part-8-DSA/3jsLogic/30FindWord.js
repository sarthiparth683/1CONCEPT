const bigString =
  "This is a big string with the word big repeated in the big string.";
const wordToFind = "big";

// console.log(bigString.indexOf("big")); // first occurance
// console.log(bigString.lastIndexOf("big")); // last occurance
// console.log(bigString.indexOf('ashish'));
// console.log(bigString.indexOf('big'));
// console.log(bigString.indexOf('big', 11));
// console.log(bigString.indexOf('big', 36));

function findAllOccurences(big, word) {
  const result = [];
  let index = big.indexOf(word); // give first occurance

  while (index !== -1) {
    // console.log(index);
    result.push(index);
    index = big.indexOf(word, index + 1); // takes two parapeters
  }
  return result;
}

// console.log(findAllOccurences(bigString, wordToFind));
// console.log(findAllOccurences(bigString, "ashish"));
// console.log(findAllOccurences("ashish", "ashish"));
