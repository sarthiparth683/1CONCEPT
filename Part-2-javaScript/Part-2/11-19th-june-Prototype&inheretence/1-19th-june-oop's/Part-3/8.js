// Object Chaining

// expand_less
// Object chaining is a technique that allows one to directly call a method on the returned object of another method. This can be useful for setting prototypes or merging objects in a concise manner.

// In the context of inheritance and prototypes, object chaining can refer to setting up the prototype chain to enable prototypal inheritance.

// Example

const obj1 = { prop1: 'value1' };
const obj2 = Object.create(obj1);
obj2.prop2 = 'value2';
console.log(obj2.prop1); // Access property from the prototype