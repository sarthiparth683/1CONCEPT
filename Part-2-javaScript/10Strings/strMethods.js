// String-Method
// str.length
// str.toUpperCase()
// str.toLowerCase()
// arr.reverse()
// str.slice(2, 5)
// str.split("")
// str.includes("check")
// str.concat(str7, str9, str10)
// str.join("")
// indexOf()
// charAt()
// splice()
// str.replace()
//=====================================
// 1. STRING LENGTH
//=====================================
let str1 = "Parth Sarthi";
console.log(str1.length);
//=====================================
// 2. ACCESSING CHARACTERS - charAt()
//=====================================
let str2 = "Hello";
console.log(str2.charAt(0));
console.log(str2.charAt(3));
//=====================================
// 3. ACCESSING CHARACTERS - Bracket Notation (Modern)
//=====================================
let str3 = "JavaScript";
console.log(str3[0]);
console.log(str3[9]);
//=====================================
// 4. UPPERCASE AND LOWERCASE
//=====================================
let str4 = "JavaScript";
console.log(str4.toUpperCase());
console.log(str4.toLowerCase());
//=====================================
// 5. CONCAT - Joining Strings
//=====================================
let firstName = "John ";
let lastName = "Cena";
let fullName = firstName.concat(lastName);
console.log(fullName);
//=====================================
// 6. TEMPLATE LITERALS - Modern String Formatting
//=====================================
let name = "Alice";
let age = 25;
let message = `My name is ${name} and I am ${age} years old.`;
console.log(message);
//========================================
// 7. INCLUDES - Check if Substring Exists
//========================================
let str5 = "Welcome to JavaScript!";
console.log(str5.includes("JavaScript"));
console.log(str5.includes("Java"));
console.log(str5.includes("come"));
console.log(str5.includes("xyz"));
//=====================================
// 8. INDEXOF - Find First Occurrence
//=====================================
let str6 = "Hello, world! Hello again";
console.log(str6.indexOf("Hello"));
console.log(str6.indexOf("o"));
console.log(str6.indexOf("xyz"));

// 9. .lastIndexOf() method searches the string from right to left, but it always returns the index based on a 0-indexed count from the beginning of the string.
console.log(str6.lastIndexOf("Hello"));
console.log(str6.lastIndexOf("o"));
//=====================================
// 10. STARTSWITH AND ENDSWITH
//=====================================
let str7 = "JavaScript is awesome";
console.log(str7.startsWith("Java"));
console.log(str7.startsWith("Script"));
console.log(str7.endsWith("awesome"));
console.log(str7.endsWith("is"));
//=====================================
// 11. SLICE - Extract Part of String
//=====================================
let str8 = "JavaScript";
console.log(str8.slice(0, 4));
console.log(str8.slice(4));
console.log(str8.slice(-3));
// =====================================
// 12. SUBSTRING - Similar to Slice
// =====================================
let str9 = "JavaScript";
console.log(str9.substring(0, 4));
console.log(str9.substring(4));
//=====================================
// 14. TRIM - Remove Whitespace from Both Ends
//=====================================
let str11 = "   Hello World   ";
console.log(str11.trim());
//=====================================
// 15. TRIMSTART AND TRIMEND
//=====================================
let str12 = "   Hello World   ";
console.log(str12.trimStart());
console.log(str12.trimEnd());
//=====================================
// 16. REPLACE - Replace First Occurrence only
//=====================================
let str13 = "I love JavaScript. JavaScript is great!";
let replaced = str13.replace("JavaScript", "Python");
console.log(replaced);
console.log(str13.replaceAll("JavaScript", "Python"));
//=====================================
// 17. REPLACE WITH REGEX - Replace All Occurrences
//=====================================
let str14 = "I love JavaScript. JavaScript is great!";
let replaceAll = str14.replace(/JavaScript/g, "Python");
console.log(replaceAll);
console.log(str14.replaceAll("JavaScript", "Python"));
//=====================================
// 18. REPLACEALL - Modern Way (ES2021)
//=====================================
let str15 = "cat dog cat bird cat";
console.log(str15.replaceAll("cat", "lion"));
//=====================================
// 19. SPLIT - Convert String into Array
//=====================================
let str16 = "apple,banana,orange";
console.log(str16.split(","));
console.log(str16.split(",").reverse());
console.log(str16.split(",").reverse().join(", "));

let str17 = "Hello";
console.log(str17.split(""));
console.log(str17.split("").reverse());
console.log(str17.split("").reverse().join("-"));
//=====================================
// 20. REPEAT - Repeat String N Times
//=====================================
let str18 = "Ha";
console.log(str18.repeat(3));
console.log("*".repeat(5));
//=====================================
// 21. PADSTART - Add Padding to Start
//=====================================
// string.padStart(targetLength, padString) :- targetLength: The total length you want the final string to be. padString: The character (or characters) you want to use for padding.

let str19 = "5";
console.log(str19.padStart(3, "0"));
console.log("7".padStart(3, "x"));
//=====================================
// 22. PADEND - Add Padding to End
//=====================================
let str20 = "5";
console.log(str20.padEnd(3, "0"));
console.log("7".padEnd(4, "x"));
//=====================================
// 23. CHARCODEAT - Get Unicode Value
//=====================================
// The charCodeAt() method is useful when you need to work with the numeric Unicode value of a character instead of the character itself.

let str21 = "azAZHello";
console.log(str21.charCodeAt(0));
console.log(str21.charCodeAt(1));
console.log(str21.charCodeAt(2));
console.log(str21.charCodeAt(3));
console.log(str21.charCodeAt(0));
console.log(str21.charCodeAt(0));
console.log(str21.charCodeAt(0));
console.log(str21.charCodeAt(1));
//=====================================
// 24. FROMCHARCODE - Create String from Unicode
//=====================================
console.log(String.fromCharCode(72, 101, 108, 108, 111));
console.log(String.fromCharCode(65, 66, 67));
// =====================================
// 25. at - Access both positive and Negative Indexing
// =====================================
let str22 = "Hello";
console.log(str22.at(0));
console.log(str22.at(1));
console.log(str22.at(-1));
console.log(str22.at(-2));
//=====================================
// 26. SEARCH - Find Index Using Regex
//=====================================
let str23 = "The quick brown fox";
console.log(str23.search(/brown/));
console.log(str23.search(/cat/));
console.log(str23.indexOf("quick"));
console.log(str23.indexOf("brown"));
//=====================================
// 27. MATCH - Extract Matches with Regex
//=====================================
let str24 = "The rain in Spain";
let matches = str24.match(/ain/g);
console.log(matches);
console.log(matches[0]);
console.log(matches.length);

let email = "contact@example.com";
let emailMatch = email.match(/\w+@\w+\.\w+/);
console.log(emailMatch);
console.log(emailMatch[0]);
//=====================================
// 28. MATCHALL - Get All Matches with Details (ES2020)
//=====================================
let str25 = "test1 test2 test3";
let allMatches = [...str25.matchAll(/test(\d)/g)];
console.log(allMatches);
console.log(allMatches[0][0]);
console.log(allMatches[0][1]);
//=====================================
// 29. LOCALECOMPARE - Compare Strings Alphabetically
//=====================================
let a = "apple";
let b = "banana";
console.log(a.localeCompare(b));
console.log(b.localeCompare(a));
console.log(a.localeCompare("apple"));
//=====================================
// 30. REVERSING A STRING
//=====================================
let str26 = "JavaScript";
let reversed = str26.split("").reverse().join("");
console.log(reversed);
//=====================================
// 31. STRING TO NUMBER CONVERSION
//=====================================
let numStr = "123";
console.log(Number(numStr));
console.log(parseInt("123.45"));
console.log(parseFloat("123.45"));
console.log(+"456");
//=====================================
// 32. NUMBER TO STRING CONVERSION
//=====================================
let num = 123;
console.log(num.toString());
console.log(String(num));
console.log(num + "");
//=====================================
// 33. NORMALIZE - Unicode Normalization
//=====================================
let str27 = "\u00F1";
let str28 = "\u006E\u0303";
console.log(str27 === str28);
console.log(str28.normalize());
console.log(str27.normalize() === str28.normalize());
//=====================================
// 34. CODEPOINT METHODS - For Unicode Characters Beyond BMP
//=====================================
let emoji = "😀";
console.log(emoji.codePointAt(0));
console.log(String.fromCodePoint(128512));
//=====================================
// 35. RAW STRINGS - Template Literal Raw
//=====================================
console.log("C:\Users\Desktop\file.txt"); // the backslash (\) is treated as an escape characte
console.log("C:\\Users\\Desktop\\file.txt");
// Output: C:\Users\Desktop\file.txt
let path = String.raw`C:\Users\Desktop\file.txt`;
console.log(path);
//=====================================
// Splice :-
//=====================================
const numbers = [0, 1, 2, 3, 4, 5];
// console.log(numbers.splice(1, 3));
let removed = numbers.splice(0, 3, "add1", "add2", "...");
console.log(removed);
console.log(numbers);
//--------------------------------------------------------------
// Slice :-
const fruits2 = ["apple", "banana", "orange", "Litchi", "Mango"];
console.log(fruits2.slice(1,3))
let slicedFruits = fruits2.slice(1, 3);
console.log(slicedFruits);
console.log(fruits2);
// ==============================================================
