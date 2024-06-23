
//----------------------------------------------------------------------------
// using Object.setPrototypeOf
let obj = {
    name: "vivek",
    sayHello: function () {
      console.log("Hello");
    },
  };
  
  let obj2 = {};
  
  obj2.salary = 100000;
  obj2.work = function () {
    console.log("Working");
  };
  
  Object.setPrototypeOf(obj2, obj); // Object.setPrototypeOf() sets up a prototype chain between the source object and the target object.
  
  console.log(obj2);
  obj2.sayHello();
  //------------------------------------------------------------------------
  