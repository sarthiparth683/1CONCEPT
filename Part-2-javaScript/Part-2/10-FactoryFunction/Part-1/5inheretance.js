//-----------------------------------------------------------------------------------------
// Inheritance in JavaScript
// Inheritance in JavaScript can be achieved through prototype-based programming. Every object in JavaScript has a property named prototype where you can add methods and properties to enable sharing across instances.
function Person(name) {
    this.name = name;
  }
  Person.prototype.greet = function () {
    console.log('Hello, ' + this.name);
  };
  const person1 = new Person('John');
  person1.greet(); // Output: Hello, John
  // This example shows how methods can be added to the prototype of a constructor function, allowing all instances of Person to share the greet method.
  //----------------------------------------------------------------------------------------------