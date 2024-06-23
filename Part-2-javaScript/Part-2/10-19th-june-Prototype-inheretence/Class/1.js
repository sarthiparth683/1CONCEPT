
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.fun = function () {
      return `Testing Function:-`
    }
  };
  increaseAge() {
    this.age++;
  };
  sayName() {
    return `my name is ${this.name} & age is ${this.age}`;
  };
  consol() {
    return `Testing Console:-`;
  };
};
// console.log(Person);  // console whole class-useless
// let p1 = new Person("Achilies", 23);
// console.log(p1);
// console.log(p1.name);
// console.log(p1.fun());
// console.log(p1.consol());
// p1.consol(); // won't work
// console.log(`===X===0===X===0===X===0===X===0`);
//--------------------------------------
class Employee extends Person {
  constructor(name, age, salary,amt) {  // all-old+new-key-in-constructor
    super(name, age);               // only-old-key-values-in-super
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
let e1 = new Employee("Achilies", 25, 978, 45);
console.log(e1);
console.log(e1.increaseSalary());
e1.increaseSalary();
console.log(e1.introduce());
e1.introduce()
console.log(`===X===0===X===0===X===0===X===0`);