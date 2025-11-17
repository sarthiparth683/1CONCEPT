//=====================================
// 1. STRING LENGTH
//=====================================
let str1 = "Parth Sarthi";
// console.log(str1.length); // 13
//=====================================
// 2. ACCESSING CHARACTERS - charAt()
//=====================================
let str2 = "Hello";
// console.log(str2.charAt(0)); // H
// console.log(str2.charAt(3));
//=====================================
// 3. ACCESSING CHARACTERS - Bracket Notation (Modern)
//=====================================
let str3 = "JavaScript";
// console.log(str3[0]); // J
// console.log(str3[9]); // t

//=====================================
// 4. UPPERCASE AND LOWERCASE
//=====================================
let str4 = "JavaScript";
// console.log(str4.toUpperCase()); // JAVASCRIPT
// console.log(str4.toLowerCase()); // javascript
//=====================================
// 5. CONCAT - Joining Strings
//=====================================
let firstName = "John";
let lastName = "Cena";
// let fullName = firstName.concat(" ", lastName);
// console.log(fullName); // John Cena
//=====================================
// 6. TEMPLATE LITERALS - Modern String Formatting
//=====================================
let name = "Alice";
let age = 25;
let message = `My name is ${name} and I am ${age} years old.`;
// console.log(message); // My name is Alice and I am 25 years old.

//=====================================
// 7. INCLUDES - Check if Substring Exists
//=====================================
let str5 = "Welcome to JavaScript!";
// console.log(str5.includes("JavaScript")); // true
// console.log(str5.includes("java")); // false (case sensitive)
// console.log(str5.includes("to")); // true

//=====================================
// 8. INDEXOF - Find First Occurrence
//=====================================
let str6 = "Hello, world! Hello again";
// console.log(str6.indexOf("Hello")); // 0
// console.log(str6.indexOf("o")); // 4
// console.log(str6.indexOf("xyz")); // -1 (not found)

// 9. LASTINDEXOF - count form start but shows last value's index
// console.log(str6.lastIndexOf("Hello")); // 14
// console.log(str6.lastIndexOf("o")); // 18

//=====================================
// 10. STARTSWITH AND ENDSWITH
//=====================================
let str7 = "JavaScript is awesome";
// console.log(str7.startsWith("Java")); // true
// console.log(str7.startsWith("Script")); // false
// console.log(str7.endsWith("awesome")); // true
// console.log(str7.endsWith("is")); // false

//=====================================
// 11. SLICE - Extract Part of String
//=====================================
let str8 = "JavaScript";
// console.log(str8.slice(0, 4)); // Java
// console.log(str8.slice(4)); // Script (from index 4 to end)
// console.log(str8.slice(-6)); // Script (negative index from end)

// //=====================================
// // 12. SUBSTRING - Similar to Slice
// //=====================================
let str9 = "JavaScript";
// console.log(str9.substring(0, 4)); // Java
// console.log(str9.substring(4)); // Script

//=====================================
// 14. TRIM - Remove Whitespace from Both Ends
//=====================================
let str11 = "   Hello World   ";
// console.log(str11.trim()); // "Hello World"

//=====================================
// 15. TRIMSTART AND TRIMEND
//=====================================
let str12 = "   Hello World   ";
// console.log(str12.trimStart()); // "Hello World   "
// console.log(str12.trimEnd()); // "   Hello World"

//=====================================
// 16. REPLACE - Replace First Occurrence only
//=====================================
let str13 = "I love JavaScript. JavaScript is great!";
let replaced = str13.replace("JavaScript", "Python");
// console.log(replaced); // I love Python. JavaScript is great!

//=====================================
// 17. REPLACE WITH REGEX - Replace All Occurrences
//=====================================
let str14 = "I love JavaScript. JavaScript is great!";
let replaceAll = str14.replace(/JavaScript/g, "Python");
// console.log(replaceAll); // I love Python. Python is great!
// console.log(str14.replaceAll("JavaScript", "Python"))

//=====================================
// 18. REPLACEALL - Modern Way (ES2021)
//=====================================
let str15 = "cat dog cat bird cat";
// console.log(str15.replaceAll("cat", "lion")); // lion dog lion bird lion

//=====================================
// 19. SPLIT - Convert String into Array
//=====================================
let str16 = "apple,banana,orange";
let fruits = str16.split(",");
// console.log(fruits); // ["apple", "banana", "orange"]

let str17 = "Hello";
// console.log(str17.split("")); // ["H", "e", "l", "l", "o"]

//=====================================
// 20. REPEAT - Repeat String N Times
//=====================================
let str18 = "Ha";
// console.log(str18.repeat(3)); // HaHaHa
// console.log("*".repeat(5)); // *****

//=====================================
// 21. PADSTART - Add Padding to Start
//=====================================
//  string.padStart(targetLength, padString) :- targetLength: The total length you want the final string to be. padString: The character (or characters) you want to use for padding.

let str19 = "5";
// console.log(str19.padStart(3, "0")); // 005
// console.log("7".padStart(4, "x")); // xxx7

//=====================================
// 22. PADEND - Add Padding to End
//=====================================
let str20 = "5";
// console.log(str20.padEnd(3, "0")); // 500
// console.log("7".padEnd(4, "x")); // 7xxx

//=====================================
// 23. CHARCODEAT - Get Unicode Value
//=====================================
// The charCodeAt() method is useful when you need to work with the numeric Unicode value of a character instead of the character itself.

let str21 = "Hello";
// console.log(str21.charCodeAt(0)); // 72 (Unicode for 'H')
// console.log(str21.charCodeAt(1)); // 101 (Unicode for 'e')

//=====================================
// 24. FROMCHARCODE - Create String from Unicode
//=====================================
// console.log(String.fromCharCode(72, 101, 108, 108, 111)); // Hello
// console.log(String.fromCharCode(65, 66, 67)); // ABC

// //=====================================
// // 25. AT - Access both positive and Negative Indexing
// //=====================================
let str22 = "Hello";
// console.log(str22.at(0)); // H
// console.log(str22.at(1)); //e
// console.log(str22.at(-1)); // o (last character)
// console.log(str22.at(-2)); // l (second to last)

//=====================================
// 26. SEARCH - Find Index Using Regex
//=====================================
let str23 = "The quick brown fox";
// console.log(str23.search(/brown/)); // 10
// console.log(str23.search(/cat/)); // -1

//=====================================
// 27. MATCH - Extract Matches with Regex
//=====================================
let str24 = "The rain in Spain";
let matches = str24.match(/ain/g);
// console.log(matches); // ["ain", "ain"]
// console.log(matches.length)

let email = "contact@example.com";
let emailMatch = email.match(/\w+@\w+\.\w+/);
// console.log(emailMatch[0]); // contact@example.com

//=====================================
// 28. MATCHALL - Get All Matches with Details (ES2020)
//=====================================
let str25 = "test1 test2 test3";
let allMatches = [...str25.matchAll(/test(\d)/g)];
// console.log(allMatches[0][0]); // test1
// console.log(allMatches[0][1]); // 1

//=====================================
// 29. LOCALECOMPARE - Compare Strings Alphabetically
//=====================================
let a = "apple";
let b = "banana";
// console.log(a.localeCompare(b)); // -1 (a comes before b)
// console.log(b.localeCompare(a)); // 1 (b comes after a)
// console.log(a.localeCompare("apple")); // 0 (equal)

//=====================================
// 30. REVERSING A STRING
//=====================================
// split converts a string into an array
// let str26 = "JavaScript";
// let reversed = str26.split("").reverse().join("");
// console.log(reversed); // tpircSavaJ

//=====================================
// 31. STRING TO NUMBER CONVERSION
//=====================================
let numStr = "123";
// console.log(Number(numStr)); // 123
// console.log(parseInt("123.45")); // 123
// console.log(parseFloat("123.45")); // 123.45
// console.log(+"456"); // 456 (unary plus operator)

//=====================================
// 32. NUMBER TO STRING CONVERSION
//=====================================
let num = 123;
// console.log(num.toString()); // "123"
// console.log(String(num)); // "123"
// console.log(num + ""); // "123"

//=====================================
// 33. NORMALIZE - Unicode Normalization
//=====================================
let str27 = "\u00F1"; // ñ
let str28 = "\u006E\u0303"; // ñ (n + combining tilde)
// console.log(str27 === str28); // false
// console.log(str28.normalize())
// console.log(str27.normalize() === str28.normalize()); // true

//=====================================
// 34. CODEPOINT METHODS - For Unicode Characters Beyond BMP
//=====================================
let emoji = "😀";
// console.log(emoji.codePointAt(0)); // 128512
// console.log(String.fromCodePoint(128512)); // 😀

//=====================================
// 35. RAW STRINGS - Template Literal Raw
//=====================================
let path = String.raw`C:\Users\Desktop\file.txt`;
// console.log(path); // C:\Users\Desktop\file.txt (backslashes preserved)

//=====================================
// BONUS: Array Methods vs String Methods
// SPLICE - Works on arrays only (modifies original)
//=====================================
const numbers = [1, 2, 3, 4, 5];
let removed = numbers.splice(1, 2, 10, 20);
// console.log(removed); // [2, 3]
// console.log(numbers); // [1, 10, 20, 4, 5]
//------------------------------------------
// SLICE - Works on strings and arrays (doesn't modify)
const fruits2 = ["apple", "banana", "orange"];
let slicedFruits = fruits2.slice(1, 3);
// console.log(slicedFruits); // ["banana", "orange"]
// console.log(fruits2); // ["apple", "banana", "orange"] (unchanged)
