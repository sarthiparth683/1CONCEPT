// Concept: Factory Function in JavaScript
// Introduction
// A factory function is a function that returns an object when called. It is a way to create and initialize objects by encapsulating the object creation process within a function. Factory functions are useful when you want to create multiple instances of objects with similar properties or when you want to abstract the object creation process.
// Detailed Explanation
// What is the concept? - A factory function is a function that encapsulates the process of creating and initializing objects. It returns a new object with specified properties and methods.

// Why is it useful? - Factory functions allow developers to create objects with a concise and readable syntax. They are particularly useful when there is a need for multiple instances of objects with similar characteristics.

// Real-world examples or analogies - Think of a factory function as an assembly line in a manufacturing plant that produces similar products with consistent features.

// Analogy -

// As our application grows, we need different ways to create Objects. How to create multiple accounts? for example.

// Let’s say a bank has to create accounts of 90 Lakh customers.

// Is it feasible to keep writing like this ? Is is scalable ?
   // grouping related variables
   let account1 = {
    accountNumber : 12092903490,
    name: 'Vivek',
    type: 'Simple Saving',
    balance: 100000,
    active: true,
  }
  let account2 = {
    accountNumber : 120923208900,
    name: 'Samuel',
    type: 'Current',
    balance: 300000,
    active: true,
  }
  let account3 = {
    accountNumber : 1209382692610,
    name: 'Aslam',
    type: 'Current',
    balance: 150000,
    active: true,
  }
//   The answer is no..

// So what could be done ?

// You will basically create a process - a system - a function - that would take in some arguments and give you a new account!!
function account(accountNumber,name,type,balance,active){
    let accountDetails = {};
  
    accountDetails.accountNumber = accountNumber;
    accountDetails.name = name;
    accountDetails.type = type;
    accountDetails.balance = balance;
    accountDetails.active = active;
  
      accountDetails.printAccountDetails = function () {
      console.log('Name: ', this.name, 'Type: ', this.type, 'Active: ', this.active, 'Bal: ', this.balance);
    }
  
    return accountDetails;
  }
  
  let vivekAccount = account(1290337843, 'Vivek', 'Savings', 90000, true)
  
  console.log(vivekAccount) 
  /*
  {
    accountNumber: 1290337843,
    name: 'Vivek',
    type: 'Savings',
    balance: 90000,
    active: true
  }
  */
//   Another example:

// What if you need to draw this exact same drawing in 1,00,000 documents?

// Untitled

// You would probably create a system - a process - a stamp maybe?

// Untitled

// If we need to create similar kind of a thing in quantity - its good to have a system - a structure - a process

// Can you think of more real world examples?

// Molds (sancha) for clay toys / utensils
// Code Implementation | Examples
// Factory Function Example 1

// Design a user management system in JavaScript that utilizes a User factory function to create user instances. Each user instance should contain attributes for name and age. Additionally, a method printHello for printing a greeting message.

function User(name, age){
    let userObj = {};

    userObj.name = name;
    userObj.age = age;

    userObj.printHello = function(){
      console.log("Hello...")
    }

  return userObj
  }

  let user1 = User("pavan", 26);
  let user2 = User("Roshan", 30);

  console.log(user1);
  user1.printHello();
  console.log(user2);
//-------------------------------------------------------------------
// Factory Function Example 2

// create a factory function Student that copy properties and methods from the User factory function and adds an additional property batchno.
function User(name, age) {
    let userObj = {};
    userObj.name = name;
    userObj.age = age;

    userObj.printHello = function() {
        console.log("Hello...");
    };

    return userObj;
}

function Student(name, age, batchno) {
    let studentObj = User(name, age); // get properties and methods from User

    studentObj.batchno = batchno; // Add additional property batchno

    return studentObj;
}

let student1 = Student("Pavan", 26, "BatchA");
let student2 = Student("Roshan", 30, "BatchB");

console.log(student1);
student1.printHello(); //  method from User
console.log(student2);


//-------------------------------------------------------------------
// Student Activities
// Task 1:
// You are tasked with creating a factory function called animal that generates objects representing various animals. Each animal object should have properties to store the number of legs it has (noOfLegs) and whether it is vegetarian or not (vegetarian). Additionally, each animal object should have a method called eat and greet which, when called, outputs a message indicating that the animal is eating... and greetings...

// Your task is to implement the animal factory function according to the given specifications and demonstrate its usage by creating two animal objects. Ensure that the eat and greet method behaves as described.

// Example usage:
Student Activities
Task 1:
You are tasked with creating a factory function called animal that generates objects representing various animals. Each animal object should have properties to store the number of legs it has (noOfLegs) and whether it is vegetarian or not (vegetarian). Additionally, each animal object should have a method called eat and greet which, when called, outputs a message indicating that the animal is eating... and greetings...

Your task is to implement the animal factory function according to the given specifications and demonstrate its usage by creating two animal objects. Ensure that the eat and greet method behaves as described.

Example usage:

    let animal1 = animal(4,true);
    console.log(animal1)

    let animal2 = animal(6,false);
    console.log(animal2)
    animal2.eat() // eating...

Solution
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
  //-------------------------------------------------------------------
  Task 2:
You are tasked with creating a factory function called Bird that represents birds. The Bird factory function should copy properties and methods from the Animal factory function. Additionally, it should have a property called canFly to indicate whether the bird can fly or not.

Your task is to implement the Bird factory function according to the given specifications and demonstrate its usage by creating a bird object. Ensure that the Bird object inherits properties and methods from the Animal factory function and contains the canFly property.

Solution:
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
//  Conclusion
// factory functions in JavaScript, which are functions that return objects, making object creation more organized and reusable. We saw how to create a factory function called animal to generate objects representing animals with specific properties and methods. This approach simplifies object instantiation and promotes code maintainability. For further information, consult the MDN Web Docs on factory functions and JavaScript object-oriented programming.