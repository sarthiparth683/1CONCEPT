// using Object.create()
let obj = {
    name: "vivek",
    sayHello: function () {
      console.log("Hello");
    },
  };
  
  let obj2 = Object.create(obj); // The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
  
  obj2.salary = 100000; // adding as main property
  obj2.work = function () {
    // adding as main method
    console.log("Working");
  };
  console.log(obj2);