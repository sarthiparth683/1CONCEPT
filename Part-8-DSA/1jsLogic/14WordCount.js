function countWords(sentence) {
  const splittedSentence = sentence.trim().split(" "); // converted to array
  const nonEmptyElements = splittedSentence.filter((element) => element != "");
  console.log(nonEmptyElements);
  return nonEmptyElements.length;
}

// console.log(countWords("This is a sentence"));
// console.log(countWords("What is the date today"));
// console.log(countWords("What is    the date today"));
// console.log(countWords(" What is    the date today "));
//======================================================================================
function count(string) {
  let arr = string.trim().split(" ");
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "") {
      count += 1;
    }
  }
  console.log(count);
}

// count("This is a sentence  "); // 4
// count("    What is the date today"); // 5
// count("What is    the date today"); // 5
// count("  What is    the date today  "); // 5
// count("  What     is       the    date    today    test   "); // 6
// ==================================================================================
