// How are factory functions linked to objects in Javascript:  
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