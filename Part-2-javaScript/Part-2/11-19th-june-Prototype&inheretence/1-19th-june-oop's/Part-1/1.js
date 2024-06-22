// Lecture Summary

// CAP-11-Object-Oriented JavaScript: Prototypical Inheritance Basics
// The lecture focused on understanding the concepts of object creation, factory functions, constructor functions, ES6 classes, and prototypical inheritance in JavaScript. The session started with a discussion on previous topics followed by a deep dive into prototypical inheritance.

// Recap and Introduction to Prototypical Inheritance
// A quick review covered factory functions, constructor functions, and ES6 classes.
// Introduction to the concept of prototypical inheritance, a crucial aspect of JavaScript that allows objects to inherit properties and methods from other objects.
// Factory Functions and Object Creation
// Discussed how to create objects in bulk using factory functions, which involved creating an empty object, adding properties and methods, and returning the object.
// Highlighted the process of creating multiple instances from a factory function and accessing these properties and methods.
// Constructor Functions and ES6 Classes
// Explored converting factory functions into constructor functions by eliminating the manual creation of objects and the return statement. Utilized the new keyword to create instances.
// Transitioned into ES6 classes to streamline object creation further, demonstrating the use of the class keyword, constructor, and methods within the class.
// Prototypical Inheritance
// Delved into prototypical inheritance, explaining how properties and methods can be inherited from one object to another.
// Used real-life analogies (like family inheritance) to simplify the concept, demonstrating how to create a chain of inheritance using JavaScript objects.
// JavaScript's Prototype Chain
// Detailed exploration of JavaScript's prototype chain, illustrating the relationship between objects and their prototypes, leading up to the root object.
// Demonstrated the use of Object.create and __proto__ or Object.setPrototypeOf methods to establish inheritance between objects.
// Showed practical examples of creating an inheritance chain, where one object inherits properties from another.
// Practical Examples and Exercises
// Provided hands-on examples and exercises involving creating objects, applying prototypical inheritance, and accessing inherited properties.
// Summary
// Emphasized the importance of understanding prototypical inheritance for efficient JavaScript coding.
// Encouraged practice with examples provided during the lecture and several exercises focusing on creating objects, inheritance patterns, and leveraging prototypes in JavaScript.
// The session was interactive with audience participation, clarifying doubts, and demonstrating concepts live through coding examples.







//-------------------------------------------------------------------------
// Concept: Prototype and Inheritance
// Introduction
// In JavaScript, prototype and inheritance are fundamental concepts that underpin the object-oriented nature of the language. Understanding how prototypes work and how inheritance is implemented through prototypes is crucial for writing efficient and maintainable JavaScript code.

// Detailed Explanation
// What is the concept?
// Prototypes in JavaScript serve as a mechanism for object inheritance. Every JavaScript object has a prototype property, which points to another object. When properties or methods are accessed on an object, if they don't exist on the object itself, JavaScript looks for them on the object's prototype, and if not found there, on the prototype's prototype, forming a chain until it reaches the end.
// Why is it useful?
// Prototypes allow for code reuse and enable a form of inheritance in JavaScript. This helps in creating more modular and scalable codebases. Understanding prototypes also facilitates better memory management and performance optimization.
// Real-world examples or analogies
// Think of prototypes as a blueprint for creating objects. Just like how a car model's blueprint can be used to manufacture multiple cars with similar features, prototypes serve as blueprints for creating objects with shared properties and methods.
// An analogy could be a family tree where each person inherits certain traits from their parents. Similarly, in JavaScript, objects inherit properties and methods from their prototypes.
// JavaScript does not have a true class. It uses prototypes, is just an object. These objects are automatically linked together for us by JavaScript engines so that we can access properties and methods.

// Classical Inheritance

//----------------------------------------------------
// What is a prototype chain?
// When it comes to inheritance, Javascript only has one construct: objects. Each object has a private property (__proto__) that holds a link to another object (prototype) . That prototype object has a __proto__ of its own, and so on, until an object is reached with null as its prototype.

// Nearly all objects in Javascript are instances of Object that sits on the top of a prototype chain.

// The ECMAScript likes to represent this hidden property as [[Prototype]] but many browsers like to represent it as __proto__. For our discussion we will be using __proto__ notiation to refer to the private property if the object responsible for chaining.

// Note: These days, even some browsers represents __proto__ as [[Prototype]].

let obj = {
  name: "vivek",
  sayHello: function () {
    console.log("Hello");
  },
};

//////////////////////////////////////////////////////////////////

// In the browser console, if you try, you can of course get access to name and sayHello by typing . after obj.

// But along with the two properties that we have defined, we also see a lot of other properties like hasOwnProperty, toString() and many more. Where are they stored & how do we get access to them in our obj

// They are stored in the built in Object constructor function. Object constructor function has a property called prototype . Object.prototype is a object. All these extra properties that we see our obj are actually properties of Object. prototype.

// Our obj is linked to Object.prototype via the hidden property called __proto__

// The way developers communicate the above chain is as follows:

// communication: Object() is the prototype of obj

// technical: obj's proto is linked to Object's prototype

// We can validate if obj.__proto__ is equal to Object.prototype by logging obj.__proto__ === Object.prototype

// Let's move one step ahead with the example of an array. Consider the following array

// let arr = ["one", "two", "three"];
// Again with our arr we see so many properties attached. Where are they stored? How do we see them as a property of our arr

////////--------------------------------------------------------------------////////


// The __proto__ property of Array.prototype is linked to Object.prototype and in that way, it has access to all of the properties & methods of Object.prototype

// The __proto__ property of the arr object is linked to Array.prototype & in that way arr has access to all the properties and methods of Array.prototype and Object.prototype

// We can verify this relationship by logging these :

console.log(arr.__proto__ === Array.prototype); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true
Now let's check the prototype chain of a function. consider the following simple function:

function fun() {}
// We'll see that our fun has access to several functions related properties & methods like call(), bind() , arguments, length etc... and also it has access to properties and methods of objects.

// This prototype chain must be obvious to you by now.

// This chain can be verified by running the following command:

console.log(fun.__proto__ === Function.prototype);
console.log(fun.__proto__.__proto__ == Object.prototype); // or
console.log(Function.prototype.__proto__ == Object.prototype);

///-------------------------------------------------///

// Code Implementation | Examples
// Creating our own Prototype chains
// using Object.setPrototypeOf()

let obj = {
  name: "vivek",
  sayHello: function () {
    console.log("Hello");
  },
};

let obj2 = {
  salary: 100000,
  work: function () {
    console.log("Working");
  },
};

Object.setPrototypeOf(obj2, obj);

obj2.sayHello();

console.log(obj2);

////////---------------------------------
The Object.setPrototypeOf() method sets the prototype (i.e., the internal __proto__ property) of a specified object to another object

Documentation:
Documentation:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf

///----------------------------------------------
// obj2.__proto__ === obj; // true
// The same task can also be performed

using Object.create()
let obj = {
  name: "vivek",
  sayHello: function () {
    console.log("Hello");
  },
};

let obj2 = Object.create(obj); // The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

obj2.salary = 100000; // adding as main property
obj2.work = function () {
  // adding as main method
  console.log("Working");
};
console.log(obj2);

using Object.setPrototypeOf
let obj = {
  name: "vivek",
  sayHello: function () {
    console.log("Hello");
  },
};
/////------------
let obj2 = {};

obj2.salary = 100000;
obj2.work = function () {
  console.log("Working");
};

Object.setPrototypeOf(obj2, obj); // Object.setPrototypeOf() sets up a prototype chain between the source object and the target object.

console.log(obj2);
obj2.sayHello();

//////---------------------
Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

// Object.setPtototypeOf() & Object.create() does create a prototype chain.

//----------------------------------

// Student Activities
// You are tasked with designing an employee management system in JavaScript. Your goal is to create a hierarchy of employee objects representing different roles within the organization, with shared properties and methods.
// Using the Object.create() method:
// Define an employee object with a method sayHello() that logs "Hello". Create a manager object that inherits from employee and has additional properties position (set to "Manager"), salary (set to 100000), and a method manageTeam() that logs "Managing team". Display the manager object to verify its properties and methods.

Solution:
// Using Object.create()

let employee = {
  sayHello: function () {
    console.log("Hello");
  },
};

let manager = Object.create(employee);
manager.position = "Manager";
manager.salary = 100000;
manager.manageTeam = function () {
  console.log("Managing team");
};

console.log(manager);

/////////----------------------------------

// Using the Object.setPrototypeOf() method:
// Define an employee object with a method sayHello() that logs "Hello". Create a manager object with properties position (set to "Manager"), salary (set to 100000), and a method manageTeam() that logs "Managing team", inheriting from the employee object. Display the manager object to verify its properties and methods, and ensure it inherits the sayHello() method.

Solution:
// Define employee object with sayHello() method
let employee = {
  sayHello: function () {
    console.log("Hello");
  },
};

// Create manager object inheriting from employee
let manager = Object.create(employee);

// Add properties to manager object
manager.position = "Manager";
manager.salary = 100000;
manager.manageTeam = function () {
  console.log("Managing team");
};

// Display manager object
console.log(manager);

// Verify manager inherits the sayHello() method
manager.sayHello();

// Conclusion
// Understanding prototypes and inheritance is essential for mastering JavaScript's object-oriented features. Prototypes enable code reuse and inheritance, leading to more modular and maintainable code. By grasping these concepts, developers can build scalable and efficient applications.