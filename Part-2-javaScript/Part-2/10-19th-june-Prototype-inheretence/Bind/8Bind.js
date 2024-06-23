// Example with bind
// .bind is used to create a function & set the value of the this keyword
// inside of the newly created function
const boundGreet = greet.bind(person);
boundGreet(); // Output: Hello, John
//-----------------------------------------------------------------------------------------
// BIND
// You can bind a particular object as ‘this’ to a function and use it later. You cannot use call() or apply() later, they run immediately.
var person7 = {
    name: "John",
  };
  var person8 = {
    name: "Jill",
  };
  function myName(age, city) {
    this.age = age;
    this.city = city;
  }
  let myBindFunc = myName.bind(person1, 28, "bangalore"); // bind gives you a new function in which the this keyword is preset for us; it returns a function which can be invoked later; this "this" value being pointed to person1 will be remembered;
  myBindFunc();
  //----------------------------------------------------------------------------------------
  function greeting() {
    console.log(`Hello, ${this.name}!`);
  };
  const person1 = { name: 'Alice' };
  const person2 = { name: 'Bob' };
  const greetPerson1 = greeting.bind(person1);
  const greetPerson2 = greeting.bind(person2);
  greetPerson1();
  greetPerson2();