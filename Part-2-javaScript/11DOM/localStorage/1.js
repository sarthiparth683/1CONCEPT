//==============================================================================
//  LOCAL STORAGE & JSON IN JAVASCRIPT
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
//==============================================================================
// 2. BASIC EXAMPLES
//==============================================================================
// localStorage.setItem("key-1", "value-1");
// localStorage.setItem("key-2", "value-2");

// var value1 = localStorage.getItem("key-1");
// var value2 = localStorage.getItem("key-2");

// console.log("Key 1:", value1);
// console.log("Key 2:", value2);

// Removing single value
// localStorage.removeItem('key-1');

// Clearing all data
// localStorage.clear();

//==============================================================================
// 3. WORKING WITH JSON
//==============================================================================
// Why JSON? Because localStorage can only store strings.
// So, we use JSON.stringify() and JSON.parse() to store objects/arrays safely.
// JSON.stringify(obj) → converts object/array into → string
// JSON.parse(string)  → converts string into → object/array
// ----------------------------------------------------------------------------
// let obj1 = {
//   name: "Parth",
//   age: 25,
//   hobby: "Football",
//   city: "New York",
// };

// let stringify = JSON.stringify(obj1); // Convert object → JSON string
// localStorage.setItem("myData-1", stringify); // Store stringified object

// // Retrieve and parse back
// let retrievedData = localStorage.getItem("myData-1");
// console.log(
//   "Stringified data from localStorage not exact object",
//   retrievedData
// );

// let parsedData = JSON.parse(retrievedData);
// console.log("Parsed back to", typeof parsedData, parsedData);
// // localStorage.clear();
//==============================================================================
// 4. COMBINING OBJECTS & ARRAYS IN STORAGE
//==============================================================================
// let studentProfile = {
//   name: "Tony Stark",
//   age: 45,
//   powers: ["Genius", "Inventor", "Billionaire"],
// };

// localStorage.setItem("studentProfile", JSON.stringify(studentProfile)); // Store
// let profileData = JSON.parse(localStorage.getItem("studentProfile")); // Retrieve
// console.log("Parsing in Right way", profileData);
// localStorage.clear();
//==============================================================================
// 5. TIPS & COMMON POINTS
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
