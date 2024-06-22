// Student Activities
// Task 1:Factory Function
// You are tasked with creating a factory function called animal that generates objects representing various animals. Each animal object should have properties to store the number of legs it has (noOfLegs) and whether it is vegetarian or not (vegetarian). Additionally, each animal object should have a method called eat and greet which, when called, outputs a message indicating that the animal is eating... and greetings...
// Your task is to implement the animal factory function according to the given specifications and demonstrate its usage by creating two animal objects. Ensure that the eat and greet method behaves as described.
function animal(noOfLegs, vegetarian) {
  let obj = {};
  obj.noOfLegs = noOfLegs;
  obj.vegetarian = vegetarian;
  obj.eat = function () {
    console.log("eating..")
  }
  obj.greet = function () {
    console.log("greetings..")
  }
  return obj;
};
let animal1 = animal(4, true);
console.log("Animal-1", animal1);
animal1.eat();
animal1.greet();

let animal2 = animal(6, false);
console.log("Animal-2", animal2)
animal2.eat();
animal2.greet();
//-----------------------------------------------------------------------------------------
// Task 2:Factory Function
// You are tasked with creating a factory function called Bird that represents birds. The Bird factory function should copy properties and methods from the Animal factory function. Additionally, it should have a property called canFly to indicate whether the bird can fly or not.
// Your task is to implement the Bird factory function according to the given specifications and demonstrate its usage by creating a bird object. Ensure that the Bird object inherits properties and methods from the Animal factory function and contains the canFly property.
function Bird(name, noOfLegs, vegetarian, canFly, beak) {
  let birdObj = animal(noOfLegs, vegetarian);  // here animal is taken form above
  birdObj.name = name;
  birdObj.canFly = canFly;
  birdObj.beakType = beak;
  return birdObj;
};
let b1 = Bird("Falcon", 2, true, false, "long");
let b2 = Bird("vulture", 8, true, true, "strong");
let b3 = Bird("Eagle", 4, false, true, "Fly High");
console.log("Bird-1", b1);
console.log("Bird-2", b2);
console.log("Bird-3", b3);
//----------------------------------------------------------------------------------------
// Conclusion
// factory functions in JavaScript, which are functions that return objects, making object creation more organized and reusable. We saw how to create a factory function called animal to generate objects representing animals with specific properties and methods. This approach simplifies object instantiation and promotes code maintainability. For further information, consult the MDN Web Docs on factory functions and JavaScript object-oriented programming.
