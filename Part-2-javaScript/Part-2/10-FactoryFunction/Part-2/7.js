// Student Activities
// Task 1:
// You are tasked with creating a factory function called animal that generates objects representing various animals. Each animal object should have properties to store the number of legs it has (noOfLegs) and whether it is vegetarian or not (vegetarian). Additionally, each animal object should have a method called eat and greet which, when called, outputs a message indicating that the animal is eating... and greetings...

// Your task is to implement the animal factory function according to the given specifications and demonstrate its usage by creating two animal objects. Ensure that the eat and greet method behaves as described.

// Example usage:
//------------------------------------------------------------------------
let animal1 = animal(4,true);
console.log(animal1)

let animal2 = animal(6,false);
console.log(animal2)
animal2.eat() // eating...


//------------------------------------------------------------------------
function animal(noOfLegs, vegetarian) {
    let obj = {};
    
  obj.noOfLegs = noOfLegs;
  obj.vegetarian = vegetarian;
  obj.eat = function(){
    console.log("eating.." )
  }
  obj.greet = function(){
    console.log("greetings.." )
  }
    
    return obj;
  }
  
  // example invocation
  let animal1 = animal(4,true);
  console.log(animal1)

  let animal2 = animal(6,false);
  console.log(animal2)
  animal2.eat() // eating...

//------------------------------------------------------------------------
//------------------------------------------------------------------------
//------------------------------------------------------------------------
// Task 2:
// You are tasked with creating a factory function called Bird that represents birds. The Bird factory function should copy properties and methods from the Animal factory function. Additionally, it should have a property called canFly to indicate whether the bird can fly or not.

// Your task is to implement the Bird factory function according to the given specifications and demonstrate its usage by creating a bird object. Ensure that the Bird object inherits properties and methods from the Animal factory function and contains the canFly property.

// Solution:
function animal(noOfLegs, vegetarian) {
    let obj = {};
    
  obj.noOfLegs = noOfLegs;
  obj.vegetarian = vegetarian;
  obj.eat = function(){
    console.log("eating.." )
  }
  obj.greet = function(){
    console.log("greetings.." )
  }
    
    return obj;
  }
 
 
  function Bird(noOfLegs, vegetarian, canFly) {
      let birdObj = Animal( noOfLegs, vegetarian);
      birdObj.canFly = canFly;
 
      return birdObj;
  }
 
  // example invocation
  let b1 =  Bird(2, true, false);
  console.log(b1);
 
 
//------------------------------------------------------------------------
// Conclusion
// factory functions in JavaScript, which are functions that return objects, making object creation more organized and reusable. We saw how to create a factory function called animal to generate objects representing animals with specific properties and methods. This approach simplifies object instantiation and promotes code maintainability. For further information, consult the MDN Web Docs on factory functions and JavaScript object-oriented programming.
