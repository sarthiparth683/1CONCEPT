// ----------------------------------------------------------------------------------------------------------------------
// Difference between Array and Object in JavaScript

// | Features          | Array                                             | Object

// | Definition        | An ordered collection of values (elements)        | An unordered collection of key–value pairs                                             
// | Key Type          | Uses numeric (index-based) keys starting from `0` | Uses string (or symbol) keys                                                         
// | Use Case          | When you need to store list of items in order     | When you need to store data with properties or attributes                            
// | Syntax Example    | let arr = [10, 20, 30];                           | let obj = { name: "Alice", age: 25 };                                                
// | Access Elements   | Using index → arr[0]                              | Using property name → `obj.name` or `obj["name"]`                                    
// | Length Property   | length = `arr.length`                             | Doesn’t have `length`, but you can use `Object.keys(obj).length`                     
// | Iteration         | `for`, `for...of`, or `forEach()`                 | `for...in` or `Object.keys()`                                     
// | Order of Elements | Maintains order of elements                       | Does not guarantee order (though modern JS maintains insertion order for most cases) 
// | Typical Use       | Lists, collections, sequences                     | Data structures with named properties (like records or dictionaries)                     
// ----------------------------------------------------------------------------------------------------------------------------------------------------
// Arrays have a built-in length property:
// const arr = [0, 1, 2, 3, 4];
// console.log(arr.length); 

// Objects don't have a length property, but you can use Object.keys() to get an array of the object's keys and then check its length:
// const obj = { name: 'John', age: 30, city: 'NYC', hobby: "sports" };
// console.log(Object.keys(obj)); 
// console.log(Object.keys(obj).length); // to get length of object

// const obj = { name: 'John', age: 30, city: 'NYC', hobby: "sports" };
// console.log(Object.entries(obj).length); // Object.entries give both key and value pair so, if you need to work with both the property names and their values, Object.entries()
// ----------------------------------------------------------------------------------------------------------------------------------------------------
// In short:
//  Array → ordered list (use when order matters).
//  Object → key-value pair (use when you need labeled data).
// --------------------------------------------------------------------------------------------------------------------------------
// How do you check if a variable is an array ?
// Array.isArray([]); // true
// Array.isArray({}); // false
// --------------------------------------------------------------------------------------------------------------------------------