
// Replacing a single substring:
let a = "JavaScript is a powerful language.";
let b = a.replace("JavaScript", "Python");
// console.log(b);

// Replacing all occurrences with a regular expression (global flag): 
const text = " dog The quick dog  brown fox jumps over the lazy dog.";
const text2 = text.replace(/dog/g, "cat"); // (g for global)
console.log(text2);
// Output: "The quick brown fox jumps over the lazy cat."