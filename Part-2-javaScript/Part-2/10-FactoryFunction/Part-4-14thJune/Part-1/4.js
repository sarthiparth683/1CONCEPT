// BIND
// You can bind a particular object as ‘this’ to a function and use it later. You cannot use call() or apply() later, they run immediately.

// example4:

var person1 = {
  name: "John",
};

var person2 = {
  name: "Jill",
};

function myName(age, city) {
  this.age = age;
  this.city = city;
}
let myBindFunc = myName.bind(person1, 28, "bangalore"); // bind gives you a new function in which the this keyword is preset for us; it returns a function which can be invoked later; this "this" value being pointed to person1 will be remembered;

myBindFunc();