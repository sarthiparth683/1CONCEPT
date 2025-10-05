let arr = [1, 2, 3];
// console.log(arr);
// chcking true or false condition
// console.log(arr.__proto__ === Array.prototype);
// console.log(Array.prototype.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__ === null);
//-----------------------------------------------------------------------------------
function fun() {}
// chcking true or false condition
// console.log(fun.__proto__ === Function.prototype);
// console.log(fun.__proto__.__proto__ == Object.prototype);
// console.log(fun.__proto__.__proto__.__proto__ == Object.prototype);
// console.log(Function.prototype.__proto__ == Object.prototype);
//------------------------------------------------------------------------------------
let obj = {
  name: "vivek",
  sayHello: function () {
    console.log("Hello");
  },
};

let obj2 = {
  salary: 100000,
  work: function () {
    console.log("Working");
  },
};
//The Object.setPrototypeOf() method sets the prototype (i.e., the internal __proto__ property) of a specified object to another object.
Object.setPrototypeOf(obj2, obj);  //obj2 is parent and obj is children
// console.log(obj2);
// console.log(obj);
// console.log(obj.name);
// obj.sayHello()
// obj2.sayHello();
//----------------------------------------------------------------------------------

   
function Person(firstName, lastName, age) {
  let obj = {};
  Object.setPrototypeOf(obj, Person.prototype);
  obj.firstName = firstName;
  obj.lastName = lastName;
  obj.age = age;
  return obj;
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

function Employee(firstName, lastName, age, department, salary) {
  let obj = Person(firstName, lastName, age);
  Object.setPrototypeOf(obj, Employee.prototype);
  obj.department = department;
  obj.salary = salary;
  return obj;
}
Object.setPrototypeOf(Employee.prototype, Person.prototype);
Employee.prototype.work = function () {
  console.log(`${this.firstName} is working.`);
};
Employee.prototype.getSalary = function () {
  console.log(`${this.firstName} is getting Salary.`);
};
let e1 = Employee("John", "Doe", 25, "engineering", 200000);
// console.log(e1);
// e1.work();
//-----------------------------------------------------------------