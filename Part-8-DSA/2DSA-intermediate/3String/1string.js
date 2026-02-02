// ### Length of a String
// ================================================================
// # String In JavaScript
let firstName = "Vaishali";
// console.log(firstName.length);
// =================================================================

// ### Access String Element

// console.log(firstName.charAt(2)); // i
// console.log(firstName[2]); // i
// console.log(firstName.charCodeAt(2)); // 115 (Ascii Code)
// =================================================================

// ### Check Presence of Character

// console.log(firstName.includes("r")); // false (& if present it return true)
// console.log(firstName.indexOf("i")); // 2 (& if not present it return -1)
// console.log(firstName.lastIndexOf("i")); // 7
// =================================================================

// ### Compare Two Strings
let anotherName = "Vishal";
// console.log(firstName.localeCompare(anotherName)); // -1 (& if strings are equal it return 0)
// =================================================================

// ### Replace Substring
const str = "Vishal is Best Frontend Developer. Vishal is Best Developer. ";
// console.log(str.replace("Vishal", "Sujit")); // "Sujit is Best Frontend Developer. Vishal is Best Developer. "
// console.log(str.replaceAll("Vishal", "Sujit")); // "Sujit is Best Frontend Developer. Sujit is Best Developer. "
// =================================================================

// ### Substring of a String
// console.log(str.substring(6, 30));
// console.log(str.slice(-10, -1));
// =================================================================

// ### Split and Join

// console.log(str.split(" "));
const subString = str.split(" ");
// console.log(subString.join(" "));
// =================================================================

// ### String Start and End

// console.log(str.startsWith("Vishal")); // true
// console.log(str.endsWith("Developer")); // true
// =================================================================

// ### Trim and Case Conversion
const trimStr = str.trim();
const trimStrStart = str.trimStart();
const trimStrEnd = str.trimEnd();
// console.log(trimStr, trimStr.length);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// =================================================================

// ### Convert Number and Object to String
const num = 123;
// console.log(num, num.toString());

const obj = {
  name: "Vishal",
  course: "DSA with Vishal",
};
// console.log(obj, JSON.stringify(obj));
// =================================================================

// ### Concatenate Strings

const lastName = "Rajput";
// console.log(firstName + lastName);
// console.log(`${firstName} ${lastName} is a Best Developer`);
// console.log(firstName.concat(lastName, " is a", " Best"));
// =================================================================

// ## Practice Questions

// - [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)
// - [Reverse String](https://leetcode.com/problems/reverse-string)
// - [Valid Anagram](https://leetcode.com/problems/valid-anagram)
// - [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix)
// - [Merge Strings Alternately](https://leetcode.com/problems/merge-strings-alternately)
// - [Length of Last Word](https://leetcode.com/problems/length-of-last-word/)
// - [Valid Palindrome](https://leetcode.com/problems/valid-palindrome)
// - [String Compression](https://leetcode.com/problems/string-compression)
// - [Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string)
// - [Reverse Vowels of a String](https://leetcode.com/problems/reverse-vowels-of-a-string)
// - [Rotate String](https://leetcode.com/problems/rotate-string)
