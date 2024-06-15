// ES6 Class in JavaScript
// Introduction
// ES6 introduced the class syntax in JavaScript, providing a more structured and familiar way to define object blueprints compared to traditional constructor functions. Classes serve as templates for creating objects with shared properties and methods.
// Detailed Explanation
// What is the concept?
// ES6 classes offer a syntactic sugar over the prototype-based inheritance system in JavaScript. They provide a clearer and more intuitive way to create objects and implement inheritance.
// Why is it useful?
// Classes streamline the process of creating objects and defining their behavior. They offer a more organized approach to object-oriented programming, enhancing code readability and maintainability.
// Real-world examples or analogies:
// Think of an ES6 class as a blueprint for constructing various instances of an object, similar to how a template in a manufacturing plant guides the creation of multiple products with consistent features.
// Instructor Activity | Code Implementation | Examples
// Class Example 1:
// Develop a user management system using User class that efficiently creates user instances with associated attributes such as name and age. Additionally, implement a method to retrieve the full name of each user instance.
// Class Example 1:
// Develop a user management system using User class that efficiently creates user instances with associated attributes such as name and age. Additionally, implement a method to retrieve the full name of each user instance.
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.fullName = function() {
        console.log(this.name);
       }
    }
}

let User1 = new User("Alice", 20);
let User2 = new User("Bob", 22);

console.log(student1);
student1.fullName();
console.log(student2);
//--------------------------------------------------------------------
// Class Example 2 (New way of adding methods):
// Develop a user management system that efficiently creates user instances with associated attributes such as name and age. Additionally, implement a method to retrieve the full name of each user instance.
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    fullName() {
    console.log(this.name);
    }
}

let User1 = new User("Alice", 20);
let User2 = new User("Bob", 22);

console.log(student1);
student1.fullName();
console.log(student2);
//---------------------------------------------------------------------
// Student Activities
// Task 1:
// Create a class called Animal representing different animals. The Animal class should have properties to store the number of legs (noOfLegs) and whether it is vegetarian or not (vegetarian). Additionally, each Animal object should have a method called eat which outputs a message indicating that the animal is eating and displays the number of legs it has. Note: use New way of adding methods.

// Solution:

class Animal {
    constructor(noOfLegs, vegetarian) {
        this.noOfLegs = noOfLegs;
        this.vegetarian = vegetarian;
      
    }
    eat() {
        console.log("Eating...", this.noOfLegs);
    }
 
}

// Example usage:
let animal1 = new Animal(4, true);
console.log(animal1);

let animal2 = new Animal(6, false);
console.log(animal2);

animal2.eat(); // Output: Eating... 6

// Conclusion
// The concept of ES6 classes in JavaScript provides a more structured and intuitive way to implement object-oriented programming. By creating classes and defining inheritance, properties, and methods, developers can build complex applications with greater ease and clarity.
//------------------------------------------------------------------
// Interview based questions:
// Question 1
// Question
// Explain the difference between a factory function and a constructor function in JavaScript.

// Answer
// A factory function is a function that returns a new object. It creates and returns object instances without using the new keyword. Factory functions provide a way to encapsulate object creation logic and can return different types of objects based on input parameters or conditions.

// A constructor function, on the other hand, is invoked with the new keyword to create a new instance of an object. Constructor functions use the this keyword to define properties and methods for the newly created object. They typically start with a capital letter to distinguish them from regular functions.
//------------------------------------------------------------------
// Question 2
// Question
// Discuss the advantages and disadvantages of using factory functions compared to constructor functions.

// Answer
// Advantages of Factory Functions:

// Encapsulation: Factory functions encapsulate object creation logic, allowing you to create and return new instances of objects without exposing the internal implementation details.
// Flexibility: Factory functions can return different types of objects based on input parameters or conditions, providing greater flexibility in object creation.
// No this Binding: Factory functions do not rely on the this keyword, reducing the risk of unexpected behavior caused by incorrect this binding.
// Disadvantages of Factory Functions:

// No Prototype Inheritance: Factory functions do not support prototype inheritance out of the box, making it more challenging to implement inheritance hierarchies.
// Cannot Use instanceof: Objects created by factory functions cannot be identified using the instanceof operator, which may impact code readability and debugging.
//------------------------------------------------------------------
// Question 3
// Question
// Discuss the use cases for factory functions and constructor functions in JavaScript.

// Answer
// Factory Functions:

// Object Creation: Factory functions are useful for creating object instances with specific configurations or properties.
// Encapsulation: Factory functions encapsulate object creation logic, providing a clean interface for creating objects without exposing implementation details.
// Conditional Object Creation: Factory functions can return different types of objects based on input parameters or conditions.
// Constructor Functions:

// Prototype Inheritance: Constructor functions are ideal for creating object types that need to share properties and methods through prototype inheritance.
// Traditional OOP: Constructor functions follow the traditional object-oriented programming paradigm and are familiar to developers coming from languages like Java or C++.
// Instance Initialization: Constructor functions allow you to initialize object instances with specific properties and behaviors using the new keyword.
//------------------------------------------------------------------
