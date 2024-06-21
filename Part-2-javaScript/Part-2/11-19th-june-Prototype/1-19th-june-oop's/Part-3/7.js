// Prototype Chain and Inheritance

// expand_less
// The prototype chain is used in JavaScript to build the relationship between objects, where one object can inherit from another. When trying to access a property on an object, JavaScript will try to find this property on the object itself. If it doesn't find it, it will look up the prototype chain until it finds it (or reaches the end of the chain).

// This mechanism underpins JavaScript's prototypal inheritance model, allowing objects to extend and build upon the features of other objects.

// Example

function Grandparent() {
  this.grandparentName = 'Grandma';
}

function Parent() {}
Parent.prototype = Object.create(Grandparent.prototype);

const child = new Parent();
console.log(child.grandparentName); // Logs 'Grandma'