// using Object.create()
let obj = {
  name: "vivek",
  sayHello: function () {
    console.log("Hello");
  },
};
// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
let obj2 = Object.create(obj); // obj2 is parent here
obj2.salary = 100000;
obj2.work = function () {
  console.log("Working");
};
// console.log(obj);
// console.log(obj2);
//-------------------------------------------------------------------------------------