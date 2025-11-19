// ==============================================
// 1. BASIC PROTOTYPE CHAIN WITH ARRAY & OBJECT
// ==============================================
// let arr = [1, 2, 3];
// console.log(arr)
// console.log(arr.__proto__)
// console.log(arr.__proto__ === Array.prototype);
// console.log(Array.prototype.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__ === null); // (end of chain)
// ==============================================
// 2. FUNCTION PROTOTYPE CHAIN
// ==============================================
// function fun() { return "hello"; }
// console.log(fun.__proto__ === Function.prototype)
// console.log(Function.prototype.__proto__ === Object.prototype)
// ==============================================
// 3. MANUAL PROTOTYPE LINK USING setPrototypeOf
// ==============================================
// let user = {
//   name: "vivek",
//   sayHello() {
//     // A method defined using the short method syntax
//     console.log("Say Hello!");
//   },
//   fun: function () {
//     // A method defined using the traditional function expression syntax:
//     console.log("Function in user object");
//   },
// };

// let emp = {
//   salary: 100000,
//   work() {
//     console.log("Working");
//   },
// };

// // user.sayHello();
// // user.fun();
// Object.setPrototypeOf(emp, user); // Make user is the prototype of emp.So emp can use all methods defined inside user.
// console.log("emp object", emp);
// emp.work();
// emp.sayHello();
// emp.fun();
// ==============================================
// 4. CONSTRUCTOR FUNCTION (WITHOUT 'new')
// ==============================================
// function PersonFn(firstName, lastName, age) {
//   let obj = {};
//   Object.setPrototypeOf(obj, PersonFn.prototype);
//   obj.firstName = firstName;
//   obj.lastName = lastName;
//   obj.age = age;
//   return obj;
// }

// PersonFn.prototype.eat = function () {
//     console.log(`${this.firstName} is eating.`);
// };
// PersonFn.prototype.sleep = function () {
//     console.log(`${this.firstName} is sleeping.`);
// };
// PersonFn.prototype.increaseAge = function () {
//   this.age += 1;
//   console.log(this.age);
// };
// PersonFn.prototype.introduceSelf = function () {
//   console.log(this.firstName, this.lastName, this.age);
// };

// // console.log(PersonFn());

// // Child constructor
// function EmployeeFn(firstName, lastName, age, department, salary) {
//   let obj = PersonFn(firstName, lastName, age);
//   Object.setPrototypeOf(obj, EmployeeFn.prototype);
//   obj.department = department;
//   obj.salary = salary;
//   return obj;
// }

// Object.setPrototypeOf(EmployeeFn.prototype, PersonFn.prototype);

// EmployeeFn.prototype.work = function () {
//   console.log(`${this.firstName} is working.`);
// };
// EmployeeFn.prototype.getSalary = function () {
//   console.log(`${this.firstName} is getting Salary.`);
// };

// const emp1 = EmployeeFn("John", "Doe", 28, "IT", 50000);
// console.log(emp1);
// emp1.eat();            // inherited from PersonFn
// emp1.sleep();          // inherited from PersonFn
// emp1.increaseAge();    // 29
// emp1.introduceSelf();  // John Doe 28
// emp1.work();           // John is working.
// emp1.getSalary();      // John is getting Salary.
// ==============================================
// 5. Object.create() FOR INHERITANCE
// ==============================================
// let baseObj = {
//   name: "vivek",
//   sayHello() {
//     console.log("Hello");
//   },
// };

// let derivedObj = Object.create(baseObj);// derivedObj now inherits sayHello()
// derivedObj.salary = 100000;
// derivedObj.work = function () {
//   console.log("Working");
// };

// console.log(derivedObj)
// derivedObj.sayHello();
// console.log(derivedObj.salary)
// derivedObj.work();
// // ==============================================
// 6. Object.keys / Object.values / Object.entries
// ==============================================
// const sample = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// // console.log(Object.keys(sample)); // ['a','b','c','d','e']
// // console.log(Object.values(sample)); // [1,2,3,4,5]
// // console.log(Object.entries(sample)); // [['a',1], ['b',2], ...]

// for (let key in sample) {
//   console.log(`${key} : ${sample[key]}`);
// }
// ==============================================
// 7. CONSTRUCTOR FUNCTION WITH 'new' KEYWORD
// ==============================================
// function Person(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// }

// Person.prototype.increaseAge = function () {
//   this.age += 1;
//   return this.age;
// };
// Person.prototype.sleep = function () {
//   return `${this.firstName} is sleeping.`;
// };
// Person.prototype.eat = function () {
//   return `${this.firstName} is eating.`;
// };
// Person.prototype.introduceSelf = function () {
//   return `Introduction:- ${this.firstName}, ${this.lastName}, ${this.age}`;
// };

// // let p = new Person("Parth", "Sarthi", 21);
// // console.log(p)
// // console.log(p.age)
// // console.log(p.sleep())
// // console.log(p.introduceSelf())
// // ===== Employee Inheriting Person (with new) =====

// function Employee(firstName, lastName, age, department, salary) {
//   Person.call(this, firstName, lastName, age);
//   this.department = department;
//   this.salary = salary;
// }

// Object.setPrototypeOf(Employee.prototype, Person.prototype);

// Employee.prototype.work = function () {
//   return `${this.firstName} is working.`;
// };
// Employee.prototype.getSalary = function () {
//   return `${this.firstName} is getting Salary.`;
// };

// let e1 = new Employee("John", "Doe", 25, "engineering", 200000);
// console.log(e1);
// // console.log(e1.firstName);
// // console.log(e1.department);
// // console.log(e1.introduceSelf());
// // console.log(e1.getSalary());
// ==============================================
// 8. FACTORY FUNCTION
// ==============================================
// function animal(noOfLegs, vegetarian) {
//   let obj = {};
//   obj.noOfLegs = noOfLegs;
//   obj.vegetarian = vegetarian;
//   obj.eat = function () {
//     console.log("eating..");
//   };
//   obj.greet = function () {
//     console.log("greetings..");
//   };
//   return obj;
// }

// // let animal1 = animal(4, true);
// // console.log(animal1);
// // ===== Inheriting Factory Function =====

// function Bird(noOfLegs, vegetarian, canFly, beak, name) {
//   let birdObj = animal(noOfLegs, vegetarian); // inheritance
//   birdObj.name = name;
//   birdObj.canFly = canFly;
//   birdObj.beakType = beak;
//   return birdObj;
// }

// let b1 = Bird(2, true, false, "long", "Falcon");
// let b2 = Bird(8, true, true, "strong", "Vulture");
// let b3 = Bird(4, false, true, "Fly High", "Eagle");
// console.log(b1);
// console.log(b2);
// console.log(b3);
// ==============================================

