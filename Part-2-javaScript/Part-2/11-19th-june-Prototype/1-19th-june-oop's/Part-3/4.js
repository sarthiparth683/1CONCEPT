// ES6 Classes

// expand_less
// ES6 introduced classes to JavaScript, providing a new syntax for creating objects and dealing with inheritance. Classes in JavaScript are syntactical sugar over the existing prototype-based inheritance and offer a cleaner and more intuitive way to create objects and implement inheritance.

// Example

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printName() {
    console.log(this.name);
  }
}
const user1 = new User('Bob', 25);
user1.printName();