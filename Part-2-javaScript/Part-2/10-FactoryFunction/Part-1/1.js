// Introduction to JavaScript Objects

// expand_less
// In JavaScript, objects are a fundamental data structure used to store collections of data and more complex entities. Objects can be created using object literals, constructors, or the Object.create method.

// Example

const person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log('Hello, ' + this.name);
  }
};
// This example demonstrates creating an object with properties (name and age) and a method (greet).
//--------------------------------------------------------------------
// Factory Functions in JavaScript

// expand_less
// Factory functions are functions that create objects and return them. They are useful for creating multiple instances of similar objects.

// Example

function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function() {
      console.log('Hello, ' + this.name);
    }
  };
}
const person1 = createPerson('John', 30);
const person2 = createPerson('Jane', 25);
// This example showcases a factory function createPerson that creates and returns new person objects.
//--------------------------------------------------------------------
// Constructor Functions in JavaScript

// expand_less
// Constructor functions are used with the new keyword to create new objects. The function name typically starts with a capital letter. Constructors initialize objects and can be used to set object properties and methods.

// Example

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log('Hello, ' + this.name);
  };
}
const person1 = new Person('John', 30);
const person2 = new Person('Jane', 25);
// This code snippet illustrates how to define and use a constructor function to create new person objects.
//--------------------------------------------------------------------
// The `this` Keyword

// expand_less
// The this keyword in JavaScript refers to the object it belongs to. It has different values depending on where it is used: in a method, this refers to the owner object; alone, this refers to the global object; in a function, this refers to the global object; in a function (in strict mode), this is undefined; in an event, this refers to the element that received the event.

// Example

const person = {
  name: 'John',
  greet: function() {
    console.log('Hello, ' + this.name);
  }
};
person.greet(); // Output: Hello, John
// In this example, this refers to the person object that greet function is a method of.
//--------------------------------------------------------------------
// Inheritance in JavaScript

// expand_less
// Inheritance in JavaScript can be achieved through prototype-based programming. Every object in JavaScript has a property named prototype where you can add methods and properties to enable sharing across instances.

// Example

function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log('Hello, ' + this.name);
};
const person1 = new Person('John');
person1.greet(); // Output: Hello, John
// This example shows how methods can be added to the prototype of a constructor function, allowing all instances of Person to share the greet method.
//--------------------------------------------------------------------
// Call, Apply, and Bind Methods

// expand_less
// The call, apply, and bind methods in JavaScript are used to control the invocation of functions. call and apply invoke the function immediately, whereas bind returns a new function that, when later executed, has its this keyword set to the provided value.

// Example with call

function greet() {
  console.log('Hello, ' + this.name);
}
const person = { name: 'John' };
greet.call(person); // Output: Hello, John
Example with apply

function greet() {
  console.log('Hello, ' + this.name);
}
greet.apply(person); // Similarly invokes `greet` with `person` as `this`
Example with bind

const boundGreet = greet.bind(person);
boundGreet(); // Output: Hello, John
//--------------------------------------------------------------------
// Arrow Functions and `this`

// expand_less
// Arrow functions do not have their own this value. Instead, this is lexically bound, meaning it uses this from the surrounding code block.

// Example

const person = {
  name: 'John',
  greet: () => {
    console.log('Hello, ' + this.name); // `this` is not bound to `person`
  }
};
person.greet(); // Output: Hello, 
// In this example, person.greet() does not have access to person's name property because arrow functions do not bind their own this.
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------