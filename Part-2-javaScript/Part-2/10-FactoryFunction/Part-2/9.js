//------------------------------------------------------------------------
// Student Activities
// Task 1:

// You are tasked with creating a constructor function called Animal that represents various animals. The Animal constructor function should have properties to store the number of legs the animal has (noOfLegs) and whether it is vegetarian or not (vegetarian). Additionally, each animal object should have a method called eat and greet which, when called, outputs a message indicating that the animal is eating and displays the number of legs it has.

// Your task is to implement the Animal constructor function according to the given specifications and demonstrate its usage by creating two animal objects using the new keyword. Ensure that the eat method behaves as described.

// Example usage:
//------------------------------------------------------------------------
let animal1 = new Animal(4, true);
console.log(animal1);

let animal2 = new Animal(6, false);
console.log(animal2);
animal2.eat(); // eating...

// Solution
function Animal(noOfLegs, vegetarian) {
    this.noOfLegs = noOfLegs;
    this.vegetarian = vegetarian;
    this.eat = function() {
        console.log("eating..", this.noOfLegs);
    };
    this.greet = function(){
    console.log("greetings.." )
  }
}

// Example invocation
let animal1 = new Animal(4, true);
console.log(animal1);

let animal2 = new Animal(6, false);
console.log(animal2);
animal2.eat(); // eating...
animal2.greet();
//------------------------------------------------------------------------
//------------------------------------------------------------------------
// Task 2:

// You are tasked with creating a constructor function called Bird that represents birds. The Bird constructor function should inherit properties and methods from the Animal constructor function. Additionally, it should have a property called canFly to indicate whether the bird can fly or not.

// Your task is to implement the Bird constructor function according to the given specifications and demonstrate its usage by creating a bird object. Ensure that the Bird object inherits properties and methods from the Animal constructor function and contains the canFly property.

// Solution:
function Animal(noOfLegs, vegetarian) {
    this.noOfLegs = noOfLegs;
    this.vegetarian = vegetarian;
    this.eat = function() {
        console.log("eating..", this.noOfLegs);
    };
    this.greet = function(){
    console.log("greetings.." )
  }
 }
 
 
  function Bird(noOfLegs, vegetarian, canFly) {
      Animal.call(this, noOfLegs, vegetarian);
      this.canFly = canFly;
  }
 
  // example invocation
  let b1 = new Bird(2, true, false);
  console.log(b1);
 
 
//------------------------------------------------------------------------
// Conclusion
// The concept of constructor functions in JavaScript, which are functions used to create and initialize objects. We saw how to create a constructor function called Animal to generate objects representing animals with specific properties and methods. This approach simplifies object instantiation and promotes code maintainability. Constructor functions are an essential aspect of object-oriented programming in JavaScript.
//------------------------------------------------------------------------
