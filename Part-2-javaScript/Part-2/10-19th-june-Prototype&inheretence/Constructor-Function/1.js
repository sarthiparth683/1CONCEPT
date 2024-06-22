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
  };
  let person1 = new Person("Bruce", "Wayne", 26);
  console.log(person1);