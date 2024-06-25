// Note: These days, even some browsers represents __proto__ as [[Prototype]].
// We can verify this relationship by logging these :
let arr = [1, 2, 3];
console.log(arr);
console.log(arr.__proto__ === Array.prototype); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true
//---------------------------------------------------------------------------
function fun() { }
console.log(fun.__proto__ === Function.prototype);
console.log(fun.__proto__.__proto__ == Object.prototype);
console.log(Function.prototype.__proto__ == Object.prototype);
//--------------------------------------------------------------------------
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
console.log(obj);
obj2.sayHello(); // calls function in obj
console.log(obj2);
//The Object.setPrototypeOf() method sets the prototype (i.e., the internal __proto__ property) of a specified object to another object

