
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    };
    increaseAge() {
      this.age++;
    };
    sayName() {
      return `my name is ${this.name} & age is ${this.age}`;
    };
  };
  
  class Employee extends Person {
    constructor(name, age, salary) {
      super(name, age);
      this.salary = salary;
    };
    increaseSalary(amt) {
      this.salary += amt;
    };
    decreaseSalary(amt) {
      this.salary -= amt;
    };
    introduce() {
      return `my name is ${this.name}, I am ${this.age} years old & my salary is ${this.salary}`;
    };
  };
  let e1 = new Employee("Chatur", 25, 100);
  console.log(e1);
  console.log(e1.sayName()); // my name is Chatur & age is 25
  e1.increaseAge();
  console.log(e1.sayName()); // my name is Chatur & age is 26
  console.log(e1.introduce());
  e1.decreaseSalary(20);
  console.log(e1.introduce());
  e1.increaseSalary(40);
  console.log(e1.introduce());