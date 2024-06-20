// Code Implementation | Examples
// Creating our own Prototype chains
// using Object.setPrototypeOf()

let obj = {
    name: "vivek",
    sayHello: function () {
      console.log("Hello");
    },
  };
  
  let obj2 = {
    salary: 100000,
    work: function () {
      console.log("Working");
    },
  };
  
  Object.setPrototypeOf(obj2, obj);
  
  obj2.sayHello();
  
  console.log(obj2);
  //-------------------------------------------------------------
//   The Object.setPrototypeOf() method sets the prototype (i.e., the internal __proto__ property) of a specified object to another object

Documentation: 