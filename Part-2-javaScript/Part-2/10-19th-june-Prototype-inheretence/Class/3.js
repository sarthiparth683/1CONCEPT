class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
      return `my name is ${this.name}.`;
    }
  }
  increaseAge() {
    this.age++;
  }
}
class Employee extends Person {
  constructor(name, age, salary = 0)  // old + new keys
  {
    super(name, age); //old keys
    this.salary = salary;
  }
  increaseSalary(amt) {
    this.salary += amt;
    return this.salary
  }
  decreaseSalary(amt) {
    this.salary -= amt;
    return this.salary
  }
  introduce() {
    return `my name is ${this.name}, I am ${this.age} years old & my salary is ${this.salary}`;
  }
}
let e1 = new Employee("Rocky", 25, 100);
console.log(e1);
console.log(e1.sayName());
console.log(e1.increaseSalary(87))
console.log(e1.decreaseSalary(47))

























// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   increaseAge() {
//     this.age++;
//   }
//   sayName() {
//     return `My name is ${this.name}.`;
//   }
// }

// class Employee extends Person {
//   constructor(name, age, salary) {
//     super(name, age);
//     this.salary = salary;
//   }
//   increaseSalary(amt) {
//         this.salary += amt;
//   }
//   decreaseSalary(amt) {
//       this.salary -= amt;
//   }
//   introduce() {
//     return `My name is ${this.name}, I am ${this.age} years old & my salary is ${this.salary}`;
//   }
// }

// let e1 = new Employee("Rocky", 25, 100);
// console.log(e1);
// console.log(e1.sayName());
// console.log(e1.introduce());
// e1.increaseSalary(87);
// console.log(e1.introduce());
// e1.decreaseSalary(20);  //decrease the salary by
// console.log(e1.introduce());
// console.log(e1.salary);
