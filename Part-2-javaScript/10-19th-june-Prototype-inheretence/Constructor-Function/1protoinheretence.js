function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  };
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
  //-----------------------------------------------------------
  
  function Employee(firstName, lastName, age, department, salary) {
    Person.call(this, firstName, lastName, age);
    this.department = department;
    this.salary = salary;
  };
  Object.setPrototypeOf(Employee.prototype, Person.prototype); // Employee prototype object's prototype will be set to Person.prototype;
  Employee.prototype.work = function () {
    console.log(`${this.firstName} is working.`);
  };
  Employee.prototype.getSalary = function () {
    console.log(`${this.firstName} is getting Salary.`);
  };
  let e1 = Employee("John", "Doe", 25, "engineering", 200000);
  console.log(e1);
  e1.work() // This should work now.