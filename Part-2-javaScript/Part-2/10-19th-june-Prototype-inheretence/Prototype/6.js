// // Concept: Prototype and Inheritance   
// let arr = ["one", "two", "three"];
// // __proto__ is for objects
// //  .prototype is functions
// function User(name){
//    this.name = name
// }
// User.prototype.getName =function(){
//   console.log(this.name)
// }
// let user = new User("Parth")
// user.getName()
// let user1 = {
//   name:"sarthi",
// };
// user1.__proto__.getName = User.prototype.getName
// user1.getName()
// // console.log()
// console.log(arr);
// let arr2 = new Array(5).fill("*");
// console.log(arr2.__proto__)
// console.log(Array.prototype)
// console.log(arr.__proto__ === Array.prototype); // true
// console.log(Array.prototype.__proto__ === Object.prototype); // true
// console.log(Object.prototype.__proto__ === null); // true
// function fun() { }
// console.log(fun.__proto__ === Function.prototype);
// console.log(fun.__proto__.__proto__ == Object.prototype); // or
// console.log(Function.prototype.__proto__ == Object.prototype);
//-------------------------------------------------------------------------------
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
///                    to, from
Object.setPrototypeOf(obj2, obj);
obj2.sayHello();
console.log(obj2.name);

let dad = {
  height:"6ft",
  color:"brown"
}

let son  = {
  name:"Pavan"
}

Object.setPrototypeOf(son,dad)
console.log(son.height)