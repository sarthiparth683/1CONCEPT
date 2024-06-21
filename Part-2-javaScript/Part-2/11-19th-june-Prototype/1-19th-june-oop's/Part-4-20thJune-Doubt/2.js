// // React and ES6 Syntax
// // The lecture begins with a focus on React and the importance of understanding ES6 syntax for efficient React development. ES6 introduces new syntax and features such as let and const for variable declarations, arrow functions, the rest and spread operators, destructuring, etc., which are essential for modern JavaScript development.
// // Arrow Function
// const add = (a, b) => a + b;
// // Destructuring
// const [first, second] = [1, 2];
// // Rest Operator
// const sum = (...numbers) => numbers.reduce((acc, current) => acc + current, 0);
// //-----------------------------------------------------------------------------------
// // Inheritance and Prototypal Inheritance in JavaScript
// // Inheritance is a core concept discussed, emphasizing how JavaScript objects can inherit properties and methods from other objects. This is achieved through prototypal inheritance, where an object can directly reference another object as its prototype, allowing it to use its properties and methods as if they were its own.
// function Parent(name) {
//   this.name = name;
// }
// Parent.prototype.sayName = function () {
//   console.log(this.name);
// };
// function Child(name) {
//   Parent.call(this, name);
// }
// Child.prototype = Object.create(Parent.prototype);
// Child.prototype.constructor = Child;
// const child = new Child('John');
// child.sayName(); // Logs 'John'
// //------------------------------------------------------------------------
// // Classes in JavaScript
// // The concept of classes in JavaScript, introduced in ES6, represents templates for creating objects. Classes encapsulate data for the object and methods to manipulate that data. Utilizing the class keyword simplifies the declaration and instantiation of objects. The lecture explores creating classes, inheritance through the extends keyword, and using super to call the superclass constructor.
// class Animal {
//   constructor(name) {
//     this.name = name;
//   };
//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   };
// };
// class Dog extends Animal {
//   constructor(name) {
//     super(name); // Call the super class constructor and pass in the name parameter
//   };
//   speak() {
//     console.log(`${this.name} barks.`);
//   };
// };
// const dog = new Dog('Rex');
// dog.speak(); // Logs 'Rex barks.'


//--------------------------------------------------------------------
// Create a class Person
//   name
//   age
//   sayName() // console 'my name is <name>'
// class Person {
//   constructor(name,age) {
//     this.name = name;
//     this.age = age;
//   };
//   sayName() {
//     console.log(`my name is ${name} `);
//   };
// };

// const p1 = new Person('Amit',81);
// console.log(p1);
// console.log(p1.sayName() )

//----------------------------------------------------------------------------
// class Person{
//   constructor(name,age){
//    this.name = name;
//    this.age = age
//   }
//   sayName(){
//       console.log(this.name)
//   }
//   increaseAge(value){
//       this.age += value
//   }
// }
// let p1 = new Person("Pavan", 23)
// p1.increaseAge(5);
// console.log(p1)

// // create a class called Employee extends from Person class
// // name,age,salary
// // printSalary() --- console the salary


// class Employee extends Person {
//   constructor(name,age,salary) {
//     super(name,age); 
//     this.salary = salary;
//   };
//   printSalary() {
//     console.log(`slalry=${this.salary} `);
//   };
// };
// const employ = new Employee("Achiles",21,9898);
// console.log(employ)
// console.log(employ.printSalary())

//-------------------------------------------------------------------------------

// create Animal class with a private 
// field sound 
// normal -- legs implement methods 
// to access and modify the sound property use get and set.
// create one static method call greet that prints "Hello"

class  Animal {
  #sound;
    constructor(name){
     this.name = name;
     
    }
   
    get(){
      this.#sound;
    }
    set(value){
      this.#sound = value;
  }
  }
  let a1 = new Animal("Lion")
  console.log(a1.get());