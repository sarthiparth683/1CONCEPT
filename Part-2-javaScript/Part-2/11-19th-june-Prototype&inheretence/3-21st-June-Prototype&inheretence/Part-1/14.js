// Student Activities   
// Using Object.create()

let employee = {
    sayHello: function () {
      console.log("Hello");
    },
  };
  
  let manager = Object.create(employee);
  manager.position = "Manager";
  manager.salary = 100000;
  manager.manageTeam = function () {
    console.log("Managing team");
  };
  
  console.log(manager);
//------------------------------------------------------------------------
// Using the Object.setPrototypeOf() method:
// Define an employee object with a method sayHello() that logs "Hello". Create a manager object with properties position (set to "Manager"), salary (set to 100000), and a method manageTeam() that logs "Managing team", inheriting from the employee object. Display the manager object to verify its properties and methods, and ensure it inherits the sayHello() method.

// Solution:
// Define employee object with sayHello() method
let employee = {
  sayHello: function () {
    console.log("Hello");
  },
};

// Create manager object inheriting from employee
let manager = Object.create(employee);

// Add properties to manager object
manager.position = "Manager";
manager.salary = 100000;
manager.manageTeam = function () {
  console.log("Managing team");
};

// Display manager object
console.log(manager);

// Verify manager inherits the sayHello() method
manager.sayHello();
//----------------------------------------------------------------------
// Conclusion
// Understanding prototypes and inheritance is essential for mastering JavaScript's object-oriented features. Prototypes enable code reuse and inheritance, leading to more modular and maintainable code. By grasping these concepts, developers can build scalable and efficient applications.