// Student Activities
// Student task1:
// write a constructor function Person that will take name and age as parameter and return an object with these two properties.
// attach all the methods in the prototype of Person constructor.
// the methods are increaseAge,decreaseAge that will be incresing and decreasing the age by the given value and return the updated age;
// and another method called sayName that will console  "My name is <name>."

// write a constructor function Employee that will take name , age and salary as parameter and return an object with these three properties.
// attach all the methods in the prototype of Employee constructor.
// the methods are increaseSalary,decreaseSalary that will be incresing and decreasing the salary by the given value and return the updated salary;
// and another method called introduce that will console  "My name is <name> and I am an employee...""

//also establish the chain between to constructor function such a way that they can inherit methods based  inheritance level.
// Solution:
Person.prototype.increaseAge = -function (value) {
  return (this.age += value);
};
Person.prototype.decreaseAge = -function (value) {
  return (this.age -= value);
};
Person.prototype.sayName = function () {
  console.log(`My name is ${this.name}.`);
};

function Person(name, age) {
  //write your code here.
  this.name = name;
  this.age = age;
}

Employee.prototype.increaseSalary = function (value) {
  return (this.salary += value);
};
Employee.prototype.decreaseSalary = function (value) {
  return (this.salary -= value);
};
Employee.prototype.introduce = function () {
  console.log(`My name is ${this.name} and I am an employee...`);
};

function Employee(name, age, salary) {
  //write your code here
  Person.call(this, name, age);
  this.salary = salary;
}

Object.setPrototyoeOf(Employee.prototype, Person.prototype);
//----------------------------------------------------------------------------------


// Summary: Classical vs Prototypical Inheritance
// In Classical object-oriented programming, like in java & c++, we have two constructs: classes and objects. Classes act as a blueprint (or a specification or a structure ) and objects are constructed using the structure provided by its Class. Inheritance in classical programming happens at the level of classes. Classes mostly cannot be modified at runtime.

// Javascript internally does not have classes. Prototypical inheritance is all about objects linked to other objects. Instead of defining a structure through a class, In Javascript, you simply create an object. In order to access the properties and methods of another object, we simply need to set up a Proto-typical relationship of our object with that another object. Prototypical chains are very flexible and can be changed at runtime.

// All the inheritance techniques of Javascript like

















