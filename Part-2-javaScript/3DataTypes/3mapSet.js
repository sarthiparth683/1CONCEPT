// # Map and Set in JavaScript

// ## Set - A Collection of Unique Values-Think of a Set like a bag where you can only put unique items - no duplicates allowed! Main methods | `add()`, `has()`, `delete()`
// Use Set when:
// - You need unique values only
// - You want to remove duplicates
// - You need to check if something exists quickly
// ----------------------
// const mySet = new Set();
// // // Adding values
// mySet.add(1);
// mySet.add(2);
// mySet.add(3);
// mySet.add(2); // This won't be added (duplicate!)

// console.log(typeof mySet); // Set { 1, 2, 3 }
// console.log(mySet.size); // 3 (not "length" like arrays)
// console.log(mySet)

// // // Check if a value exists
// console.log(mySet.has(2)); // true
// console.log(mySet.has(5)); // false

// // // Delete a value
// mySet.delete(2);
// console.log(mySet); // Set { 1, 3 }

// // // Clear all values
// mySet.clear();
// console.log(mySet); // Set {}
// ------------------------------------
// Example 1: Remove duplicates from an array

// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = new Set(numbers);
// console.log(uniqueNumbers); // Set { 1, 2, 3, 4, 5 }
// // Convert back to array
// const uniqueArray = [...uniqueNumbers];
// console.log(uniqueArray); // [1, 2, 3, 4, 5]
// ------------------------------------------
// Example 2: Track unique visitors

// const visitors = new Set();
// visitors.add("John");
// visitors.add("Sarah");
// visitors.add("John"); // Won't be added again
// visitors.add("Mike");
// console.log(visitors)
// console.log(visitors.size); // 3 unique visitors
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// ## Map - A Collection of Key-Value Pairs - like a dictionary or phonebook - each key points to a value.Main methods | `set()`, `get()`, `has()`, `delete()`
// Use Map when:
// - You need key-value associations
// - You want to use non-string keys
// - You need to maintain insertion order
// - You frequently add/remove entries

// Creating a Map

// const myMap = new Map();
// // Adding key-value pairs
// myMap.set("name", "John");
// myMap.set("age", 30);
// myMap.set("city", "New York");
// console.log(myMap)
// console.log(myMap.size); // 3
// // Getting values
// console.log(myMap.get("name")); // "John"
// console.log(myMap.get("age")); // 30
// // Check if a key exists
// console.log(myMap.has("name")); // true
// console.log(myMap.has("country")); // false
// // Delete a key-value pair
// myMap.delete("age");
// // Clear all ent ries
// myMap.clear();

// ----------------------------------------

// Example 1: User profiles (any type as key)

// const userMap = new Map();
// // Using numbers as keys
// userMap.set(1, { name: "Alice", role: "admin" });
// userMap.set(2, { name: "Bob", role: "user" });
// userMap.set(3, { name: "Charlie", role: "user" });
// // Getting values
// console.log(userMap)
// console.log(userMap.get(1)); // { name: "Alice", role: "admin" }
// console.log(userMap.get(2).name); // "Bob"
// ------------------------------------------------------

// Example 2: Using objects as keys

// const taskStatus = new Map();
// const task1 = { id: 1, name: "Write code" };
// const task2 = { id: 2, name: "Test code" };
// taskStatus.set(task1, "completed");
// taskStatus.set(task2, "in progress");
// console.log(taskStatus)
// console.log(taskStatus.get(task1)); // "completed"
// console.log(taskStatus.get(task2)); // "in progress"
// -----------------------------------------

// Example 3: Counting occurrences

// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const fruitCount = new Map();
// for (const fruit of fruits) {
//   if (fruitCount.has(fruit)) {
//     fruitCount.set(fruit, fruitCount.get(fruit) + 1);
//   } else {
//     fruitCount.set(fruit, 1);
//   }
// }
// console.log(fruitCount);

// Map { "apple" => 3, "banana" => 2, "orange" => 1 }
// ---------------------------------------------------------------------

// ## Iterating through Map and Set

// ### Set Iteration

// const colors = new Set(["red", "green", "blue"]);

// // Using for...of
// for (const color of colors) {
//   console.log(color);
// }
// // Output: red, green, blue

// // Using forEach
// colors.forEach(color => {
//   console.log(color);
// });
// ---------------------------------------------

// ### Map Iteration

// const scores = new Map([
//   ["Alice", 95],
//   ["Bob", 87],
//   ["Charlie", 92]
// ]);

// // Iterate over entries (key-value pairs)
// for (const [name, score] of scores) {
//   console.log(`${name}: ${score}`);
// }
// // Output:
// // Alice: 95
// // Bob: 87
// // Charlie: 92

// // Get all keys
// console.log([...scores.keys()]); // ["Alice", "Bob", "Charlie"]

// // Get all values
// console.log([...scores.values()]); // [95, 87, 92]
// --------------------------------------------
