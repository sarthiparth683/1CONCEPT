// React and ES6 Syntax

// expand_less
// The lecture begins with a focus on React and the importance of understanding ES6 syntax for efficient React development. ES6 introduces new syntax and features such as let and const for variable declarations, arrow functions, the rest and spread operators, destructuring, etc., which are essential for modern JavaScript development.

// Example

// Arrow Function
const add = (a, b) => a + b;

// Destructuring
const [first, second] = [1, 2];

// Rest Operator
const sum = (...numbers) => numbers.reduce((acc, current) => acc + current, 0);
//-----------------------------------------------------------------------
// Inheritance and Prototypal Inheritance in JavaScript

// expand_less
// Inheritance is a core concept discussed, emphasizing how JavaScript objects can inherit properties and methods from other objects. This is achieved through prototypal inheritance, where an object can directly reference another object as its prototype, allowing it to use its properties and methods as if they were its own.

// Example

function Parent(name) {
  this.name = name;
}

Parent.prototype.sayName = function() {
  console.log(this.name);
};

function Child(name) {
  Parent.call(this, name);
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

const child = new Child('John');
child.sayName(); // Logs 'John'
//------------------------------------------------------------------------
// Classes in JavaScript

// expand_less
// The concept of classes in JavaScript, introduced in ES6, represents templates for creating objects. Classes encapsulate data for the object and methods to manipulate that data. Utilizing the class keyword simplifies the declaration and instantiation of objects. The lecture explores creating classes, inheritance through the extends keyword, and using super to call the superclass constructor.

// Example

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // Call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rex');
dog.speak(); // Logs 'Rex barks.'