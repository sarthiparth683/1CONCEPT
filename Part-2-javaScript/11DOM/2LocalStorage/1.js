//==============================================================================
//  LOCAL STORAGE & JSON IN JAVASCRIPT
//==============================================================================
// - View stored data in browser:
//      👉 Inspect → Application → Local Storage → domain-name
// - You can manually delete or edit stored data from there.
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
localStorage.setItem("key-1", "value-1");
localStorage.setItem("key-2", "value-2");
localStorage.setItem("key-3", "value-3");

var value1 = localStorage.getItem("key-1");
var value2 = localStorage.getItem("key-2");

console.log("Key 1:", value1);
console.log("Key 2:", value2);

// Removing single value
localStorage.removeItem("key-2");

// Clearing all data
localStorage.clear();
//==============================================================================
// 3. WORKING WITH JSON
//==============================================================================
// Why JSON? Because localStorage can only store strings.
// So, we use JSON.stringify() and JSON.parse() to store objects/arrays safely.
// JSON.stringify(obj) → converts object/array into → string
// JSON.parse(string)  → converts string into → object/array
// ----------------------------------------------------------------------------
let obj1 = {
  name: "Parth",
  age: 25,
  hobby: "Football",
  city: "New York",
};

localStorage.setItem("obj-1", JSON.stringify(obj1));
let parsedData = JSON.parse(localStorage.getItem("obj-1"));
console.log("Type of Data", typeof parsedData, parsedData);

// localStorage.clear();
//==============================================================================
// 4. Combining localStorage and JSON
//==============================================================================
let studentProfile = {
  name: "Tony Stark",
  age: 45,
  powers: ["Genius", "Inventor", "Billionaire"],
};
localStorage.setItem("obj", JSON.stringify(studentProfile));
let profileData = JSON.parse(localStorage.getItem("obj"));

console.log("Type of Data", typeof profileData, profileData);
console.log(profileData.name);
console.log(profileData.age);
console.log(profileData.powers[0]);
// localStorage.clear();
//==============================================================================
