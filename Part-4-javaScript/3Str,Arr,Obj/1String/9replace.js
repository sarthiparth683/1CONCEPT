
// Replacing a single substring:
const sentence = "JavaScript is a powerful language.";
const newSentence = sentence.replace("JavaScript", "Python");
console.log(newSentence);
// Output: "Python is a powerful language."


// Replacing all occurrences with a regular expression (global flag): 
const text = "The quick brown fox jumps over the lazy dog.";
const newText = text.replace(/dog/g, "cat");
console.log(newText);
// Output: "The quick brown fox jumps over the lazy cat."