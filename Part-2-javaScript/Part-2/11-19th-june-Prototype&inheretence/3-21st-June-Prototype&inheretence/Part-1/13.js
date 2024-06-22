// Concept: Prototype and Inheritance   
let arr = ["one", "two", "three"];
console.log(arr.__proto__ === Array.prototype); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true
function fun() {}
console.log(fun.__proto__ === Function.prototype);
console.log(fun.__proto__.__proto__ == Object.prototype); // or
console.log(Function.prototype.__proto__ == Object.prototype);
//-------------------------------------------------------------------------------
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
//---------------------------------------------------------------------------  
// using Object.create()
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
//----------------------------------------------------------------------------
// using Object.setPrototypeOf
let obj = {
  name: "vivek",
  sayHello: function () {
    console.log("Hello");
  },
};

let obj2 = {};

obj2.salary = 100000;
obj2.work = function () {
  console.log("Working");
};

Object.setPrototypeOf(obj2, obj); // Object.setPrototypeOf() sets up a prototype chain between the source object and the target object.

console.log(obj2);
obj2.sayHello();
//------------------------------------------------------------------------
