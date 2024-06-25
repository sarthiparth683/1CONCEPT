
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
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
  constructor(name, age,gender, salary) {  // all-old+new-key-in-constructor
    super(name, age,gender);// only-old-key-values-in-super
    this.salary = salary;
    
  };
  increaseSalary(amt1) {
   return this.salary += amt1;
  };
  decreaseSalary(amt2) {
    return this.salary -= amt2;
  };
  introduce() {
    return `my name is ${this.name}, I am ${this.age} years old & my salary is ${this.salary}`;
  };
};
let e1 = new Employee("Achilies", 25,"female", 700); //???? dynamic is not working - console.log(e1.increaseSalary());?
let e2 = new Employee("william", 42,"male", 750);
console.log(e2);
function increment(person){
  //person is an object where expected keys are age, salary,if anyone not found, it throws NAN
  let bonus = 0;
  if(person.gender == "female"){
     bonus = 300
  }
  let i = 0.1;
  if(person.age>40){
     i=0.2
  }
 return Math.floor(person.salary+ person.salary*0.25+i*person.age)
}

console.log(e1.increaseSalary(increment(e1))); 
console.log(e2.increaseSalary(increment(e2))); 
console.log(e1.decreaseSalary());
console.log(e1.introduce());
// console.log(`===X===0===X===0===X===0===X===0`);