// Reversing a String
let str = "ParthSarthi";
let reversedStr = str.split("").reverse().join("");
console.log(reversedStr);


// Extracting Substrings:
// slice(start, end): Extracts a section from the start index (inclusive) to the end index (exclusive).
let greeting = "ParthSarthi";
const slicedString = greeting.slice(0, 5);
console.log(slicedString);

// includes(searchString):
// This method checks if a string contains a specified substring and returns true if it does, false otherwise. It's incredibly useful for string searching and validation.
let message = "Welcome to JavaScript!";
console.log(message.includes("JavaScript"));
console.log(message.includes("Java"));
console.log(message.includes("ja"));


// concat(string2, ..., stringN):
// This method joins multiple strings into a single new string. It's a convenient way to concatenate strings without extra characters.
let firstName = "Alice ";
let lastName = "Smith";
let fullName = firstName.concat(lastName);
console.log(fullName);