// What are static methods?
// Static methods are functions defined within a class that are called on the class itself rather than on instances of the class. They are declared using the static keyword.
// Why are they useful?
// Static methods provide a way to define utility functions or perform operations that are related to the class as a whole, rather than to individual instances. They encapsulate functionality that doesn't rely on instance-specific data.
class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    static greet() {
      console.log("Welcome, users!");
    }
  }
  
  User.greet(); // Output: Welcome, users!
  