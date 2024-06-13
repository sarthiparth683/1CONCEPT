//-------------------------------------------------------------
// The this keyword:
// Introduction
// The this keyword in JavaScript is a fundamental concept that determines the context in which a function is executed. Understanding how this behaves is crucial for writing efficient and maintainable code. It plays a significant role in JavaScript programming and is essential for developers to grasp.
//-------------------------------------------------------------
// Detailed Explanation
// What is the concept?
// The this keyword in JavaScript refers to the object that owns the current code being executed. Its value is determined by how a function is called. Understanding the behavior of this is essential for accessing object properties, methods, and maintaining context within functions.

// Why is it useful?
// The this keyword provides a way to access and manipulate object properties and methods dynamically. It allows for code reusability and enables the creation of flexible and modular code structures. Understanding this is crucial for writing object-oriented JavaScript code and building scalable applications.
//-------------------------------------------------------------
// Code Implementation | Examples
// The this keyword :

// Global Scope :
// In global scope, this refers to global object;
console.log(this); // Window
// b. Even in strict mode. in global scope, this refers to window object;

// "use strict";
console.log(this);
//-------------------------------------------------------------
// Strict Mode

// Strict Mode :
// The "use strict" flag does a number of things:

// Helps prevent accidentally setting global variables (meaning every variable needs a var declaration)
"use strict";
age = 10;
console.log(age); // Uncaught ReferenceError: age is not defined
// Ensures that function arguments are named uniquely.

// "use strict";
function printHello(a, b, c, a) {
  console.log(a, b, c, a);
}

printHello(1, 2, 3, 4); // throws an error since duplicate parameter
// Basically Strict mode primarily enforces a stricter set of rules for writing JavaScript code to catch common mistakes and prevent potentially problematic behavior. Strict mode - JavaScript | MDN In my opinion, "use strict" wherever possible. It will cause your Javascript to throw errors instead of silently trying to remedy what could be a serious problem! Please be aware, however, that "use strict" has not yet been fully implemented in all browsers. By all means, take advantage of it, but don't rely heavily on it just yet!
//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------
// In Functions :

// If a function is called without an object, "this" will refer to the global object (usually "window" in a web browser).
function test() {
  console.log(this); // Window
}

test();
// b. If a function is called as a method of an object, "this" points to the object itself.

const person = {
  name: "John",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

person.sayHello(); // This will print "Hello, John!" because "this" refers to the "person" object.
// c. In a function, in strict mode, this is undefined.

// "use strict";
function test() {
  console.log(this); // undefined
}

test();
//-------------------------------------------------------------
// Some observations ( Quick Review )

// this will always point to an object.
// this is a pointer that we use in javascript to represent owner object.
// this is flexible; value of this changes
// this can point to different owner objects through few methods that we are going to learn ( call, apply, bind ).
// Call, Apply & Bind Methods :

// All JavaScript functions has access to some very special methods which we can use to control where ‘this’ should refer. Such methods are call(), bind() & apply().
//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------