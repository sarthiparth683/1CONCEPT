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
  console.log("obj-1",obj);
//------------------------------------------------------------------------ 
// In the browser console, if you try, you can of course get access to name and sayHello by typing . after obj.

// But along with the two properties that we have defined, we also see a lot of other properties like hasOwnProperty, toString() and many more. Where are they stored & how do we get access to them in our obj

// They are stored in the built in Object constructor function. Object constructor function has a property called prototype . Object.prototype is a object. All these extra properties that we see our obj are actually properties of Object. prototype.

// Our obj is linked to Object.prototype via the hidden property called __proto__

// The way developers communicate the above chain is as follows:

// communication: Object() is the prototype of obj

// technical: obj's proto is linked to Object's prototype

// We can validate if obj.__proto__ is equal to Object.prototype by logging obj.__proto__ === Object.prototype

// Let's move one step ahead with the example of an array. Consider the following array 
//------------------------------------------------------------------
let arr = ["one", "two", "three"];
// Again with our arr we see so many properties attached. Where are they stored? How do we see them as a property of our arr
// The __proto__ property of Array.prototype is linked to Object.prototype and in that way, it has access to all of the properties & methods of Object.prototype

// The __proto__ property of the arr object is linked to Array.prototype & in that way arr has access to all the properties and methods of Array.prototype and Object.prototype

// We can verify this relationship by logging these :
console.log(arr.__proto__ === Array.prototype); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true
//--------------------------------------------------------------------------
// Now let's check the prototype chain of a function. consider the following simple function:

function fun() {}
// We'll see that our fun has access to several functions related properties & methods like call(), bind() , arguments, length etc... and also it has access to properties and methods of objects.
// This prototype chain must be obvious to you by now.

// This chain can be verified by running the following command:
console.log(fun.__proto__ === Function.prototype);
console.log(fun.__proto__.__proto__ == Object.prototype); // or
console.log(Function.prototype.__proto__ == Object.prototype);
