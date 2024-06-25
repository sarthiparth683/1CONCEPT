// // Concept: Prototype and Inheritance
// // What is the concept?
// // Prototypes in JavaScript serve as a mechanism for object inheritance. Every JavaScript object has a prototype property, which points to another object.
// // When properties or methods are accessed on an object, if they don't exist on the object itself, JavaScript looks for them on the object's prototype, and if not found there, on the prototype's prototype, forming a chain until it reaches the end.
// // An analogy could be a family tree where each person inherits certain traits from their parents. Similarly, in JavaScript, objects inherit properties and methods from their prototypes.
// //-----------------------------------------------------------
// // Classical Inheritance
// // What is a prototype chain?
// // When it comes to inheritance, Javascript only has one construct: objects. Each object has a private property (__proto__) that holds a link to another object (prototype) . That prototype object has a __proto__ of its own, and so on, until an object is reached with null as its prototype.
// // Nearly all objects in Javascript are instances of Object that sits on the top of a prototype chain.
// // Note: These days, even some browsers represents __proto__ as [[Prototype]].
// //------------------------------------------------------------------------ 
// let obj = {
//     name: "vivek",
//     sayHello: function () {
//       console.log("Hello");
//     },
//   };
//   console.log("obj-1",obj);
// //------------------------------------------------------------------------
// let arr = ["one", "two", "three"];
// // Again with our arr we see so many properties attached. Where are they stored? How do we see them as a property of our arr
// // The __proto__ property of Array.prototype is linked to Object.prototype and in that way, it has access to all of the properties & methods of Object.prototype
// // The __proto__ property of the arr object is linked to Array.prototype & in that way arr has access to all the properties and methods of Array.prototype and Object.prototype
// // We can verify this relationship by logging these :
// console.log(arr.__proto__ === Array.prototype); // true
// console.log(Array.prototype.__proto__ === Object.prototype); // true
// console.log(Object.prototype.__proto__ === null); // true
//--------------------------------------------------------------------------
// Now let's check the prototype chain of a function. consider the following simple function:
function fun() {};

// We'll see that our fun has access to several functions related properties & methods like call(), bind() , arguments, length etc... and also it has access to properties and methods of objects.
// This prototype chain must be obvious to you by now.
// This chain can be verified by running the following command:
console.log(fun.__proto__ === Function.prototype);
console.log(fun.__proto__() )
console.log(fun.__proto__.__proto__ == Object.prototype); // or
console.log(Function.prototype.__proto__ == Object.prototype);
//--------------------------------------------------------------------------
