// Factory Function and Constructor Function

// expand_less
// Factory functions and constructor functions are two approaches to create multiple objects in JavaScript. A factory function is a regular function that returns a new object. A constructor function is more specialized and is used with the new keyword to instantiate new objects.

// Example of a Factory Function

function createUser(name, age) {
  return {
    name: name,
    age: age
  };
}
// Example of a Constructor Function

function User(name, age) {
  this.name = name;
  this.age = age;
}
const user1 = new User('Alice', 30);