// Inheritance using ES6 class
// Introduction
// Inheritance is a fundamental concept in object-oriented programming (OOP) where a class (subclass) can inherit properties and methods from another class (superclass). In ES6, the introduction of the class syntax made implementing inheritance more intuitive and concise, aligning JavaScript with traditional OOP languages like Java and C++.

// Detailed Explanation
// What is Inheritance using ES6 Class?
// Inheritance in ES6 involves creating a subclass that inherits properties and methods from a superclass. This allows for code reuse and promotes a hierarchical structure in programming.

// Why is it useful?
// Inheritance facilitates code organization, promotes code reuse, and simplifies maintenance. It allows for creating specialized classes based on existing ones, leading to more efficient and scalable codebases.

// Real-world examples or analogies
// Think of a hierarchy in an organization where employees inherit certain attributes(like salary structure, benefits) from their respective departments.Similarly, in programming, a subclass inherits attributes and behaviors from its superclass.

// Code Implementation | Examples
// Quickly solve using constructor function:
// Person
//   name
//   age
//   increaseAge() // will increase the age by 1
//   sayName() // return 'my name is <name>'

// Employee extends Person
//   salary
//   increaseSalary(amt)
//   decreaseSalary(amt)
//   introduce() // return `my name is <name>, I am <age> years old & my salary is <salary>`

// - solution:
// Person
//   name
//   age
//   increaseAge() // will increase the age by 1
//   sayName() // return 'my name is <name> & age is <age>'

// Employee extends Person
//   salary
//   increaseSalary(amt)
//   decreaseSalary(amt)
//   introduce() // return `my name is <name>, I am <age> years old & my salary is <salary>`

Person.prototype.increaseAge = function () {
  this.age++;
};

Person.prototype.sayName = function () {
  return `my name is ${this.name} & age is ${this.age}`;
};

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// let p1 = new Person('Chatur', 25);
// console.log(p1)
// console.log(p1.sayName()) // my name is Chatur & age is 25
// p1.increaseAge()
// console.log(p1.sayName()) // my name is Chatur & age is 26

Object.setPrototypeOf(Employee.prototype, Person.prototype);

Employee.prototype.increaseSalary = function (amt) {
  this.salary += amt;
};

Employee.prototype.decreaseSalary = function (amt) {
  this.salary -= amt;
};

Employee.prototype.introduce = function () {
  return `my name is ${this.name}, I am ${this.age} years old & my salary is ${this.salary}`;
};

function Employee(name, age, salary) {
  Person.call(this, name, age);
  this.salary = salary;
}

let e1 = new Employee("Chatur", 25, 100);
console.log(e1);
console.log(e1.sayName()); // my name is Chatur & age is 25
e1.increaseAge();
console.log(e1.sayName()); // my name is Chatur & age is 26

console.log(e1.introduce());
e1.decreaseSalary(20);
console.log(e1.introduce());
e1.increaseSalary(20);
console.log(e1.introduce());
//--------------------------------------------------------------------------------------------------
// Discuss difference between attaching methods to this vs attaching methods to the functions prototype object

// convert the same problem into es6 classes syntax

// Problem:
// Person
//   name
//   age
//   increaseAge() // will increase the age by 1
//   sayName() // return 'my name is <name> & age is <age>'
 

// Employee extends Person
// salary
// increaseSalary(amt)
// decreaseSalary(amt)
// introduce() // return `my name is <name>, I am <age> years old & my salary is <salary>`

Person.prototype.increaseAge = function(){
this.age++
}

Person.prototype.sayName = function() {
return `my name is ${this.name} & age is ${this.age}`
}

function Person(name, age) {
this.name = name;
this.age = age;
}

// let p1 = new Person('Chatur', 25);
// console.log(p1)
// console.log(p1.sayName()) // my name is Chatur & age is 25
// p1.increaseAge()
// console.log(p1.sayName()) // my name is Chatur & age is 26

Object.setPrototypeOf(Employee.prototype, Person.prototype)

Employee.prototype.increaseSalary = function(amt) {
this.salary += amt;
}

Employee.prototype.decreaseSalary = function(amt) {
this.salary -= amt;
}

Employee.prototype.introduce = function() {
return `my name is ${this.name}, I am ${this.age} years old & my salary is ${this.salary}`
}

function Employee(name, age, salary) {
Person.call(this, name, age);
this.salary = salary;
}

let e1 = new Employee('Chatur', 25, 100);
console.log(e1)
console.log(e1.sayName()) // my name is Chatur & age is 25
e1.increaseAge()
console.log(e1.sayName()) // my name is Chatur & age is 26

console.log(e1.introduce());
e1.decreaseSalary(20);
console.log(e1.introduce());
e1.increaseSalary(20);
console.log(e1.introduce());

//-----------------------------------------------------------------------------------------------------------------------

// solution;
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  increaseAge() {
    this.age++;
  }

  sayName() {
    return `my name is ${this.name} & age is ${this.age}`;
  }
}

class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }

  increaseSalary(amt) {
    this.salary += amt;
  }

  decreaseSalary(amt) {
    this.salary -= amt;
  }

  introduce() {
    return `my name is ${this.name}, I am ${this.age} years old & my salary is ${this.salary}`;
  }
}

let e1 = new Employee("Chatur", 25, 100);
console.log(e1);
console.log(e1.sayName()); // my name is Chatur & age is 25
e1.increaseAge();
console.log(e1.sayName()); // my name is Chatur & age is 26

console.log(e1.introduce());
e1.decreaseSalary(20);
console.log(e1.introduce());
e1.increaseSalary(40);
console.log(e1.introduce());
//---------------------------------------------------------------------------------------------------------

// write a ES6 Class IPhone1 to create iPhone objects in bulk quantiy
// iPhone1 takes in generation, ASIN, weight, OS, RAM, color, display, camera
// the object it creates has the following
// properties: generation, ASIN, weight, OS, RAM, color, display, camera
// methods:
// dial - console logs "tring.. tring..."
// sendMessage - console logs "Sending message..."
// cameraClick - "Camera clicked"
// feel free to copy your constructor function solution and then make changes to them

class IPhone1 {
  constructor(generation, ASIN, weight, OS, RAM, color, display, camera) {     
    this.generation = generation;
    this.ASIN = ASIN;
    this.weight = weight;
    this.OS = OS;
    this.RAM = RAM;
    this.color = color;
    this.display = display;
    this.camera = camera;
  }
  
  dial() {
    console.log("tring.. tring...")
  }

  sendMessage() {
    console.log("Sending message...")
  }

  cameraClick() {
    console.log("Camera clicked")
  }
}

let i1 = new IPhone1(
  1,
  "B09X67JBQV",
  7.8,
  "IOS",
  "128mb",
  "Gray",
  "90mm",
  "2.0 MP"
);

i1.dial(); // "tring.. tring..."
i1.sendMessage(); // "Sending message..."
i1.cameraClick(); // "Camera clicked"
//solution
// write a ES6 Class IPhone1 to create iPhone objects in bulk quantiy
// iPhone1 takes in generation, ASIN, weight, OS, RAM, color, display, camera
// the object it creates has the following
// properties: generation, ASIN, weight, OS, RAM, color, display, camera
// methods:
// dial - console logs "tring.. tring..."
// sendMessage - console logs "Sending message..."
// cameraClick - "Camera clicked"
// feel free to copy your constructor function solution and then make changes to them

class IPhone1 {
  constructor(generation, ASIN, weight, OS, RAM, color, display, camera) {
    this.generation = generation;
    this.asin = ASIN;
    this.weight = weight;
    this.os = OS;
    this.ram = RAM;
    this.color = color;
    this.display = display;
    this.camera = camera;
  }

  dial() {
    console.log("tring.. tring...");
  }

  sendMessage() {
    console.log("Sending message...");
  }

  cameraClick() {
    console.log("Camera clicked");
  }
}

let i1 = new IPhone1(
  1,
  "B09X67JBQV",
  7.8,
  "IOS",
  "128mb",
  "Gray",
  "90mm",
  "2.0 MP"
);

i1.dial(); // "tring.. tring..."
i1.sendMessage(); // "Sending message..."
i1.cameraClick(); // "Camera clicked"
//------------------------------------------------------------------------------------------

// JavaScript ES6 classes provide a way to define objects with properties and methods. Classes are a syntactic sugar over JavaScript's existing prototype-based inheritance system, making it easier to write object-oriented code.

// Student task
// Give a simple class task - for revision
// Give a constructor function inheritance student task
// Convert it to class
// Here's an example of a simple class in JavaScript:

class Person {
constructor(name, age) {
  this.name = name;
  this.age = age;
}

sayHello() {
  console.log(
    `Hello, my name is ${this.name} and I am ${this.age} years old.`
  );
}
}

// const john = new Person("John", 30);
// john.sayHello(); // Hello, my name is John and I am 30 years old.
// In the example above, we define a class called Person with a constructor method that takes two parameters: name and age. We also define a sayHello method that logs a message to the console. We then create a new instance of the Person class called john and call its sayHello method.

// Here are some features of a class in JavaScript: