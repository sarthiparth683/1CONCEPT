//==============================================================================
//  LOCAL STORAGE & JSON IN JAVASCRIPT – COMPLETE CONCEPTS
//==============================================================================

//==============================================================================
//  1. INTRODUCTION TO LOCAL STORAGE
//==============================================================================
// localStorage allows you to store key-value pairs in the browser.
// Data persists even after refreshing or closing the browser (until manually cleared).

//------------------------------------------------------------------------------
// Basic Methods:-
// localStorage.setItem(key, value);     // To store data.
// localStorage.getItem(key);            // To retrieve stored data.
// localStorage.removeItem(key);         // To delete specific data by key.
// localStorage.clear();                 // To clear all local storage data.
//------------------------------------------------------------------------------

//==============================================================================
// 2. BASIC EXAMPLES
//==============================================================================
localStorage.setItem('key-1', 'value-1');
localStorage.setItem('key-2', 'value-2');

var value1 = localStorage.getItem('key-1');
var value2 = localStorage.getItem('key-2');

console.log("Value 1:", value1);
console.log("Value 2:", value2);

// Removing single value
localStorage.removeItem('key-1');

// Clearing all data
localStorage.clear();

//==============================================================================
// 3. WORKING WITH JSON
//==============================================================================
// Why JSON?
// Because localStorage can only store strings.
// So, we use JSON.stringify() and JSON.parse() to store objects/arrays safely.

// JSON.stringify(obj) → converts object/array into → string
// JSON.parse(string)  → converts string into → object/array
// --------------------------------------------------------
let obj1 = {
  name: "Parth",
  age: 999,
  hobby: "Football"
};

let stringify = JSON.stringify(obj1); // Convert object → JSON string
localStorage.setItem('myData-1', stringify); // Store stringified object

// Retrieve and parse back
let retrievedData = localStorage.getItem('myData-1');
console.log("Stringified data from localStorage:", retrievedData);

let parsedData = JSON.parse(retrievedData);
console.log("Parsed back to Object:", parsedData);
console.log("Type of parsed data:", typeof parsedData);
//==============================================================================
// 4. STORING & RETRIEVING ARRAYS - Full version of JSON example
//==============================================================================
let arr = [1, 2, 3, 4, 5];

// ❌ Direct storage — stored as string, not as array
localStorage.setItem('arr-raw', arr);
let getRaw = localStorage.getItem('arr-raw');
console.log("Directly stored array:", getRaw, "| Type:", typeof getRaw);

// ✅ Correct way using JSON
localStorage.setItem('arr-json', JSON.stringify(arr));
let arrParsed = JSON.parse(localStorage.getItem('arr-json'));
console.log("Parsed array:", arrParsed);
console.log("Is it truly an array?", Array.isArray(arrParsed));
//==============================================================================
// 5. COMBINING OBJECTS & ARRAYS IN STORAGE
//==============================================================================
let studentProfile = {
  name: "Tony Stark",
  age: 45,
  powers: ["Genius", "Inventor", "Billionaire"],
};

localStorage.setItem("studentProfile", JSON.stringify(studentProfile)); // Store
let profileData = JSON.parse(localStorage.getItem("studentProfile")); // Retrieve
console.log("Parsing in Right way", profileData);
//==============================================================================
// 🧰 6. TIPS & COMMON POINTS
//==============================================================================
// - localStorage stores only string data.
// - To store objects/arrays → use JSON.stringify().
// - To retrieve original data → use JSON.parse().
// - typeof [] → "object", use Array.isArray() to check if truly array.
// - localStorage persists data until cleared (unlike sessionStorage).
// - View stored data in browser:
//      👉 Inspect → Application → Local Storage → domain-name
// - You can manually delete or edit stored data from there.

//==============================================================================
// ✅ END OF FILE – COMPLETE LOCAL STORAGE CHEATSHEET
//==============================================================================
