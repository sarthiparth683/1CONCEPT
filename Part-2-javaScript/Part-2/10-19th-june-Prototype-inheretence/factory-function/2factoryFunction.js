// Factory Functions in JavaScript
// Factory functions are functions that create objects and return them. They are useful for creating multiple instances of similar objects.
// Example
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function () {
            console.log('Hello, ' + this.name);
        }
    };
}
const person1 = createPerson('John', 30);
const person2 = createPerson('Jane', 25);
let person3 = createPerson("parth", 89);
let person4 = createPerson("tim", 11);
let person5 = createPerson("vivek", 78);
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person5);
// This example showcases a factory function createPerson that creates and returns new person objects.
//--------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------
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
//-------------------------------------------------------------------------
// grouping related variables
let account1 = {
    accountNumber: 12092903490,
    name: 'Vivek',
    type: 'Simple Saving',
    balance: 100000,
    active: true,
  }
  let account2 = {
    accountNumber: 120923208900,
    name: 'Samuel',
    type: 'Current',
    balance: 300000,
    active: true,
  }
  let account3 = {
    accountNumber: 1209382692610,
    name: 'Aslam',
    type: 'Current',
    balance: 150000,
    active: true,
  }
  //-------------------------------------------------------------------------
  // The answer is no..
  
  // So what could be done ?
  
  // You will basically create a process - a system - a function - that would take in some arguments and give you a new account!!
  //-------------------------------------------------------------------------
  function account(accountNumber, name, type, balance, active) {
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
  
  //-------------------------------------------------------------------------
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

//-------------------------------------------------------------------------
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
//-------------------------------------------------------------------------