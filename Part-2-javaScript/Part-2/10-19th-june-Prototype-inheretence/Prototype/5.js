
let employee = {
  sayHello: function () {
    console.log("Hello-1");
  },
};
let manager = Object.create(employee);
manager.position = "Manager";
manager.salary = 100000;
manager.manageTeam = function () {
  console.log("Managing team");
};
console.log(employee);
console.log(manager);
// Verify manager inherits the sayHello() method
manager.sayHello(); // yes

// Conclusion
// Understanding prototypes and inheritance is essential for mastering JavaScript's object-oriented features. Prototypes enable code reuse and inheritance, leading to more modular and maintainable code. By grasping these concepts, developers can build scalable and efficient applications.