// # Map and Set in JavaScript

// ## Set - A Collection of Unique Values -  set-Methods - `add()`, `has()`, `delete()`
const mySet = new Set();
mySet.add(1);
mySet.add(9);
mySet.add(2);
mySet.add(3);
mySet.add(2); // This won't be added (duplicate!)
console.log(mySet);
console.log(typeof mySet);
console.log(mySet.size);
console.log(mySet.has(2));
console.log(mySet.has(5));
mySet.delete(2);
console.log(mySet);
mySet.clear();
console.log(mySet);
// =========================================================
// Example 1: Remove duplicates from an array

const numbers = [1, 8, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = new Set(numbers);
console.log(uniqueNumbers);
const uniqueArray = [...uniqueNumbers]; // Convert back to array
console.log(uniqueArray);
// ------------------------------------------
// Example 2: Track unique visitors

const visitors = new Set();
visitors.add("John");
visitors.add("Sarah");
visitors.add("John"); // Won't be added again
visitors.add("Mike");
console.log(visitors);
console.log(visitors.size);
//=========================================================================================
// Map - A Collection of Key-Value Pairs.Main methods | `set()`, `get()`, `has()`, `delete()`
const myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 30);
myMap.set("city", "New York");
console.log(myMap);
console.log(myMap.size);
console.log(myMap.get("name"));
console.log(myMap.get("age"));
console.log(myMap.has("name"));
console.log(myMap.has("country"));
myMap.delete("age");
console.log(myMap);
myMap.clear();
console.log(myMap);
// ----------------------------------------------------
// Example 1: User profiles (any type as key)

const userMap = new Map();
userMap.set(1, { name: "Alice", role: "admin" });
userMap.set(2, { name: "Bob", role: "user" });
userMap.set(3, { name: "Charlie", role: "user" });
console.log(userMap);
console.log(userMap.get(1));
console.log(userMap.get(2).name);
// ------------------------------------------------------
// Example 2: Using objects as keys

const taskStatus = new Map();
const task1 = { id: 1, name: "Write code" };
const task2 = { id: 2, name: "Test code" };
taskStatus.set(task1, "completed");
taskStatus.set(task2, "in progress");
console.log(taskStatus);
console.log(taskStatus.get(task1));
console.log(taskStatus.get(task2));
// --------------------------------------------------------