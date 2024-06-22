// 1. Constructor Functions:
// Constructor functions in JavaScript are used with the new keyword to create objects.
// When a constructor function is invoked with new, a new object is created, and its internal [[Prototype]] property (accessible via __proto__) is set to the constructor function's prototype property.
// The prototype property object serves as a blueprint for objects created with that constructor function, providing shared properties and methods.
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
//   If you observe the person1 object now ( You’d observe that eat increaseAge .. are all added to prototypes of person1 object )