

//--------------------------------------------------------------------------------
// Constructor Method
// The constructor method is called when a new instance of the class is created. It's used to set the initial state of the object.

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  //--------------------------------------------------------------------------------
  // Properties
  // Classes can have properties that are defined in the constructor method or outside of it.
  
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    occupation = "Developer"; // Class property
  }
  //--------------------------------------------------------------------------------
  // Methods
  // Classes can have methods that are defined inside the class body.
  
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
      );
    }
  }
  