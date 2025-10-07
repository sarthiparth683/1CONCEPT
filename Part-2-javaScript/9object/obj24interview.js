// ----------------------------------------------------------------------------------------------------------------------
// ### Difference between Array and Object in JavaScript

// | Features          | Array                                                | Object    

// | Definition        | An ordered collection of values (elements)            | An unordered collection of key–value pairs                                             |
// | Key Type          | Uses numeric (index-based) keys starting from `0`    | Uses string (or symbol) keys                                                         |
// | Use Case          | When you need to store list of items in order        | When you need to store data with properties or attributes                            |
// | Syntax Example    | `let arr = [10, 20, 30];`                                | `let obj = { name: "Alice", age: 25 };`                                                  |
// | Access Elements   | Using index → `arr[0]`                               | Using property name → `obj.name` or `obj["name"]`                                    |
// | Length Property   | Has a built-in `length` property → `arr.length`          | Doesn’t have `length`, but you can use `Object.keys(obj).length`                         |
// | Iteration         | Commonly iterated with `for`, `for...of`, or `forEach()` | Commonly iterated with `for...in` or `Object.keys()`                                     |
// | Order of Elements | Maintains order of elements                          | Does not guarantee order (though modern JS maintains insertion order for most cases) |
// | Typical Use       | Lists, collections, sequences                            | Data structures with named properties (like records or dictionaries)                     |

// ----------------------------------------------------------------------------------------------------------------------------------------------------

// ### In short:

//  Array → ordered list (use when order matters).
//  Object → key-value pair (use when you need labeled data).
// --------------------------------------------------------------------------------------------------------------------------------