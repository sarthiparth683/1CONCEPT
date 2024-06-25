
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