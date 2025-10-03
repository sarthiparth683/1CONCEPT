
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

  let myBindFunc = myName.bind(person7, 28, "bangalore");
   // bind gives you a new function in which the this keyword is preset for us; it returns a function which can be invoked later; this "this" value being pointed to person1 will be remembered;
  console.log(myBindFunc())
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
  //-------------------------------------------------------------------------------
  function sayHello() {
    console.log("Hello! ", this, this.name);
  }
  
  var John = {
    name: "John Doe",
    age: 30
  };
  
  var johnSayHello = sayHello.bind(John);
  
  johnSayHello();