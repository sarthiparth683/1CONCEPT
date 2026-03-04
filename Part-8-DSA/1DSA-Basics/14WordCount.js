function countWords(sentence) {
  const splittedSentence = sentence.trim().split(" "); // converted to array
  // console.log(splittedSentence);
  const nonEmptyElements = splittedSentence.filter((element) => element != "");
  // console.log(nonEmptyElements);
  return nonEmptyElements.length;
}

console.log(countWords("one two three"));
console.log(countWords("This is a sentence"));
console.log(countWords("What is the date today"));
console.log(countWords("What is    the date    today"));
console.log(countWords(" What is    the date   today  "));
//======================================================================================
function count(string) {
  let arr = string.trim().split(" ");
  // console.log(arr)
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "") {
      count += 1;
    }
  }

  return count;
}

console.log(count("one    two    three  "));
console.log(count("This is a sentence  "));
console.log(count("    What is the date today"));
console.log(count("What is    the date today"));
console.log(count("  What is    the date today  "));
console.log(count("  What     is   the    date    today    test   "));
// ==================================================================================
