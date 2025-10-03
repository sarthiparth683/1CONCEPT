// ------------------------------------------------------------------------
let student = {
 name: "Ravi",
 age: 21,
 course:"JavaScript",
 isEnrolled: true
};

// Dot vs Bracket Notation
// Use dot notation for fixed key names
// Use bracket notation for dynamic or multi-word keys

// console.log(student.age); // 21
// console.log(student["name"]); // Ravi
// console.log(student["full name"] = "Ravi Kumar")
// ------------------------------------------------------------------------
// Looping Through Objects
// for-in loop

// for (let key in student) {
//  console.log(key, student[key]);
// }

// ------------------------------------------------------------------------
// Object.keys(), Object.values(), Object.entries() 

// Object.keys(student); // ["name", "age", "isEnrolled"]
// Object.entries(student); // [["name", "Ravi"], ["age", 21], ...]
// ------------------------------------------------------------------------

// Optional Chaining - Avoids errors if a nested property is undefined:

// console.log(user?.address?.city); // Delhi
// console.log(user?.profile?.email); // undefined (no error)

// ------------------------------------------------------------------------
// Common Confusions:-
// Shallow copy copies only the first level
// for-in includes inherited keys (be cautious!)
// delete obj.key removes the property
// Spread ≠ deep copy
// ------------------------------------------------------------------------






























// ------------------------------------------------------------------------
// let student = {
//     name: "Rahul",
//     age: 25,
//     gender: "male",
//     city: "Bangalore",
//     hobbies: "coding"
// };
// Accesing object data:-
// METHOD 1:- Bracaket Notation also helps in assigning value
// console.log(student["name"]);
// console.log(student["age"]);

// METHOD 2:- Dot Notation
// console.log(student.name);
// console.log(student.age);

// METHOD 3:- Destructuring
// let { name, age, gender, city, hobbies } = student;
// console.log(gender);

// Adding data 
// student["6location"] = "Mumbai";
// student["7data"] = "7added";
// console.log(student);
// ------------------------------------------------------------------------



/// Objects
// Data is stored in key value
//   let obj = {}
//   obj.name = "John";
//   obj.age = 25;
//   obj.isMarried = false;
//   obj.subjects = ["HTML", "CSS", "JS"];
//   obj.address = {
//     state:"UP",
//     district:"Varnasi",
//     colony:"Kailash Nagar"
//   }
//   obj.getDeatils = function(){
//     // Hello My Name is John, my age is 25
//     return `Hello My Name is ${obj.name}, my age is ${obj.age}`;
//     console.log("Hi")
//   }
/// The function written in the object is called as Object Method <<<<===== IMP IMP IMP IMP
//   console.log(obj.name)
//   console.log(obj.getDeatils())
// let rect = {
//     length:200,
//     width:300,
// }
// // create an obj method, that calucalates area
// rect.printArea = function(){
//     console.log("The area is", rect.length*rect.width)
// }
// rect.printArea()
//   function assign(name, age){
//     let obj = {};
//     obj[name] = age;
//     console.log(obj)
//     // {Raj:25}
//   }
//   assign("Raj", 25)
// ------------------------------------------------------------------------


