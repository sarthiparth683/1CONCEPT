// Object.create Method

// expand_less
// The Object.create method creates a new object, using an existing object as the prototype of the newly created object. This method is very useful for implementing prototypal inheritance without the use of constructor functions or classes.

// Example

const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);
me.name = 'Alice';
me.isHuman = true;
me.printIntroduction();