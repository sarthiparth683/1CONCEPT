// How are factory functions linked to objects in Javascript:
// Introduction
// In JavaScript, functions are not only blocks of code but also first-class objects. Understanding how functions are linked to objects, particularly in terms of prototypal inheritance, is crucial. In this discussion, we'll explore this relationship, focusing on how prototypal inheritance works with objects created by functions.
// Detailed Explanation
// 1. Factory Functions :
// Understand that every object has a __proto__ property which is used to link it to another object. But what about functions? How is prototypal inheritance handled in objects created by constructor functions via new keyword?

// Functions are first-class objects in JavaScript which means they can have their own properties and methods like any other plain object could.

// This prototype property of a function itself is not used in the prototype chain look-up. The .prototype property object lives in every function

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
    let obj = {};
    Object.setPrototypeOf(obj, Person.prototype);
  
    obj.firstName = firstName;
    obj.lastName = lastName;
    obj.age = age;
  
    return obj;
  }
  
  let person1 = Person("Bruce", "Wayne", 26);
  console.log(person1);
  //