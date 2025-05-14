// using Object.create()
let obj = {
  name: "vivek",
  sayHello: function () {
    console.log("Hello");
  },
};
let obj2 = Object.create(obj);
 // The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
obj2.salary = 100000; 
obj2.work = function () {
  console.log("Working");
};
console.log(obj);
console.log(obj2);
//------------------------------------------------
// example-2 
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
console.log(employee);
console.log(manager);