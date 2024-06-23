//---------------------------------------------------------------------------------------
// Constructor Functions in JavaScript
// Constructor functions are used with the new keyword to create new objects. The function name typically starts with a capital letter. Constructors initialize objects and can be used to set object properties and methods.
// Example
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log('Hello, ' + this.name);
    };
};
const person1 = new Person('John', 30);
const person2 = new Person('Jane', 25);
console.log(person1);
console.log(person2);
// This code snippet illustrates how to define and use a constructor function to create new person objects.
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------
// Concept: Constructor Function in JavaScript
// Introduction
// A constructor function is a special type of function in JavaScript that is used to create and initialize objects. It serves as a blueprint for creating multiple instances of objects with similar properties and methods. Constructor functions are commonly used in object-oriented programming to define and instantiate objects.
//--------------------------------------------------------------------------------------------
// Detailed Explanation
// What is the concept? - A constructor function is a function used to create and initialize objects. It is called with the new keyword to create new instances of objects based on its blueprint.
// Why is it useful? - Constructor functions provide a convenient way to create multiple instances of objects with consistent properties and behaviors. They encapsulate object creation logic and promote code reusability.
// Real-world examples or analogies - Think of a constructor function as a mold in a factory that is used to create multiple copies of a product with the same design.
//------------------------------------------------------------------------
// Code Implementation | Examples
// Constructor Function Example 1
function User(name, age) {
    this.name = name;
    this.age = age;
    this.printHello = function () {
      console.log("Hello...")
    };
    this.printInfo = function (city) {
      console.log(`Hi my name is ${this.name} and I am from ${city}`)
    }
  }
  
  let user1 = new User("Alice", 20);
  let user2 = new User("Bob", 22);
  
  console.log(user1);
  user1.printHello();
  console.log(user2);
  user2.printInfo("Pune");
  
  
  //------------------------------------------------------------------------
  // Constructor Function Example 2
  
  // create a Constructor function Student that copy properties and methods from the User Constructor function and adds an additional property batchno.
  function User(name, age) {
    this.name = name;
    this.age = age;
  }
  
  User.prototype.printHello = function () {
    console.log("Hello...");
  };
  
  function Student(name, age, batchno) {
    User.call(this, name, age); // Copy properties from User
  
    this.batchno = batchno; // Add additional property batchno
  }
  
  // copy methods from User
  Student.prototype = Object.create(User.prototype);
  Student.prototype.constructor = Student;
  
  let student1 = new Student("Pavan", 26, "BatchA");
  let student2 = new Student("Roshan", 30, "BatchB");
  
  console.log(student1);
  student1.printHello(); //  method from User
  console.log(student2);
  //------------------------------------------------------------------------
  
  