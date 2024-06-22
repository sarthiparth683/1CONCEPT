// Inheritance using ES6 class
// Inheritance using constructor method
// Example:-1
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// };
// Person.prototype.increaseAge = function () {
//   this.age++;
// };
// Person.prototype.sayName = function () {
//   return `my name is ${this.name} & age is ${this.age}`;
// };
// let p1 = new Person('Chatur', 25);
// console.log(p1);
// console.log(p1.sayName()); // my name is Chatur & age is 25
// p1.increaseAge();
// console.log(p1.sayName()); // my name is Chatur & age is 26
// function Employee(name, age, salary) {
//   Person.call(this, name, age);
//   this.salary = salary;
// };
// Object.setPrototypeOf(Employee.prototype, Person.prototype);
// Employee.prototype.increaseSalary = function (amt) {
//   this.salary += amt;
// };
// Employee.prototype.decreaseSalary = function (amt) {
//   this.salary -= amt;
// };
// Employee.prototype.introduce = function () {
//   return `my name is ${this.name}, I am ${this.age} years old & my salary is ${this.salary}`;
// };
// let e1 = new Employee("Chatur", 25, 100);
// console.log(e1);
// console.log(e1.sayName()); // my name is Chatur & age is 25
// e1.increaseAge();
// console.log(e1.sayName()); // my name is Chatur & age is 26
// console.log(e1.introduce());
// e1.decreaseSalary(20);
// console.log(e1.introduce());
// e1.increaseSalary(20);
// console.log(e1.introduce());
// // Discuss difference between attaching methods to this vs attaching methods to the functions prototype object
// //-----------------------------------------------------------------------------------------------
// Example:-2
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// };
// Person.prototype.increaseAge = function () {
//   this.age++
// };
// Person.prototype.sayName = function () {
//   return `my name is ${this.name} & age is ${this.age}`
// };
// let p1 = new Person('Chatur', 25);
// console.log(p1);
// console.log(p1.sayName()); // my name is Chatur & age is 25
// p1.increaseAge();
// console.log(p1.sayName()); // my name is Chatur & age is 26

// function Employee(name, age, salary) {
//   Person.call(this, name, age);
//   this.salary = salary;
// };
// // Object.setPrototypeOf(Employee.prototype, Person.prototype);
// Employee.prototype = Person.prototype;
// Employee.prototype.increaseSalary = function (amt) {
//   this.salary += amt;
// };
// Employee.prototype.decreaseSalary = function (amt) {
//   this.salary -= amt;
// };
// Employee.prototype.introduce = function () {
//   return `my name is ${this.name}, I am ${this.age} years old & my salary is ${this.salary}`
// };
// let e1 = new Employee('Chatur', 25, 100);
// console.log(e1)
// console.log(e1.sayName()) // my name is Chatur & age is 25
// e1.increaseAge()
// console.log(e1.sayName()) // my name is Chatur & age is 26
// console.log(e1.introduce());
// e1.decreaseSalary(20);
// console.log(e1.introduce());
// e1.increaseSalary(20);
// console.log(e1.introduce());
//-------------------------------------------------------------------
// Class inheretence:-
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   };
//   increaseAge() {
//     this.age++;
//   };
//   sayName() {
//     return `my name is ${this.name} & age is ${this.age}`;
//   };
// };

// class Employee extends Person {
//   constructor(name, age, salary) {
//     super(name, age);
//     this.salary = salary;
//   };
//   increaseSalary(amt) {
//     this.salary += amt;
//   };
//   decreaseSalary(amt) {
//     this.salary -= amt;
//   };
//   introduce() {
//     return `my name is ${this.name}, I am ${this.age} years old & my salary is ${this.salary}`;
//   };
// };

// let e1 = new Employee("Chatur", 25, 100);
// console.log(e1);
// console.log(e1.sayName()); // my name is Chatur & age is 25
// e1.increaseAge();
// console.log(e1.sayName()); // my name is Chatur & age is 26
// console.log(e1.introduce());
// e1.decreaseSalary(20);
// console.log(e1.introduce());
// e1.increaseSalary(40);
// console.log(e1.introduce());
//----------------------------------------------------------------------------------------------------