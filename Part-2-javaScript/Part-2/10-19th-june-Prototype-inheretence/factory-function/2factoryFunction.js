
//-------------------------------------------------------------------------
// Factory Function Example 2
// create a factory function Student that copy properties and methods from the User factory function and adds an additional property batchno.
function User(name, age) {
  let userObj = {};
  userObj.name = name;
  userObj.age = age;
  userObj.printHello = function () {
    console.log("Hello...");
  };
  return userObj;
}
function Student(name, age, batchno) {
  let studentObj = User(name, age); // get properties and methods from User
  studentObj.batchno = batchno; // Add additional property batchno
  return studentObj;
}
let student1 = Student("Pavan", 26, "BatchA");
let student2 = Student("Roshan", 30, "BatchB");
console.log(student1);
student1.printHello();
console.log(student2);
//-------------------------------------------------------------------------