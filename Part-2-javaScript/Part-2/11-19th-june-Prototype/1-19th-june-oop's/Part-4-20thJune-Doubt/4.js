// Object.keys, values, and entries

// expand_less
// Methods like Object.keys, Object.values, and Object.entries are crucial for object manipulation, as they allow developers to easily iterate over objects and access their keys, values, or both as arrays. These methods enhance the efficiency of handling objects in JavaScript.

// Example

const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj)); // ['a', 'b', 'c']
console.log(Object.values(obj)); // [1, 2, 3]
console.log(Object.entries(obj)); // [['a', 1], ['b', 2], ['c', 3]]
//------------------------------------------------------------------------------
// Asynchronous JavaScript

// expand_less
// Asynchronous JavaScript operations, such as callbacks, promises, and async/await, are essential for performing tasks without blocking the execution thread, allowing JavaScript to handle long-running tasks like network requests or file operations efficiently.

// Example

// Using async/await
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();