// Prototypal Inheritance

// expand_less
// Prototypal inheritance is a feature in JavaScript by which an object can inherit properties from another object. This is done via the prototype chain. Every object in JavaScript has a property called prototype, where you can add methods and properties that are shared among all instances of that object.

// Example

function User(name) {
  this.name = name;
}
User.prototype.printName = function() {
  console.log(this.name);
};
const user1 = new User('Charlie');
user1.printName(); // Logs 'Charlie'