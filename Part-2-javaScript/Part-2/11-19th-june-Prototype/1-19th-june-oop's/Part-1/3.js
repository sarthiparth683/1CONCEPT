// How are constructor functions linked to objects in JavaScript:-
// Introduction
// In JavaScript, constructor functions provide a way to create objects with shared properties and methods. Understanding how constructor functions are linked to objects, particularly in terms of prototypal inheritance, is essential for building scalable and maintainable applications. In this discussion, we'll explore this relationship, focusing on how prototypal inheritance works with objects created by constructor functions using the new keyword.

//---------------------------

// Detailed Explanation
// 1. Constructor Functions:
// Constructor functions in JavaScript are used with the new keyword to create objects.
// When a constructor function is invoked with new, a new object is created, and its internal [[Prototype]] property (accessible via __proto__) is set to the constructor function's prototype property.
// The prototype property object serves as a blueprint for objects created with that constructor function, providing shared properties and methods.


//////////////////----------------------------------------------
// Code Implementation | Examples
// Solving the problem using the functions prototype object & linking our objects to it
// Task 1
Person.prototype.increaseAge = function () {
  this.age = this.age + 1;
  console.log(this.age);
};

Person.prototype.sleep = function () {
  console.log(`${this.firstName} is sleeping.`);
};

Person.prototype.eat = function () {
  console.log(`${this.firstName} is eating.`);
};

Person.prototype.introduceSelf = function () {
  console.log(this.firstName, this.lastName, this.age);
};

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

let person1 = new Person("Bruce", "Wayne", 26);
console.log(person1);


// If you observe the person1 object now ( You’d observe that eat increaseAge .. are all added to prototypes of person1 object )

// Task 2:
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.increaseAge = function () {
  this.age = this.age + 1;
  console.log(this.age);
};

Person.prototype.sleep = function () {
  console.log(`${this.firstName} is sleeping.`);
};

Person.prototype.eat = function () {
  console.log(`${this.firstName} is eating.`);
};

Person.prototype.introduceSelf = function () {
  console.log(this.firstName, this.lastName, this.age);
};

function Employee(firstName, lastName, age, department, salary) {
  Person.call(this, firstName, lastName, age);

  this.department = department;
  this.salary = salary;
}

Object.setPrototypeOf(Employee.prototype, Person.prototype); // Employee prototype object's prototype will be set to Person.prototype;

Employee.prototype.work = function () {
  console.log(`${this.firstName} is working.`);
};

Employee.prototype.getSalary = function () {
  console.log(`${this.firstName} is getting Salary.`);
};

let e1 = Employee("John", "Doe", 25, "engineering", 200000);

console.log(e1);
// e1.work() // This should work now.

//////----------------------------------------


// Student Activities
// Task 1
// convert below code and and add all methods to prototype object.
// write a constructor function iPhone1 to create iPhone objects in bulk quantity
// iPhone1 takes in ASIN, color, display, camera
// the object it creates has the following
// properties: ASIN, color, display, camera
// methods:
// dial - console logs "tring.. tring..."
// sendMessage - console logs "Sending message..."
// cameraClick - "Camera clicked"

function IphoneGen1(ASIN, color, display, camera) {
  this.ASIN = ASIN;
  this.color = color;
  this.display = display;
  this.camera = camera;

  this.dial = function () {
    console.log("tring.. tring...");
  };

  this.sendMessage = function () {
    console.log("Sending message...");
  };

  this.cameraClick = function () {
    console.log("Camera clicked");
  };
}

let iphone1 = new IphoneGen1("B09X67JBQV", "Gray", "90mm", "2.0 MP");
iphone1.dial(); // "tring.. tring..."
iphone1.sendMessage(); // "Sending message..."
iphone1.cameraClick(); // "Camera clicked"

Solution:
function IphoneGen1(ASIN, color, display, camera) {
  this.ASIN = ASIN;
  this.color = color;
  this.display = display;
  this.camera = camera;
}

IphoneGen1.prototype.dial = function () {
  console.log("tring.. tring...");
};

IphoneGen1.prototype.sendMessage = function () {
  console.log("Sending message...");
};

IphoneGen1.prototype.cameraClick = function () {
  console.log("Camera clicked");
};

let iphone1 = new IphoneGen1("B09X67JBQV", "Gray", "90mm", "2.0 MP");

console.log(iphone1);

iphone1.dial(); // "tring.. tring..."
iphone1.sendMessage(); // "Sending message..."
iphone1.cameraClick(); // "Camera clicked"

/////////////////////////-----------------------------------------
// Conclusion
// Constructor functions in JavaScript, coupled with prototypal inheritance, empower developers to create objects with shared properties and methods efficiently. This approach promotes code reuse and modularity, enhancing scalability and maintainability. By mastering constructor functions and understanding their linkage to objects, developers can build robust applications with reusable code, fostering efficient development practices and enabling the creation of scalable software solutions.
///-----------------------------------------