// How are factory functions linked to objects in Javascript:  
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
    let obj = {};
    Object.setPrototypeOf(obj, Person.prototype);

    obj.firstName = firstName;
    obj.lastName = lastName;
    obj.age = age;

    return obj;
}

let person1 = Person("Bruce", "Wayne", 26);
console.log(person1);
// If you observe the person1 object now ( You’d observe that eat increaseAge .. are all added to prototypes of person1 object )
//------------------------------------------------------------------------------------
// Task 2:    
function Person(firstName, lastName, age) {
    let obj = {};
    Object.setPrototypeOf(obj, Person.prototype);
  
    obj.firstName = firstName;
    obj.lastName = lastName;
    obj.age = age;
  
    return obj;
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
    let obj = Person(firstName, lastName, age); // a new object which has some properties of object that is returned from Person factory function
    Object.setPrototypeOf(obj, Employee.prototype); // the object we are gonna return will have Employee.prototype as its prototype;
    obj.department = department;
    obj.salary = salary;
  
    return obj;
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
  //------------------------------------------------------------------------------

  function iPhoneGen1(ASIN, color, display, camera) {
    let obj = {};
    Object.setPrototypeOf(obj, iPhoneGen1.prototype); // set the prototype of the object that we are returning here to iPhoneGen1 prototype;
  
    obj.ASIN = ASIN;
    obj.color = color;
    obj.display = display;
    obj.camera = camera;
  
    return obj;
  }
  
  iPhoneGen1.prototype.dial = function () {
    console.log("tring.. tring...");
  };
  
  iPhoneGen1.prototype.sendMessage = function () {
    console.log("Sending message...");
  };
  
  iPhoneGen1.prototype.cameraClick = function () {
    console.log("Camera clicked");
  };
  
  let iphone1 = iPhoneGen1("B09X67JBQV", "Gray", "90mm", "2.0 MP");
  
  console.log(iphone1);
  
  iphone1.dial(); // "tring.. tring..."
  iphone1.sendMessage(); // "Sending message..."
  iphone1.cameraClick(); // "Camera clicked"
//-----------------------------------------------------------------------------
// Conclusion
// Factory functions offer a flexible approach to object creation in JavaScript, allowing developers to produce objects with shared properties and methods efficiently. By leveraging factory functions, developers can create modular and reusable code, promoting code organization and enhancing maintainability. Understanding the linkage between factory functions and objects, particularly in terms of prototypal inheritance, empowers developers to build scalable applications with ease. Mastery of factory functions facilitates efficient development practices, enabling the creation of adaptable and scalable software solutions in JavaScript.  