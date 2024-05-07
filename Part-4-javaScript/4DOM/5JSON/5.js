// Working with JSON in JavaScript
// expand_less
// JSON (JavaScript Object Notation) is a lightweight data interchange format. It is easy for humans to read and write and for machines to parse and generate. This topic covered the conversion of JavaScript objects to JSON strings and vice versa, which is crucial for storing objects in Local Storage or exchanging data between a client and server.

// Examples

// Converting an Object to JSON
var jsonObj = JSON.stringify({ name: 'Raj', age: 24 });
// Converting JSON to an Object
var obj = JSON.parse(jsonObj);