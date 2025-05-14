// Inheritance using ES6 class
// Introduction
// Inheritance is a fundamental concept in object-oriented programming (OOP) where a class (subclass) can inherit properties and methods from another class (superclass). In ES6, the introduction of the class syntax made implementing inheritance more intuitive and concise, aligning JavaScript with traditional OOP languages like Java and C++.

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
  let p1 = new Person('Chatur', 25);
  console.log(p1)
  console.log(p1.sayName()) // my name is Chatur & age is 25
  p1.increaseAge()
  console.log(p1.sayName()) // my name is Chatur & age is 26
  
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
  //----------------------------------------------------------------------------