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
  e1.work() // This should work now.